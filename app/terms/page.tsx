import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

const terms = [
  "LUMIÈRE provides curated shopping information for discovery and convenience. LUMIÈRE does not provide financial advice, budgeting advice, investment advice, or personal shopping guarantees.",
  "Product names, prices, discounts, promotions, inventory, shipping offers, coupon terms, ratings, and product details may change at any time.",
  "Before buying, users must verify the final price, taxes, fees, discount terms, shipping terms, availability, return policy, and any other purchase conditions directly with the retailer.",
  "Some retailer links, product links, deal links, banners, or checkout links may be affiliate links. LUMIÈRE may earn commissions or other compensation from those links.",
  "Retailers, affiliate networks, payment providers, shipping providers, and other linked websites are third parties. LUMIÈRE does not control their websites, products, services, policies, pricing, or business practices.",
  "LUMIÈRE is not responsible for retailer fulfillment, shipping, delivery delays, returns, exchanges, warranties, pricing errors, product descriptions, product quality, product safety, inventory, or product availability.",
  "LUMIÈRE does not guarantee savings, discounts, product suitability, product availability, or that a product will meet a user’s needs or expectations.",
  "Users choose whether to click links, visit retailers, save deals, join alerts, or make purchases. Users use LUMIÈRE at their own discretion.",
];

export const metadata: Metadata = {
  title: "Terms | LUMIÈRE",
  description: "Basic terms for using LUMIÈRE.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Site terms" title="Terms">
      {terms.map((term) => (
        <p key={term}>{term}</p>
      ))}
    </LegalPage>
  );
}
