import { motion } from "motion/react";
import { useLanguage } from "@/src/LanguageContext";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function PackagesSection() {
  const { t } = useLanguage();
  
  return (
    <section id="packages" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t.packages.title.split("{packages}")[0]}
            <span className="text-zinc-400 italic">{t.packages.packages}</span>
            {t.packages.title.split("{packages}")[1]}
          </h2>
          <p className="text-lg text-zinc-500">
            {t.packages.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.packages.list.map((pkg: any, index: number) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full will-change-transform"
            >
              <h3 className="text-xl font-bold mb-4">{pkg.title}</h3>
              <p className="text-sm text-zinc-500 mb-6 flex-grow">{pkg.shortDesc}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-2xl font-bold">{pkg.price}</span>
                <span className="text-xs text-zinc-400 font-medium tracking-wider uppercase">
                  {pkg.type === "monthly" ? t.packages.perMonth : t.packages.oneTime}
                </span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  <CheckCircle2 size={14} className="text-brand-yellow" />
                  {pkg.result}
                </div>
              </div>

              <Link 
                to={`/packages#${pkg.id}`}
                className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-zinc-100 text-black font-bold text-sm hover:bg-brand-yellow transition-colors group/btn"
              >
                {t.packages.learnMore}
                <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
