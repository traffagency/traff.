import { motion } from "motion/react";
import { useLanguage } from "@/src/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const steps = t.process.steps;

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{t.process.title}</h2>
            <p className="text-xl text-zinc-600">
              {t.process.subheadline}
            </p>
          </div>
          <div className="hidden md:block text-8xl font-black text-zinc-100 select-none">
            {t.language === "en" ? "STEPS" : "PASOS"}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-black text-brand-yellow mb-6">{step.number}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-6 w-12 h-[1px] bg-zinc-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
