import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Business Fraud Insurance Quote NZ | FraudProtection.co.nz',
  description: 'Get a tailored business fraud insurance quote from a licensed NZ adviser. Commercial crime, fidelity, cyber, and social engineering cover for NZ businesses.',
  alternates: { canonical: 'https://www.fraudprotection.co.nz/quote/' },
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-900 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1 text-sm text-red-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/business" className="hover:text-white">Business Protection</Link>
            <span className="mx-1">/</span>
            <span className="text-white">Get a Quote</span>
          </nav>
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Get a Business Insurance Quote</h1>
            <p className="text-red-200 text-lg">Complete the form below and a licensed insurance adviser will contact you within one business day with options tailored to your business.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
            <div className="space-y-5">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'You submit the form', desc: 'Takes about 2 minutes. No obligation.' },
                    { step: '02', title: 'We review your needs', desc: 'A licensed adviser reviews your form and identifies suitable options.' },
                    { step: '03', title: 'We contact you', desc: 'Within one business day by phone or email, at your preference.' },
                    { step: '04', title: 'Tailored recommendations', desc: 'You receive options specific to your business size, sector, and risk.' },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-3">
                      <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{s.step}</span>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{s.title}</div>
                        <div className="text-xs text-slate-500">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Coverage Types We Arrange</h3>
                <div className="space-y-1.5 text-sm">
                  {['Commercial Crime Insurance', 'Fidelity (Employee Dishonesty) Insurance', 'Cyber Security Insurance', 'Social Engineering Fraud Cover', 'Funds Transfer Fraud Insurance'].map((c) => (
                    <div key={c} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-700">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
                <p className="text-xs text-amber-800 leading-relaxed">
                  Your enquiry will be handled by a licensed insurance adviser. FraudProtection.co.nz is a referral service, not a licensed insurer or financial adviser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
