"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const locale = useLocale();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="min-h-screen bg-surface-primary">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-primary/60 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center">
            <img src={`${basePath}/logo.svg`} alt="LynxPoker" className="h-6 md:h-7" />
          </Link>
          <Link href={`/${locale}`} className="text-sm text-text-minus-1 hover:text-text-primary transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-6 pt-28 pb-20 text-text-primary">
        <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
        <p className="text-text-minus-1 mb-12">LynxPoker — Tournament Management Platform<br />
          <strong>Last Updated:</strong> [DATE] · <strong>Provider:</strong> Adam Shriki LTD (Company No. 515963320), Israel
        </p>

        <Section n="1" title="Introduction">
          <p>This Privacy Policy explains how <strong>Adam Shriki LTD</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, shares, and protects personal data in connection with the LynxPoker web application, mobile applications, and related services (the &quot;Service&quot;).</p>
          <p>This Policy is designed to comply with the <strong>Israeli Privacy Protection Law 5741-1981</strong>, the <strong>EU/UK General Data Protection Regulation (GDPR)</strong>, and the <strong>California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA)</strong>.</p>
        </Section>

        <Section n="2" title="Data Roles: Controller vs. Processor">
          <div className="bg-surface-plus-1 border border-border-primary rounded-xl p-5 my-2">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-text-blue-primary mb-2">We are Data Controller for:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-text-secondary">
                  <li><strong>Staff Account Data</strong> — information provided by tournament staff when creating accounts</li>
                  <li><strong>Technical Data</strong> — automatically collected for security and performance</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-text-amber-primary mb-2">We are Data Processor for:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-text-secondary">
                  <li><strong>Player Data</strong> — entered by tournament staff on behalf of the organizer</li>
                  <li>The <strong>Customer (Tournament Organizer)</strong> is the Data Controller for all Player Data</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section n="3" title="Data We Collect">
          <h4 className="text-lg font-bold mt-6 mb-3">3.1 Staff Account Data <span className="text-xs font-normal text-text-minus-1 bg-surface-plus-2 px-2 py-0.5 rounded-full ml-2">Controller</span></h4>
          <DataTable rows={[
            ["Identity Information", "Full name, display name", "Account creation and management"],
            ["Contact Information", "Email address, phone number", "Authentication, communications, support"],
            ["Authentication Data", "Hashed password, session tokens", "Account security"],
            ["Organizational Data", "Organization name, role/position", "Multi-organization management"],
          ]} />

          <h4 className="text-lg font-bold mt-8 mb-3">3.2 Player Data <span className="text-xs font-normal text-text-minus-1 bg-surface-plus-2 px-2 py-0.5 rounded-full ml-2">Processor</span></h4>
          <DataTable rows={[
            ["Identity Information", "Player name, nickname", "Tournament registration"],
            ["Profile Media", "Profile photograph", "Player identification"],
            ["Tournament Performance", "Profits, losses, buy-ins, cashes", "Record-keeping and statistics"],
            ["Seating Data", "Table assignment, seat number", "Floor management"],
          ]} />
          <p className="text-sm text-text-minus-1 mt-3 italic">Player Data is controlled by the Customer. Players with questions about their data should contact the tournament organizer directly.</p>

          <h4 className="text-lg font-bold mt-8 mb-3">3.3 Technical Data <span className="text-xs font-normal text-text-minus-1 bg-surface-plus-2 px-2 py-0.5 rounded-full ml-2">Controller</span></h4>
          <DataTable rows={[
            ["Device Information", "Browser type, OS, device type", "Compatibility and performance"],
            ["Network Data", "IP address", "Security, fraud prevention"],
            ["Session Data", "Login timestamps, session duration", "Security auditing"],
            ["Usage Data", "Features accessed, interactions", "Product improvement"],
          ]} />
        </Section>

        <Section n="4" title="Legal Bases for Processing">
          <h4 className="text-lg font-bold mt-4 mb-2">Under GDPR (EU/UK Users)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Performance of a Contract</strong> (Art. 6(1)(b)) — Staff Account Data</li>
            <li><strong>Legitimate Interests</strong> (Art. 6(1)(f)) — Technical Data for security and improvement</li>
            <li><strong>Legal Obligation</strong> (Art. 6(1)(c)) — Where required by law</li>
            <li><strong>Processor Obligation</strong> (Art. 28) — Player Data on behalf of Customer</li>
          </ul>
        </Section>

        <Section n="5" title="How We Use Personal Data">
          <ul className="list-decimal pl-6 space-y-2">
            <li><strong>Providing the Service:</strong> Account management, authentication, tournament features, real-time sync, support.</li>
            <li><strong>Security and Fraud Prevention:</strong> Monitoring for unauthorized access, investigating incidents.</li>
            <li><strong>Performance and Reliability:</strong> Diagnosing issues, optimizing performance.</li>
            <li><strong>Product Improvement:</strong> Analyzing aggregate usage patterns.</li>
            <li><strong>Communications:</strong> Transactional emails and, with consent, product updates.</li>
            <li><strong>Legal Compliance:</strong> Fulfilling legal obligations, responding to lawful requests.</li>
          </ul>
        </Section>

        <Section n="6" title="Data Sharing and Disclosure">
          <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-5 my-2">
            <p className="font-bold text-green-400 mb-1">✓ We do NOT sell personal data</p>
            <p className="text-sm text-text-secondary">We do not sell, rent, or trade personal data to third parties for their marketing purposes. This applies to all users, including California residents.</p>
          </div>
          <p className="mt-4">We may share data with trusted service providers (cloud hosting, analytics, email delivery) bound by contract to process data only for specified purposes. We may also disclose data when required by law or to protect rights and safety.</p>
        </Section>

        <Section n="7" title="International Data Transfers">
          <p>The Service is operated from Israel. Israel has been recognized by the European Commission as providing an adequate level of data protection (Commission Decision 2011/61/EU). Where data is transferred to countries without an adequacy determination, we implement Standard Contractual Clauses (SCCs).</p>
        </Section>

        <Section n="8" title="Data Security">
          <p>We implement appropriate technical and organizational measures including:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Encryption of data in transit (TLS/HTTPS) and at rest</li>
            <li>Access controls and role-based permissions</li>
            <li>Regular security assessments and monitoring</li>
            <li>Secure software development practices</li>
            <li>Incident response procedures</li>
          </ul>
        </Section>

        <Section n="9" title="Data Retention">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Staff Account Data:</strong> Duration of account + 12 months for reactivation and legal compliance.</li>
            <li><strong>Player Data:</strong> Duration of Customer&apos;s subscription. Export available within 30 days of termination; deleted within 90 days.</li>
            <li><strong>Technical Data:</strong> Maximum 24 months, then anonymized or deleted.</li>
          </ul>
        </Section>

        <Section n="10" title="Your Rights">
          <h4 className="text-lg font-bold mt-4 mb-2">GDPR (EU/UK Residents)</h4>
          <p>Right to access, rectification, erasure, restriction, data portability, objection, consent withdrawal, and to lodge a complaint with your local supervisory authority.</p>

          <h4 className="text-lg font-bold mt-6 mb-2">Israeli Law</h4>
          <p>Right to access, correct, and request deletion under the Privacy Protection Law 5741-1981.</p>

          <h4 className="text-lg font-bold mt-6 mb-2">CCPA/CPRA (California Residents)</h4>
          <p>Right to know, delete, correct, opt-out of sale/sharing, and non-discrimination. We do not sell or share personal information for cross-context behavioral advertising.</p>

          <div className="bg-surface-plus-1 border border-border-primary rounded-xl p-5 my-4">
            <p className="font-bold text-text-primary mb-1">Exercising Your Rights</p>
            <p className="text-sm text-text-secondary">Contact us at the address in Section 13. We respond within 30 days (GDPR) or 45 days (CCPA/CPRA). For Player Data, contact your tournament organizer — they are the Data Controller.</p>
          </div>
        </Section>

        <Section n="11" title="Children&apos;s Privacy">
          <p>The Service is not intended for individuals under 18. We do not knowingly collect data from children. If you believe a child has provided data to us, contact us immediately.</p>
        </Section>

        <Section n="12" title="Cookies and Tracking">
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Essential Cookies:</strong> Required for authentication and session management. Cannot be disabled.</li>
            <li><strong>Analytics:</strong> Anonymized/aggregated usage data with appropriate safeguards.</li>
            <li><strong>No Third-Party Advertising:</strong> We do not use advertising cookies, tracking pixels, or ad networks.</li>
          </ul>
        </Section>

        <Section n="13" title="Contact Information">
          <div className="bg-surface-plus-1 border border-border-primary rounded-xl p-5 mt-2">
            <p className="font-bold text-text-primary">Adam Shriki LTD</p>
            <p className="text-text-secondary text-sm">Company No. 515963320<br />[Registered Address]<br />Israel</p>
            <p className="text-text-secondary text-sm mt-2">Email: <a href="mailto:privacy@lynxpoker.com" className="text-text-blue-primary hover:underline">privacy@lynxpoker.com</a></p>
          </div>
          <p className="text-sm text-text-minus-1 mt-3">EU/UK residents may also lodge a complaint with their local Data Protection Authority.</p>
        </Section>

        <Section n="14" title="Changes to This Policy">
          <p>Material changes will be communicated at least thirty (30) days before taking effect. Continued use constitutes acceptance.</p>
        </Section>
      </article>

      <footer className="py-8 px-6 bg-surface-secondary border-t border-border-primary text-center">
        <p className="text-xs text-text-minus-2">© 2026 LynxPoker. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">{n}. {title}</h2>
      <div className="space-y-3 text-base text-text-secondary leading-relaxed">{children}</div>
    </section>
  );
}

function DataTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border-primary">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface-plus-1 border-b border-border-primary">
            <th className="text-left py-2.5 px-4 font-semibold text-text-primary">Category</th>
            <th className="text-left py-2.5 px-4 font-semibold text-text-primary">Examples</th>
            <th className="text-left py-2.5 px-4 font-semibold text-text-primary">Purpose</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([cat, ex, purpose], i) => (
            <tr key={i} className="border-b border-border-primary last:border-0">
              <td className="py-2.5 px-4 text-text-primary font-medium">{cat}</td>
              <td className="py-2.5 px-4 text-text-secondary">{ex}</td>
              <td className="py-2.5 px-4 text-text-secondary">{purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
