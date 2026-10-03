import { Trophy, Award, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const contributors = [
  { name: "Marie L.", xp: 1250, badge: "Diamant", color: "from-blue-400 to-blue-600" },
  { name: "Thomas D.", xp: 980, badge: "Platine", color: "from-slate-300 to-slate-500" },
  { name: "Sophie M.", xp: 720, badge: "Platine", color: "from-slate-300 to-slate-500" },
];

export function Gamification() {
  return (
    <section className="bg-[#F5EFE6] py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="vintage-badge mb-3 inline-block">
            🏆 Communauté active 🏆
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2A2A2A] sm:text-4xl">
            Avis & <span className="text-[#B8543F] italic">Gamification</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Colonne Avis & Gamification */}
          <div className="rounded-2xl border-2 border-[#2A2A2A] bg-white p-8 shadow-[6px_6px_0_#2A2A2A]">
            <h3 className="mb-6 font-serif text-2xl font-bold text-[#2A2A2A]">
              Gagnez des Points & Badges
            </h3>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A961] shadow-[2px_2px_0_#2A2A2A]">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#2A2A2A]">Gagnez des Points & Badges</div>
                  <div className="text-sm text-[#6B6B6B]">Bronze → Argent → Or → Platine → Diamant</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8543F] shadow-[2px_2px_0_#2A2A2A]">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#2A2A2A]">Donner un Avis</div>
                  <div className="text-sm text-[#6B6B6B]">+40 XP par avis avec photo validé</div>
                </div>
              </li>
            </ul>
            <Button className="w-full bg-[#B8543F] hover:bg-[#9A4332] text-white shadow-[3px_3px_0_#2A2A2A]">
              Capter mes points
            </Button>
          </div>

          {/* Colonne Top Contributeurs */}
          <div className="rounded-2xl border-2 border-[#2A2A2A] bg-white p-8 shadow-[6px_6px_0_#2A2A2A]">
            <h3 className="mb-6 flex items-center gap-2 font-serif text-2xl font-bold text-[#2A2A2A]">
              <Trophy className="h-6 w-6 text-[#C9A961]" />
              Top Contributeurs
            </h3>
            <ul className="space-y-4">
              {contributors.map((contributor, index) => (
                <li
                  key={contributor.name}
                  className="flex items-center gap-4 rounded-xl border border-[#D9CFC0] bg-[#F5EFE6] p-4"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${contributor.color} shadow-[2px_2px_0_#2A2A2A]`}>
                    {index === 0 ? (
                      <Crown className="h-6 w-6 text-white" />
                    ) : (
                      <Trophy className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-lg font-bold text-[#2A2A2A]">
                        #{index + 1} {contributor.name}
                      </span>
                      <span className="rounded-full bg-[#C9A961]/20 px-2 py-0.5 text-xs font-semibold text-[#A8893F]">
                        {contributor.badge}
                      </span>
                    </div>
                    <div className="text-sm text-[#6B6B6B]">
                      {contributor.xp} XP ce trimestre
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
