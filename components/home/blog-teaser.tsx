import { Calendar, ArrowRight, Shirt, Leaf, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const articles = [
  {
    slug: "reconnaitre-piece-vintage-qualite",
    category: "Guide Vintage",
    icon: Shirt,
    color: "bg-[#B8543F]",
    title: "Comment reconnaître une vraie pièce vintage de qualité ?",
    excerpt: "Étiquettes, coutures, matières... Apprenez à repérer les vraies pépites des années 70, 80 et 90 lors de votre prochaine visite en friperie.",
    date: "12 Oct 2026",
  },
  {
    slug: "mode-durable-seconde-main-avenir",
    category: "Mode Durable",
    icon: Leaf,
    color: "bg-[#6B7F5E]",
    title: "Mode durable : Pourquoi la seconde main est l'avenir",
    excerpt: "L'impact de la fast-fashion est colossal. Découvrez comment l'achat en friperie réduit votre empreinte carbone tout en affirmant votre style.",
    date: "05 Oct 2026",
  },
  {
    slug: "guide-ultime-chine-friperie",
    category: "Astuces Chine",
    icon: Sparkles,
    color: "bg-[#C9A961]",
    title: "Le guide ultime de la chine : Trouver des pépites",
    excerpt: "Nos meilleurs conseils pour fouiller les portants, négocier et dénicher des pièces de créateurs à prix cassés dans les friperies françaises.",
    date: "28 Sep 2026",
  },
];

export function BlogTeaser() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="vintage-badge mb-3 inline-block">
              📚 Le Journal
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2A2A2A] sm:text-4xl">
              Derniers articles <span className="text-[#B8543F] italic">du Blog</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white shadow-[3px_3px_0_#2A2A2A] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
            <Link href="/blog">
              Voir tous les articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card
              key={article.slug}
              className="group flex flex-col border-2 border-[#2A2A2A] bg-[#F5EFE6] shadow-[4px_4px_0_#2A2A2A] transition hover:shadow-[6px_6px_0_#2A2A2A] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <div className="relative h-48 w-full overflow-hidden border-b-2 border-[#2A2A2A] bg-[#E8DFD0]">
                {/* Placeholder visuel stylisé au lieu d'une image externe pour éviter les liens brisés */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <article.icon className={`h-16 w-16 ${article.color.replace("bg-", "text-")} opacity-80`} />
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${article.color}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="mb-2 flex items-center gap-2 text-xs text-[#6B6B6B]">
                  <Calendar className="h-3 w-3" />
                  {article.date}
                </div>
                <CardTitle className="font-serif text-xl font-bold text-[#2A2A2A] leading-tight group-hover:text-[#B8543F] transition-colors">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex flex-1 flex-col justify-between">
                <p className="mb-4 text-sm text-[#4A4A4A] line-clamp-3">
                  {article.excerpt}
                </p>
                <Link 
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[#B8543F] hover:text-[#9A4332] transition-colors"
                >
                  Lire l'article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
