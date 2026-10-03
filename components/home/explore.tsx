import { Camera, Mic, MapPin, Shirt, Gem, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  { icon: Shirt, name: "Vintage", href: "/annuaire?categorie=vintage", color: "bg-[#B8543F]" },
  { icon: Gem, name: "Luxe & Créateurs", href: "/annuaire?categorie=luxe", color: "bg-[#6B2D2D]" },
  { icon: Sparkles, name: "Y2K & Streetwear", href: "/annuaire?categorie=y2k", color: "bg-[#6B7F5E]" },
  { icon: Camera, name: "Seconde Main", href: "/annuaire?categorie=seconde-main", color: "bg-[#C9A961]" },
];

const cities = [
  { name: "Paris", href: "/ile-de-france/paris/paris", count: "247 friperies" },
  { name: "Lyon", href: "/auvergne-rhone-alpes/rhone/lyon", count: "89 friperies" },
  { name: "Bordeaux", href: "/nouvelle-aquitaine/gironde/bordeaux", count: "64 friperies" },
  { name: "Toulouse", href: "/occitanie/haute-garonne/toulouse", count: "52 friperies" },
];

export function Explore() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="vintage-badge mb-3 inline-block">
            🗺️ Exploration 🗺️
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2A2A2A] sm:text-4xl">
            Explorer par <span className="text-[#B8543F] italic">Catégories & Villes</span>
          </h2>
        </div>

        {/* Catégories */}
        <div className="mb-8">
          <h3 className="mb-4 font-serif text-xl font-bold text-[#2A2A2A]">
            Par style
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group flex items-center gap-3 rounded-xl border-2 border-[#2A2A2A] bg-[#F5EFE6] p-5 shadow-[3px_3px_0_#2A2A2A] transition hover:shadow-[5px_5px_0_#2A2A2A] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${cat.color} shadow-[2px_2px_0_#2A2A2A]`}>
                  <cat.icon className="h-6 w-6 text-white" />
                </div>
                <span className="font-serif text-lg font-bold text-[#2A2A2A]">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Villes */}
        <div className="mb-10">
          <h3 className="mb-4 font-serif text-xl font-bold text-[#2A2A2A]">
            Par ville
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="group flex items-center justify-between rounded-xl border-2 border-[#2A2A2A] bg-[#F5EFE6] p-5 shadow-[3px_3px_0_#2A2A2A] transition hover:shadow-[5px_5px_0_#2A2A2A] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-[#B8543F]" />
                  <span className="font-serif text-lg font-bold text-[#2A2A2A]">
                    {city.name}
                  </span>
                </div>
                <span className="text-xs text-[#6B6B6B]">{city.count}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#B8543F] hover:bg-[#9A4332] text-white text-lg px-8 py-6 shadow-[4px_4px_0_#2A2A2A] hover:shadow-[6px_6px_0_#2A2A2A] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            <Link href="/annuaire">Explorer l'Annuaire →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

