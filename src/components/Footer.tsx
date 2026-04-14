import { useLanguage } from "@/src/LanguageContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-16 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center">
              <img 
                src="https://drive.google.com/thumbnail?id=1SnGxGU4uojXRNl4sndtGMnOmFVzkFqEV&sz=w1000&v=2" 
                alt="traff." 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-[13px] text-zinc-500 mt-4 leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[1.5px] mb-6">{t.footer.company}</h4>
              <ul className="space-y-4 text-[13px] text-zinc-500">
                <li><Link to="/" className="hover:text-black transition-colors">{t.footer.about}</Link></li>
                <li><a href="#services" className="hover:text-black transition-colors">{t.nav.services}</a></li>
                <li><Link to="/" className="hover:text-black transition-colors">{t.footer.work}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[1.5px] mb-6">{t.footer.connect}</h4>
              <ul className="space-y-4 text-[13px] text-zinc-500">
                <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[1.5px] mb-6">{t.footer.legal}</h4>
              <ul className="space-y-4 text-[13px] text-zinc-500">
                <li><Link to="/privacy" className="hover:text-black transition-colors">{t.footer.privacy}</Link></li>
                <li><Link to="/terms" className="hover:text-black transition-colors">{t.footer.terms}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-zinc-400 uppercase tracking-widest font-bold">
          <p>© 2026 traff. agency. {t.footer.rights}</p>
          <a href="mailto:hello@traffagency.com" className="hover:text-black transition-colors lowercase tracking-normal font-medium">
            hello@traffagency.com
          </a>
        </div>
      </div>
    </footer>
  );
}
