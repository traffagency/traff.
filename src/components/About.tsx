import { motion } from "motion/react";
import { useLanguage } from "@/src/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[3rem] overflow-hidden bg-brand-yellow"
          >
            <img
              src="https://picsum.photos/seed/agency-founder/800/800"
              alt="traff. founder"
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl">
              <p className="font-bold text-xl mb-1">{t.about.quote}</p>
              <p className="text-sm text-zinc-600">{t.about.quoteSub}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">{t.about.tag}</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-xl text-zinc-600 leading-relaxed">
              <p>
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p>
                {t.about.p3}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
