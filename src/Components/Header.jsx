"use client";

import { useTranslation } from "react-i18next";

import { logo } from "@/assets/indxe.js";
import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "@/app/Context.jsx";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { open, setOpen, setMenu, menu ,handlePhoneClick} = useContext(AppContext);

  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // cleanup مهم جدًا
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // بينزل لتحت
        setShowNav(false);
      } else {
        // بيطلع لفوق
        setShowNav(true);
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-16 bg-[#0D3B66] z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        } flex justify-between items-center px-4 lg:px-28 text-white`}
      >
        {" "}
        {/* Logo */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Image
            alt="لوجو الشركة البدوي للنقل العفش"
            className="w-28 md:w-36 "
            src={logo}
            priority={true}
          />
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setMenu(!menu)}
          className="md:hidden cursor-pointer z-50"
        >
          <MenuIcon fontSize="large" />
        </motion.div>
        {/* Nav */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <ul className="flex flex-row-reverse gap-10 text-lg cursor-pointer">
            <li>
              <Link href="#Test">{t("navbar.testimonials")}</Link>
            </li>
            <li>
              <Link href="#services">{t("navbar.services")}</Link>
            </li>
            <li>
              <Link href="#about">{t("navbar.about")}</Link>
            </li>
            <li>
              <Link href="#hero">{t("navbar.home")}</Link>
            </li>
          </ul>
        </motion.nav>
        {/* Actions */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" gap-4 items-center relative hidden md:flex"
        >
          <a onClick={handlePhoneClick} href="tel:+966545268787" className="hover:scale-110 transition">
            <CallIcon />
          </a>

          {/* Language */}
          <button
            onClick={() => setOpen(!open)}
            className="hover:scale-110 transition"
          >
            <LanguageIcon />
          </button>

          {/* Dropdown */}
          {open && (
            <>
              <div
                className={`absolute top-12 right-0 bg-white text-black rounded-xl shadow-lg w-32 z-50 overflow-hidden `}
              >
                <button
                  onClick={() => changeLang("ar")}
                  className={`w-full px-4 py-2 text-right hover:bg-gray-100 transition active:scale-110  ${i18n.language === "ar" ? "bg-gray-200" : ""}`}
                >
                  العربية 🇸🇦
                </button>
                <button
                  onClick={() => changeLang("en")}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition active:scale-110 ${i18n.language === "en" ? "bg-gray-200" : ""}`}
                >
                  English 🇺🇸
                </button>
              </div>

              {/* Overlay */}
              <div
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40"
              />
            </>
          )}
        </motion.div>
        {menu && (
          <div
            className="
      absolute top-16 left-0 w-full
       text-white
      md:hidden z-10
      animate-dropDown 
    "
          >
            <div className="bg-[#0D3B66]">
              {/* Links */}
              <ul className="flex flex-col text-center gap-4 py-6 text-lg">
                <li onClick={() => setMenu(false)}>
                  <Link href="#hero">{t("navbar.home")}</Link>
                </li>
                <li onClick={() => setMenu(false)}>
                  <Link href="#about">{t("navbar.about")}</Link>
                </li>
                <li onClick={() => setMenu(false)}>
                  <Link href="#services">{t("navbar.services")}</Link>
                </li>
                <li onClick={() => setMenu(false)}>
                  <Link href="#Test">{t("navbar.testimonials")}</Link>
                </li>
              </ul>

              <hr className="border-white/30 mx-6" />

              {/* Actions */}
              <div className="flex flex-col gap-4 py-6 items-center">
                <a onClick={handlePhoneClick} href="tel:+966545268787" className="flex items-center gap-2">
                  <CallIcon />
                  <span>{t("navbar.callNow")}</span>
                </a>

                {/* Language */}
                <div className="flex gap-3">
                  <button
                    onClick={() => changeLang("ar")}
                    className={`px-4 py-2 rounded-lg ${
                      i18n.language === "ar"
                        ? "bg-white text-black"
                        : "bg-white/20"
                    }`}
                  >
                    عربي
                  </button>

                  <button
                    onClick={() => changeLang("en")}
                    className={`px-4 py-2 rounded-lg ${
                      i18n.language === "en"
                        ? "bg-white text-black"
                        : "bg-white/20"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
            <div onClick={() => setMenu(false)} className="h-64 w-full"></div>
          </div>
        )}
      </header>
    </>
  );
}
