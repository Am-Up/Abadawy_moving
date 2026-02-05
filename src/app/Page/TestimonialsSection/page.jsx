"use client";
import { Card, CardContent } from "@/Components/UI/card.jsx";
import StarIcon from "@mui/icons-material/Star";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "أحمد المالكي",
    rating: 5,
    text: "خدمة ممتازة ومهنية عالية. تم نقل أثاث منزلي بأمان تام وفي الوقت المحدد. أنصح بهم بشدة.",
    location: "حي الملز، الرياض",
  },
  {
    name: "فاطمة السعيد",
    rating: 5,
    text: "فريق محترف ومتعاون. نقلوا أثاث البيت كاملاً بدون أي ضرر. السعر معقول والخدمة ممتازة.",
    location: "حي النرجس، الرياض",
  },
  {
    name: "خالد العتيبي",
    rating: 5,
    text: "سرعة في الاستجابة ودقة في المواعيد. تركيب المطبخ والغرف تم بطريقة احترافية. شكراً لكم.",
    location: "حي الياسمين، الرياض",
  },
  {
    name: "نورا القحطاني",
    rating: 5,
    text: "خدمة تنظيف رائعة وشاملة. البيت أصبح نظيفاً تماماً. الفريق مؤدب ومحترم. سأتعامل معهم مرة أخرى.",
    location: "حي الروضة، الرياض",
  },
];

export default function TestimonialsSection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1200px] rtl">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.title")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.Card
              initial={{ x: 0, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-center">
                  "{testimonial.text}"
                </p>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </motion.Card>
          ))}
        </div>
      </div>
    </section>
  );
}
