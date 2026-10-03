import { Sliders, BadgeCheck, FileText, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Sliders,
    title: "Filtres Intelligents",
    description: "Trouvez exactement ce que vous cherchez",
    color: "bg-[#B8543F]",
  },
  {
    icon: BadgeCheck,
    title: "Avis Vérifiés",
    description: "Des retours clients authentiques",
    color: "bg-[#6B7F5E]",
  },
  {
    icon: FileText,
    title: "Devis Rapides",
    description: "Recevez des propositions en quelques clics",
    color: "bg-[#C9A961]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Direct",
    description: "Contactez les pros instantanément",
    color: "bg-[#25D366]",
  },
];

export function Features() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="vintage-badge mb-3 inline-block">
            ✦ Nos atouts ✦
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2A2A2A] sm:text-4xl">
            Fonctionnalités de <span className="text-[#B8543F] italic">l'Annuaire</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border-2 border-[#2A2A2A] bg-[#F5EFE6] p-6 text-center shadow-[4px_4px_0_#2A2A2A] transition hover:shadow-[6px_6px_0_#2A2A2A] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${feature.color} shadow-[3px_3px_0_#2A2A2A]`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-[#2A2A2A]">
                {feature.title}
              </h3>
              <p className="text-sm text-[#4A4A4A]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
