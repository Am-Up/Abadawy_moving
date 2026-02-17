"use client";
import { motion } from "framer-motion";
import CallIcon from "@mui/icons-material/Call";
import { useTranslation } from "react-i18next";
import { AppContext } from "@/app/Context.jsx";
import {useContext} from "react"

export default function CallToActionSection() {

    const { handlePhoneClick , handleWhatsappClick } = useContext(AppContext);
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-red-500">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 rtl"
      >
        <div className="text-center text-white">
          <h4 className="text-3xl md:text-4xl font-bold mb-4">
            {t("callToAction.title")}
          </h4>
          <p className="text-sm md:text-lg mb-8 opacity-90">
            {t("callToAction.description")}
          </p>

          <div className="flex flex-col text-sm sm:flex-row justify-center items-center">
            <a
              onClick={handlePhoneClick}
              className="text-lg opacity-90 bg-[#E5E7EB] text-[#0D3B66] font-bold w-56 h-14 rounded-2xl flex gap-2 justify-center items-center"
              href="tel:+966545268787"
            >
              +966 54 526 8787 <CallIcon />
            </a>

            <a
              onClick={handleWhatsappClick}
              href="https://wa.me/+966545268787"
              className=" text-[#E5E7EB] px-8 py-4 text-lg font-bold flex items-center gap-3"
            >
              {t("callToAction.whatsapp")}
            </a>
          </div>

          <div className="mt-8 text-sm opacity-80">
            {t("callToAction.availability")}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
