"use client";

import { useTranslation } from "react-i18next";
import "@/i18n";
import { motion } from "framer-motion";
import Image from "next/image";
import { hero } from "@/assets/indxe"; // تأكد إن التصدير صح
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col gap-12 items-center justify-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero}
          alt="خدمة نقل عفش في السعودية"
          fill
          priority
          quality={80}
          className="object-cover object-[80%_20%] xl:object-center"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Text Content */}
      <div className="mt-10 px-2">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="rtl:text-[26px] ltr:text-[25px] md:rtl:text-[56px] md:ltr:text-[36px] font-black text-center mt-4 mb-6"
        >
          <span className="text-[#0D3B66]">
            {t("hero.titleStart")}
          </span>{" "}
          <span className="text-[#333333] whitespace-pre-line">
            {t("hero.titleMiddle")}
          </span>{" "}
          <span className="text-[#0D3B66]">
            {t("hero.titleEnd")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="text-[#333333] rtl:text-sm w-full px-2 lg:w-2/5 text-center mx-auto"
        >
          {t("hero.description")}
        </motion.p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mt-6 w-full px-4 justify-center items-center">
        
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          href="https://wa.me/+966545268787"
          className="bg-[#00CB4C] hover:bg-[#00d74f] w-full lg:w-56 h-14 rounded-2xl flex gap-2 justify-center items-center font-bold text-[#333333]"
        >
          <WhatsAppIcon />
          {t("hero.whatsapp")}
        </motion.a>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.9 }}
          href="tel:+966545268787"
          className="border-2 border-[#333333] hover:bg-[#0D3B66] hover:text-blue-50 w-full lg:w-56 h-14 rounded-2xl flex gap-2 justify-center items-center font-bold transition"
        >
          <CallIcon />
          {t("hero.callNow")}
        </motion.a>

      </div>
    </section>
  );
}
