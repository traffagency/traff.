import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/src/LanguageContext";

import ContactModal from "./ContactModal";
import CalendlyModal from "./CalendlyModal";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-zinc-100">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[520px]"
          >
            <h1 className="text-6xl md:text-[72px] font-bold tracking-[-3px] leading-[0.95] mb-8">
              {t.hero.title.split("{invisible}")[0]}
              <span className="text-zinc-400">{t.hero.invisible}</span>
              {t.hero.title.split("{invisible}")[1]}
            </h1>
            <p className="text-[18px] text-zinc-500 leading-relaxed mb-10">
              {t.hero.subheadline}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <CalendlyModal>
                <Button className="rounded-lg px-6 md:px-10 py-6 text-[15px] font-semibold bg-black text-white hover:opacity-90 transition-opacity group">
                  {t.hero.ctaAudit}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CalendlyModal>
              <ContactModal type="call">
                <Button className="rounded-lg px-6 md:px-10 py-6 text-[15px] font-semibold bg-brand-yellow text-black hover:opacity-90 transition-opacity">
                  {t.hero.ctaCall}
                </Button>
              </ContactModal>
            </div>
            
            <div className="mt-10 text-[13px] italic text-zinc-500">
              {t.hero.trustQuote}
            </div>
          </motion.div>

          {/* Visual Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="bg-white border border-zinc-200 p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="inline-block px-2 py-1 bg-zinc-100 rounded text-[10px] font-bold mb-3 uppercase">{t.hero.cards.management.tag}</div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-2">{t.hero.cards.management.title}</h3>
              <p className="text-[13px] text-zinc-500 leading-tight">{t.hero.cards.management.desc}</p>
            </div>
            <div className="bg-brand-yellow p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="inline-block px-2 py-1 bg-white/30 rounded text-[10px] font-bold mb-3 uppercase">{t.hero.cards.identity.tag}</div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-black">{t.hero.cards.identity.title}</h3>
              <p className="text-[13px] text-zinc-700 leading-tight">{t.hero.cards.identity.desc}</p>
            </div>
            <div className="bg-brand-yellow p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="inline-block px-2 py-1 bg-white/30 rounded text-[10px] font-bold mb-3 uppercase">{t.hero.cards.strategy.tag}</div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-black">{t.hero.cards.strategy.title}</h3>
              <p className="text-[13px] text-zinc-700 leading-tight">{t.hero.cards.strategy.desc}</p>
            </div>
            <div className="bg-white border border-zinc-200 p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-2">{t.hero.cards.digital.title}</h3>
              <p className="text-[13px] text-zinc-500 leading-tight">{t.hero.cards.digital.desc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
