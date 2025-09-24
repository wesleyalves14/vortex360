import "./globals.css";
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
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
