import { AnimatedSection } from "../AnimatedSection";

function ExclusiveSeal() {
  return (
    <div className="relative mx-auto h-40 w-40 shrink-0 md:h-44 md:w-44">
      <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="seal-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6EFE6" />
            <stop offset="55%" stopColor="#E4B7B2" />
            <stop offset="100%" stopColor="#7C2F3B" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="76" fill="#0E1526" stroke="url(#seal-gold)" strokeWidth="1.5" />
        <circle cx="80" cy="80" r="70" fill="none" stroke="url(#seal-gold)" strokeWidth="0.6" opacity="0.45" />
        <circle cx="80" cy="62" r="28" fill="none" stroke="url(#seal-gold)" strokeWidth="1" />
        <path d="M74 44h12v12h10v12h-10v12h-12V68H64V56h10V44z" fill="#E4B7B2" />
        <text
          x="80"
          y="112"
          textAnchor="middle"
          fill="#F6EFE6"
          fontSize="10"
          letterSpacing="2.2"
          fontFamily="Georgia, serif"
        >
          GARANTÍA
        </text>
        <text
          x="80"
          y="128"
          textAnchor="middle"
          fill="#E4B7B2"
          fontSize="9"
          letterSpacing="1.6"
          fontFamily="Georgia, serif"
        >
          EXCLUSIVA
        </text>
      </svg>
    </div>
  );
}

export function Guarantee() {
  return (
    <AnimatedSection>
      <section className="section-padding !py-16 md:!py-20">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-md border border-luxury-gold-dark/40 bg-gradient-to-br from-luxury-graphite via-luxury-black to-luxury-charcoal px-8 py-12 text-center md:px-14 md:py-14">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-luxury-gold-dark/25 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-luxury-gold-dark/15 blur-3xl" />

            <div className="relative">
              <ExclusiveSeal />

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
                Compra protegida
              </p>
              <h2 className="mt-3 font-display text-3xl font-light md:text-4xl">
                Garantía{" "}
                <span className="gold-gradient-text italic">incondicional</span>
              </h2>
              <div className="gold-line mx-auto mt-5 w-16" />
              <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-white/60 md:text-base">
                Si no estás 100% satisfecho con el Mega Pack Religión, pides tu
                dinero de vuelta. Sin letras chicas y{" "}
                <span className="text-luxury-gold/80">en cualquier momento</span>
                . Tu compra está protegida de principio a fin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
