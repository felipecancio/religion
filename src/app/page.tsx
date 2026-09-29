import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Gallery } from "@/components/sections/Gallery";
import { SantaCeia } from "@/components/sections/SantaCeia";
import { Testimonials } from "@/components/sections/Testimonials";
import { Benefits } from "@/components/sections/Benefits";
import { Guarantee } from "@/components/sections/Guarantee";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppSupport } from "@/components/WhatsAppSupport";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <TrustBar />
      <Gallery />
      <SantaCeia />
      <Testimonials />
      <Benefits />
      <Guarantee />
      <FinalCTA />
      <FAQ />
      <Footer />
      <WhatsAppSupport />
    </main>
  );
}
