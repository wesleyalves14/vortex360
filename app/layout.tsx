import "./globals.css";
import SiteBackground from "@/components/ui/site-background";

export const metadata = {
  title: "VORTEX360",
  description: "Estrutura inicial limpa e estável",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased bg-transparent text-gray-900">
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
