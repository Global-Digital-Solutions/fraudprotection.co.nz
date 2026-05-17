import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | FraudInsurance.co.nz',
  description: 'Terms of Use for FraudInsurance.co.nz. Rules governing use of this website and referral service.',
  alternates: { canonical: 'https://www.fraudinsurance.co.nz/terms/' },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-slate-900 border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Terms of Use</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Terms of Use</h1>
          <p className="text-slate-400 text-sm">Last updated: 17 May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-700 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using FraudInsurance.co.nz (&ldquo;the Website&rdquo;), you agree to be bound by these Terms of Use. If you do not agree to these Terms, please do not use the Website. These Terms apply to all visitors, users, and others who access the Website.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Nature of Service</h2>
              <p>FraudInsurance.co.nz is an information and referral service only. The Website provides general information about personal fraud protection and business fraud insurance in New Zealand, and connects users with licensed insurance advisers and brokers. We do not underwrite insurance, bind coverage, issue policies, or act as an insurance intermediary.</p>
              <p className="mt-3">For personal fraud protection, the Website provides direct links to banks, government agencies, and support services. We have no commercial relationship with these organisations unless otherwise stated.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. No Financial Advice</h2>
              <p>Nothing on this Website constitutes &ldquo;regulated financial advice&rdquo; as defined under the Financial Markets Conduct Act 2013 (FMCA). The information provided is general in nature and has not been prepared taking into account your specific financial situation, objectives, or insurance needs.</p>
              <p className="mt-3">Before making any decision about insurance products, you should seek advice from a licensed financial adviser who can assess your individual circumstances. The advisers and brokers we refer you to are licensed under the FMCA and can provide personalised financial advice.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Accuracy of Information</h2>
              <p>We take reasonable care to ensure the accuracy of information on this Website, but insurance products, pricing, terms, policy wordings, and provider details change regularly. We make no warranty — express or implied — as to the completeness, accuracy, or currency of any information on the Website. Always verify current details directly with the relevant licensed broker or insurer before making any decisions.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Referral Arrangements</h2>
              <p>FraudInsurance.co.nz may receive referral fees or commissions from licensed insurance brokers when users of this Website proceed to obtain insurance through those brokers. This arrangement does not increase the cost of insurance to you. Brokers are separately remunerated by commission from the insurer, which is a standard practice in the New Zealand insurance industry.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Third-Party Brokers and Advisers</h2>
              <p>When you are referred to a licensed broker or adviser, you enter into a direct relationship with that professional. FraudInsurance.co.nz is not party to that relationship and accepts no responsibility for the advice, products, or services provided by referred professionals. All referred brokers and advisers are independently licensed under New Zealand law.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. External Links</h2>
              <p>The Website contains links to third-party websites including insurance providers, government agencies (such as Netsafe, CERT NZ, and the FMA), and banking institutions. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Intellectual Property</h2>
              <p>All content on this Website — including text, graphics, logos, and page layouts — is owned by or licensed to FraudInsurance.co.nz and is protected by New Zealand and international copyright law. You may not reproduce, distribute, or commercially exploit any content without our express written permission.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Limitation of Liability</h2>
              <p>To the maximum extent permitted by New Zealand law, FraudInsurance.co.nz and its operators exclude all liability for any loss or damage — including direct, indirect, incidental, or consequential loss — arising from your use of this Website, reliance on information contained on it, or your dealings with any referred broker or adviser.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Changes to These Terms</h2>
              <p>We may update these Terms of Use from time to time. Changes will be effective when posted on this page with an updated date. Your continued use of the Website after any changes constitutes your acceptance of the revised Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">11. Governing Law</h2>
              <p>These Terms of Use are governed by the laws of New Zealand. Any disputes arising in connection with these Terms or your use of the Website are subject to the exclusive jurisdiction of the New Zealand courts.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">12. Contact</h2>
              <p>Questions or concerns about these Terms of Use should be directed to <a href="mailto:hello@cover4you.co.nz" className="text-red-600 hover:underline">hello@cover4you.co.nz</a>.</p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
