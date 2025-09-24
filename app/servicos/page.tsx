import type { Metadata } from "next";
import ServicosPageContent from "@/components/sections/ServicosPageContent";

export const metadata: Metadata = {
  title: "Serviços — VORTEX360",
};

export default function ServicosPage() {
  return <ServicosPageContent />;
}
