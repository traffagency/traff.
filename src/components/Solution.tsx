import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useLanguage } from "@/src/LanguageContext";

export default function Solution() {
  const { t } = useLanguage();

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-yellow rounded-full blur-3xl opacity-50" />
            <div className="relative bg-zinc-900 rounded-[2rem] p-8 md:p-12 text-white overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-24 h-24 rounded-full bg-brand-accent flex items-center justify-center p-4">
                  <img 
                    src="https://drive.google.com/thumbnail?id=1SnGxGU4uojXRNl4sndtGMnOmFVzkFqEV&sz=w1000&v=2" 
                    alt="traff." 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-8 italic">{t.solution.transformation}</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-zinc-500 text-xs">01</span>
                  </div>
                  <div>
                    <p className="text-zinc-400 line-through text-sm mb-1">{t.solution.trans1.old}</p>
                    <p className="text-xl font-medium">{t.solution.trans1.new}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-zinc-500 text-xs">02</span>
                  </div>
                  <div>
                    <p className="text-zinc-400 line-through text-sm mb-1">{t.solution.trans2.old}</p>
                    <p className="text-xl font-medium">{t.solution.trans2.new}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-zinc-500 text-xs">03</span>
                  </div>
                  <div>
                    <p className="text-zinc-400 line-through text-sm mb-1">{t.solution.trans3.old}</p>
                    <p className="text-xl font-medium">{t.solution.trans3.new}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
              {t.solution.title.split("{authority}")[0]}
              <span className="text-brand-accent">{t.solution.authority}</span>
              {t.solution.title.split("{authority}")[1]}
            </h2>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              {t.solution.desc}
            </p>
            
            <ul className="space-y-4">
              {t.solution.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold">
                  <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
