import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

const paragraphs = [
  "LUMIÈRE may collect the email address you enter for private deal alerts, membership interest, or subscription checkout.",
  "LUMIÈRE may store saved deals, preference settings, and member-access status in your browser’s local storage so the experience works when you return.",
  "If payments are added later, payments may be processed by Stripe. LUMIÈRE does not store full credit card numbers. Stripe may collect payment details, billing information, fraud-prevention signals, and transaction records according to Stripe’s own policies.",
  "When you click an affiliate or retailer link, you may leave LUMIÈRE and visit a third-party site. Retailers and affiliate networks may use cookies, tracking links, or similar technologies to measure referrals, purchases, commissions, and campaign performance.",
  "LUMIÈRE may use information to provide the shopping experience, improve deal selection, manage saved preferences, send private deal alerts if requested, and improve site performance.",
  "LUMIÈRE may use services such as hosting providers, Supabase, Stripe if added later, affiliate networks, email providers, and retailer websites. Their privacy practices are governed by their own policies.",
  "Users can clear saved local app data from browser settings, avoid clicking affiliate links, or contact LUMIÈRE for questions.",
  "Contact: altinajazi1@gmail.com",
];

export const metadata: Metadata = {
  title: "Privacy Policy | LUMIÈRE",
  description: "How LUMIÈRE handles email, local storage, affiliate links, and third-party services.",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacy & data" title="Privacy Policy">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </LegalPage>
  );
}
