import { useLanguage } from "@/src/LanguageContext";

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-yellow py-8 border-t border-black/5">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-zinc-800">
          {t.socialProof.label}
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 opacity-60 font-bold tracking-[-0.5px] text-black">
          <span>FORGE&CO</span>
          <span>LUMEN.</span>
          <span>ARCHETYPE</span>
          <span>VANTAGE</span>
        </div>

        <div className="text-[13px] font-semibold flex items-center gap-1">
          <span className="text-yellow-600">⭐</span> {t.socialProof.rating}
        </div>
      </div>
    </section>
  );
}
