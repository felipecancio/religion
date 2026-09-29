import { AnimatedSection } from "../AnimatedSection";

export function Problem() {
  return (
    <AnimatedSection>
      <div className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
            El verdadero problema
          </p>
          <h2 className="mt-3 font-display text-4xl font-light leading-tight md:text-5xl">
            Sin diseños listos,{" "}
            <span className="gold-gradient-text italic">se van las ventas</span>
          </h2>
          <div className="gold-line mx-auto mt-6 w-16" />
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/60 md:text-lg">
            El cliente pide un cuadro y, si no tienes el diseño a mano, no espera.
            Los archivos genéricos se repiten y no cubren lo que la gente busca.
            Sin un arsenal exclusivo, atiendes menos pedidos de los que podrías.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
