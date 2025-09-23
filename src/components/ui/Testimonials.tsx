import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  comment: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ana Ribeiro",
    role: "CMO, LumenTech",
    comment:
      "A VORTEX360 destravou nosso crescimento com uma estratégia clara e execução impecável.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Marcos Silva",
    role: "Founder, Casa Verde",
    comment:
      "Em 3 meses reduzimos o CAC e aumentamos as vendas com funis bem estruturados.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Beatriz Nunes",
    role: "Head de Growth, Nexa",
    comment:
      "Time extremamente competente. Métricas claras, relatórios e melhoria contínua.",
    color: "from-teal-400 to-cyan-500",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-[#070A11] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            O que dizem sobre a VORTEX360
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="flex items-center gap-3">
                <div
                  aria-hidden
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-black font-bold`}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/70">{t.role}</div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[#FFD166]" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-white/80">“{t.comment}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
