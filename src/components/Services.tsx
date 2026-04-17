import { motion } from "motion/react";
import { useLanguage } from "@/src/LanguageContext";

import ContactModal from "./ContactModal";
import CalendlyModal from "./CalendlyModal";

import { Link } from "react-router-dom";

export default function Services() {
  const { t } = useLanguage();
  
  const serviceIds = [
    "digitalStartup",
    "resultsOptimization",
    "branding",
    "contentCreation",
    "metricsTracking"
  ];

  const services = t.services.list.map((service, index) => ({
    ...service,
    id: serviceIds[index],
    isYellow: index % 2 !== 0 // Alternate colors
  }));

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.services.title}</h2>
          <p className="text-lg text-zinc-500">
            {t.services.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="will-change-transform"
            >
              <div className={`h-full p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border flex flex-col ${
                service.isYellow ? "bg-brand-yellow border-transparent" : "bg-white border-zinc-200"
              }`}>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{service.title}</h3>
                <p className={`text-[13px] leading-relaxed flex-grow ${service.isYellow ? "text-zinc-700" : "text-zinc-500"}`}>
                  {service.desc}
                </p>
                
                <div className="mt-8">
                  <Link 
                    to={`/services#${service.id}`}
                    className="inline-block text-[12px] font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-70 transition-opacity whitespace-nowrap"
                  >
                    {t.services.learnMore}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
