"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/3d-testimonials";
import { cn } from "@/lib/utils";

const depoimentos = [
  { name: "Maria Oliveira",  username: "@maria.oli",   body: "A VORTEX360 elevou nossa presença digital. O atendimento foi impecável!", img: "https://randomuser.me/api/portraits/women/12.jpg", country: "🇧🇷 Brasil" },
  { name: "João Pereira",    username: "@joao.tech",   body: "Landing page rápida e conversão subiu já na primeira semana.",           img: "https://randomuser.me/api/portraits/men/23.jpg",   country: "🇵🇹 Portugal" },
  { name: "Ana Bezerra",     username: "@ana.bzr",     body: "Integrações perfeitas com pagamentos e automações.",                     img: "https://randomuser.me/api/portraits/women/68.jpg", country: "🇧🇷 Brasil" },
  { name: "Carlos Lima",     username: "@carlos.lm",   body: "Suporte ágil e execução de alto nível. Recomendo!",                      img: "https://randomuser.me/api/portraits/men/61.jpg",   country: "🇪🇸 Espanha" },
  { name: "Fernanda Souza",  username: "@fersz",       body: "Visual incrível e performance excelente no mobile.",                     img: "https://randomuser.me/api/portraits/women/45.jpg", country: "🇨🇦 Canadá" },
  { name: "Rafael Santos",   username: "@rafa.snts",    body: "Processo simples, claro e com resultado real.",                          img: "https://randomuser.me/api/portraits/men/33.jpg",   country: "🇺🇸 EUA" },
  { name: "Luiza Martins",   username: "@luizam",       body: "Os testes A/B ajudaram a melhorar muito as vendas.",                     img: "https://randomuser.me/api/portraits/women/32.jpg", country: "🇦🇷 Argentina" },
  { name: "Mateus Rocha",    username: "@m_rocha",      body: "Entrega no prazo e código limpo. Excelente parceria.",                   img: "https://randomuser.me/api/portraits/men/22.jpg",   country: "🇫🇷 França" },
  { name: "Haruto Sato",     username: "@haruto",       body: "Ótima performance no mobile e SEO bem ajustado.",                        img: "https://randomuser.me/api/portraits/men/85.jpg",   country: "🇯🇵 Japão" },
];

function DepoimentoCard({ img, name, username, body, country }: (typeof depoimentos)[number]) {
  return (
    <Card className="w-[220px] bg-background/40 backdrop-blur border-border/50">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={username} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white flex items-center gap-1">
              {name} <span className="text-xs">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-white/70">{username}</p>
          </div>
        </div>
        <blockquote lang="pt-BR" className="mt-3 text-sm text-white/80">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="parceiros" aria-label="A voz dos nossos parceiros" className="relative bg-transparent py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <h2 className="w-full text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-4 md:mb-6 lg:mb-8">
          A voz dos nossos parceiros
        </h2>

        <div className="relative border border-border/40 rounded-lg flex h-[28rem] w-full max-w-[1100px] overflow-hidden gap-x-2 sm:gap-x-3 lg:gap-x-4 [perspective:300px] bg-transparent">
          <div
            className="flex flex-row items-center gap-x-3 sm:gap-x-4 lg:gap-x-5 will-change-transform"
            style={{
              transform:
                "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
            }}
          >
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:135s]">
              {depoimentos.map((r) => <DepoimentoCard key={r.username} {...r} />)}
            </Marquee>
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:135s]">
              {depoimentos.map((r) => <DepoimentoCard key={r.username} {...r} />)}
            </Marquee>
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:135s]">
              {depoimentos.map((r) => <DepoimentoCard key={r.username} {...r} />)}
            </Marquee>
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:135s]">
              {depoimentos.map((r) => <DepoimentoCard key={r.username} {...r} />)}
            </Marquee>

            {/* Fades leves para leitura, sem escurecer o BG global */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background/0 to-background/20"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/0 to-background/20"></div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/0 to-background/10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background/0 to-background/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
