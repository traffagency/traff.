import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/src/LanguageContext";
import { db } from "@/src/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { PopupModal } from "react-calendly";
import { Phone, Calendar, ArrowRight } from "lucide-react";

interface LeadDiscoveryModalProps {
  children: React.ReactNode;
  serviceName?: string;
  packageName?: string;
  forceView?: "form" | "calendly";
}

type ViewState = "selector" | "form" | "success";

export default function LeadDiscoveryModal({ children, serviceName, packageName, forceView }: LeadDiscoveryModalProps) {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [view, setView] = useState<ViewState>("selector");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    message: ""
  });

  // NOTE: Replace this URL with your actual Calendly link
  const calendlyUrl = "https://calendly.com/traffagency0/30min";

  const handleOpenInteraction = () => {
    if (forceView === "calendly") {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Schedule');
      }
      setIsCalendlyOpen(true);
    } else {
      setView(forceView === "form" ? "form" : "selector");
      setIsOpen(true);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset view after a small delay to avoid flicker
      setTimeout(() => setView("selector"), 300);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phone && !formData.email) {
      alert(language === "es" 
        ? "Por favor, introduce al menos un método de contacto (teléfono o correo)." 
        : "Please provide at least one contact method (phone or email).");
      return;
    }

    setIsLoading(true);
    
    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        context: serviceName || packageName || "general",
        type: "selector_form",
        createdAt: serverTimestamp()
      });
      
      // Facebook Pixel Tracking: Lead
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }

      setView("success");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <div 
          onClick={handleOpenInteraction} 
          className="cursor-pointer contents"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleOpenInteraction();
            }
          }}
        >
          {children}
        </div>
        <DialogContent className="sm:max-w-[500px] rounded-2xl overflow-hidden p-0 border-none">
          <div className="p-8">
            {view === "selector" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <DialogHeader className="mb-8">
                  <DialogTitle className="text-3xl font-bold tracking-tight">
                    {t.modal.discovery.title}
                  </DialogTitle>
                  <DialogDescription className="text-zinc-500 text-base">
                    {t.modal.discovery.desc}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4">
                  <button
                    onClick={() => {
                      setIsCalendlyOpen(true);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-6 p-6 rounded-2xl border-2 border-zinc-100 hover:border-brand-yellow hover:bg-brand-yellow/5 transition-all text-left group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-brand-yellow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Calendar className="w-7 h-7" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-lg mb-1">{t.modal.discovery.optionSchedule}</h4>
                      <p className="text-sm text-zinc-500">{t.modal.discovery.optionScheduleDesc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </button>

                  <button
                    onClick={() => setView("form")}
                    className="flex items-center gap-6 p-6 rounded-2xl border-2 border-zinc-100 hover:border-black hover:bg-black/5 transition-all text-left group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-lg mb-1">{t.modal.discovery.optionForm}</h4>
                      <p className="text-sm text-zinc-500">{t.modal.discovery.optionFormDesc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            )}

            {view === "form" && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-2xl font-bold tracking-tight">
                    {t.modal.call.title}
                  </DialogTitle>
                  <DialogDescription className="text-zinc-500">
                    {t.modal.call.desc}
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-400">{t.modal.form.name}</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.modal.form.namePlaceholder} 
                      required 
                      className="rounded-xl border-zinc-200 py-6" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-400">{t.modal.form.business}</label>
                    <Input 
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder={t.modal.form.businessPlaceholder} 
                      required 
                      className="rounded-xl border-zinc-200 py-6" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-400">{t.modal.form.phone}</label>
                      <Input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" 
                        placeholder={t.modal.form.phonePlaceholder} 
                        className="rounded-xl border-zinc-200 py-6" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-400">{t.modal.form.email}</label>
                      <Input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder={t.modal.form.emailPlaceholder} 
                        className="rounded-xl border-zinc-200 py-6" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-400">{t.modal.form.message}</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.modal.form.messagePlaceholder} 
                      className="rounded-xl border-zinc-200 min-h-[80px]" 
                    />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button 
                      type="button"
                      variant="ghost"
                      onClick={() => setView("selector")}
                      className="flex-1 py-6 rounded-xl font-bold"
                    >
                      {t.modal.form.back}
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="flex-[2] py-6 rounded-xl font-bold bg-black text-white hover:opacity-90 transition-opacity"
                    >
                      {isLoading ? "..." : t.modal.call.btn}
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {view === "success" && (
              <div className="py-12 text-center animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.modal.success.title}</h3>
                <p className="text-zinc-500 mb-8">{t.modal.success.descCall}</p>
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-6 rounded-xl font-bold bg-black text-white"
                >
                  {t.modal.form.close}
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {typeof window !== "undefined" && (
        <PopupModal
          url={calendlyUrl}
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.getElementById("root")!}
        />
      )}
    </>
  );
}
