"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeadInput, leadSchema, faturamentos, segmentos, formatBRPhone } from "@/lib/lead-schema";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      nome: "",
      email: "",
      empresa: "",
      telefone: "",
      faturamento: faturamentos[0],
      segmento: segmentos[0],
    },
  });

  async function onSubmit(values: LeadInput) {
    setLoading(true);
    setOk(null);
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setOk(r.ok);
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  const baseInput = "w-full rounded-xl bg-white/[0.06] px-4 py-3 outline-none border border-white/10 focus:border-white/30";

  return (
    <div className="w-full">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register("nome")} placeholder="Qual é o seu nome e sobrenome?" className={baseInput} />
            {errors.nome && <p className="text-rose-400 text-sm">{errors.nome.message}</p>}

            <input {...register("email")} type="email" placeholder="Qual seu e-mail corporativo?" className={baseInput} />
            {errors.email && <p className="text-rose-400 text-sm">{errors.email.message}</p>}

            <input {...register("empresa")} placeholder="Qual o nome da sua empresa?" className={baseInput} />
            {errors.empresa && <p className="text-rose-400 text-sm">{errors.empresa.message}</p>}

            <div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 select-none">🇧🇷</span>
                <input
                  {...register("telefone")}
                  inputMode="tel"
                  placeholder="Qual seu telefone?"
                  onChange={(e) => setValue("telefone", formatBRPhone(e.target.value), { shouldValidate: true })}
                  className={`${baseInput} pl-10`}
                />
              </div>
              {errors.telefone && <p className="text-rose-400 text-sm">{errors.telefone.message}</p>}
            </div>

            <select {...register("faturamento")} className={baseInput}>
              {faturamentos.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            {errors.faturamento && <p className="text-rose-400 text-sm">{errors.faturamento.message}</p>}

            <select {...register("segmento")} className={baseInput}>
              {segmentos.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.segmento && <p className="text-rose-400 text-sm">{errors.segmento.message}</p>}

            <button disabled={loading} className="w-full rounded-xl bg-emerald-500/90 hover:bg-emerald-500 text-white font-semibold py-3 transition disabled:opacity-60">
              {loading ? "Enviando..." : "Receber mais informações"}
            </button>

            {ok === true && <p className="text-emerald-400 text-sm">Enviado! (modo demonstração)</p>}
            {ok === false && <p className="text-rose-400 text-sm">Não foi possível enviar. Tente novamente.</p>}
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="text-2xl font-bold mb-2">1. Preencha o formulário</div>
            <p className="text-white/70">
              Envie suas informações de contato. <span className="font-semibold">Todos os seus dados estarão seguros</span>.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="text-2xl font-bold mb-2">2. Receba uma ligação</div>
            <p className="text-white/70">
              Em até 12 horas úteis entraremos em contato para o próximo passo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
