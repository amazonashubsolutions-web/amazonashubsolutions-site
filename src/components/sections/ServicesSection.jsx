import IconSymbol from "../common/IconSymbol";

export default function ServicesSection({ content }) {
  return (
    <section id={content.sectionId} className="relative scroll-mt-28 overflow-hidden border-t border-zinc-900 bg-black px-6 py-16 text-white md:scroll-mt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(63,63,70,0.35),_rgba(0,0,0,0.96))]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="font-h2 text-h2 text-white">{content.title}</h2>
            <p className="mt-4 text-zinc-400">{content.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {content.items.map((service) => (
            <article
              key={service.title}
              className="group border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-white"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-white">
                <IconSymbol className="text-2xl text-black" name={service.icon} />
              </div>
              <h3 className="mb-4 text-[1.75rem] font-semibold leading-tight text-white">{service.title}</h3>
              <p className="mb-6 text-sm leading-7 text-zinc-400">{service.description}</p>
              <ul className="space-y-3 text-sm text-zinc-500">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <IconSymbol className="text-base text-white" name="check" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
