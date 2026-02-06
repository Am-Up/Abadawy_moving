"use client";

import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function BackScrol() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="w-12 h-12 bg-green-800 fixed bottom-4 right-4 rounded-full flex justify-center items-center text-white hover:bg-amber-500 transition-opacity opacity-80 hover:opacity-100"
    >
      <ArrowUpwardIcon />
    </button>
  );
}
