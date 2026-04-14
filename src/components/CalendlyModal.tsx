import React, { useState } from "react";
import { PopupModal } from "react-calendly";

interface CalendlyModalProps {
  children: React.ReactNode;
}

export default function CalendlyModal({ children }: CalendlyModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // NOTE: Replace this URL with your actual Calendly link
  const calendlyUrl = "https://calendly.com/traffagency0/30min";

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>
      
      {typeof window !== "undefined" && (
        <PopupModal
          url={calendlyUrl}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById("root")!}
        />
      )}
    </>
  );
}
