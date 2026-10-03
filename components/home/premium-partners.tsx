import { Star, CheckCircle, Shirt, Gem, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const partners = [
  {
    icon: Shirt,
    name: "La Friperie Parisienne",
    badge: "Top Avis",
    badgeColor: "bg-[#C9A961] text-white",
    badgeIcon: Star,
    location: "Paris 11e",
    rating: "4.9 (127 avis)",
    slug: "la-friperie-parisienne",
  },
  {
    icon: Gem,
    name: "L'Atelier Seconde Main",
    badge: "Premium",
    badgeColor: "bg-[#B8543F] text-white",
    badgeIcon: Sparkles,
    location: "Lyon",
    rating: "4.8 (89 avis)",
    slug: "latelier-seconde-main",
  },
  {
    icon: Sparkles,
    name: "Bordeaux Thrift Co.",
    badge: "Vérifié",
    badgeColor: "bg-[#6B7F5E] text-white",
    badgeIcon: CheckCircle,
    location: "Bordeaux",
    rating: "4.7 (64 avis)",
    slug: "bordeaux-thrift-co",
  },
];

export function PremiumPartners() {
  return (
    <section className="bg-[#F5EFE6] py-16 sm:py-20 vintage-grain">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="vintage-badge mb-3 inline-block">
            ★ Sélection du mois ★
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2A2A2A] sm:text-4xl">
            Partenaires <span className="text-[#B8543F] italic">Premium</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[#4A4A4A]">
            Nos friperies coup de cœur, vérifiées et recommandées par la communauté.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <Card
              key={partner.name}
              className="group relative overflow-hidden border-2 border-[#2A2A2A] bg-white shadow-[4px_4px_0_#2A2A2A] transition hover:shadow-[6px_6px_0_#2A2A2A] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <div className="absolute top-0 right-0 bg-[#C9A961] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Premium
              </div>

              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#F5EFE6] border-2 border-[#2A2A2A]">
                    <partner.icon className="h-7 w-7 text-[#B8543F]" />
                  </div>
                  <div className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${partner.badgeColor}`}>
                    <partner.badgeIcon className="h-3 w-3" />
                    {partner.badge}
                  </div>
                </div>

                <h3 className="mb-1 font-serif text-xl font-bold text-[#2A2A2A]">
                  {partner.name}
                </h3>
                <p className="mb-4 text-sm text-[#6B6B6B]">📍 {partner.location}</p>

                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#C9A961] text-[#C9A961]" />
                  ))}
                  <span className="ml-2 text-sm font-medium text-[#2A2A2A]">
                    {partner.rating}
                  </span>
                </div>

                <Button asChild className="w-full bg-[#2A2A2A] hover:bg-[#4A4A4A] text-white shadow-[2px_2px_0_#B8543F]">
                  <Link href={`/ile-de-france/paris/paris/${partner.slug}`}>
                    Voir la fiche
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
