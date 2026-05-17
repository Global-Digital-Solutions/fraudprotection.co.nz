import type { Metadata } from 'next';
import Link from 'next/link';
import { personalTypes } from '@/data/personalTypes';
import { personalProviders } from '@/data/personalProviders';

export const metadata: Metadata = {
  title: 'Personal Fraud Protection NZ 2026 | Identity Theft, Scams & Card Fraud | FraudProtection.co.nz',
  description: 'Protect yourself from identity theft, card fraud, online scams, and investment fraud in New Zealand. Expert guides and direct links to banks and protection services.',
  alternates: { canonical: 'https://www.fraudprotection.co.nz/personal/' },
};

export default function PersonalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1">/</span>
            <span className="text-slate-200">Personal Protection</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-slate-700 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Individual & Family Protection
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Personal Fraud Protection in New Zealand</h1>
            <p className="text-slate-300 text-lg max-w-2xl mb-6">
              $3 billion was lost to scams and fraud by New Zealanders in 2025. Understand your risks, know your options, and get connected to protection services directly.
            </p>
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-sm text-slate-300">
              <strong className="text-white">How this section works:</strong> Personal fraud protection in NZ is primarily provided through banks and free support services. This section links you directly to providers and resources — no forms, no middleman.
            </div>
          </div>
        </div>
      </section>

      {/* Fraud types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Personal Fraud Types</h2>
          <p className="text-slate-600 text-sm mb-8">Select your fraud type for a detailed guide, what cover exists, and who to contact.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {personalTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/personal/${type.slug}`}
                className="group border-2 border-slate-200 hover:border-slate-400 rounded-2xl p-6 transition-all hover:shadow-md"
              >
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-slate-700 mb-2">{type.name}</h3>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">{type.tagline}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {type.stats.slice(0, 2).map((stat) => (
                    <div key={stat.label} className="bg-slate-50 rounded-lg p-2">
                      <div className="text-sm font-bold text-slate-900">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-600 font-medium group-hover:text-slate-900">
                  Full guide & protection steps →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Personal providers */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Where to Get Personal Protection</h2>
          <p className="text-slate-600 text-sm mb-8">Banks, insurers, and free services available to New Zealanders.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {personalProviders.map((p) => (
              <div key={p.id} className="bg-white border border-slate-200 rounded-2xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-slate-900">{p.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    p.type === 'bank' ? 'bg-blue-100 text-blue-700' :
                    p.type === 'insurer' ? 'bg-red-100 text-red-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {p.type === 'bank' ? 'Bank' : p.type === 'insurer' ? 'Insurer' : 'Support Service'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 italic mb-2">{p.tagline}</p>
                <p className="text-sm text-slate-600 mb-4 line-clamp-3">{p.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {p.coverTypes.map((ct) => (
                    <span key={ct} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{ct}</span>
                  ))}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-sm bg-slate-900 hover:bg-slate-700 text-white font-semibold py-2 rounded-lg transition-colors"
                >
                  Visit {p.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency strip */}
      <section className="py-10 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-4">Have You Been Targeted Right Now?</h2>
          <p className="text-red-200 mb-6 text-sm">Act immediately — the faster you report, the better your chances of recovery.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0508638723" className="bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors">
              Netsafe: 0508 638 723
            </a>
            <a href="tel:105" className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-red-600 transition-colors">
              NZ Police: 105
            </a>
            <a href="https://www.idcare.org/new-zealand" target="_blank" rel="noopener noreferrer" className="border-2 border-white/50 text-white font-semibold px-6 py-3 rounded-xl hover:bg-red-600 transition-colors">
              IDCARE: 0800 432 273
            </a>
          </div>
        </div>
      </section>

      {/* Business upsell */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Do You Also Own a Business?</h2>
          <p className="text-slate-600 text-sm mb-6">Business fraud cover — commercial crime, fidelity, and cyber insurance — is available through our network of licensed NZ advisers.</p>
          <Link href="/business" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Explore Business Protection →
          </Link>
        </div>
      </section>
    </>
  );
}
