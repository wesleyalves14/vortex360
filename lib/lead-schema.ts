import { z } from "zod";

export const faturamentos = [
  "Até 50 mil","De 51 mil à 70 mil","De 71 mil à 100 mil","De 101 mil à 200 mil",
  "De 201 mil à 400 mil","De 401 mil à 1 milhão","De 1 à 4 milhões",
  "De 4 à 16 milhões","De 16 a 40 milhões","Mais de 40 milhões",
] as const;

export const segmentos = [
  "Serviço","Varejo","Indústria","E-commerce","Food Service","Educação",
  "Imobiliária","SAAS","Finanças","Franquia / Franchising","Telecom",
  "Energia Solar","Turismo","Outro",
] as const;

export const leadSchema = z.object({
  nome: z.string().min(3, "Informe seu nome completo"),
  email: z.string().email("E-mail inválido"),
  empresa: z.string().min(2, "Informe o nome da empresa"),
  telefone: z.string().min(10, "Telefone inválido"),
  faturamento: z.enum(faturamentos),
  segmento: z.enum(segmentos),
});

export type LeadInput = z.infer<typeof leadSchema>;

export function formatBRPhone(raw: string) {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 10) {
    return d.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
  }
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
}
