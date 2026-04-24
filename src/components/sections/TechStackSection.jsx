import IconSymbol from "../common/IconSymbol";

export default function TechStackSection({ content }) {
  const cardStyles = [
    {
      card: "border-sky-200 bg-sky-50/85 hover:border-sky-300 hover:bg-sky-100/90",
      orb: "bg-sky-700/10 group-hover:bg-sky-700/15",
      iconWrap: "border-sky-200 bg-white text-sky-700 shadow-[8px_8px_0_0_rgba(3,105,161,0.12)]",
      category: "text-sky-700",
      title: "text-sky-950",
      text: "text-sky-900/80",
    },
    {
      card: "border-lime-200 bg-lime-50/85 hover:border-lime-300 hover:bg-lime-100/90",
      orb: "bg-lime-700/10 group-hover:bg-lime-700/15",
      iconWrap: "border-lime-200 bg-white text-lime-700 shadow-[8px_8px_0_0_rgba(77,124,15,0.12)]",
      category: "text-lime-700",
      title: "text-lime-950",
      text: "text-lime-900/80",
    },
  ];

  return (
    <section id={content.sectionId} className="scroll-mt-28 overflow-hidden bg-white px-6 py-16 md:scroll-mt-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="font-h2 text-h2 text-black">{content.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            Tecnologias escolhidas para construir produtos digitais rapidos, estaveis e prontos para crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((item, index) => {
            const styles = cardStyles[index % cardStyles.length];

            return (
            <article
              key={item.label}
              className={`group relative overflow-hidden border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)] ${styles.card}`}
            >
              <div className={`absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full transition-all duration-300 ${styles.orb}`} />
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className={`flex h-16 w-16 items-center justify-center border ${styles.iconWrap}`}>
                    <IconSymbol className="text-[38px]" name={item.icon} />
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-[0.28em] ${styles.category}`}>
                    {item.category}
                  </span>
                </div>
                <h3 className={`text-3xl font-black tracking-tight ${styles.title}`}>{item.label}</h3>
                <p className={`mt-4 max-w-sm text-sm leading-7 ${styles.text}`}>{item.description}</p>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
