import { useLanguage } from "@/src/LanguageContext";
import { motion } from "motion/react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = language === "es" ? {
    title: "Política de Privacidad",
    sections: [
      {
        h: "1. Información que Recopilamos",
        p: "Recopilamos la información que nos proporcionas directamente, como cuando rellenas un formulario de contacto o solicitas una auditoría de marca. Esto puede incluir tu nombre, nombre de la empresa, número de teléfono, dirección de correo electrónico y cualquier otra información que decidas proporcionar."
      },
      {
        h: "2. Cómo Utilizamos tu Información",
        p: "Utilizamos la información que recopilamos para:",
        l: [
          "Proporcionar, mantener y mejorar nuestros servicios.",
          "Responder a tus comentarios, preguntas y solicitudes.",
          "Comunicarnos contigo sobre servicios, ofertas y eventos ofrecidos por traff.",
          "Monitorear y analizar tendencias, uso y actividades en relación con nuestros servicios."
        ]
      },
      {
        h: "3. Seguridad de los Datos",
        p: "Tomamos medidas razonables para ayudar a proteger la información sobre ti contra pérdida, robo, uso indebido y acceso no autorizado, divulgación, alteración y destrucción."
      },
      {
        h: "4. Contacto",
        p: "Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos en hello@traffagency.com."
      }
    ]
  } : {
    title: "Privacy Policy",
    sections: [
      {
        h: "1. Information We Collect",
        p: "We collect information you provide directly to us, such as when you fill out a contact form or request a brand audit. This may include your name, business name, phone number, email address, and any other information you choose to provide."
      },
      {
        h: "2. How We Use Your Information",
        p: "We use the information we collect to:",
        l: [
          "Provide, maintain, and improve our services.",
          "Respond to your comments, questions, and requests.",
          "Communicate with you about services, offers, and events offered by traff.",
          "Monitor and analyze trends, usage, and activities in connection with our services."
        ]
      },
      {
        h: "3. Data Security",
        p: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction."
      },
      {
        h: "4. Contact Us",
        p: "If you have any questions about this Privacy Policy, please contact us at hello@traffagency.com."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black">
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
                  <h2 className="text-2xl font-bold text-black mb-4">{section.h}</h2>
                  <p>{section.p}</p>
                  {section.l && (
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      {section.l.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
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
