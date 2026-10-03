"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSearch() {
  const router = useRouter();
  const [ville, setVille] = useState("");
  const [categorie, setCategorie] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (ville) params.set("ville", ville);
    if (categorie) params.set("categorie", categorie);
    router.push(`/annuaire?${params.toString()}`);
  };

  const popularTags = ["Vintage", "Seconde main", "Y2K", "Workwear", "Créateurs"];

  return (
    <section className="relative overflow-hidden bg-[#F5EFE6] py-16 sm:py-24 vintage-grain">
      <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-[#B8543F]/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-[#6B7F5E]/10 blur-3xl" />

      <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="vintage-badge mb-4 inline-block">
            ✦ L'annuaire des friperies ✦
          </span>
          <h1 className="font-serif text-4xl font-bold text-[#2A2A2A] sm:text-5xl md:text-6xl">
            Trouvez votre{" "}
            <span className="text-[#B8543F] italic">pièce unique</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4A4A4A]">
            Des centaines de friperies vérifiées à travers la France.
            Vintage, seconde main, créateurs et trouvailles premium.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="rounded-2xl border-2 border-[#2A2A2A] bg-white p-2 shadow-[6px_6px_0_#2A2A2A] sm:p-3"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-lg bg-[#F5EFE6] px-4 py-3">
              <MapPin className="h-5 w-5 shrink-0 text-[#B8543F]" />
              <Input
                type="text"
                placeholder="Ville (ex: Paris, Lyon, Bordeaux...)"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0 placeholder:text-[#6B6B6B]"
              />
            </div>

            <div className="hidden h-8 w-px bg-[#D9CFC0] sm:block" />

            <div className="flex flex-1 items-center gap-3 rounded-lg bg-[#F5EFE6] px-4 py-3">
              <Tag className="h-5 w-5 shrink-0 text-[#6B7F5E]" />
              <Input
                type="text"
                placeholder="Style (ex: Vintage, Y2K, Luxe, Vrac...)"
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
                className="border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0 placeholder:text-[#6B6B6B]"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#B8543F] hover:bg-[#9A4332] text-white shadow-[3px_3px_0_#2A2A2A] hover:shadow-[4px_4px_0_#2A2A2A] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all sm:w-auto"
            >
              <Search className="mr-2 h-4 w-4" />
              Rechercher
            </Button>
          </div>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm font-medium text-[#6B6B6B]">Populaire :</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setCategorie(tag)}
              className="rounded-full border border-[#D9CFC0] bg-white px-3 py-1 text-sm text-[#2A2A2A] transition hover:border-[#B8543F] hover:text-[#B8543F] hover:bg-[#B8543F]/5"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


