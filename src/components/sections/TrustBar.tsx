import { TRUST_STATS } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="border-y border-luxury-gold-dark/25 bg-luxury-graphite/70">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
        {TRUST_STATS.map((item) => (
          <div key={item.label} className="px-6 py-8 text-center">
            <p className="font-display text-2xl font-medium gold-gradient-text md:text-3xl">
              {item.value}
            </p>
            <p className="mt-2 text-xs font-light uppercase tracking-[0.18em] text-white/45">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
