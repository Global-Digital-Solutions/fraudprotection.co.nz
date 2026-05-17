import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quote Request Received | FraudInsurance.co.nz',
  description: 'Your business fraud insurance quote request has been received. A licensed adviser will contact you within one business day.',
  robots: { index: false, follow: false },
};

const steps = [
  {
    step: '1',
    title: 'Request received',
    desc: 'Your quote request has been sent to our adviser network.',
    done: true,
  },
  {
    step: '2',
    title: 'Adviser reviews your needs',
    desc: 'A licensed specialist identifies the most suitable cover options for your business sector and size.',
    done: false,
  },
  {
    step: '3',
    title: 'We contact you',
    desc: 'By phone or email — whichever you prefer — within one business day.',
    done: false,
  },
  {
    step: '4',
    title: 'Receive tailored options',
    desc: 'Clear recommendations with pricing, matched to your specific risk profile.',
    done: false,
  },
];

const exploreLinks = [
  { href: '/business/commercial-crime', label: 'Commercial Crime Insurance', desc: 'Internal and external criminal acts' },
  { href: '/business/fidelity-insurance', label: 'Fidelity Insurance', desc: 'Employee dishonesty and embezzlement' },
  { href: '/business/cyber-insurance', label: 'Cyber Insurance', desc: 'Data breaches and ransomware' },
  { href: '/blog', label: 'Fraud Guides & News', desc: 'Expert articles on protecting your business' },
];

export default function ThankYouPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-slate-900 to-slate-900 opacity-95" />
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          {/* Success icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            Quote Request Submitted
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            You're on Your Way to<br />
            <span className="text-green-400">Better Protection</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
            Your request is with our adviser network. A licensed specialist will be in touch within one business day with tailored cover options.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">What Happens Next?</h2>
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[27px] top-10 bottom-10 w-0.5 bg-slate-200 hidden sm:block" />
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-5 items-start">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm z-10 ${
                    s.done
                      ? 'bg-green-500 text-white shadow-green-500/20'
                      : 'bg-slate-100 text-slate-400 border-2 border-slate-200'
                  }`}>
                    {s.done ? (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-lg font-bold">{s.step}</span>
                    )}
                  </div>
                  <div className={`flex-1 rounded-2xl p-5 border-2 ${
                    s.done
                      ? 'bg-green-50 border-green-200'
                      : 'bg-white border-slate-200'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-bold text-base ${s.done ? 'text-green-800' : 'text-slate-900'}`}>
                        {s.title}
                      </h3>
                      {s.done && (
                        <span className="text-xs font-semibold bg-green-500 text-white px-2 py-0.5 rounded-full">Done</span>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed ${s.done ? 'text-green-700' : 'text-slate-500'}`}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore while you wait */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">While You Wait…</h2>
          <p className="text-slate-500 text-sm text-center mb-8">Learn more about the cover types your adviser will discuss with you.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 bg-white border-2 border-slate-200 hover:border-red-300 rounded-2xl p-5 transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 bg-red-50 group-hover:bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 group-hover:text-red-700 text-sm transition-colors">{link.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{link.desc}</div>
                </div>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-red-500 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency strip */}
      <section className="py-8 bg-amber-50 border-t border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-amber-800">
            <strong>Already experiencing a fraud incident?</strong>{' '}
            Don't wait — call{' '}
            <a href="tel:0508638723" className="font-semibold text-amber-900 hover:underline">Netsafe 0508 638 723</a>
            {' '}or{' '}
            <a href="tel:105" className="font-semibold text-amber-900 hover:underline">NZ Police 105</a>
            {' '}immediately.
          </p>
        </div>
      </section>

      {/* Back home */}
      <section className="py-10 bg-white text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to FraudInsurance.co.nz
        </Link>
      </section>
    </>
  );
}
