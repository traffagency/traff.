import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/src/LanguageContext";

import ContactModal from "./ContactModal";
import CalendlyModal from "./CalendlyModal";

import { Link } from "react-router-dom";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: "/#services" },
    { name: t.nav.work, href: "#" },
    { name: t.nav.results, href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-[#1f1f1f]/90 backdrop-blur-md py-4 shadow-sm border-[#333]" : "bg-[#1f1f1f] py-6 border-[#333]"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between">
        <div className="w-32 lg:w-48 h-10 lg:h-12 relative flex items-center">
          <Link to="/" className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <img 
              src="https://drive.google.com/thumbnail?id=1_1-eJpU9wq7sR344MGMtCjlhrTMBQ1cn&sz=w1000&v=2" 
              alt="traff." 
              className="h-32 lg:h-40 w-auto object-contain max-w-none"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#d9d9d9] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center border-l border-[#333] pl-8 space-x-3">
            <button 
              onClick={() => setLanguage("en")}
              className={`text-[11px] font-bold uppercase tracking-widest ${language === "en" ? "text-white" : "text-[#d9d9d9]/50 hover:text-[#d9d9d9]"}`}
            >
              EN
            </button>
            <span className="text-[#333]">/</span>
            <button 
              onClick={() => setLanguage("es")}
              className={`text-[11px] font-bold uppercase tracking-widest ${language === "es" ? "text-white" : "text-[#d9d9d9]/50 hover:text-[#d9d9d9]"}`}
            >
              ES
            </button>
          </div>

          <CalendlyModal>
            <Button className="rounded-lg px-5 py-2.5 text-[13px] font-semibold bg-[#d9d9d9] text-[#1f1f1f] hover:opacity-90 transition-opacity">
              {t.nav.getAudit}
            </Button>
          </CalendlyModal>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#1f1f1f] border-t border-[#333] p-6 flex flex-col space-y-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-[#d9d9d9]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 py-2 border-t border-[#333] mt-2 pt-4">
              <button 
                onClick={() => setLanguage("en")}
                className={`text-sm font-bold uppercase tracking-widest ${language === "en" ? "text-white" : "text-[#d9d9d9]/50"}`}
              >
                English
              </button>
              <span className="text-[#333]">|</span>
              <button 
                onClick={() => setLanguage("es")}
                className={`text-sm font-bold uppercase tracking-widest ${language === "es" ? "text-white" : "text-[#d9d9d9]/50"}`}
              >
                Español
              </button>
            </div>

            <ContactModal type="call">
              <Button className="rounded-full w-full py-6 font-bold bg-[#d9d9d9] text-[#1f1f1f]">
                {t.nav.bookCall}
              </Button>
            </ContactModal>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
