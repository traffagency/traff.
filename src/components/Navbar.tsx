import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/src/LanguageContext";

import ContactModal from "./ContactModal";

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
    { name: t.nav.services, href: "#services" },
    { name: t.nav.work, href: "#" },
    { name: t.nav.results, href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm border-zinc-200" : "bg-white py-6 border-zinc-100"
      }`}
    >
      <div className="container mx-auto px-6 md:px-16 flex items-center justify-between">
        <div className="w-32 md:w-48 h-10 md:h-12 relative flex items-center">
          <a href="#" className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <img 
              src="https://drive.google.com/thumbnail?id=1SnGxGU4uojXRNl4sndtGMnOmFVzkFqEV&sz=w1000" 
              alt="traff." 
              className="h-32 md:h-40 w-auto object-contain max-w-none"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-zinc-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center border-l border-zinc-200 pl-8 space-x-3">
            <button 
              onClick={() => setLanguage("en")}
              className={`text-[11px] font-bold uppercase tracking-widest ${language === "en" ? "text-black" : "text-zinc-300 hover:text-zinc-500"}`}
            >
              EN
            </button>
            <span className="text-zinc-200">/</span>
            <button 
              onClick={() => setLanguage("es")}
              className={`text-[11px] font-bold uppercase tracking-widest ${language === "es" ? "text-black" : "text-zinc-300 hover:text-zinc-500"}`}
            >
              ES
            </button>
          </div>

          <ContactModal type="audit">
            <Button className="rounded-lg px-5 py-2.5 text-[13px] font-semibold bg-black text-white hover:opacity-90 transition-opacity">
              {t.nav.getAudit}
            </Button>
          </ContactModal>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
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
            className="absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 py-2 border-t border-zinc-100 mt-2 pt-4">
              <button 
                onClick={() => setLanguage("en")}
                className={`text-sm font-bold uppercase tracking-widest ${language === "en" ? "text-black" : "text-zinc-300"}`}
              >
                English
              </button>
              <span className="text-zinc-200">|</span>
              <button 
                onClick={() => setLanguage("es")}
                className={`text-sm font-bold uppercase tracking-widest ${language === "es" ? "text-black" : "text-zinc-300"}`}
              >
                Español
              </button>
            </div>

            <ContactModal type="call">
              <Button className="rounded-full w-full py-6 font-bold bg-black text-white">
                {t.nav.bookCall}
              </Button>
            </ContactModal>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
