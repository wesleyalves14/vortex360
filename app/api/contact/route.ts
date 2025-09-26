import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export const runtime = 'nodejs'; // Nodemailer precisa de runtime Node

const ContactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(5, 'Mensagem muito curta'),
});

type EnvConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  to: string;
};

function ensureEnv(): EnvConfig {
  const env = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    to: process.env.MAIL_TO,
  } as const;

  const missing = Object.entries(env)
    .filter(([key, value]) => !value && key !== 'to')
    .map(([key]) => key.toUpperCase());

  if (missing.length) {
    throw new Error(`Configuração SMTP ausente: ${missing.join(', ')}`);
  }

  const portNumber = Number(env.port ?? 587);
  if (Number.isNaN(portNumber)) {
    throw new Error('SMTP_PORT inválida');
  }

  return {
    host: env.host!,
    port: portNumber,
    secure: (env.secure ?? 'false') === 'true',
    user: env.user!,
    pass: env.pass!,
    to: env.to || env.user!,
  };
}

export async function POST(req: Request) {
  let json: unknown;

  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Payload inválido.' });
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    const issue = parsed.error.issues[0]?.message ?? 'Dados inválidos.';
    return NextResponse.json({ ok: false, error: issue });
  }

  const data = parsed.data;

  try {
    const env = ensureEnv();

    const transporter = nodemailer.createTransport({
      host: env.host,
      port: env.port,
      secure: env.secure,
      auth: { user: env.user, pass: env.pass },
    });

    const subject = `Novo contato — ${data.name}`;
    const html = `
      <div style="font-family:system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height:1.6">
        <h2>Nova mensagem pelo site</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>E-mail:</strong> ${data.email}</p>
        <p><strong>Mensagem:</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
        <hr/>
        <p style="font-size:12px;color:#666">Enviado automaticamente pelo site vortex360.com.br</p>
      </div>
    `;

    await transporter.sendMail({
      from: env.user,
      to: env.to,
      replyTo: `${data.name} <${data.email}>`,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro ao enviar a mensagem.';
    return NextResponse.json({ ok: false, error: message });
  }
}
