import Header from "@/Components/Header.jsx";
import HeroSection from "./Page/HeroSection/page.jsx";
import ServicesSection from "./Page/ServicesSection/page.jsx";
import { AboutSection } from "./Page/AboutSection/page.jsx";
import { CallToActionSection } from "./Page/CallToActionSection/page.jsx";
import { TestimonialsSection } from "./Page/TestimonialsSection/page.jsx";
import { FooterSection } from "./Page/FooterSection/page.jsx";
export default function Home() {
  return (
    <div>
      <main className="">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection/>
        <CallToActionSection/>
        <TestimonialsSection/>
        <FooterSection/>
      </main>
    </div>
  );
}
