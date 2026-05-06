import Link from "next/link";
import type { ReactNode } from "react";

const NAVY = "#001F3F";
const GOLD = "#F7E7CE";
const STONE = "#D1CEC5";
const CHARCOAL = "#1E1E1E";
const BLUSH = "#E8C7C0";

export const legalLinks = [
  { href: "/disclosure", label: "Affiliate Disclosure" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main style={{ backgroundColor: "#F4F1EC", color: CHARCOAL }}>
      <header className="border-b px-6 py-5" style={{ backgroundColor: NAVY, borderColor: GOLD }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-serif text-3xl font-semibold text-white">
            LUMIÈRE
          </Link>
          <nav className="flex flex-wrap gap-4 text-sm font-semibold" style={{ color: GOLD }}>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl md:p-12">
          <p className="text-sm uppercase tracking-[0.3em]" style={{ color: NAVY }}>
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            Expensive taste. Disciplined spending. Deals worth buying.
          </p>
          <div className="mt-10 space-y-6 text-base leading-8 text-stone-700">
            {children}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-12 text-sm text-stone-600">
        <div className="rounded-[2rem] border bg-white p-6" style={{ borderColor: STONE }}>
          <p className="font-serif text-2xl font-semibold" style={{ color: NAVY }}>
            LUMIÈRE
          </p>
          <p className="mt-2">Questions: altinajazi1@gmail.com</p>
          <div className="mt-4 h-2 rounded-full" style={{ background: `linear-gradient(90deg, ${GOLD}, ${BLUSH})` }} />
        </div>
      </footer>
    </main>
  );
}
