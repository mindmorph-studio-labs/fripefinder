import { Search, Star, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const filters = [
  { icon: Search, label: "Prix", href: "/annuaire?tri=prix" },
  { icon: Star, label: "Avis", href: "/annuaire?tri=avis" },
  { icon: Calendar, label: "Disponibilité", href: "/annuaire?tri=dispo" },
  { icon: MapPin, label: "Distance", href: "/annuaire?tri=distance" },
];

export function QuickFilters() {
  return (
    <section className="border-y border-[#D9CFC0] bg-white py-4">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {filters.map((filter) => (
            <Link
              key={filter.label}
              href={filter.href}
              className="group flex items-center gap-2 text-sm font-medium text-[#2A2A2A] transition hover:text-[#B8543F]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5EFE6] transition group-hover:bg-[#B8543F]/10">
                <filter.icon className="h-4 w-4" />
              </div>
              <span>{filter.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

