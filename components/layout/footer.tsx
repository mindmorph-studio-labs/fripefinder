import Link from "next/link";
import { Shirt } from "lucide-react";

// Icônes SVG inline pour les réseaux sociaux (0 dépendance, 100% fiable)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-[#2A2A2A] bg-[#2A2A2A] text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#B8543F] shadow-[2px_2px_0_#C9A961]">
                <Shirt className="h-5 w-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold">
                Fripe<span className="text-[#C9A961]">Finder</span>
              </span>
            </Link>
            <p className="mb-4 max-w-sm text-sm text-[#D9CFC0]">
              L'annuaire de référence des friperies françaises. 
              Vintage, seconde main, créateurs et pièces uniques.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A4A4A] transition hover:bg-[#B8543F]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A4A4A] transition hover:bg-[#B8543F]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A4A4A] transition hover:bg-[#B8543F]"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A4A4A] transition hover:bg-[#B8543F]"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-bold text-[#C9A961]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/annuaire" className="text-[#D9CFC0] hover:text-white transition">
                  Annuaire
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#D9CFC0] hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pro/inscription" className="text-[#D9CFC0] hover:text-white transition">
                  Espace Pro
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#D9CFC0] hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-bold text-[#C9A961]">
              Légal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/mentions" className="text-[#D9CFC0] hover:text-white transition">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/legal/cgu" className="text-[#D9CFC0] hover:text-white transition">
                  CGU / CGV
                </Link>
              </li>
              <li>
                <Link href="/legal/confidentialite" className="text-[#D9CFC0] hover:text-white transition">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#4A4A4A] pt-6 text-center text-xs text-[#D9CFC0]">
          © 2026 FripeFinder. Tous droits réservés. ✦ Fait avec ❤️ en France
        </div>
      </div>
    </footer>
  );
}

