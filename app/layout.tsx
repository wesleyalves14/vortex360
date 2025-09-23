import "./globals.css";
export const metadata = { title: "VORTEX360", description: "Estrutura inicial limpa e estável" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
