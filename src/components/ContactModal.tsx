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

interface ContactModalProps {
  children: React.ReactNode;
  type?: "call" | "audit";
}

export default function ContactModal({ children, type = "call" }: ContactModalProps) {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
              <Input placeholder={t.modal.form.namePlaceholder} required className="rounded-lg border-zinc-200" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-400">{t.modal.form.business}</label>
              <Input placeholder={t.modal.form.businessPlaceholder} required className="rounded-lg border-zinc-200" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-400">{t.modal.form.email}</label>
              <Input type="email" placeholder={t.modal.form.emailPlaceholder} required className="rounded-lg border-zinc-200" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-400">{t.modal.form.message}</label>
              <Textarea placeholder={t.modal.form.messagePlaceholder} className="rounded-lg border-zinc-200 min-h-[100px]" />
            </div>
            <Button type="submit" className="w-full py-6 rounded-lg font-bold bg-black text-white hover:opacity-90 transition-opacity">
              {btnText}
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
