// src/data/servicos.ts
export type ServicoSlug =
  | "trafego"
  | "infoprodutos"
  | "branding"
  | "copy"
  | "funis"
  | "consultoria"
  | "dev";

export const GALERIAS: Record<ServicoSlug, string[]> = {
  trafego: [
    "/servicos/trafego/1.svg",
    "/servicos/trafego/2.svg",
    "/servicos/trafego/3.svg",
  ],
  infoprodutos: [
    "/servicos/infoprodutos/1.svg",
    "/servicos/infoprodutos/2.svg",
    "/servicos/infoprodutos/3.svg",
  ],
  branding: [
    "/servicos/branding/1.svg",
    "/servicos/branding/2.svg",
    "/servicos/branding/3.svg",
  ],
  copy: [
    "/servicos/copy/1.svg",
    "/servicos/copy/2.svg",
    "/servicos/copy/3.svg",
  ],
  funis: [
    "/servicos/funis/1.svg",
    "/servicos/funis/2.svg",
    "/servicos/funis/3.svg",
  ],
  consultoria: [
    "/servicos/consultoria/1.svg",
    "/servicos/consultoria/2.svg",
    "/servicos/consultoria/3.svg",
  ],
  dev: [
    "/servicos/dev/1.svg",
    "/servicos/dev/2.svg",
    "/servicos/dev/3.svg",
  ],
};

