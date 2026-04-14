import { motion } from "motion/react";
import { useLanguage } from "@/src/LanguageContext";

import ContactModal from "./ContactModal";
import CalendlyModal from "./CalendlyModal";

export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      tag: t.hero.cards.management.tag,
      title: t.hero.cards.management.title,
      description: t.hero.cards.management.desc,
      isYellow: false
    },
    {
      tag: t.hero.cards.identity.tag,
      title: t.hero.cards.identity.title,
      description: t.hero.cards.identity.desc,
      isYellow: true
    },
    {
      tag: t.hero.cards.strategy.tag,
      title: t.hero.cards.strategy.title,
      description: t.hero.cards.strategy.desc,
      isYellow: true
    },
    {
      tag: "DIGITAL",
      title: t.hero.cards.digital.title,
      description: t.hero.cards.digital.desc,
      isYellow: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.services.title}</h2>
          <p className="text-lg text-zinc-500">
            {t.services.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`h-full p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border ${
                service.isYellow ? "bg-brand-yellow border-transparent" : "bg-white border-zinc-200"
              }`}>
                <div className="inline-block px-2.5 py-1 bg-black/5 rounded text-[10px] font-bold mb-3 uppercase tracking-wider">
                  {service.tag}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-2">{service.title}</h3>
                <p className={`text-[13px] leading-relaxed ${service.isYellow ? "text-zinc-700" : "text-zinc-500"}`}>
                  {service.description}
                </p>
                
                <div className="mt-8">
                  <CalendlyModal>
                    <button className="text-[12px] font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">
                      {t.services.learnMore}
                    </button>
                  </CalendlyModal>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
