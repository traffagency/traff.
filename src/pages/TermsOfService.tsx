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
        p: "traff. proporciona servicios de gestión de redes sociales, creación de contenido y branding para pequeñas y medianas empresas. Los servicios pueden ofrecerse en modalidad de suscripción mensual, packs cerrados o servicios personalizados según acuerdo con el cliente. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier parte del servicio en cualquier momento."
      },
      {
        h: "3. Modalidades de Servicio",
        p: "Los servicios de traff. se estructuran en distintas modalidades:\n\nSuscripción mensual: servicios recurrentes con renovación automática mensual, que incluyen las prestaciones acordadas previamente.\nPacks cerrados: servicios definidos con un alcance concreto y entregables específicos, sin carácter recurrente.\nServicios personalizados: soluciones adaptadas a las necesidades del cliente, definidas mediante acuerdo previo por escrito.\n\nCada modalidad se regirá por las condiciones específicas acordadas con el cliente en cuanto a alcance, plazos y precio."
      },
      {
        h: "4. Responsabilidades del Usuario",
        p: "Eres responsable de proporcionar información veraz, materiales necesarios y accesos a cuentas para la correcta prestación del servicio. Te comprometes a mantener la confidencialidad de tus credenciales y a notificar cualquier uso no autorizado. Asimismo, aceptas no utilizar nuestros servicios para fines ilegales, fraudulentos o que vulneren derechos de terceros."
      },
      {
        h: "5. Propiedad Intelectual",
        p: "Todo el contenido proporcionado por traff., incluyendo texto, gráficos, logotipos e imágenes, es propiedad de traff. o sus proveedores y está protegido por la normativa aplicable. Una vez realizado el pago, el cliente podrá utilizar los entregables finales para sus propios fines, salvo pacto en contrario. El cliente garantiza que dispone de los derechos necesarios sobre los materiales que facilite."
      },
      {
        h: "6. Condiciones de Pago",
        p: "Los precios de los servicios serán los acordados previamente con el cliente. En el caso de suscripciones mensuales, el pago se realizará de forma anticipada al inicio de cada periodo. Los packs cerrados y servicios personalizados podrán requerir pago anticipado total o parcial. En caso de impago, traff. podrá suspender o cancelar el servicio. Salvo indicación expresa, los importes abonados no son reembolsables."
      },
      {
        h: "7. Renovación, Cancelación y Terminación",
        p: "Las suscripciones mensuales se renovarán automáticamente salvo cancelación por parte del cliente con al menos 15 días de antelación al siguiente ciclo de facturación.\nLos packs cerrados no admiten cancelación una vez iniciados.\nLos servicios personalizados se regirán por lo acordado entre las partes.\ntraff. se reserva el derecho de suspender o finalizar el servicio en caso de incumplimiento, uso indebido o falta de pago."
      },
      {
        h: "8. Plazos de Entrega y Revisiones",
        p: "Los plazos de entrega serán los acordados con el cliente y podrán depender de la disponibilidad de materiales e información proporcionada. Salvo indicación contraria, los servicios incluyen un número limitado de revisiones. Revisiones adicionales podrán implicar costes extra."
      },
      {
        h: "9. Exclusión de Garantías",
        p: "Los servicios se prestan “tal cual” y según disponibilidad. traff. no garantiza resultados concretos, tales como crecimiento en redes sociales, aumento de ventas o consecución de objetivos específicos, al depender estos de múltiples factores externos."
      },
      {
        h: "10. Limitación de Responsabilidad",
        p: "En ningún caso traff. será responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso de los servicios, incluyendo pérdida de beneficios, datos o reputación."
      },
      {
        h: "11. Protección de Datos",
        p: "El tratamiento de datos personales se realizará conforme a la normativa vigente, incluyendo el Reglamento General de Protección de Datos. Para más información, consulta nuestra Política de Privacidad."
      },
      {
        h: "12. Modificaciones de los Términos",
        p: "traff. podrá modificar estos Términos de Servicio en cualquier momento. Las modificaciones serán efectivas desde su publicación. El uso continuado de los servicios implicará la aceptación de dichos cambios."
      },
      {
        h: "13. Relación entre las Partes",
        p: "La relación entre traff. y el cliente es de carácter mercantil como proveedor independiente, sin que exista relación laboral, sociedad o asociación entre las partes."
      },
      {
        h: "14. Ley Aplicable",
        p: "Estos Términos de Servicio se regirán por las leyes de España. Para cualquier controversia, las partes se someten a los juzgados y tribunales competentes del domicilio de traff., salvo que la normativa establezca otra cosa."
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
        h: "2. Service Description",
        p: "traff. provides social media management, content creation, and branding services for small and medium-sized enterprises. Services may be offered as monthly subscriptions, fixed packs, or custom services as agreed upon with the client. We reserve the right to modify, suspend, or discontinue any part of the service at any time."
      },
      {
        h: "3. Service Modalities",
        p: "traff.’s services are structured in different modalities:\n\nMonthly subscription: recurring services with automatic monthly renewal, including the previously agreed-upon benefits.\nFixed packs: defined services with a specific scope and specific deliverables, without a recurring nature.\nCustom services: solutions adapted to the client's needs, defined by prior written agreement.\n\nEach modality will be governed by the specific conditions agreed upon with the client regarding scope, deadlines, and price."
      },
      {
        h: "4. User Responsibilities",
        p: "You are responsible for providing truthful information, necessary materials, and account access for the proper provision of the service. You agree to maintain the confidentiality of your credentials and to notify us of any unauthorized use. Furthermore, you agree not to use our services for illegal, fraudulent purposes or those that violate the rights of third parties."
      },
      {
        h: "5. Intellectual Property",
        p: "All content provided by traff., including text, graphics, logos, and images, is the property of traff. or its providers and is protected by applicable regulations. Once payment is made, the client may use the final deliverables for their own purposes, unless otherwise agreed. The client guarantees they have the necessary rights to the materials they provide."
      },
      {
        h: "6. Payment Conditions",
        p: "Service prices will be those previously agreed upon with the client. In the case of monthly subscriptions, payment will be made in advance at the beginning of each period. Fixed packs and custom services may require full or partial advance payment. In case of non-payment, traff. may suspend or cancel the service. Unless expressly indicated otherwise, the amounts paid are non-refundable."
      },
      {
        h: "7. Renewal, Cancellation, and Termination",
        p: "Monthly subscriptions will automatically renew unless cancelled by the client at least 15 days prior to the next billing cycle.\nFixed packs do not allow cancellation once started.\nCustom services will be governed by what is agreed between the parties.\ntraff. reserves the right to suspend or terminate the service in case of non-compliance, improper use, or non-payment."
      },
      {
        h: "8. Delivery Times and Revisions",
        p: "Delivery times will be those agreed upon with the client and may depend on the availability of materials and information provided. Unless otherwise indicated, the services include a limited number of revisions. Additional revisions may involve extra costs."
      },
      {
        h: "9. Exclusion of Warranties",
        p: "Services are provided \"as is\" and as available. traff. does not guarantee specific results, such as social media growth, increased sales, or the achievement of specific objectives, as these depend on multiple external factors."
      },
      {
        h: "10. Limitation of Liability",
        p: "In no case shall traff. be liable for any indirect, incidental, special, or consequential damages resulting from the use of the services, including loss of profits, data, or reputation."
      },
      {
        h: "11. Data Protection",
        p: "The processing of personal data will be carried out in accordance with current regulations, including the General Data Protection Regulation (GDPR). For more information, please consult our Privacy Policy."
      },
      {
        h: "12. Modifications to the Terms",
        p: "traff. may modify these Terms of Service at any time. Modifications will be effective upon publication. Continued use of the services will imply acceptance of such changes."
      },
      {
        h: "13. Relationship between the Parties",
        p: "The relationship between traff. and the client is of a commercial nature as an independent provider, without any labor relationship, partnership, or association between the parties."
      },
      {
        h: "14. Governing Law",
        p: "These Terms of Service shall be governed by the laws of Spain. For any controversy, the parties submit to the competent courts and tribunals of traff.'s registered address, unless the regulations establish otherwise."
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
