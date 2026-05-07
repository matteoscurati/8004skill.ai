import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — 8004skill",
  description:
    "Privacy policy for 8004skill.ai. How we collect, use, and protect your data. Cookieless analytics, EU-hosted, GDPR compliant.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "May 7, 2026";

export default function PrivacyPage() {
  return (
    <div className="relative bg-[#0D0221] min-h-screen">
      <div className="pt-28 pb-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1
            className="text-3xl sm:text-4xl font-heading font-bold text-vw-pink mb-3"
            style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-foreground/50 font-mono">
            Last updated: {lastUpdated}
          </p>
        </header>

        <article className="space-y-10 text-sm leading-relaxed text-foreground/80">
          <section>
            <p>
              This Privacy Policy explains how <strong>8004skill.ai</strong>{" "}
              (the &ldquo;Site&rdquo;) collects, uses, and protects information when you visit it.
              We are committed to data minimization: we collect as little as possible,
              we never use cookies, and we never share data with advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-vw-cyan mb-4">
              1. Data Controller
            </h2>
            <p>
              The data controller for this Site is:
            </p>
            <ul className="mt-3 space-y-1 font-mono text-xs text-foreground/70">
              <li>Matteo Scurati</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:matteo.scurati@gmail.com"
                  className="text-vw-cyan hover:text-vw-pink transition-colors"
                >
                  matteo.scurati@gmail.com
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-vw-cyan mb-4">
              2. What We Collect
            </h2>
            <p className="mb-3">
              We use <strong>Umami</strong>, a privacy-first, cookieless analytics
              service hosted in the European Union. The following data is collected
              when you visit a page:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-foreground/70">
              <li>Page URL and referrer</li>
              <li>Browser, operating system, and device type</li>
              <li>Screen resolution</li>
              <li>Country (derived from IP, then the IP is discarded)</li>
              <li>
                A daily-rotating session hash (IP + User-Agent + salt) — this hash
                cannot be reversed to identify you and resets every 24 hours
              </li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> collect: names, emails, IP addresses (raw),
              precise location, browsing history outside this Site, or any
              personally identifiable information beyond the pseudonymous session
              hash described above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-vw-cyan mb-4">
              3. Cookies and Local Storage
            </h2>
            <p>
              This Site does <strong>not</strong> use cookies, local storage, or
              session storage for tracking. The analytics service does not write
              anything to your device. No consent banner is shown because there is
              nothing to consent to under the ePrivacy Directive (Art. 5(3) /
              Italian Codice Privacy Art. 122).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-vw-cyan mb-4">
              4. Legal Basis
            </h2>
            <p>
              We process the data above under <strong>legitimate interest</strong>{" "}
              (GDPR Art. 6(1)(f)) for the purpose of understanding aggregate site
              usage, identifying broken pages, and improving the documentation. The
              processing is limited, pseudonymous, and proportionate to that
              purpose. You have the right to object at any time (see Section 7).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-vw-cyan mb-4">
              5. Recipients and Transfers
            </h2>
            <p className="mb-3">Data is processed by:</p>
            <ul className="space-y-3 text-foreground/70">
              <li>
                <strong className="text-foreground/90">Umami Software, Inc.</strong>{" "}
                (United States) — analytics processor. Data is stored exclusively
                in EU data centers (<code className="font-mono text-xs text-vw-cyan">eu.umami.is</code>).
                A Data Processing Agreement under GDPR Art. 28 is in place, and
                transfers to the parent company (if any) rely on Standard
                Contractual Clauses and the EU&ndash;US Data Privacy Framework.
              </li>
              <li>
                <strong className="text-foreground/90">Vercel Inc.</strong>{" "}
                (United States) — hosting provider. Standard server logs (request
                URL, status code, timestamp) are retained per Vercel&apos;s policy.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-vw-cyan mb-4">
              6. Retention
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-2 text-foreground/70">
              <li>Analytics data: <strong>6 months</strong>, then deleted automatically.</li>
              <li>Hosting access logs: per Vercel&apos;s retention policy (typically 30 days).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-vw-cyan mb-4">
              7. Your Rights
            </h2>
            <p className="mb-3">
              Under the GDPR you have the right to access, rectify, erase, restrict,
              port, and object to the processing of your personal data. To exercise
              any of these rights, email{" "}
              <a
                href="mailto:matteo.scurati@gmail.com"
                className="text-vw-cyan hover:text-vw-pink transition-colors"
              >
                matteo.scurati@gmail.com
              </a>
              . Because the data we hold is pseudonymous and aggregated, in
              practice we may be unable to single out your specific records, but we
              will document the request and respond within 30 days.
            </p>
            <p className="mb-3">
              You can also <strong>opt out of analytics entirely</strong> by:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-foreground/70">
              <li>
                Enabling &ldquo;Do Not Track&rdquo; in your browser, or
              </li>
              <li>
                Using a content blocker (uBlock Origin, Brave Shields, etc.) — the
                tracker is loaded from this domain so you may need a custom rule,
                or
              </li>
              <li>
                Disabling JavaScript for this Site
              </li>
            </ul>
            <p className="mt-3">
              You have the right to lodge a complaint with the Italian Data
              Protection Authority (<em>Garante per la protezione dei dati personali</em>) at{" "}
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vw-cyan hover:text-vw-pink transition-colors"
              >
                garanteprivacy.it
              </a>{" "}
              or with the supervisory authority of your country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-vw-cyan mb-4">
              8. Third-Party Links
            </h2>
            <p>
              The Site links to external resources such as GitHub, npm, the
              Ethereum Improvement Proposals website, and the agent0 SDK
              documentation. We are not responsible for the privacy practices of
              those third parties. Please consult their respective policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-vw-cyan mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this policy as the Site evolves. Material changes will
              be reflected in the &ldquo;Last updated&rdquo; date at the top. Please
              review periodically.
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
}
