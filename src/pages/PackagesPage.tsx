import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLanguage } from "@/src/LanguageContext";
import { ArrowLeft, CheckCircle2, ChevronRight, Package, Rocket, TrendingUp, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ContactModal from "@/src/components/ContactModal";

const ICON_MAP = {
  startup: Rocket,
  management: Package,
  growth: TrendingUp,
  image: ImageIcon,
};

const COLOR_MAP = {
  startup: "bg-emerald-500",
  management: "bg-amber-500",
  growth: "bg-blue-500",
  image: "bg-rose-500",
};

export default function PackagesPage() {
  const { t } = useLanguage();
  const { hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    }
  }, [hash]);

  const packages = t.packages.list.map((pkg: any) => ({
    ...pkg,
    Icon: ICON_MAP[pkg.id as keyof typeof ICON_MAP],
    color: COLOR_MAP[pkg.id as keyof typeof COLOR_MAP],
  }));

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-6 mb-20 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-zinc-400 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold uppercase tracking-wider">{t.servicesPage.backToHome}</span>
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            {t.packages.title.split("{packages}")[0]}
            <span className="text-zinc-300 italic">{t.packages.packages}</span>
            {t.packages.title.split("{packages}")[1]}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-500 max-w-2xl mx-auto"
          >
            {t.packages.description}
          </motion.p>
        </section>

        <section className="container mx-auto px-6 space-y-32">
          {packages.map((pkg, index) => {
            const Icon = pkg.Icon;
            return (
              <motion.div
                key={pkg.id}
                id={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 gap-12 items-start scroll-mt-32"
              >
                <div className={`order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <div className={`w-16 h-16 ${pkg.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-zinc-200`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-4xl font-bold tracking-tight mb-2">
                    {pkg.title}
                  </h2>
                  
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-zinc-400 text-sm font-bold uppercase tracking-wider">{t.packages.from}</span>
                    <span className="text-4xl font-bold tracking-tight">{pkg.price}</span>
                    <span className="text-zinc-400 text-sm font-medium">
                      {pkg.type === "monthly" ? t.packages.perMonth : t.packages.oneTime}
                    </span>
                  </div>
                  
                  <p className="text-lg text-zinc-600 leading-relaxed mb-8 border-l-4 border-zinc-100 pl-6 italic">
                    {pkg.shortDesc}
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-bold uppercase tracking-widest text-xs text-zinc-400">
                      Incluye:
                    </h3>
                    <ul className="space-y-4">
                      {pkg.includes.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                          <span className="text-zinc-800 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`order-2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"} h-full`}>
                  <div className="bg-zinc-50 rounded-[40px] p-10 h-full flex flex-col justify-center border border-zinc-100 group hover:border-brand-yellow/30 transition-colors">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-[10px] font-bold uppercase tracking-[2px] text-zinc-500 mb-8 self-start">
                      Resultado
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-black" />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
                        {pkg.result}
                      </p>
                    </div>

                    <div className="mt-12 pt-12 border-t border-zinc-200/50">
                      <ContactModal type="call">
                        <Button className="w-full py-8 rounded-2xl text-lg font-bold bg-black text-white hover:bg-zinc-800 transition-all select-none">
                          {t.packages.cta}
                        </Button>
                      </ContactModal>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
