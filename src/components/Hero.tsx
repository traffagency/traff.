import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/src/LanguageContext";

import LeadDiscoveryModal from "./LeadDiscoveryModal";
import CopyEmail from "./CopyEmail";
import { FloatingPaths } from "@/components/ui/background-paths";

export default function Hero() {
  const { t } = useLanguage();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 500);
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
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden isolate pt-24 md:pt-32">
      {/* Animated Yellow Paths Layer (Background) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Foreground Content Layer (Top) */}
      <div className="container mx-auto px-6 md:px-16 relative z-10 flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full bg-black/5 border border-black/5 text-[12px] font-bold uppercase tracking-[2px] text-zinc-500 mt-8 md:mt-0">
              <span className="mr-2 w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
              {t.hero.trustQuote.replace(/"/g, '')}
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-[90px] font-bold tracking-[-2px] md:tracking-[-3px] leading-[1.1] md:leading-[0.9] mb-8">
              <span className="block mb-2 text-zinc-400 text-2xl sm:text-4xl md:text-5xl">{t.hero.prefix}</span>
              <div className="h-[1.1em] relative overflow-hidden flex justify-center pb-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute text-black italic underline decoration-brand-yellow decoration-4 md:decoration-8 underline-offset-[4px] md:underline-offset-[12px] whitespace-nowrap"
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
              className="text-[20px] md:text-[24px] text-zinc-500 leading-relaxed mb-10 max-w-3xl mx-auto font-medium"
            >
              {t.hero.subheadline}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 md:mb-0"
            >
              <LeadDiscoveryModal forceView="calendly">
                <Button className="rounded-xl px-10 py-8 text-[18px] font-bold bg-black text-white hover:scale-[1.02] active:scale-[0.98] transition-all group w-full sm:w-auto shadow-2xl shadow-black/20">
                  {t.hero.ctaAudit}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </LeadDiscoveryModal>
              <LeadDiscoveryModal forceView="form">
                <Button className="rounded-xl px-10 py-8 text-[18px] font-bold bg-brand-yellow text-black hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto shadow-2xl shadow-brand-yellow/30">
                  {t.hero.ctaCall}
                </Button>
              </LeadDiscoveryModal>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Services Marquee */}
      <div className="relative py-6 md:py-8 border-y border-zinc-100 bg-white/80 md:bg-white/50 md:backdrop-blur-sm mt-auto overflow-hidden select-none">
        <div className="flex gap-12 md:gap-20 animate-infinite-scroll w-max hover:[animation-play-state:paused] whitespace-nowrap px-10">
          {carouselItems.map((item, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-8">
              <span className="text-[18px] md:text-[32px] font-black uppercase tracking-tighter text-black/90">
                {item}
              </span>
              <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-brand-yellow rotate-45 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
