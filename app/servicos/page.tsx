import type { Metadata } from "next";
import ServicosPageContent from "@/components/sections/ServicosPageContent";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";

export const metadata: Metadata = {
  title: "Serviços — VORTEX360",
};

export default function ServicosPage() {
  return (
    <main className="relative flex flex-col">
      <ServicosPageContent />
      <LeadCaptureSection />
    </main>
  );
}
