import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useLanguage } from "@/src/LanguageContext";

import LeadDiscoveryModal from "./LeadDiscoveryModal";
import CopyEmail from "./CopyEmail";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-brand-yellow">
      <div className="container mx-auto px-6 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-[-2px] leading-tight mb-10">
            {t.finalCta.title.split("{premium}")[0]}
            <span className="text-black/40">{t.finalCta.premium}</span>
            {t.finalCta.title.split("{premium}")[1]}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LeadDiscoveryModal>
              <Button className="rounded-lg px-8 md:px-12 py-7 text-lg font-bold bg-black text-white hover:opacity-90 transition-opacity w-full sm:w-auto">
                {t.finalCta.ctaCall}
              </Button>
            </LeadDiscoveryModal>
            <LeadDiscoveryModal>
              <Button variant="outline" className="rounded-lg px-8 md:px-12 py-7 text-lg font-bold border-black text-black hover:bg-black/5 w-full sm:w-auto">
                {t.finalCta.ctaAudit}
              </Button>
            </LeadDiscoveryModal>
          </div>
          <div className="flex flex-col items-center justify-center">
            <CopyEmail centered />
          </div>
          <p className="mt-8 text-sm font-medium text-black/60 uppercase tracking-widest">
            {t.finalCta.footerNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
