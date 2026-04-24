import IconSymbol from "../common/IconSymbol";

export default function DifferentiatorsSection({ content }) {
  return (
    <section className="relative border-t border-zinc-900 bg-zinc-950 px-6 py-16 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${content.backgroundImage}")` }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-lg lg:grid-cols-2">
        <div>
          <h2 className="mb-8 font-h2 text-h2 text-white">{content.title}</h2>
          <div className="space-y-10">
            {content.items.map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center bg-white">
                  <IconSymbol className="text-xl text-black" name={item.icon} />
                </div>
                <div>
                  <h4 className="mb-2 font-h4 text-h4 text-white">{item.title}</h4>
                  <p className="text-zinc-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="flex aspect-square items-center justify-center border border-white/5 bg-white/5">
            <div className="relative h-2/3 w-2/3 overflow-hidden border border-white/10 bg-black/30">
              <img
                alt="Supabase dashboard preview"
                className="h-full w-full object-cover opacity-70"
                src={content.stat.logo}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 border-4 border-black bg-white p-10 text-black shadow-2xl">
            <div className="mb-4 flex items-center gap-2">
              <IconSymbol className="text-black" name="monitoring" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {content.stat.label}
              </span>
            </div>
            <div className="text-5xl font-black tracking-tighter">{content.stat.value}</div>
            <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              {content.stat.caption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
