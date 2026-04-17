import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLanguage } from "@/src/LanguageContext";
import { ArrowLeft, CheckCircle2, ChevronRight, Zap, Target, Palette, Layout, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import LeadDiscoveryModal from "@/src/components/LeadDiscoveryModal";

const ICON_MAP = {
  digitalStartup: Zap,
  resultsOptimization: Target,
  branding: Palette,
  contentCreation: Layout,
  metricsTracking: BarChart3,
};

const COLOR_MAP = {
  digitalStartup: "bg-emerald-500",
  resultsOptimization: "bg-purple-500",
  branding: "bg-blue-500",
  contentCreation: "bg-amber-500",
  metricsTracking: "bg-zinc-800",
};

export default function ServicesPage() {
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

  const services = Object.entries(t.servicesPage.sections).map(([key, value]) => ({
    id: key,
    ...(value as any),
    Icon: ICON_MAP[key as keyof typeof ICON_MAP],
    color: COLOR_MAP[key as keyof typeof COLOR_MAP],
  }));

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
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
            {t.servicesPage.title.split("{services}")[0]}
            <span className="text-zinc-300 italic">{t.servicesPage.services}</span>
            {t.servicesPage.title.split("{services}")[1]}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-500 max-w-2xl mx-auto"
          >
            {t.servicesPage.description}
          </motion.p>
        </section>

        {/* Services List */}
        <section className="container mx-auto px-6 space-y-32">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 gap-12 items-start scroll-mt-32"
              >
                <div className={`order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-zinc-200`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-4xl font-bold tracking-tight mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-zinc-600 leading-relaxed mb-8 border-l-4 border-zinc-100 pl-6 italic">
                    {service.desc}
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-bold uppercase tracking-widest text-xs text-zinc-400">
                      {service.whatWeDo.title}
                    </h3>
                    <ul className="space-y-4">
                      {service.whatWeDo.items.map((item, i) => (
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
                      {service.result.title}
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-black" />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
                        {service.result.desc}
                      </p>
                    </div>

                    <div className="mt-12 pt-12 border-t border-zinc-200/50">
                      <LeadDiscoveryModal serviceName={service.title}>
                        <Button className="w-full py-8 rounded-2xl text-lg font-bold bg-black text-white hover:bg-zinc-800 transition-all select-none">
                          {t.servicesPage.contactBtn}
                        </Button>
                      </LeadDiscoveryModal>
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
