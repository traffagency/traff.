import { useLanguage } from "@/src/LanguageContext";
import { motion } from "motion/react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import { useEffect } from "react";

export default function CookiesPolicy() {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = language === "es" ? {
    title: "Política de Cookies",
    sections: [
      {
        h: "1. ¿Qué son las cookies?",
        p: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas una página web. Su función es permitir que la web recuerde información sobre tu visita, lo que puede facilitar tu próxima visita y hacer que el sitio te resulte más útil."
      },
      {
        h: "2. Tipos de cookies que utilizamos",
        p: "En nuestra web utilizamos las siguientes categorías de cookies:\n\n• Cookies técnicas: necesarias para el funcionamiento básico de la web y para permitir la navegación.\n• Cookies de análisis: nos permiten comprender cómo los usuarios interactúan con la web y mejorar nuestros servicios.\n• Cookies de personalización: permiten recordar tus preferencias, como idioma o configuración.\n• Cookies publicitarias: se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas."
      },
      {
        h: "3. Cookies de terceros",
        p: "Podemos utilizar servicios de terceros que instalan cookies en tu dispositivo para analizar el uso de la web o mostrar publicidad personalizada. Estos terceros pueden incluir proveedores de analítica y plataformas publicitarias.\n\nEstos proveedores pueden tratar tus datos conforme a sus propias políticas de privacidad."
      },
      {
        h: "4. Gestión de cookies",
        p: "Puedes aceptar, rechazar o configurar el uso de cookies a través del banner de cookies disponible en nuestra web.\n\nAdemás, puedes configurar tu navegador para bloquear o eliminar las cookies. Ten en cuenta que, si desactivas algunas cookies, ciertas funcionalidades del sitio pueden no estar disponibles."
      },
      {
        h: "5. Base legal",
        p: "El uso de cookies no esenciales se basa en tu consentimiento, conforme a la normativa aplicable, incluyendo el Reglamento General de Protección de Datos."
      },
      {
        h: "6. Actualizaciones de la Política de Cookies",
        p: "Podemos actualizar esta Política de Cookies en cualquier momento. Los cambios serán efectivos desde su publicación en la web."
      },
      {
        h: "7. Contacto",
        p: "Si tienes dudas sobre esta Política de Cookies, puedes contactarnos en hello@traffagency.com"
      }
    ]
  } : {
    title: "Cookies Policy",
    sections: [
      {
        h: "1. What are cookies?",
        p: "Cookies are small text files that are stored on your device when you visit a website. Their function is to allow the website to remember information about your visit, which can facilitate your next visit and make the site more useful to you."
      },
      {
        h: "2. Types of cookies we use",
        p: "On our website, we use the following categories of cookies:\n\n• Technical cookies: necessary for the basic functioning of the website and to allow navigation.\n• Analysis cookies: allow us to understand how users interact with the website and improve our services.\n• Personalization cookies: allow us to remember your preferences, such as language or configuration.\n• Advertising cookies: used to show relevant ads and measure the effectiveness of our campaigns."
      },
      {
        h: "3. Third-party cookies",
        p: "We may use third-party services that install cookies on your device to analyze website usage or show personalized advertising. These third parties may include analytics providers and advertising platforms.\n\nThese providers may process your data according to their own privacy policies."
      },
      {
        h: "4. Cookie management",
        p: "You can accept, reject, or configure the use of cookies through the cookie banner available on our website.\n\nAdditionally, you can configure your browser to block or delete cookies. Please note that if you disable some cookies, certain website functionalities may not be available."
      },
      {
        h: "5. Legal basis",
        p: "The use of non-essential cookies is based on your consent, in accordance with applicable regulations, including the General Data Protection Regulation (GDPR)."
      },
      {
        h: "6. Updates to the Cookies Policy",
        p: "We may update this Cookies Policy at any time. Changes will be effective upon publication on the website."
      },
      {
        h: "7. Contact",
        p: "If you have questions about this Cookies Policy, you can contact us at hello@traffagency.com"
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
            
            <div className="prose prose-zinc max-w-none space-y-12 text-zinc-600">
              {content.sections.map((section, idx) => (
                <section key={idx}>
                  <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">{section.h}</h2>
                  <div className="whitespace-pre-line leading-relaxed text-lg">
                    {section.p}
                  </div>
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
