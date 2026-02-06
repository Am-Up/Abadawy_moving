"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/Components/UI/card.jsx";
import { Truck, Wind, Bed , Warehouse } from "lucide-react";


export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Truck,
      title: t("services.items.moving"),
      description: t("services.items.movingDesc"),
      bgColor: "bg-[#EE7418]/25",
      color: "text-[#EE7418]",
    },
    {
      icon: Wind,
      title: t("services.items.ac"),
      description: t("services.items.acDesc"),
      bgColor: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      icon: Bed,
      title: t("services.items.rooms"),
      description: t("services.items.roomsDesc"),
      bgColor: "bg-[#EE7418]/25",
      color: "text-[#EE7418]",
    },
    {
      icon: Warehouse,
      title: t("services.items.storage"),
      description: t("services.items.storageDesc"),
      bgColor: "bg-blue-100",
      color: "text-blue-600",
    },
  ];

  return (
    <section id="services" className="py-16 bg-[#E5E7EB]">
      <div className="container mx-auto px-4 rtl max-w-[1200px]">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("services.subTitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.Card
                initial={{ x: 0, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                key={index}
                className="hover:shadow-lg transition-shadow border-0 bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-full ${service.bgColor} mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </motion.Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
