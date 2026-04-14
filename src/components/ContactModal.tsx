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
import { useState } from "react";
import React from "react";
import { useLanguage } from "@/src/LanguageContext";
import { db } from "@/src/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface ContactModalProps {
  children: React.ReactNode;
  type?: "call" | "audit";
}

export default function ContactModal({ children, type = "call" }: ContactModalProps) {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phone && !formData.email) {
      alert(t.language === "es" 
        ? "Por favor, introduce al menos un método de contacto (teléfono o correo)." 
        : "Please provide at least one contact method (phone or email).");
      return;
    }

    setIsLoading(true);
    
    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        type,
        createdAt: serverTimestamp()
      });
      setIsSubmitted(true);
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

  const title = type === "call" ? t.modal.call.title : t.modal.audit.title;
  const description = type === "call" ? t.modal.call.desc : t.modal.audit.desc;
  const btnText = type === "call" ? t.modal.call.btn : t.modal.audit.btn;
  const successDesc = type === "call" ? t.modal.success.descCall : t.modal.success.descAudit;

  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[425px] rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">{title}</DialogTitle>
          <DialogDescription className="text-zinc-500">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-400">{t.modal.form.name}</label>
              <Input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.modal.form.namePlaceholder} 
                required 
                className="rounded-lg border-zinc-200" 
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
                className="rounded-lg border-zinc-200" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-400">{t.modal.form.phone}</label>
              <Input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel" 
                placeholder={t.modal.form.phonePlaceholder} 
                className="rounded-lg border-zinc-200" 
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
                className="rounded-lg border-zinc-200" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-400">{t.modal.form.message}</label>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.modal.form.messagePlaceholder} 
                className="rounded-lg border-zinc-200 min-h-[100px]" 
              />
            </div>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-6 rounded-lg font-bold bg-black text-white hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isLoading ? "..." : btnText}
            </Button>
          </form>
        ) : (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t.modal.success.title}</h3>
            <p className="text-zinc-500">{successDesc}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
