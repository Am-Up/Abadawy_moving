"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GAListener() {
  const pathname = usePathname();

  useEffect(() => {
        if (typeof window !== "undefined" && window.gtag){
      window.gtag("config", "G-LJDZLGJXDF", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null; // مفيش حاجة تتعرض على الصفحة
}
