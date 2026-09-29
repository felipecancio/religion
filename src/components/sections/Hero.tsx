import Image from "next/image";
import { CheckoutCTA } from "../CheckoutCTA";

function HeroMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="animate-float">
        <Image
          src="/images/mockup-hero.webp"
          alt="Mega Pack Religión — Diseños originales en alta resolución"
          width={600}
          height={600}
          priority
          fetchPriority="high"
          quality={80}
          sizes="(min-width: 1280px) 680px, (min-width: 1024px) 580px, 420px"
          className="h-auto w-full max-w-[400px] object-contain sm:max-w-[420px] lg:max-w-[580px] xl:max-w-[680px]"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-graphite/30 via-luxury-black to-luxury-black" />
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-luxury-gold-dark/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#24344F] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-12 lg:pb-16 lg:pt-16">
        <div className="grid grid-cols-1 items-center text-center lg:grid-cols-2 lg:gap-x-16 lg:text-left">
          <h1 className="font-display text-5xl font-light leading-[1.1] tracking-tight md:text-6xl lg:col-start-1 lg:row-start-1 lg:text-7xl">
            Mega Pack{" "}
            <span className="gold-gradient-text font-medium italic">Religión</span>
          </h1>

          <p className="mt-4 font-display text-xl font-light italic text-luxury-silver md:text-2xl lg:col-start-1 lg:row-start-2">
            Diseños originales, en alta resolución, para cuadros de cualquier tamaño.
          </p>

          <div className="gold-line mx-auto my-8 w-24 lg:col-start-1 lg:row-start-3 lg:mx-0" />

          <HeroMockup className="mb-8 w-full lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:mb-0 lg:self-center" />

          <p className="mx-auto max-w-lg text-sm font-light leading-relaxed text-white/70 md:text-base lg:col-start-1 lg:row-start-4 lg:mx-0 lg:text-lg">
            Consigue un arsenal de diseños religiosos nuevos y exclusivos en
            formatos JPG y PNG, listos para imprimir y crear cuadros incluso
            de más de 2 metros. Acceso inmediato, con un pago único y seguro.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <CheckoutCTA size="large" />
        </div>
      </div>
    </section>
  );
}
