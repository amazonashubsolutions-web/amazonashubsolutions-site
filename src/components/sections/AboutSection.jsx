import IconSymbol from "../common/IconSymbol";

export default function AboutSection({ content }) {
  const pillarCardStyles = [
    {
      card: "border-sky-200 bg-sky-50/85 hover:bg-sky-100/90",
      icon: "border border-sky-200 bg-sky-100 text-sky-700",
      title: "text-sky-950",
      text: "text-sky-900/75",
    },
    {
      card: "border-lime-200 bg-lime-50/85 hover:bg-lime-100/90",
      icon: "border border-lime-200 bg-lime-100 text-lime-700",
      title: "text-lime-950",
      text: "text-lime-900/80",
    },
    {
      card: "border-sky-200 bg-sky-50/85 hover:bg-sky-100/90",
      icon: "border border-sky-200 bg-sky-100 text-sky-700",
      title: "text-sky-950",
      text: "text-sky-900/75",
    },
    {
      card: "border-lime-200 bg-lime-50/85 hover:bg-lime-100/90",
      icon: "border border-lime-200 bg-lime-100 text-lime-700",
      title: "text-lime-950",
      text: "text-lime-900/80",
    },
  ];

  return (
    <section id={content.sectionId} className="bg-white px-6 py-16 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:h-full">
            {content.pillars.map((pillar, index) => {
              const styles = pillarCardStyles[index % pillarCardStyles.length];

              return (
                <article
                  key={pillar.title}
                  className={`group flex h-full flex-col justify-between border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-34px_rgba(0,0,0,0.35)] ${styles.card}`}
                >
                  <div>
                    <IconSymbol
                      name={pillar.icon}
                      className={`mb-4 flex h-12 w-12 items-center justify-center text-[24px] transition-transform group-hover:-translate-y-1 ${styles.icon}`}
                    />
                    <h3 className={`mb-2 font-h4 text-[1.25rem] leading-tight ${styles.title}`}>
                      {pillar.title}
                    </h3>
                  </div>
                  <p className={`mt-3 text-sm leading-6 ${styles.text}`}>{pillar.description}</p>
                </article>
              );
            })}
          </div>

          <div className="flex h-full flex-col justify-center space-y-5 text-zinc-600">
            {content.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph} className="text-base leading-8">
                {paragraph}
              </p>
            ))}
            {content.paragraphs.slice(2).map((paragraph) => (
              <p key={paragraph} className="text-base leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
