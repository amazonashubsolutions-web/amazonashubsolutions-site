import IconSymbol from "./IconSymbol";

export default function FloatingWhatsAppButton({ href }) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex items-center gap-3 rounded-full border border-emerald-300 bg-[#25D366] px-5 py-4 text-sm font-bold text-white shadow-[0_22px_50px_-18px_rgba(37,211,102,0.75)] transition-all duration-200 hover:translate-y-[-2px] hover:bg-[#20bd5b]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/18">
        <IconSymbol className="text-[24px] text-white" name="chat" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
