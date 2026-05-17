import type { Metadata } from 'next';
import Link from 'next/link';
import { personalTypes } from '@/data/personalTypes';
import { personalProviders } from '@/data/personalProviders';

export const metadata: Metadata = {
  title: 'Personal Fraud Protection NZ 2026 | Identity Theft, Scams & Card Fraud | FraudProtection.co.nz',
  description: 'Protect yourself from identity theft, card fraud, online scams, and investment fraud in New Zealand. Expert guides and direct links to banks and protection services.',
  alternates: { canonical: 'https://www.fraudprotection.co.nz/personal/' },
};

const typeAccents: Record<string, { bg: string; border: string; badge: string; stat: string }> = {
  'identity-theft':  { bg: 'from-violet-500 to-purple-600',  border: 'border-violet-200',  badge: 'bg-violet-100 text-violet-700',  stat: 'text-violet-600' },
  'card-fraud':      { bg: 'from-blue-500 to-blue-600',      border: 'border-blue-200',    badge: 'bg-blue-100 text-blue-700',    stat: 'text-blue-600' },
  'online-scams':    { bg: 'from-orange-500 to-red-500',     border: 'border-orange-200',  badge: 'bg-orange-100 text-orange-700', stat: 'text-orange-600' },
  'account-takeover':{ bg: 'from-slate-600 to-slate-700',    border: 'border-slate-200',   badge: 'bg-slate-100 text-slate-700',  stat: 'text-slate-600' },
  'investment-scams':{ bg: 'from-emerald-500 to-teal-600',   border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', stat: 'text-emerald-600' },
};

export default function PersonalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-1">/</span>
            <span className="text-slate-200">Personal Protection</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-slate-700 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Individual &amp; Family Protection
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Personal Fraud Protection</h1>
            <p className="text-slate-300 text-lg max-w-2xl mb-6">
              $3 billion was lost to scams and fraud last year. Understand your risks, know your rights, and get connected to protection services directly.
            </p>
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-sm text-slate-300">
              <strong className="text-white">How this section works:</strong> Personal fraud protection is primarily provided through banks and free support services. This section links you directly to providers and resources — no forms, no middleman.
            </div>
          </div>
        </div>
      </section>

      {/* Fraud type cards */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Personal Fraud Types</h2>
            <p className="text-slate-600 text-sm">Select your fraud type for a detailed guide, what cover exists, and who to contact.</p>
          </div>

          {/* Cards grid — 3 columns on large, 2 on medium, 1 on small */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalTypes.map((type) => {
              const accent = typeAccents[type.slug] ?? typeAccents['card-fraud'];
              const topStat = type.stats[0];
              const secondStat = type.stats[1];
              return (
                <Link
                  key={type.slug}
                  href={`/personal/${type.slug}`}
                  className={`group flex flex-col rounded-2xl overflow-hidden border-2 ${accent.border} hover:shadow-lg transition-all hover:-translate-y-0.5 bg-white`}
                >
                  {/* Coloured header band */}
                  <div className={`bg-gradient-to-r ${accent.bg} px-6 pt-5 pb-4`}>
                    <div className="flex items-center justify-between">
                      <span className="text-4xl">{type.icon}</span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${accent.badge} bg-white/20 text-white`}>
                        Guide →
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-3 leading-tight">{type.name}</h3>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-sm text-slate-500 mb-5 leading-relaxed line-clamp-2">{type.tagline}</p>

                    {/* Two key stats */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-slate-50 rounded-xl p-3">
                        <div className={`text-base font-bold ${accent.stat}`}>{topStat.value}</div>
                        <div className="text-xs text-slate-500 mt-0.5 leading-snug">{topStat.label}</div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-3">
                        <div className={`text-base font-bold ${accent.stat}`}>{secondStat.value}</div>
                        <div className="text-xs text-slate-500 mt-0.5 leading-snug">{secondStat.label}</div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                        Full guide &amp; protection steps
                        <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* "Coming Soon" card to fill the 6th slot */}
            <div className="flex flex-col rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 bg-slate-50">
              <div className="bg-gradient-to-r from-slate-300 to-slate-400 px-6 pt-5 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">🛡️</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/30 text-white">
                    Coming Soon
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mt-3 leading-tight">Personal Fraud Insurance</h3>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">We're working to bring a dedicated fraud insurance product to individuals — direct cover for scam losses and identity recovery.</p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
                  <strong>Be the first to know.</strong> Register your interest and we'll notify you when personal fraud insurance becomes available.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Fraud Insurance — Coming Soon (full-width feature block) */}
      <section className="py-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                Coming Soon
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                Personal Fraud Insurance<br />
                <span className="text-amber-300">For Individuals &amp; Families</span>
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Fraud and scam losses for individuals are growing fast — but there's currently no mainstream insurance product that covers you directly. We're working with specialist underwriters to change that.
              </p>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                The product we're developing would cover scam losses, identity theft recovery costs, and legal expenses — filling the gap left by bank zero-liability guarantees, which don't cover losses where you authorised the payment.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  Register Your Interest
                </Link>
                <Link
                  href="/business"
                  className="border border-slate-600 text-slate-200 hover:text-white hover:border-slate-400 font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Business Cover Available Now →
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-5">What we're aiming to cover:</p>
              {[
                { icon: '💸', title: 'Scam & Payment Fraud Loss', desc: 'Reimbursement for losses where you were deceived into authorising a payment — the biggest gap in current protection.' },
                { icon: '🪪', title: 'Identity Recovery Costs', desc: 'Legal fees, lost earnings, and out-of-pocket costs to restore your identity after theft or misuse.' },
                { icon: '📞', title: 'Expert Recovery Support', desc: 'Dedicated case managers to help you navigate reporting, bank disputes, and credit bureau corrections.' },
                { icon: '🔐', title: 'Cyber & Account Protection', desc: 'Cover for account takeover losses and unauthorised access to banking or investment accounts.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">{item.title}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
              <p className="text-xs text-slate-500 pt-2">This product is in development and not yet available for purchase. No obligation applies to expressions of interest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal providers */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Where to Get Personal Protection</h2>
          <p className="text-slate-600 text-sm mb-8">Banks, insurers, and free services available to you right now.</p>
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
          <p className="text-slate-600 text-sm mb-6">Business fraud cover — commercial crime, fidelity, and cyber insurance — is available through our network of licensed advisers right now.</p>
          <Link href="/business" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Explore Business Protection →
          </Link>
        </div>
      </section>
    </>
  );
}
