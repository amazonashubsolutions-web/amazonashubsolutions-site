import IconSymbol from "../common/IconSymbol";

export default function SiteFooter({ content }) {
  return (
    <footer className="border-t border-zinc-900 bg-black px-8 py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-8 flex items-center gap-3">
            <img alt={`${content.brand.name} logo`} className="h-10 w-auto invert" src={content.brand.logo} />
            <span className="font-h3 text-2xl font-black uppercase tracking-[0.2em] text-white">
              {content.brand.name}
            </span>
          </div>
          <p className="mb-10 max-w-sm text-zinc-500">{content.description}</p>
          <div className="flex gap-4">
            {content.social.map((item) => (
              <a
                key={item.icon}
                className="flex h-10 w-10 items-center justify-center border border-zinc-800 bg-zinc-900 transition-all hover:bg-white hover:text-black"
                href={item.href}
              >
                <IconSymbol className="text-sm" name={item.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-8 text-[12px] font-black uppercase tracking-[0.3em] text-white">
            Links Rapidos
          </h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            {content.quickLinks.map((item) => (
              <li key={item.label}>
                <a className="transition-colors hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-8 text-[12px] font-black uppercase tracking-[0.3em] text-white">
            Suporte
          </h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            {content.supportLinks.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a className="transition-colors hover:text-white" href={item.href} target="_blank" rel="noreferrer">
                    <span className="mr-2 text-zinc-400">{item.label}:</span>
                    {item.value}
                  </a>
                ) : (
                  <div className="whitespace-pre-line">
                    <span className="mr-2 text-zinc-400">{item.label}:</span>
                    {item.value}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 md:flex-row">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
          {content.copyright}
        </p>
        <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
          {content.signature.split("Amazonas Hub Team")[0]}
          <span className="text-white">Amazonas Hub Team</span>
        </p>
      </div>
    </footer>
  );
}
