import { useLanguage } from "@/src/LanguageContext";
import { motion } from "motion/react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import { useEffect } from "react";

export default function TermsOfService() {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = language === "es" ? {
    title: "Términos de Servicio",
    sections: [
      {
        h: "1. Aceptación de los Términos",
        p: "Al acceder o utilizar los servicios de traff., aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con todos estos términos, no utilices nuestros servicios."
      },
      {
        h: "2. Descripción del Servicio",
        p: "traff. proporciona servicios de gestión de redes sociales, creación de contenido y branding para pequeñas y medianas empresas."
      },
      {
        h: "3. Responsabilidades del Usuario",
        p: "Eres responsable de proporcionar información precisa y de mantener la confidencialidad de cualquier información de tu cuenta. Aceptas notificarnos de inmediato sobre cualquier uso no autorizado de tu cuenta."
      },
      {
        h: "4. Propiedad Intelectual",
        p: "Todo el contenido proporcionado por traff., incluyendo texto, gráficos, logotipos e imágenes, es propiedad de traff. o sus proveedores de contenido y está protegido por las leyes internacionales de derechos de autor."
      },
      {
        h: "5. Limitación de Responsabilidad",
        p: "En ningún caso traff. será responsable por cualquier daño indirecto, incidental, especial, consecuente o punitivo que surja de o en relación con tu uso de nuestros servicios."
      },
      {
        h: "6. Ley Aplicable",
        p: "Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus disposiciones sobre conflictos de leyes."
      }
    ]
  } : {
    title: "Terms of Service",
    sections: [
      {
        h: "1. Acceptance of Terms",
        p: "By accessing or using traff.'s services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services."
      },
      {
        h: "2. Description of Service",
        p: "traff. provides social media management, content creation, and branding services for small and medium-sized enterprises."
      },
      {
        h: "3. User Responsibilities",
        p: "You are responsible for providing accurate information and for maintaining the confidentiality of any account information. You agree to notify us immediately of any unauthorized use of your account."
      },
      {
        h: "4. Intellectual Property",
        p: "All content provided by traff., including text, graphics, logos, and images, is the property of traff. or its content suppliers and is protected by international copyright laws."
      },
      {
        h: "5. Limitation of Liability",
        p: "In no event shall traff. be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services."
      },
      {
        h: "6. Governing Law",
        p: "These Terms of Service shall be governed by and construed in accordance with the laws of Spain, without regard to its conflict of law provisions."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1f1f1f]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">{content.title}</h1>
            
            <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
              {content.sections.map((section, idx) => (
                <section key={idx}>
                  <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">{section.h}</h2>
                  <p>{section.p}</p>
                </section>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
