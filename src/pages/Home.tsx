import Hero from "@/src/components/Hero";
import Problem from "@/src/components/Problem";
import Solution from "@/src/components/Solution";
import Services from "@/src/components/Services";
import Process from "@/src/components/Process";
import SocialProof from "@/src/components/SocialProof";
import About from "@/src/components/About";
import FinalCTA from "@/src/components/FinalCTA";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import ContactModal from "@/src/components/ContactModal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-brand-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Process />
        <SocialProof />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <ContactModal type="call">
          <Button className="w-full py-6 rounded-lg font-bold bg-black text-white shadow-2xl hover:opacity-90 transition-opacity text-base">
            {t.nav.bookCall}
          </Button>
        </ContactModal>
      </div>
    </div>
  );
}
