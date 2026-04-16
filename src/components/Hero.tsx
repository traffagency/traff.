import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/src/LanguageContext";

import ContactModal from "./ContactModal";
import CalendlyModal from "./CalendlyModal";
import CopyEmail from "./CopyEmail";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-zinc-100">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-[84px] font-bold tracking-[-3px] leading-[0.95] mb-8">
              {t.hero.title.split("{invisible}")[0]}
              <span className="text-zinc-400">{t.hero.invisible}</span>
              {t.hero.title.split("{invisible}")[1]}
            </h1>
            <p className="text-[20px] text-zinc-500 leading-relaxed mb-12 max-w-2xl mx-auto">
              {t.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <CalendlyModal>
                <Button className="rounded-lg px-8 md:px-12 py-7 text-[16px] font-semibold bg-black text-white hover:opacity-90 transition-opacity group w-full sm:w-auto">
                  {t.hero.ctaAudit}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CalendlyModal>
              <ContactModal type="call">
                <Button className="rounded-lg px-8 md:px-12 py-7 text-[16px] font-semibold bg-brand-yellow text-black hover:opacity-90 transition-opacity w-full sm:w-auto">
                  {t.hero.ctaCall}
                </Button>
              </ContactModal>
            </div>
            
            <div className="flex justify-center">
              <CopyEmail centered />
            </div>
            
            <div className="mt-12 text-[14px] italic text-zinc-400">
              {t.hero.trustQuote}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
