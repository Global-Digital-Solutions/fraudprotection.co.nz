import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | FraudInsurance.co.nz',
  description: 'Full disclaimer for FraudInsurance.co.nz. This site is an information and referral service only — not a licensed financial adviser.',
  alternates: { canonical: 'https://www.fraudinsurance.co.nz/disclaimer/' },
};

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-slate-900 border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Disclaimer</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Disclaimer</h1>
          <p className="text-slate-400 text-sm">Last updated: 17 May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-700 leading-relaxed">

            {/* Important notice callout */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-2">Important Notice</h2>
              <p className="text-slate-700">FraudInsurance.co.nz is an information and referral service only. We are <strong>NOT</strong> a licensed financial adviser and do <strong>NOT</strong> provide financial advice. Only the licensed insurance advisers and brokers to whom we refer you are regulated under the Financial Markets Conduct Act 2013.</p>
            </div>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Nature of This Website</h2>
              <p>FraudInsurance.co.nz provides general information about personal fraud protection and business fraud insurance in New Zealand. The information on this website is for educational and informational purposes only and does not constitute financial advice, insurance advice, or legal advice of any kind.</p>
              <p className="mt-3">This website operates as a referral service, connecting businesses and individuals with licensed insurance advisers and brokers. We do not underwrite insurance, bind coverage, issue policies, or act as an insurance intermediary under the Insurance (Prudential Supervision) Act 2010.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">No Financial Advice</h2>
              <p>Nothing on this website constitutes &ldquo;regulated financial advice&rdquo; as defined under the Financial Markets Conduct Act 2013 (FMCA). The information provided is general in nature and has not been prepared taking into account your specific financial situation, objectives, or insurance needs.</p>
              <p className="mt-3">Before making any decision about insurance, you should seek advice from a licensed financial adviser who can assess your individual circumstances. The advisers and brokers we refer you to are licensed under the FMCA and can provide personalised financial advice tailored to your situation.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Personal Fraud Protection Information</h2>
              <p>The personal fraud protection section of this website provides links to banks, government agencies (including Netsafe, CERT NZ, and the Financial Markets Authority), and support organisations. FraudInsurance.co.nz has no commercial relationship with these organisations. The information provided about their services is general and may change — always check directly with the relevant organisation for current details.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Accuracy of Information</h2>
              <p>While we take reasonable care to ensure the accuracy of information on this website, insurance products, pricing, policy terms, and provider details change regularly. We make no warranty — express or implied — as to the completeness, accuracy, or currency of any information. Always verify current details with the relevant licensed broker, insurer, or organisation before making any decisions.</p>
              <p className="mt-3">Statistics and data cited on this website, including figures relating to fraud losses in New Zealand, are sourced from publicly available reports and may not reflect the most current data. Always refer to primary sources for the most up-to-date figures.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Referral Arrangements</h2>
              <p>FraudInsurance.co.nz may receive referral fees from licensed insurance brokers when users of this website proceed to obtain insurance through those brokers. This arrangement does not increase the cost of insurance to you — brokers are separately remunerated by commission from the insurer, which is standard practice in the New Zealand insurance market and is disclosed by brokers as required under their licensing obligations.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Third-Party Broker and Adviser Responsibility</h2>
              <p>The licensed advisers and brokers to whom we refer users are independent businesses solely responsible for the advice and services they provide. FraudInsurance.co.nz does not endorse any specific adviser or broker and accepts no responsibility for the conduct, advice, products, or services of referred professionals. All referred professionals are independently licensed and regulated under New Zealand law.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Limitation of Liability</h2>
              <p>To the maximum extent permitted by New Zealand law, FraudInsurance.co.nz and its operators disclaim all liability for any loss or damage — including direct, indirect, incidental, or consequential loss — arising from use of this website, reliance on information contained on it, or dealings with any referred broker or adviser.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Contact</h2>
              <p>For questions about this disclaimer, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-red-600 hover:underline">hello@cover4you.co.nz</a>.</p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
