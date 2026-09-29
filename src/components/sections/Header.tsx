export function Header() {
  return (
    <div className="border-b border-white/10 bg-[#05080F]">
      <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2.5 text-center font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-[#F4EFE8] sm:gap-x-3 sm:py-3 sm:text-xs sm:tracking-[0.22em]">
        <span>Exclusivo</span>
        <span className="text-luxury-gold-dark" aria-hidden="true">
          |
        </span>
        <span>Alta resolución</span>
        <span className="text-luxury-gold-dark" aria-hidden="true">
          |
        </span>
        <span>Libre de derechos</span>
      </p>
    </div>
  );
}
