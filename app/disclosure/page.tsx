import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

const paragraphs = [
  "LUMIÈRE may earn a commission when you click retailer links and make a purchase. This does not change your price.",
  "Some retailer links, product links, deal links, banners, or checkout links on LUMIÈRE may be affiliate links. If you buy something after clicking one of those links, LUMIÈRE may receive a referral commission, bounty, or other compensation from the retailer or affiliate network.",
  "LUMIÈRE is built to help shoppers find polished, useful, worth-it finds across major retailers. Compensation may influence which retailers or products are available on the site, but recommendations are curated based on style, value, discount quality, store trust, usefulness, and no-regret potential.",
  "Prices, promotions, inventory, shipping offers, and coupon terms can change quickly. Always confirm the final price, discount, taxes, fees, availability, and return policy on the retailer website before buying.",
  "LUMIÈRE is not owned by or officially endorsed by the retailers shown on the site unless specifically stated. Retailer names and logos belong to their respective owners.",
];

export const metadata: Metadata = {
  title: "Affiliate Disclosure | LUMIÈRE",
  description: "How LUMIÈRE uses affiliate links and commissions.",
};

export default function DisclosurePage() {
  return (
    <LegalPage eyebrow="Trust & transparency" title="Affiliate Disclosure">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </LegalPage>
  );
}
