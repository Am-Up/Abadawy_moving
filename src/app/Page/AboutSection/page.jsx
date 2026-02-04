"use client";
import { About_img } from "@/assets/indxe.js";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// ==============================================
export function AboutSection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px] rtl">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" md:w-full mb-16"
          >
            <Image
              src={About_img}
              alt="Professional moving team"
              className="mx-auto object-cover rounded-lg shadow-[#333333] shadow-lg"
            />
          </motion.div>
          <div className="md:w-full flex flex-col gap-8">
            <motion.h2
              initial={{ x: 0, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl text-center md:text-start  font-bold text-gray-900 mb-6"
            >
              {t("about.title")}
            </motion.h2>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 text-md text-center md:text-lg text-gray-700 leading-relaxed flex flex-col gap-6"
            >
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </motion.div>

            <motion.div
              initial={{ y: -0, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: -1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-3 gap-2 md:gap-6 md:mt-8"
            >
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-[#333333] mb-2">
                  +500
                </div>
                <div className="text-sm text-gray-600">
                  {" "}
                  {t("about.stats.success")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold mb-2 text-[#0D3B66] ">
                  7+
                </div>
                <div className="text-sm text-gray-600">
                  {t("about.stats.experience")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl  font-bold text-[#333333] mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600">
                  {t("about.stats.support")}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
