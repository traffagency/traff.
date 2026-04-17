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
        h: "1. Responsable del Tratamiento",
        p: "El responsable del tratamiento de tus datos personales es traff. Puedes contactarnos en hello@traffagency.com para cualquier cuestión relacionada con esta política."
      },
      {
        h: "2. Información que Recopilamos",
        p: "Recopilamos la información que nos proporcionas directamente cuando rellenas formularios, solicitas una auditoría, contratas servicios o te comunicas con nosotros. Esto puede incluir tu nombre, nombre de la empresa, dirección de correo electrónico, número de teléfono y cualquier otra información que decidas facilitar.\n\nAsimismo, recopilamos información de forma automática cuando accedes a nuestra web, como tu dirección IP, tipo de navegador, dispositivo, páginas visitadas, tiempo de navegación y comportamiento dentro del sitio."
      },
      {
        h: "3. Cómo Utilizamos tu Información",
        p: "Utilizamos la información recopilada para:\n\n• Prestar, gestionar y mejorar nuestros servicios.\n• Atender solicitudes, consultas o comunicaciones.\n• Gestionar la relación contractual o precontractual.\n• Enviar comunicaciones comerciales relacionadas con nuestros servicios, cuando exista consentimiento o relación previa.\n• Analizar el uso de la web y mejorar la experiencia del usuario.\n• Gestionar campañas publicitarias y medir su rendimiento."
      },
      {
        h: "4. Base Legal para el Tratamiento",
        p: "Tratamos tus datos personales conforme a las siguientes bases legales:\n\n• Tu consentimiento al proporcionarnos tus datos.\n• La ejecución de un contrato o medidas precontractuales.\n• El cumplimiento de obligaciones legales.\n• El interés legítimo en mejorar nuestros servicios, prevenir fraude y mantener la seguridad.\n\nTodo ello conforme al Reglamento General de Protección de Datos."
      },
      {
        h: "5. Herramientas y Servicios de Terceros",
        p: "Podemos utilizar herramientas de terceros para gestionar y mejorar nuestros servicios, tales como plataformas de analítica web, gestión de clientes (CRM), email marketing y publicidad online.\n\nEstas herramientas pueden recopilar información sobre tu uso de la web y, en algunos casos, implicar transferencias internacionales de datos. En estos casos, nos aseguramos de que cumplan con las garantías adecuadas conforme a la normativa aplicable."
      },
      {
        h: "6. Conservación de los Datos",
        p: "Conservaremos tus datos personales durante el tiempo necesario para cumplir con la finalidad para la que fueron recopilados. Posteriormente, se mantendrán bloqueados durante los plazos exigidos por la legislación aplicable antes de su eliminación definitiva."
      },
      {
        h: "7. Compartición de Datos",
        p: "No vendemos tus datos personales. Podremos compartirlos con terceros únicamente en los siguientes casos:\n\n• Cuando sea necesario para la prestación del servicio.\n• Con proveedores que actúan como encargados del tratamiento.\n• Por obligación legal.\n\nEn todos los casos, garantizamos que dichos terceros cumplen con las medidas de seguridad y confidencialidad exigidas."
      },
      {
        h: "8. Derechos del Usuario",
        p: "Tienes derecho a:\n\n• Acceder a tus datos personales.\n• Solicitar la rectificación de datos inexactos.\n• Solicitar la supresión de tus datos.\n• Oponerte al tratamiento de tus datos.\n• Solicitar la limitación del tratamiento.\n• Solicitar la portabilidad de tus datos.\n\nPuedes ejercer estos derechos enviando un correo a hello@traffagency.com, indicando el derecho que deseas ejercer y adjuntando una copia de un documento identificativo.\n\nAsimismo, tienes derecho a presentar una reclamación ante la autoridad de control competente, como la Agencia Española de Protección de Datos."
      },
      {
        h: "9. Seguridad de los Datos",
        p: "Adoptamos medidas técnicas y organizativas adecuadas para proteger tus datos personales frente a accesos no autorizados, pérdida, alteración o divulgación. No obstante, ningún sistema es completamente seguro, por lo que no podemos garantizar una seguridad absoluta."
      },
      {
        h: "10. Cookies",
        p: "Nuestra web utiliza cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el tráfico y personalizar contenidos y publicidad. Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento. Para más información, consulta nuestra Política de Cookies."
      },
      {
        h: "11. Transferencias Internacionales de Datos",
        p: "En caso de que utilicemos proveedores ubicados fuera del Espacio Económico Europeo, nos aseguraremos de que existan garantías adecuadas, como cláusulas contractuales tipo aprobadas por la Comisión Europea."
      },
      {
        h: "12. Modificaciones de esta Política",
        p: "Podemos actualizar esta Política de Privacidad en cualquier momento. Las modificaciones serán efectivas desde su publicación en la web."
      },
      {
        h: "13. Contacto",
        p: "Si tienes cualquier duda sobre esta Política de Privacidad o sobre el tratamiento de tus datos, puedes escribirnos a hello@traffagency.com"
      }
    ]
  } : {
    title: "Privacy Policy",
    sections: [
      {
        h: "1. Data Controller",
        p: "The data controller for your personal data is traff. You can contact us at hello@traffagency.com for any matters related to this policy."
      },
      {
        h: "2. Information We Collect",
        p: "We collect information that you directly provide to us when you fill out forms, request an audit, contract services, or communicate with us. This may include your name, business name, email address, phone number, and any other information you choose to provide.\n\nAdditionally, we automatically collect information when you access our website, such as your IP address, browser type, device, pages visited, browsing time, and behavior within the site."
      },
      {
        h: "3. How We Use Your Information",
        p: "We use the collected information to:\n\n• Provide, manage, and improve our services.\n• Attend to requests, inquiries, or communications.\n• Manage the contractual or pre-contractual relationship.\n• Send commercial communications related to our services, when there is consent or a previous relationship.\n• Analyze website use and improve user experience.\n• Manage advertising campaigns and measure their performance."
      },
      {
        h: "4. Legal Basis for Processing",
        p: "We process your personal data based on the following legal grounds:\n\n• Your consent when providing your data.\n• The execution of a contract or pre-contractual measures.\n• Compliance with legal obligations.\n• Legitimate interest in improving our services, preventing fraud, and maintaining security.\n\nAll this is in accordance with the General Data Protection Regulation (GDPR)."
      },
      {
        h: "5. Third-Party Tools and Services",
        p: "We may use third-party tools to manage and improve our services, such as web analytics platforms, customer relationship management (CRM), email marketing, and online advertising.\n\nThese tools may collect information about your website use and, in some cases, involve international data transfers. In such cases, we ensure they comply with adequate guarantees in accordance with applicable regulations."
      },
      {
        h: "6. Data Retention",
        p: "We will keep your personal data for as long as necessary to fulfill the purpose for which they were collected. Subsequently, they will be kept blocked for the periods required by applicable legislation before their definitive deletion."
      },
      {
        h: "7. Data Sharing",
        p: "We do not sell your personal data. We may share them with third parties only in the following cases:\n\n• When necessary for the provision of the service.\n• With providers acting as data processors.\n• Due to a legal obligation.\n\nIn all cases, we guarantee that such third parties comply with the required security and confidentiality measures."
      },
      {
        h: "8. User Rights",
        p: "You have the right to:\n\n• Access your personal data.\n• Request the rectification of inaccurate data.\n• Request the deletion of your data.\n• Object to the processing of your data.\n• Request the limitation of processing.\n• Request the portability of your data.\n\nYou can exercise these rights by sending an email to hello@traffagency.com, indicating the right you wish to exercise and attaching a copy of an identifying document.\n\nAdditionally, you have the right to file a claim with the competent supervisory authority, such as the Spanish Data Protection Agency."
      },
      {
        h: "9. Data Security",
        p: "We adopt appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, alteration, or disclosure. However, no system is completely secure, so we cannot guarantee absolute security."
      },
      {
        h: "10. Cookies",
        p: "Our website uses cookies and similar technologies to improve the user experience, analyze traffic, and personalize content and advertising. You can configure your browser to reject or delete cookies at any time. For more information, please consult our Cookies Policy."
      },
      {
        h: "11. International Data Transfers",
        p: "If we use providers located outside the European Economic Area, we will ensure that appropriate guarantees exist, such as standard contractual clauses approved by the European Commission."
      },
      {
        h: "12. Modifications to this Policy",
        p: "We may update this Privacy Policy at any time. Modifications will be effective upon publication on the website."
      },
      {
        h: "13. Contact",
        p: "If you have any questions about this Privacy Policy or the processing of your data, you can write to us at hello@traffagency.com"
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
                  <div className="whitespace-pre-line leading-relaxed">
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
