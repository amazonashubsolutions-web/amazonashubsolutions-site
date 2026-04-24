export default function FinalCtaSection({ content }) {
  return (
    <section id={content.sectionId} className="scroll-mt-28 bg-white px-6 py-14 md:scroll-mt-36">
      <div className="mx-auto grid max-w-6xl gap-10 border-2 border-black bg-white p-8 shadow-[18px_18px_0_rgba(0,0,0,0.08)] lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <img
              src="/images/logo_negro.png"
              alt="Amazonas Hub Solutions"
              className="h-auto w-full max-w-[280px] object-contain"
            />
            <h2 className="mt-5 font-h2 text-h2 text-black">{content.title}</h2>
            <p className="mt-4 max-w-xl text-body-lg leading-relaxed text-zinc-600">
              {content.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border border-black/10 bg-[#f7f2ff] px-4 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
                Resposta
              </p>
              <p className="mt-2 text-base font-semibold text-black">Atendimento humano</p>
            </div>
            <div className="border border-black/10 bg-[#eef8ff] px-4 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
                Canal
              </p>
              <p className="mt-2 text-base font-semibold text-black">Email e WhatsApp</p>
            </div>
            <div className="border border-black/10 bg-[#f3ffe8] px-4 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-700">
                Foco
              </p>
              <p className="mt-2 text-base font-semibold text-black">Projetos sob medida</p>
            </div>
          </div>
        </div>

        <form className="grid gap-5 border border-black bg-[#fcfcfc] p-6" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-black">
              Nome
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                className="border border-zinc-300 bg-white px-4 py-3 text-base font-normal text-black outline-none transition focus:border-black"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-black">
              Email
              <input
                type="email"
                name="email"
                placeholder="voce@empresa.com"
                className="border border-zinc-300 bg-white px-4 py-3 text-base font-normal text-black outline-none transition focus:border-black"
                required
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-black">
            WhatsApp
            <input
              type="tel"
              name="whatsapp"
              placeholder="+55 00 00000-0000"
              className="border border-zinc-300 bg-white px-4 py-3 text-base font-normal text-black outline-none transition focus:border-black"
              required
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-black">
            Mensagem
            <textarea
              name="message"
              rows="6"
              placeholder="Conte-nos sobre o seu negocio e o tipo de solucao que voce procura."
              className="resize-none border border-zinc-300 bg-white px-4 py-3 text-base font-normal text-black outline-none transition focus:border-black"
              required
            />
          </label>

          <button
            type="submit"
            className="btn-hover-effect inline-flex justify-center bg-black px-8 py-4 text-base font-button uppercase tracking-[0.18em] text-white transition-all"
          >
            {content.primaryAction}
          </button>
        </form>
      </div>
    </section>
  );
}
