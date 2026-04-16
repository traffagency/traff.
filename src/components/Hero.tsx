import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/src/LanguageContext";

import ContactModal from "./ContactModal";
import CalendlyModal from "./CalendlyModal";
import CopyEmail from "./CopyEmail";

export default function Hero() {
  const { t } = useLanguage();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Wait for App's 2s loading + 0.5s transition
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-zinc-100">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] bg-brand-yellow/25 blur-[100px] rounded-full active:opacity-100"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] -right-[15%] w-[45%] h-[45%] bg-brand-yellow/15 blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[84px] font-bold tracking-[-3px] leading-[0.95] mb-8"
            >
              <span className="inline-block">
                {t.hero.title.split("{invisible}")[0]}
                <span className="text-zinc-400">{t.hero.invisible}</span>
                {t.hero.title.split("{invisible}")[1]}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[20px] text-zinc-500 leading-relaxed mb-12 max-w-2xl mx-auto"
            >
              {t.hero.subheadline}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full sm:w-auto"
              >
                <CalendlyModal>
                  <Button className="rounded-lg px-8 md:px-12 py-7 text-[16px] font-semibold bg-black text-white hover:opacity-90 transition-opacity group w-full sm:w-auto shadow-lg shadow-black/5">
                    {t.hero.ctaAudit}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CalendlyModal>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-full sm:w-auto"
              >
                <ContactModal type="call">
                  <Button className="rounded-lg px-8 md:px-12 py-7 text-[16px] font-semibold bg-brand-yellow text-black hover:opacity-90 transition-opacity w-full sm:w-auto shadow-lg shadow-brand-yellow/20">
                    {t.hero.ctaCall}
                  </Button>
                </ContactModal>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <CopyEmail centered />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-[14px] italic text-zinc-400"
            >
              {t.hero.trustQuote}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
