import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";

// Toggle para enviar e-mail no futuro
// Deixe false por enquanto.
const ENABLE_EMAIL = process.env.ENABLE_EMAIL === "true";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = leadSchema.parse(body);

    // Modo "mock" atual: apenas loga e responde ok.
    if (!ENABLE_EMAIL) {
      console.log("[Lead recebido - MOCK]", data);
      return NextResponse.json({ ok: true, mocked: true });
    }

    // --- FUTURO (quando tiver domínio/SMTP):
    // 1) npm i nodemailer
    // 2) descomentar o bloco abaixo
    // 3) configurar variáveis no .env.local
    /*
    const nodemailer = (await import("nodemailer")).default;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
    });
    await transporter.sendMail({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      subject: `Novo lead - ${data.nome} | ${data.empresa}`,
      text: JSON.stringify(data, null, 2),
    });
    */

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err?.message ?? "Erro" }, { status: 400 });
  }
}
