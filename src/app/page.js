import Header from "@/Components/Header.jsx";
import HeroSection from "./Page/HeroSection/page.jsx";
import ServicesSection from "./Page/ServicesSection/page.jsx";
import AboutSection from "./Page/AboutSection/page.jsx";
import CallToActionSection from "./Page/CallToActionSection/page.jsx";
import TestimonialsSection from "./Page/TestimonialsSection/page.jsx";
import FooterSection from "./Page/FooterSection/page.jsx";
import BackScrol from "@/Components/BackScrol.jsx";


// src/app/page.jsx
export const metadata = {
  title: "شركة البدوي لنقل الأثاث في السعودية",
  description: "أفضل خدمات نقل الأثاث في السعودية، سريع وآمن وبتكاليف مناسبة. اتصل الآن!",
  keywords: "نقل عفش, شحن أثاث, تخزين أثاث, السعودية, شركة نقل عفش",
  robots: "index, follow",
  openGraph: {
    title: "شركة البدوي لنقل الأثاث في السعودية",
    description: "أفضل خدمات نقل الأثاث في السعودية، سريع وآمن وبتكاليف مناسبة. اتصل الآن!",
    url: "https://yourdomain.com/",
    type: "website",
   
    images: [
      {
        url: "https://yourdomain.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة البدوي لنقل الأثاث في السعودية",
    description: "أفضل خدمات نقل الأثاث في السعودية، سريع وآمن وبتكاليف مناسبة. اتصل الآن!",
    images: ["https://yourdomain.com/logo.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CallToActionSection />
      <TestimonialsSection />
      <FooterSection />
      <BackScrol />
    </main>
  );
}
