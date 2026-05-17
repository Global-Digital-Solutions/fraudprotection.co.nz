import type { Metadata } from 'next';
import Link from 'next/link';
import { businessProviders } from '@/data/businessProviders';
import { personalProviders } from '@/data/personalProviders';

export const metadata: Metadata = {
  title: 'Fraud Insurance Providers NZ 2026 | Chubb, DUAL, NZI & More | FraudInsurance.co.nz',
  description: 'NZ fraud insurance providers — Chubb FraudProtector, DUAL cyber, NZI, Delta Insurance, Marsh, Rothbury, Unite Insurance and more. Compare business and personal options.',
  alternates: { canonical: 'https://www.fraudinsurance.co.nz/providers/' },
};

const accessLabels: Record<string, string> = {
  'broker-only': 'Via broker only',
  'direct': 'Direct & broker',
  'broker-or-direct': 'Broker recommended',
};

const accessColors: Record<string, string> = {
  'broker-only': 'bg-amber-50 text-amber-700 border border-amber-200',
  'direct': 'bg-green-50 text-green-700 border border-green-200',
  'broker-or-direct': 'bg-blue-50 text-blue-700 border border-blue-200',
};

export default function ProvidersPage() {
  const featuredInsurers = businessProviders.filter((p) => p.type === 'insurer' && p.featured);
  const otherInsurers = businessProviders.filter((p) => p.type === 'insurer' && !p.featured);
  const brokers = businessProviders.filter((p) => p.type === 'broker');

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95" />
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="flex flex-wrap items-center gap-1 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1">/</span>
            <span className="text-slate-200">Insurance Providers</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
              Fraud Insurance Providers
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Leading insurers and brokers offering commercial crime, fidelity, and cyber insurance — plus personal protection resources. Compare products and find the right cover for your situation.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-sm text-slate-200">5 insurers listed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-sm text-slate-200">4 specialist brokers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm text-slate-200">Personal resources</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brokers */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 block">Expert Placement</span>
            <h2 className="text-2xl font-bold text-slate-900">Specialist Brokers</h2>
            <p className="text-slate-500 text-sm mt-1">Brokers with specific expertise in fidelity, commercial crime, and cyber insurance for businesses.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brokers.map((p) => (
              <div key={p.id} className="flex flex-col border-2 border-blue-100 hover:border-blue-300 rounded-2xl overflow-hidden transition-all hover:shadow-md group">
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 px-6 pt-5 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Broker</span>
                      <h3 className="text-base font-bold text-white mt-0.5">{p.name}</h3>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ml-2 ${accessColors[p.accessMethod]}`}>
                      {accessLabels[p.accessMethod]}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs italic">{p.tagline}</p>
                </div>
                {/* Key feature strip */}
                <div className="bg-blue-600 px-6 py-2.5">
                  <p className="text-white text-xs font-semibold leading-snug">{p.highlight}</p>
                </div>
                <div className="flex flex-col flex-1 px-6 py-5 bg-white">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{p.description}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-1">
                      {p.coverTypes.map((ct) => (
                        <span key={ct} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{ct}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link href="/quote" className="block w-full text-center text-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl transition-colors">
                      Get a Quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Access method legend */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="font-semibold text-slate-600">Access method key:</span>
            <span className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">Via broker only — must go through a licensed broker</span>
            <span className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1.5 rounded-full">Broker recommended — can access direct but broker advised</span>
            <span className="flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 px-3 py-1.5 rounded-full">Direct & broker — available direct or via broker</span>
          </div>
        </div>
      </section>

      {/* Featured Insurers */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-2 block">Business Cover</span>
              <h2 className="text-2xl font-bold text-slate-900">Featured Insurers</h2>
              <p className="text-slate-500 text-sm mt-1">Insurers with dedicated fraud and crime products for local businesses.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {featuredInsurers.map((p) => (
              <div key={p.id} className="flex flex-col border-2 border-red-100 hover:border-red-300 rounded-2xl overflow-hidden transition-all hover:shadow-lg group">
                {/* Card header */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-6 pt-6 pb-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Insurer</span>
                      <h3 className="text-lg font-bold text-white mt-0.5">{p.name}</h3>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ml-2 ${accessColors[p.accessMethod]}`}>
                      {accessLabels[p.accessMethod]}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm italic leading-snug">{p.tagline}</p>
                </div>

                {/* Key feature highlight */}
                <div className="bg-red-600 px-6 py-3">
                  <p className="text-white text-xs font-semibold leading-snug">{p.highlight}</p>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 px-6 py-5 bg-white">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{p.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Products</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.products.map((prod) => (
                        <span key={prod} className="text-xs bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-full">{prod}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Cover includes</p>
                    <div className="flex flex-wrap gap-1">
                      {p.coverTypes.map((ct) => (
                        <span key={ct} className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-full">{ct}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href="/quote"
                      className="block w-full text-center text-sm bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors"
                    >
                      Get a Quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other insurers */}
          {otherInsurers.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-5">
              {otherInsurers.map((p) => (
                <div key={p.id} className="flex flex-col border-2 border-slate-200 hover:border-red-200 rounded-2xl overflow-hidden transition-all hover:shadow-md group">
                  <div className="bg-slate-800 px-6 pt-5 pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Insurer</span>
                        <h3 className="text-base font-bold text-white mt-0.5">{p.name}</h3>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ml-2 ${accessColors[p.accessMethod]}`}>
                        {accessLabels[p.accessMethod]}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs italic">{p.tagline}</p>
                  </div>
                  <div className="flex flex-col flex-1 px-6 py-5 bg-white">
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {p.coverTypes.map((ct) => (
                        <span key={ct} className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-full">{ct}</span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Link href="/quote" className="block w-full text-center text-sm bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl transition-colors">
                        Get a Quote →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Personal providers */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 block">For Individuals</span>
            <h2 className="text-2xl font-bold text-slate-900">Personal Protection Resources</h2>
            <p className="text-slate-500 text-sm mt-1">Banks, insurers, and free support services for personal fraud protection.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {personalProviders.map((p) => (
              <div key={p.id} className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 transition-all hover:shadow-sm">
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

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Get Business Insurance Through Our Network</h2>
          <p className="text-red-200 mb-6">Submit a quote request and we'll connect you with the most suitable provider for your needs.</p>
          <Link href="/quote" className="inline-block bg-white text-red-700 hover:bg-red-50 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg">
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-amber-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <div className="shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-2">Listing Disclaimer</p>
              <p className="text-sm text-amber-700 leading-relaxed mb-3">
                FraudInsurance.co.nz is an independent information and referral website. We have no commercial relationship with any of the insurers or brokers listed on this page, and listings do not constitute endorsements or recommendations of any specific product or provider. Provider information is sourced from publicly available materials and was accurate at the time of publication, but may change. Always verify current policy terms, limits, and pricing directly with the provider or your licensed insurance adviser before purchasing.
              </p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Insurance advice is provided by licensed financial advisers. FraudInsurance.co.nz is a referral service — it is not an insurer, broker, or financial adviser, and does not hold a Financial Advice Provider licence. The advisers we refer you to are regulated under New Zealand financial services law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
