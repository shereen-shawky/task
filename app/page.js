import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandLogos from "@/components/BrandLogos";
import DiscountBanner from "@/components/DiscountBanner";
import Services from "@/components/Services";
import Latest from "@/components/Latest";
import WhyUs from "@/components/WhyUs";
import Video from "@/components/Video";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import PodcastCarousel from "@/components/PodcastCarousel";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <TopBanner />
      <Navbar />
      <Hero />
      <BrandLogos />
      <DiscountBanner />
      <Services/>
      <Latest/>
      <WhyUs/>
      <Video/>
      <HowItWorks/>
      <Testimonials/>
      <CaseStudies/>
      <PodcastCarousel/>
      <ContactForm/>
      <FAQ/>
      <Map/>
      <Footer/>
    </div>
  );
}
