import { AnimatedSection } from "../AnimatedSection";
import { ArtImage } from "../ArtImage";
import { SANTA_CEIA_IMAGES } from "@/lib/constants";

export function SantaCeia() {
  return (
    <AnimatedSection>
      <section id="exclusivos" className="section-padding !pt-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
              Muy buscados
            </p>
            <h2 className="mt-3 font-display text-4xl font-light md:text-5xl">
              Diseños exclusivos,{" "}
              <span className="gold-gradient-text italic">en alta resolución</span>
            </h2>
            <div className="gold-line mx-auto mt-6 w-16" />
            <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/55 md:text-base">
              Artes exclusivas y muy buscadas, todas en alta resolución.
              Listas para cuadros de más de 2 metros, sin perder detalle al imprimir.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
            {SANTA_CEIA_IMAGES.map((src, i) => (
              <div
                key={src}
                className="group relative aspect-[16/9] overflow-hidden rounded-sm"
              >
                <ArtImage
                  src={src}
                  alt={`Diseño exclusivo en alta resolución ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
