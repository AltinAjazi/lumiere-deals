import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUMIÈRE | Expensive taste. Disciplined spending.",
  description:
    "LUMIÈRE curates polished deals selected for style, value, trust, and no-regret shopping.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
