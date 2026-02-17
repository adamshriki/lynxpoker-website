"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowLeft, Globe } from "lucide-react";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-extrabold mb-2">Terms of Service</h1>
        <p className="text-text-minus-1 mb-12">LynxPoker — Tournament Management Platform<br />
          <strong>Last Updated:</strong> [DATE] · <strong>Provider:</strong> Adam Shriki LTD (Company No. 515963320), Israel
        </p>

        <Section n="1" title="Introduction and Acceptance">
          <p>These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) and <strong>Adam Shriki LTD</strong>, Company No. 515963320, a company incorporated under the laws of the State of Israel (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and use of the LynxPoker web application, mobile applications, APIs, and related services (collectively, the &quot;Service&quot;).</p>
          <p>By creating an account, accessing, or using the Service, you represent that you have the legal authority to bind the organization on whose behalf you are acting and that you accept these Terms in full. If you do not agree, you must not access or use the Service.</p>
        </Section>

        <Section n="2" title="Description of Service">
          <h4 className="text-lg font-bold mt-6 mb-2">2.1 Purpose</h4>
          <p>LynxPoker is a <strong>business-to-business (B2B) software-as-a-service (SaaS) platform</strong> designed to assist professional tournament staff — including Floor Managers, Tournament Directors, and Dealers — in managing live, in-person poker tournaments. The Service functions as a digital scoreboard, tournament clock, blind structure manager, player registration tracker, dealer assignment tool, and reporting utility.</p>

          <h4 className="text-lg font-bold mt-6 mb-2">2.2 What LynxPoker Is NOT</h4>
          <p><strong>LynxPoker does not constitute a gambling platform, online poker room, or financial services provider.</strong> Specifically, the Service:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Does <strong>not</strong> facilitate, process, hold, or transmit any buy-ins, entry fees, payouts, wagers, or real-money transactions of any kind;</li>
            <li>Does <strong>not</strong> operate, host, or enable any form of online or remote gambling;</li>
            <li>Does <strong>not</strong> act as a payment processor, escrow agent, or financial intermediary;</li>
            <li>Does <strong>not</strong> determine or influence the outcome of any poker game or tournament;</li>
            <li>Does <strong>not</strong> provide poker gameplay functionality — no cards are dealt, no hands are played, and no wagering occurs through the Service.</li>
          </ul>
          <p className="mt-3">The Service is analogous to a digital whiteboard or scorekeeping system. All financial transactions, prize distributions, and game operations occur independently of and outside the Service, under the sole control and responsibility of the Customer.</p>
        </Section>

        <Section n="3" title="Account Registration and Eligibility">
          <p>You must be at least eighteen (18) years of age and have the legal capacity to enter into binding contracts in your jurisdiction. The Service is intended for business use by organizations operating lawful poker events.</p>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account. If you register on behalf of an organization, you represent and warrant that you are authorized to bind that organization to these Terms.</p>
        </Section>

        <Section n="4" title="Customer Obligations and Compliance">
          <p>You shall use the Service solely for lawful purposes. You represent and warrant that your use of the Service and the live poker events you manage comply with <strong>all applicable laws, regulations, permits, and licenses</strong> in every jurisdiction in which you operate.</p>
          <div className="bg-surface-plus-1 border border-border-primary rounded-xl p-5 my-4">
            <p className="font-bold text-text-primary mb-2">⚠️ Jurisdictional Responsibility</p>
            <p className="text-text-secondary text-sm">The Customer bears sole and exclusive responsibility for determining the legality of live poker events in their specific jurisdiction. Laws regarding poker tournaments, gambling, and gaming vary significantly by country, state, province, and municipality. The Company makes no representation that the use of the Service is appropriate or lawful in any particular jurisdiction.</p>
          </div>
        </Section>

        <Section n="5" title="Data Processing Roles">
          <p>For the purposes of applicable data protection laws (including the Israeli Privacy Protection Law 5741-1981, EU/UK GDPR, and CCPA/CPRA):</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong>The Customer is the Data Controller</strong> with respect to all personal data of tournament players and event participants entered into the Service.</li>
            <li><strong>Adam Shriki LTD is the Data Processor</strong>, processing such personal data solely on behalf of and pursuant to the documented instructions of the Customer.</li>
          </ul>
          <p className="mt-3">As Data Controller, the Customer is responsible for ensuring a lawful basis for collection, providing privacy notices to players, and responding to data subject requests.</p>
        </Section>

        <Section n="6" title="Intellectual Property">
          <p>The Service, including all software, design, trademarks, logos, documentation, and underlying technology, is and remains the exclusive property of Adam Shriki LTD. Subject to these Terms, the Company grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service during the term of your subscription. You retain all rights in the data you submit.</p>
        </Section>

        <Section n="7" title="Subscription, Fees, and Payment">
          <p>The Service is offered under various subscription tiers as published on our website. Fees are billed in advance on a recurring basis. All fees are non-refundable except as expressly stated herein or required by applicable law. The Company reserves the right to modify pricing with thirty (30) days&apos; prior written notice.</p>
        </Section>

        <Section n="8" title="Service Availability">
          <p>The Company will use commercially reasonable efforts to maintain Service availability but does not guarantee uninterrupted or error-free operation. The Service is provided on an &quot;as available&quot; basis.</p>
        </Section>

        <Section n="9" title="Disclaimers">
          <p className="uppercase text-sm text-text-secondary">To the maximum extent permitted by applicable law, the Service is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, whether express, implied, or statutory, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. The Company does not provide legal, regulatory, tax, or compliance advice.</p>
        </Section>

        <Section n="10" title="Limitation of Liability">
          <p className="uppercase text-sm text-text-secondary">The Company&apos;s total aggregate liability shall not exceed the greater of: (a) the total fees paid by the Customer in the twelve (12) months preceding the event; or (b) one hundred U.S. dollars (US $100). In no event shall the Company be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
        </Section>

        <Section n="11" title="Indemnification">
          <p>You shall defend, indemnify, and hold harmless Adam Shriki LTD from and against any claims, damages, losses, liabilities, costs, and expenses arising out of or relating to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Your use of the Service in violation of these Terms;</li>
            <li><strong>The legality or illegality of any live poker event you organize, manage, or operate using the Service, in any jurisdiction;</strong></li>
            <li>Your breach of any applicable law, regulation, or third-party right;</li>
            <li>Any dispute between you and your players, staff, or event participants;</li>
            <li>Personal data you enter into the Service, including any failure to comply with data protection laws as Data Controller.</li>
          </ul>
        </Section>

        <Section n="12" title="Term and Termination">
          <p>You may terminate your account at any time. We may suspend or terminate your access if you breach these Terms, if required by law, or if your use poses a security risk. Upon termination, your license ceases immediately. You may request data export within thirty (30) days of termination.</p>
        </Section>

        <Section n="13" title="Governing Law and Dispute Resolution">
          <p>These Terms shall be governed by the <strong>laws of the State of Israel</strong>. Disputes shall be submitted to the exclusive jurisdiction of the competent courts in <strong>Tel Aviv-Jaffa, Israel</strong>. Prior to litigation, the parties shall attempt good-faith negotiation for not less than thirty (30) days.</p>
        </Section>

        <Section n="14" title="Modifications">
          <p>The Company may modify these Terms at any time. Material changes will be communicated at least thirty (30) days before taking effect. Continued use constitutes acceptance of the revised Terms.</p>
        </Section>

        <Section n="15" title="Address for Legal Notices">
          <div className="bg-surface-plus-1 border border-border-primary rounded-xl p-5 mt-2">
            <p className="font-bold text-text-primary">Adam Shriki LTD</p>
            <p className="text-text-secondary text-sm">Company No. 515963320<br />Rozvelt 9, Ashdod, 7766209<br />Israel</p>
            <p className="text-text-secondary text-sm mt-2">Email: <a href="mailto:adam@lynx.poker" className="text-text-blue-primary hover:underline">adam@lynx.poker</a></p>
          </div>
        </Section>
      </article>

      {/* Footer */}
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
