import type { Metadata } from 'next';
import Link from 'next/link';
import { businessTypes } from '@/data/businessTypes';
import { businessSectors } from '@/data/businessSectors';
import { businessProviders } from '@/data/businessProviders';

export const metadata: Metadata = {
  title: 'Business Fraud Insurance NZ 2026 | Commercial Crime, Fidelity & Cyber Cover | FraudProtection.co.nz',
  description: 'Protect your NZ business from employee fraud, cyber attacks, and payment fraud. Commercial crime, fidelity, and cyber insurance with quotes from licensed advisers.',
  alternates: { canonical: 'https://www.fraudprotection.co.nz/business/' },
};

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1 text-sm text-red-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1">/</span>
            <span className="text-white">Business Protection</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-700/50 border border-red-500/40 text-red-200 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                Form submissions go to licensed NZ advisers
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-4">Business Fraud Protection Insurance</h1>
              <p className="text-red-100 text-lg mb-6">
                Employee fraud, ransomware attacks, and payment diversion are affecting NZ businesses daily. Find the right commercial crime, fidelity, or cyber insurance — and get a tailored quote from a specialist.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote" className="bg-white text-red-700 hover:bg-red-50 font-bold px-6 py-3 rounded-xl transition-colors shadow-md">
                  Get a Free Quote →
                </Link>
                <Link href="/sectors" className="border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-colors">
                  Browse by Sector
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Average employee fraud loss', value: '$150,000+' },
                { label: 'Ransomware attack cost (avg NZ SME)', value: '$50k–$200k' },
                { label: 'BEC losses to NZ businesses (2024)', value: 'Tens of millions' },
                { label: 'NZ businesses with cyber insurance', value: 'Under 30%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 border border-white/20 rounded-xl p-4">
                  <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-red-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Business Fraud Insurance Types</h2>
          <p className="text-slate-600 text-sm mb-8">Select a coverage type for a detailed guide, what it covers, and how to get a quote.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {businessTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/business/${type.slug}`}
                className="group border-2 border-slate-200 hover:border-red-300 rounded-2xl p-6 transition-all hover:shadow-md"
              >
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-red-700 mb-2 transition-colors">{type.name}</h3>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">{type.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {type.whatItCovers.slice(0, 3).map((item) => (
                    <span key={item} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{item}</span>
                  ))}
                </div>
                <span className="text-sm text-red-600 font-medium group-hover:text-red-700">
                  Full guide & get a quote →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business sectors */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Browse by Business Sector</h2>
              <p className="text-slate-600 text-sm mt-1">Find fraud insurance specific to your industry</p>
            </div>
            <Link href="/sectors" className="text-sm text-red-600 hover:text-red-700 font-medium">View all sectors →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessSectors.slice(0, 4).map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectors/${sector.slug}`}
                className="group flex items-center gap-3 bg-white border border-slate-200 hover:border-red-200 rounded-xl p-4 transition-all hover:shadow-sm"
              >
                <span className="text-2xl">{sector.icon}</span>
                <div>
                  <div className="font-semibold text-slate-900 group-hover:text-red-700 text-sm transition-colors">{sector.name}</div>
                  <div className="text-xs text-slate-500">{sector.tagline.split('—')[0]}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Business Insurance Providers</h2>
              <p className="text-slate-600 text-sm mt-1">Insurers and brokers available to NZ businesses</p>
            </div>
            <Link href="/providers" className="text-sm text-red-600 hover:text-red-700 font-medium">View all providers →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessProviders.slice(0, 4).map((p) => (
              <div key={p.id} className="border border-slate-200 rounded-xl p-4 hover:border-red-200 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <span className="font-bold text-slate-900 text-sm">{p.name}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${p.type === 'insurer' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}>
                    {p.type === 'insurer' ? 'Insurer' : 'Broker'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-3 line-clamp-2">{p.tagline}</p>
                <Link href="/quote" className="block text-center text-xs bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 rounded-lg transition-colors">
                  Get Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Tailored Business Insurance Quote</h2>
          <p className="text-red-200 text-lg mb-8">Complete our brief form and a licensed NZ insurance adviser will contact you with options matched to your business and risk profile.</p>
          <Link href="/quote" className="inline-block bg-white text-red-700 hover:bg-red-50 font-bold px-10 py-4 rounded-xl transition-colors shadow-lg text-lg">
            Start Your Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
