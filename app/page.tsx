import { HeroSearch } from "@/components/home/hero-search";
import { QuickFilters } from "@/components/home/quick-filters";
import { PremiumPartners } from "@/components/home/premium-partners";
import { Features } from "@/components/home/features";
import { WhyPros } from "@/components/home/why-pros";
import { Gamification } from "@/components/home/gamification";
import { BlogTeaser } from "@/components/home/blog-teaser";
import { Explore } from "@/components/home/explore";

export default function HomePage() {
  return (
    <>
      <HeroSearch />
      <QuickFilters />
      <PremiumPartners />
      <Features />
      <WhyPros />
      <Gamification />
      <BlogTeaser /> {/* <-- Nouvelle section ajoutée ici */}
      <Explore />
    </>
  );
}
