import IconSymbol from "../common/IconSymbol";

function ProductImages({ product }) {
  if (product.layout === "media-left") {
    return (
      <div className="relative min-h-[520px] lg:min-h-[660px]">
        <div className="absolute left-6 top-0 h-44 w-44 border-l-2 border-t-2 border-black/10 lg:left-10 lg:h-56 lg:w-56" />
        <div className="absolute bottom-6 right-4 h-52 w-52 border-b-2 border-r-2 border-black/10 lg:bottom-10 lg:right-10 lg:h-64 lg:w-64" />
        <div className="relative z-10 ml-auto w-[92%] overflow-hidden border border-zinc-200 bg-white p-3 shadow-[0_34px_80px_-34px_rgba(0,0,0,0.35)] lg:w-[90%]">
          <img
            alt={product.images[0].alt}
            className="w-full border border-zinc-200"
            src={product.images[0].src}
          />
        </div>
        <div className="relative z-20 mt-6 w-[88%] overflow-hidden border border-zinc-200 bg-white p-3 shadow-[0_34px_80px_-34px_rgba(0,0,0,0.32)] lg:-mt-8 lg:ml-0 lg:w-[84%]">
          <img
            alt={product.images[1].alt}
            className="w-full border border-zinc-200"
            src={product.images[1].src}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[520px] lg:min-h-[640px]">
      <div className="absolute left-4 top-6 h-48 w-48 border-l-2 border-t-2 border-white/10 lg:left-10 lg:top-10 lg:h-56 lg:w-56" />
      <div className="absolute bottom-0 right-6 h-40 w-40 border-b-2 border-r-2 border-white/10 lg:bottom-10 lg:right-10 lg:h-48 lg:w-48" />
      <div className="relative z-10 w-[90%] overflow-hidden border border-zinc-800 bg-zinc-950 p-3 shadow-[0_30px_70px_-34px_rgba(0,0,0,0.75)] lg:w-[88%]">
        <img
          alt={product.images[0].alt}
          className="w-full border border-zinc-800 shadow-2xl"
          src={product.images[0].src}
        />
      </div>
      <div className="relative z-20 mt-6 ml-auto w-[94%] overflow-hidden border border-zinc-800 bg-zinc-950 p-3 shadow-[0_30px_70px_-34px_rgba(0,0,0,0.8)] lg:-mt-6 lg:w-[92%]">
        <img
          alt={product.images[1].alt}
          className="w-full border border-zinc-800 shadow-2xl"
          src={product.images[1].src}
        />
      </div>
    </div>
  );
}

function ProductContent({ product, darkTheme }) {
  const logoClassName =
    product.id === "tienda-web"
      ? "mb-10 w-[420px] max-w-full object-contain object-left"
      : "mb-10 h-16 w-auto object-contain";
  const isTiendaWeb = product.id === "tienda-web";
  const stackItemClassName = isTiendaWeb ? "min-w-[78px] gap-2 px-2.5 py-2" : "min-w-[92px] gap-3 px-3 py-3";
  const stackBadgeClassName = isTiendaWeb
    ? "h-7 w-7 text-[8px] tracking-[0.08em]"
    : "h-8 w-8 text-[9px] tracking-[0.12em]";
  const stackLabelClassName = isTiendaWeb ? "text-[10px] tracking-[0.05em]" : "text-[11px] tracking-[0.08em]";

  return (
    <div>
      <img alt={`${product.title} logo`} className={logoClassName} src={product.logo} />
      <span className={`mb-4 block text-[12px] font-bold uppercase tracking-[0.3em] ${darkTheme ? "text-zinc-500" : "text-zinc-500"}`}>
        {product.eyebrow}
      </span>
      <h2 className={`mb-6 font-h2 text-h2 ${darkTheme ? "text-white" : "text-black"}`}>
        {product.title}
      </h2>
      <p className={`mb-10 text-body-lg ${darkTheme ? "text-zinc-400" : "text-zinc-600"}`}>
        {product.description}
      </p>

      {product.stack ? (
        <div className="mb-10">
          <span className={`mb-4 block text-[11px] font-bold uppercase tracking-[0.28em] ${darkTheme ? "text-zinc-500" : "text-zinc-500"}`}>
            Tecnologias Utilizadas
          </span>
          <div className="flex flex-wrap gap-3">
            {product.stack.map((item) => (
              <div
                key={item.label}
                className={`flex items-center border ${stackItemClassName} ${
                  darkTheme ? "border-white/12 bg-black/35 text-white" : "border-zinc-200 bg-zinc-50 text-black"
                }`}
              >
                <div
                  className={`flex flex-shrink-0 items-center justify-center font-black uppercase ${stackBadgeClassName} ${
                    darkTheme ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  {item.shortLabel}
                </div>
                <span className={`font-bold uppercase ${stackLabelClassName} ${darkTheme ? "text-zinc-300" : "text-zinc-600"}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {product.bullets ? (
        <div className="mb-12 space-y-6">
          {product.bullets.map((bullet) => (
            <div key={bullet.title} className="flex items-center gap-4">
              <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center ${darkTheme ? "bg-white text-black" : "bg-black text-white"}`}>
                <IconSymbol name={bullet.icon} />
              </div>
              <div>
                <h4 className={`font-bold ${darkTheme ? "text-white" : "text-black"}`}>{bullet.title}</h4>
                <p className={`text-sm ${darkTheme ? "text-zinc-500" : "text-zinc-500"}`}>{bullet.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {product.chips ? (
        <ul className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {product.chips.map((chip) => (
            <li
              key={chip}
              className={`flex items-center gap-2 text-sm ${darkTheme ? "text-zinc-400" : "text-zinc-600"}`}
            >
              <IconSymbol className={darkTheme ? "text-white text-[18px]" : "text-black text-[18px]"} name="check_circle" />
              {chip}
            </li>
          ))}
        </ul>
      ) : null}

      {product.action ? (
        <a
          href="#contact"
          className={`${darkTheme ? "btn-hover-white bg-white text-black" : "btn-hover-effect bg-black text-white"} inline-flex px-10 py-4 font-button text-sm uppercase tracking-wider transition-all`}
        >
          {product.action}
        </a>
      ) : null}
    </div>
  );
}

export default function ProductShowcaseSection({ product }) {
  const darkTheme = product.theme === "dark";
  const sectionClasses = darkTheme
    ? "border-t border-zinc-900 bg-surface-dim text-white"
    : "bg-white text-black";
  const layoutClasses =
    product.layout === "media-right"
      ? "flex-col lg:flex-row"
      : "flex-col lg:flex-row";

  return (
    <section
      id={product.sectionId}
      className={`relative overflow-hidden px-6 py-16 ${sectionClasses}`.trim()}
    >
      {product.backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${product.backgroundImage}")` }}
        />
      ) : null}
      <div className={`relative z-10 mx-auto flex max-w-7xl items-center gap-20 ${layoutClasses}`.trim()}>
        {product.layout === "media-left" ? (
          <>
            <div className="order-2 w-full lg:order-1 lg:w-[56%]">
              <ProductImages product={product} />
            </div>
            <div className="order-1 w-full lg:order-2 lg:w-[44%]">
              <ProductContent darkTheme={darkTheme} product={product} />
            </div>
          </>
        ) : (
          <>
            <div className="w-full lg:w-[44%]">
              <ProductContent darkTheme={darkTheme} product={product} />
            </div>
            <div className="w-full lg:w-[56%]">
              <ProductImages product={product} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
