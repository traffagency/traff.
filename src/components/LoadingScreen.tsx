import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/src/LanguageContext";

export default function LoadingScreen() {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#1f1f1f] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <img 
          src="https://drive.google.com/thumbnail?id=1_1-eJpU9wq7sR344MGMtCjlhrTMBQ1cn&sz=w1000&v=2" 
          alt="traff." 
          className="h-24 lg:h-32 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-brand-yellow"
        />
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
      >
        {t.loading.experience}
      </motion.p>
    </motion.div>
  );
}
