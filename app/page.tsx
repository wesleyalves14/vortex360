import Pilares from "../components/Pilares";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">VORTEX360</h1>
          <p className="text-gray-600">Estrutura inicial limpa e estável</p>
        </div>
      </section>

      <Pilares />
    </main>
  );
}
