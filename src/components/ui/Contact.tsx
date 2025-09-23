import { Button } from "./Button";

export function Contact() {
  return (
    <section className="relative bg-[#05070B] py-16 sm:py-20 lg:py-24" id="diagnostico">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            Solicite um Diagnóstico Gratuito
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#00E5FF]/50 bg-[#08101A]/70 p-6 shadow-[0_0_30px_rgba(0,229,255,0.15)] sm:p-8">
          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-xs font-medium text-white/75">Nome</label>
              <input
                type="text"
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00E5FF] focus:outline-none"
                placeholder="Seu nome"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-xs font-medium text-white/75">E-mail</label>
              <input
                type="email"
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00E5FF] focus:outline-none"
                placeholder="voce@empresa.com"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-xs font-medium text-white/75">Telefone</label>
              <input
                type="tel"
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00E5FF] focus:outline-none"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-xs font-medium text-white/75">Empresa</label>
              <input
                type="text"
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00E5FF] focus:outline-none"
                placeholder="Nome da empresa"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-white/75">Mensagem</label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00E5FF] focus:outline-none"
                placeholder="Conte rapidamente seu desafio atual"
              />
            </div>
            <div className="sm:col-span-2 mt-2">
              <Button type="submit" className="w-full sm:w-auto">Enviar Mensagem</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
