"use client";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function Context({ children }) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleWhatsappClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "WhatsApp Button Click",
      });
    }
  };

  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "engagement",
        event_label: "phone_button",
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        open,
        setOpen,
        setMenu,
        menu,
        handleWhatsappClick,
        handlePhoneClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
