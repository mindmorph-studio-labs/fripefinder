import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Shirt } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D9CFC0] bg-[#F5EFE6]/95 backdrop-blur-md">
      <div className="container mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#B8543F] shadow-[3px_3px_0_#2A2A2A]">
            <Shirt className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold text-[#2A2A2A]">
              Fripe<span className="text-[#B8543F]">Finder</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#6B6B6B]">
              depuis 2026
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/annuaire"
            className="text-sm font-medium text-[#2A2A2A] transition hover:text-[#B8543F]"
          >
            Trouver une friperie
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-[#2A2A2A] transition hover:text-[#B8543F]"
          >
            Blog
          </Link>
          <Link
            href="/connexion"
            className="text-sm font-medium text-[#2A2A2A] transition hover:text-[#B8543F]"
          >
            Connexion
          </Link>
        </nav>

        {/* CTA + Menu Mobile */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden sm:flex bg-[#B8543F] hover:bg-[#9A4332] text-white shadow-[3px_3px_0_#2A2A2A] hover:shadow-[4px_4px_0_#2A2A2A] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
          >
            <Link href="/pro/inscription">Lister mon établissement</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#2A2A2A]"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
