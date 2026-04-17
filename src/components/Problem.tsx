import { motion } from "motion/react";
import { useLanguage } from "@/src/LanguageContext";

export default function Problem() {
  const { t } = useLanguage();
  const pains = t.problem.pains;

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="container mx-auto px-6 md:px-16">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-2px] mb-6">
            {t.problem.title.split("{weak}")[0]}
            <span className="text-zinc-400">{t.problem.weak}</span>
            {t.problem.title.split("{weak}")[1]}
          </h2>
          <p className="text-lg text-zinc-500">
            {t.problem.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-zinc-100 will-change-transform"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{pain.title}</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
