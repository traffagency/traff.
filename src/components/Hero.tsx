import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/src/LanguageContext";

import ContactModal from "./ContactModal";
import CalendlyModal from "./CalendlyModal";
import CopyEmail from "./CopyEmail";

export default function Hero() {
  const { t } = useLanguage();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % t.hero.dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [shouldAnimate, t.hero.dynamicWords.length]);

  const carouselItems = [
    ...t.hero.marquee,
    ...t.hero.marquee, // Duplicate for seamless loop
  ];

  return (
    <section className="relative pt-32 pb-0 md:pt-48 overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-yellow/20 blur-[130px] rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[10%] -right-[20%] w-[55%] h-[55%] bg-brand-yellow/15 blur-[140px] rounded-[70%_30%_30%_70%/70%_70%_30%_30%]"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full bg-black/5 border border-black/5 text-[12px] font-bold uppercase tracking-[2px] text-zinc-500">
              <span className="mr-2 w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
              {t.hero.trustQuote.replace(/"/g, '')}
            </div>

            <h1 className="text-5xl md:text-[90px] font-bold tracking-[-3px] leading-[0.9] mb-8">
              <span className="block mb-2 text-zinc-400">{t.hero.prefix}</span>
              <div className="h-[1.1em] relative overflow-hidden flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute text-black italic underline decoration-brand-yellow decoration-8 underline-offset-[12px]"
                  >
                    {t.hero.dynamicWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[20px] md:text-[24px] text-zinc-500 leading-relaxed mb-12 max-w-3xl mx-auto font-medium"
            >
              {t.hero.subheadline}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
            >
              <CalendlyModal>
                <Button className="rounded-xl px-10 py-8 text-[18px] font-bold bg-black text-white hover:scale-[1.02] active:scale-[0.98] transition-all group w-full sm:w-auto shadow-2xl shadow-black/20">
                  {t.hero.ctaAudit}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CalendlyModal>
              <ContactModal type="call">
                <Button className="rounded-xl px-10 py-8 text-[18px] font-bold bg-brand-yellow text-black hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto shadow-2xl shadow-brand-yellow/30">
                  {t.hero.ctaCall}
                </Button>
              </ContactModal>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Services Marquee */}
      <div className="relative py-12 border-y border-zinc-100 bg-white/50 backdrop-blur-sm mt-12 overflow-hidden select-none">
        <div className="flex gap-20 animate-infinite-scroll w-max hover:[animation-play-state:paused] whitespace-nowrap px-10">
          {carouselItems.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-[20px] md:text-[32px] font-black uppercase tracking-tighter text-black/90">
                {item}
              </span>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-brand-yellow rotate-45 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
