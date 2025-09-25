import LeadForm from "@/components/forms/LeadForm";

export default function LeadCaptureSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
          Fale com a VORTEX360
        </h2>
        <p className="text-white/70 mb-8 max-w-2xl">
          Preencha o formulário e nosso time de marketing 360° entra em contato.
        </p>
        <LeadForm />
      </div>
    </section>
  );
}
