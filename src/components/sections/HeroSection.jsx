import IconSymbol from "../common/IconSymbol";

export default function HeroSection({ content }) {
  return (
    <section id="home" className="relative scroll-mt-28 overflow-hidden bg-black px-6 pb-16 pt-24 text-white md:scroll-mt-36">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${content.backgroundImage}")` }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-lg lg:grid-cols-[0.95fr_1.05fr]">
        <div className="lg:pr-4">
          <span className="mb-8 inline-block border border-zinc-700 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            {content.badge}
          </span>
          <h1 className="mb-6 font-h1 text-h1 leading-[1.1] tracking-tight text-white">
            {content.title}
          </h1>
          <p className="mb-10 max-w-lg text-body-lg text-zinc-400">{content.description}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-hover-white flex items-center gap-2 bg-white px-8 py-4 font-button text-black transition-all"
            >
              {content.primaryAction}
              <IconSymbol name="arrow_forward" />
            </a>
            <a
              href={content.secondaryActionHref || "#contact"}
              className="flex items-center gap-2 border border-zinc-700 bg-transparent px-8 py-4 font-button text-white transition-all hover:bg-zinc-900"
              target={content.secondaryActionHref ? "_blank" : undefined}
              rel={content.secondaryActionHref ? "noreferrer" : undefined}
            >
              <IconSymbol name="chat" />
              {content.secondaryAction}
            </a>
          </div>
        </div>

        <div className="relative lg:-mr-2">
          <div className="glass-card relative rounded-none border border-white/10 p-2 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)]">
            <img alt="Dashboard mockup" className="w-full" src={content.image} />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden h-40 w-40 border-b-2 border-r-2 border-white/20 lg:block" />
          <div className="absolute -left-8 -top-8 hidden h-40 w-40 border-l-2 border-t-2 border-white/20 lg:block" />
        </div>
      </div>
    </section>
  );
}
