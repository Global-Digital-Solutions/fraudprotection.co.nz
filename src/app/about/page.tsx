import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About FraudProtection.co.nz | NZ Fraud Insurance Information & Referral Service',
  description: 'About FraudProtection.co.nz — New Zealand\'s independent guide to personal and business fraud protection insurance. How we work and who we connect you with.',
  alternates: { canonical: 'https://www.fraudprotection.co.nz/about/' },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About FraudProtection.co.nz</h1>
          <p className="text-slate-300 text-lg max-w-2xl">Your independent guide to personal and business fraud protection insurance.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Who We Are</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              FraudProtection.co.nz is an independent information and referral service dedicated to helping individuals and businesses understand and address their fraud protection needs. We publish expert guides, local statistics, and practical advice on fraud prevention and insurance — and connect businesses with licensed insurance advisers for tailored quotes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">What We Do</h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              New Zealand lost $3 billion to fraud in 2025 — but many people don't know what protection exists or where to find it. FraudProtection.co.nz was created to close that knowledge gap.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              For <strong>personal fraud protection</strong>, we provide guides to understanding your bank's fraud guarantee, what to do if you're targeted, and how to find free support services like Netsafe and IDCARE.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed mt-3">
              For <strong>business fraud insurance</strong>, we explain the different types of cover available — commercial crime, fidelity, cyber, and social engineering insurance — and connect businesses with licensed insurance advisers who can provide tailored quotes and recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">How Our Referral Service Works</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              When you submit a business insurance quote request through our website, your enquiry is forwarded to a licensed insurance adviser. The adviser contacts you directly to discuss your needs and provide options. FraudProtection.co.nz is a referral service — we are not a licensed insurer or financial adviser, and we do not charge you for the referral. Our referral partners are licensed professionals regulated under New Zealand law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Important Disclaimer</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-900 leading-relaxed">
                FraudProtection.co.nz is an information and referral service only. We are not a licensed financial adviser, registered insurance broker, or insurer under New Zealand law. The information published on this website is general in nature and does not constitute personalised financial or insurance advice. Always consult a licensed insurance adviser before purchasing insurance products. Business insurance enquiries submitted through our forms are referred to licensed advisers only — these advisers are regulated under New Zealand law and must act in your best interests.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h2>
            <p className="text-slate-700 text-sm">
              Questions, corrections, or feedback? Contact us at:{' '}
              <a href="mailto:hello@cover4you.co.nz" className="text-red-600 hover:underline font-medium">hello@cover4you.co.nz</a>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
            <Link href="/quote" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors">
              Get a Business Quote
            </Link>
            <Link href="/personal" className="border-2 border-slate-300 hover:border-slate-500 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-colors">
              Personal Protection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
