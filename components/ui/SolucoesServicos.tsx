"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Megaphone,
  PenTool,
  Gem,
  FlaskConical,
  Rocket,
  UserCheck,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { GALERIAS } from "../../src/data/servicos";

type Service = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  images: string[];   // 3 imagens
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    slug: "trafego",
    title: "Gestão de Tráfego Pago",
    description:
      "Criamos e otimizamos campanhas de alta performance para atrair o público certo e maximizar seu ROI.",
    bullets: [
      "Planejamento, configuração e gerenciamento de campanhas em Google Ads, Meta Ads, Bing, Pinterest e LinkedIn.",
    ],
    images: GALERIAS.trafego,
    icon: Megaphone,
  },
  {
    slug: "copywriting",
    title: "Copywriting e Conteúdo de Vendas",
    description:
      "Textos persuasivos que conectam com sua audiência, quebram objeções e convertem leitores em clientes.",
    bullets: [
      "Criação de textos persuasivos e conteúdos estratégicos focados em conversão.",
    ],
    images: GALERIAS.copy,
    icon: PenTool,
  },
  {
    slug: "branding",
    title: "Branding e Posicionamento de Marca",
    description:
      "Posicionamento e identidade fortes para destacar sua marca e potencializar a presença no mercado.",
    bullets: [
      "Desenvolvimento de identidade e posicionamento de marca para fortalecer a presença no mercado.",
    ],
    images: GALERIAS.branding,
    icon: Gem,
  },
  {
    slug: "funis",
    title: "Criação e Otimização de Funis de Vendas",
    description:
      "Estruturamos jornadas de compra inteligentes para aumentar conversões e LTV.",
    bullets: [
      "Estruturação e melhoria de jornadas de compra para maximizar resultados.",
    ],
    images: GALERIAS.funis,
    icon: FlaskConical,
  },
  {
    slug: "infoprodutos",
    title: "Produção e Lançamento de Infoprodutos",
    description:
      "Do planejamento ao lançamento, cuidamos da estratégia e execução para alavancar seus produtos digitais.",
    bullets: [
      "Desenvolvimento de estratégias de produção, divulgação e lançamento de produtos digitais.",
    ],
    images: GALERIAS.infoprodutos,
    icon: Rocket,
  },
  {
    slug: "consultoria",
    title: "Consultoria e Mentoria em Marketing Digital",
    description:
      "Apoio estratégico para acelerar o crescimento sustentável e a tomada de decisão.",
    bullets: [
      "Orientação especializada para empresas e empreendedores que buscam crescimento sustentável no digital.",
    ],
    images: GALERIAS.consultoria,
    icon: UserCheck,
  },
  {
    slug: "dev",
    title: "Desenvolvimento Web",
    description:
      "Sites rápidos, escaláveis e integrados, do institucional ao e-commerce e micro SaaS.",
    bullets: [
      "Criação de sites institucionais e páginas simples.",
      "Criação e gerenciamento de e-commerces completos.",
      "Integrações via API (Correios, pagamentos, bancos de dados).",
      "Criação de micro SaaS para mobile e desktop.",
    ],
    images: GALERIAS.dev,
    icon: Code2,
  },
];

function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % images.length);
  };
  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] aspect-[4/3] md:aspect-[16/10]">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.img
          key={index}
          src={images[index]}
          alt=""
          className="h-full w-full object-cover"
          initial="enter"
          animate="center"
          exit="exit"
          custom={dir}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "data:image/svg+xml;charset=UTF-8," +
              encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0%' stop-color='#b3c4ff'/><stop offset='100%' stop-color='#ffc0cb'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/></svg>`
              );
          }}
        />
      </AnimatePresence>

      {/* setas */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/25 transition grid place-items-center text-white"
        aria-label="Imagem anterior"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/25 transition grid place-items-center text-white"
        aria-label="Próxima imagem"
      >
        ›
      </button>

      {/* indicadores */}
      <div className="absolute bottom-2 w-full flex justify-center gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white/80" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SolucoesServicos() {
  return (
    <div className="relative z-10 container mx-auto px-6 md:px-8 mt-12 md:mt-16 space-y-16">
      {services.map((s, idx) => {
        const Icon = s.icon;
        const reversed = idx % 2 === 1;
        return (
          <div
            key={s.slug}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Imagem/Galeria */}
            <div className={reversed ? "md:order-2" : ""}>
              <Carousel images={s.images} />
            </div>

            {/* Texto */}
            <div className={reversed ? "md:order-1" : ""}>
              <div className="mb-4">
                <Icon className="h-7 w-7 text-cyan-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-white/75">{s.description}</p>

              <ul className="mt-5 space-y-2.5">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-white/85">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* linha decorativa */}
              <div className="mt-6 h-1 w-40 rounded-full bg-gradient-to-r from-indigo-300/50 via-white/30 to-rose-300/50" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
