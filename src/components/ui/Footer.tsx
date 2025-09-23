import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-4 my-6 rounded-2xl bg-black/15 border border-white/10 backdrop-blur-md text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold">Sobre a VORTEX360</h3>
            <p className="mt-3 text-sm text-white/70">
              Crescimento orientado a dados com execução 360°. Estratégia, tecnologia e criatividade trabalhando juntas.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Links úteis</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <Link href="#servicos" className="hover:text-white">Serviços</Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-white">Contato</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Redes sociais</h3>
            <div className="mt-3 flex items-center gap-3">
              <Link href="#" aria-label="Instagram" className="rounded-md p-2 ring-1 ring-white/10 hover:bg-white/5">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="rounded-md p-2 ring-1 ring-white/10 hover:bg-white/5">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Facebook" className="rounded-md p-2 ring-1 ring-white/10 hover:bg-white/5">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/70">
          © 2025 VORTEX360 – Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
