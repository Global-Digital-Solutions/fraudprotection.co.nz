import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Business Fraud Insurance Quote | FraudInsurance.co.nz',
  description: 'Get a tailored business fraud insurance quote from a licensed adviser. Commercial crime, fidelity, cyber, and social engineering cover for businesses of all sizes.',
  alternates: { canonical: 'https://www.fraudinsurance.co.nz/quote/' },
};

const trustStats = [
  { value: 'Free', label: 'No cost to request a quote' },
  { value: '1 day', label: 'Response time from our advisers' },
  { value: '0', label: 'Obligation to purchase' },
  { value: '5+', label: 'Cover types we can arrange' },
];

const coverageTypes = [
  { icon: '🏢', name: 'Commercial Crime Insurance', desc: 'Internal and external criminal acts' },
  { icon: '👤', name: 'Fidelity (Employee Dishonesty)', desc: 'Employee fraud and embezzlement' },
  { icon: '🛡️', name: 'Cyber Security Insurance', desc: 'Data breaches and ransomware' },
  { icon: '🎭', name: 'Social Engineering Cover', desc: 'CEO fraud and BEC attacks' },
  { icon: '💸', name: 'Funds Transfer Fraud', desc: 'Fraudulent payment diversions' },
];

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 opacity-95" />
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="flex flex-wrap items-center gap-1 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-1 text-slate-600">/</span>
            <Link href="/business" className="hover:text-white transition-colors">Business Protection</Link>
            <span className="mx-1 text-slate-600">/</span>
            <span className="text-slate-200">Get a Quote</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944z" clipRule="evenodd" /></svg>
                Business Fraud Insurance
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Get a Tailored<br />
                <span className="text-red-400">Business Quote</span>
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Tell us about your business and a specialist adviser will come back to you within one business day with cover options that fit your size, sector, and risk.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {trustStats.map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-white mb-0.5">{s.value}</div>
                    <div className="text-xs text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                <p className="text-sm font-semibold text-slate-300 mb-4">Cover types we arrange:</p>
                {coverageTypes.map((c) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <span className="text-xl w-8 text-center">{c.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-white">{c.name}</div>
                      <div className="text-xs text-slate-400">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border-2 border-slate-200 rounded-2xl shadow-md overflow-hidden">
                {/* Card header */}
                <div className="bg-gradient-to-r from-red-700 to-red-900 px-8 py-6">
                  <div className="flex items-center gap-3 mb-1">
                    <svg className="w-5 h-5 text-red-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h2 className="text-lg font-bold text-white">Your Quote Request</h2>
                  </div>
                  <p className="text-red-200 text-sm">Takes around 2 minutes · Free · No obligation</p>
                </div>
                <div className="p-8">
                  <QuoteForm />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">

              {/* Process steps */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-5">What Happens Next?</h3>
                <div className="space-y-5">
                  {[
                    { step: '1', title: 'Submit your request', desc: 'Takes about 2 minutes. No cost, no obligation.' },
                    { step: '2', title: 'Adviser reviews your needs', desc: 'A licensed specialist identifies suitable cover options for your business.' },
                    { step: '3', title: 'We contact you', desc: 'By phone or email within one business day — at your preference.' },
                    { step: '4', title: 'Receive tailored options', desc: 'Clear recommendations matched to your size, sector, and specific risk.' },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{s.step}</div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{s.title}</div>
                        <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why get covered */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Why Act Now?</h3>
                <div className="space-y-3">
                  {[
                    '$3 billion lost to fraud last year — up 30%',
                    'Average business fraud loss: $50,000+',
                    'Employee fraud often goes undetected for years',
                    'Cyber attacks hit businesses of all sizes',
                    'Premiums start from ~$800/year for SMEs',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-sm text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coverage types (mobile visible) */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm lg:hidden">
                <h3 className="font-semibold text-slate-900 mb-4 text-sm">Cover Types We Arrange</h3>
                <div className="space-y-2">
                  {coverageTypes.map((c) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <span className="text-lg">{c.icon}</span>
                      <span className="text-sm text-slate-700">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Please note:</strong> FraudInsurance.co.nz is an information and referral service. Your enquiry will be handled by a licensed insurance adviser. We are not a licensed insurer or financial adviser, and there is no obligation to purchase.
                </p>
              </div>

              {/* Questions link */}
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-2">Have a question first?</p>
                <Link href="/faq" className="text-sm text-red-600 hover:text-red-700 font-semibold">
                  Read our FAQs →
                </Link>
                <span className="text-slate-300 mx-3">|</span>
                <Link href="/contact" className="text-sm text-red-600 hover:text-red-700 font-semibold">
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom trust strip */}
      <section className="py-10 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm mb-4">Our adviser network covers all major business fraud insurance types</p>
          <div className="flex flex-wrap justify-center gap-3">
            {coverageTypes.map((c) => (
              <span key={c.name} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-full">{c.name}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
