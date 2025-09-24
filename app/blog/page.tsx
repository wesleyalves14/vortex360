import GlassHeader from "@/components/ui/GlassHeader";

export default function BlogPage() {
  return (
    <main className="relative flex flex-col">
      <GlassHeader />
      <section className="min-h-[80vh] md:min-h-screen bg-transparent text-white flex items-center justify-center">
        <p className="text-center text-xl md:text-2xl tracking-wide">Em construção</p>
      </section>
    </main>
  );
}
