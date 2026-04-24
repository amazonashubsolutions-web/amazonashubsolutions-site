import { useState } from "react";

import IconSymbol from "../common/IconSymbol";

export default function SiteHeader({ brand, links, cta }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full nav-glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between overflow-visible px-6 py-4">
        <a
          href="#home"
          className="relative -mb-7 -mt-3 flex h-[110px] w-[146px] flex-shrink-0 items-center justify-center border border-black/10 bg-white px-3 py-4 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:-translate-y-0.5 md:-mb-9 md:-mt-4 md:h-[128px] md:w-[168px]"
        >
          <div className="pointer-events-none absolute inset-[8px] border border-black/6" />
          <img
            alt={`${brand.name} logo`}
            className="relative z-10 h-auto max-h-[88px] w-full object-contain md:max-h-[102px]"
            src={brand.logo}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              className="font-label text-sm font-semibold text-on-surface-variant transition-colors duration-200 hover:text-primary"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-hover-effect border border-primary bg-primary px-6 py-2.5 font-button text-sm text-on-primary transition-all active:scale-95"
          >
            {cta}
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Open navigation menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <IconSymbol className="cursor-pointer text-primary" name={isMenuOpen ? "close" : "menu"} />
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-black/10 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                className="font-label text-sm font-semibold text-primary"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-primary bg-primary px-6 py-3 text-center font-button text-sm text-on-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {cta}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
