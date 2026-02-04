"use client";

import { useEffect } from "react";
import i18n from "@/i18n";

export default function Providers({ children }) {
  useEffect(() => {
    const lang = localStorage.getItem("lang") || "ar";

    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, []);

  return children;
}
