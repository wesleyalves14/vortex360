import "./globals.css";
import GlassHeader from "@/components/ui/GlassHeader";
import GeometricSiteBG from "@/components/ui/geometric-site-bg";

export const metadata = {
  title: "VORTEX360",
  description: "Estrutura inicial limpa e estável",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="relative bg-transparent text-white font-sans antialiased">
        <GeometricSiteBG />
        <GlassHeader />
        <div
          aria-hidden
          className="sm:hidden h-[calc(var(--vortex-header-reach,var(--vortex-header-h,72px))+12px)]"
        />
        <div className="relative z-10">
          {children}
          <footer className="mt-16 border-t border-gray-800 py-6 text-center text-sm text-gray-400 mx-auto max-w-5xl px-6">
            2025 © VORTEX360. Todos os direitos reservados.{" "}
            <a href="#" className="hover:underline">
              Políticas de privacidade
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
