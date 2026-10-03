import { MapPin, CheckSquare, ClipboardList, BarChart3, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const benefits = [
  { icon: MapPin, label: "Visibilité Locale" },
  { icon: CheckSquare, label: "Leads Qualifiés" },
  { icon: ClipboardList, label: "Devis Intégrés" },
  { icon: BarChart3, label: "Statistiques" },
  { icon: FileCheck, label: "Devis Qualifiés" },
];

export function WhyPros() {
  return (
    <section className="relative overflow-hidden bg-[#2A2A2A] py-16 sm:py-20 text-white vintage-grain">
      {/* Décorations */}
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#B8543F]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#6B7F5E]/20 blur-3xl" />

      <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#B8543F]/20 border border-[#B8543F] px-4 py-1.5 text-sm font-semibold text-[#B8543F] mb-3">
             Pour les professionnels
          </span>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Pourquoi les Pros <span className="text-[#C9A961] italic">Nous Choisissent</span>
          </h2>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="flex items-center gap-4 rounded-xl border-2 border-[#4A4A4A] bg-[#2A2A2A]/50 backdrop-blur p-5 transition hover:border-[#B8543F]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#B8543F] shadow-[2px_2px_0_#C9A961]">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif text-lg font-semibold">{benefit.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#B8543F] hover:bg-[#9A4332] text-white text-lg px-8 py-6 shadow-[4px_4px_0_#C9A961] hover:shadow-[6px_6px_0_#C9A961] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            <Link href="/pro/inscription">Lister mon établissement →</Link>
          </Button>
          <p className="mt-4 text-sm text-[#D9CFC0]">
            ✦ À partir de 14,90€/mois • Sans engagement 
          </p>
        </div>
      </div>
    </section>
  );
}
