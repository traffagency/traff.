import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useLanguage } from "@/src/LanguageContext";

interface CopyEmailProps {
  centered?: boolean;
}

export default function CopyEmail({ centered = false }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();

  const copyToClipboard = () => {
    navigator.clipboard.writeText("hello@traffagency.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 mt-6 ${centered ? "justify-center text-center" : "justify-center md:justify-start text-center md:text-left"}`}>
      <span className="text-[15px] text-zinc-900 font-semibold">
        {language === "es" 
          ? "O mándanos un email a:" 
          : "Or email us at:"}
      </span>
      <div className="flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-100 shadow-sm">
        <span className="text-[14px] text-black font-mono font-medium">hello@traffagency.com</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors text-[10px] font-bold uppercase tracking-wider text-zinc-700 shadow-sm"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-green-600" />
              <span className="text-green-600">{language === "es" ? "Copiado" : "Copied"}</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>{language === "es" ? "Copiar" : "Copy"}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
