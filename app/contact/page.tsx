import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Contact LUMIÈRE",
  description: "Contact LUMIÈRE for visitor, customer, retailer, and affiliate program questions.",
};

export default function ContactPage() {
  return (
    <LegalPage eyebrow="Get in touch" title="Contact LUMIÈRE">
      <p>
        For visitors and customers: email LUMIÈRE with questions about the site,
        private deal alerts, saved preferences, or a product link shown on the site.
      </p>
      <p>
        For retailers and affiliate programs: email LUMIÈRE about approved affiliate feeds,
        product data, brand inclusion, commission programs, or partnership questions.
      </p>
      <div className="rounded-[2rem] border bg-white p-6 shadow-lg" style={{ borderColor: "#D1CEC5" }}>
        <p className="text-sm uppercase tracking-[0.25em]" style={{ color: "#001F3F" }}>
          Email
        </p>
        <a
          href="mailto:altinajazi1@gmail.com"
          className="mt-3 block font-serif text-3xl font-semibold hover:underline"
          style={{ color: "#001F3F" }}
        >
          altinajazi1@gmail.com
        </a>
      </div>
    </LegalPage>
  );
}
