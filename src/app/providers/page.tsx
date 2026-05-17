import type { Metadata } from 'next';
import Link from 'next/link';
import { businessProviders } from '@/data/businessProviders';
import { personalProviders } from '@/data/personalProviders';

export const metadata: Metadata = {
  title: 'Fraud Insurance Providers NZ 2026 | Chubb, DUAL, NZI & More | FraudProtection.co.nz',
  description: 'NZ fraud insurance providers — Chubb FraudProtector, DUAL cyber, NZI, Delta Insurance, Marsh, Rothbury, Unite Insurance and more. Compare business and personal options.',
  alternates: { canonical: 'https://www.fraudprotection.co.nz/providers/' },
};

export default function ProvidersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Fraud Insurance Providers</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Leading insurers and brokers for commercial crime, cyber, and fidelity insurance — plus personal protection resources.
          </p>
        </div>
      </section>

      {/* Business providers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Business Insurance Providers</h2>
          <p className="text-slate-600 text-sm mb-8">Insurers and brokers specialising in commercial crime, fidelity, and cyber insurance for local businesses.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessProviders.map((p) => (
              <div key={p.id} className="border-2 border-slate-200 hover:border-red-200 rounded-2xl p-6 transition-all hover:shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-slate-900">{p.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${p.type === 'insurer' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}>
                    {p.type === 'insurer' ? 'Insurer' : 'Broker'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 italic mb-2">{p.tagline}</p>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.products.map((prod) => (
                    <span key={prod} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{prod}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-xs border border-slate-300 hover:border-slate-500 text-slate-600 hover:text-slate-900 py-2 rounded-lg transition-colors">
                    Visit website ↗
                  </a>
                  <Link href="/quote" className="flex-1 text-center text-xs bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors">
                    Get Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal providers */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Personal Protection Resources</h2>
          <p className="text-slate-600 text-sm mb-8">Banks, insurers, and free services for personal fraud protection.</p>
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
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{p.description}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="block w-full text-center text-sm bg-slate-900 hover:bg-slate-700 text-white font-semibold py-2 rounded-lg transition-colors">
                  Visit {p.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Get Business Insurance Through Our Network</h2>
          <p className="text-red-200 mb-6">Submit a quote request and we'll connect you with the most suitable provider for your needs.</p>
          <Link href="/quote" className="inline-block bg-white text-red-700 hover:bg-red-50 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
