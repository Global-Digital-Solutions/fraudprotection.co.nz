import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { businessProviders } from '@/data/businessProviders';

export const metadata: Metadata = {
  title: 'Fraud Protection Insurance NZ 2026 | Personal & Business Cover | FraudProtection.co.nz',
  description: 'New Zealand lost $3 billion to fraud in 2025. Protect yourself and your business — personal scam protection and commercial crime, fidelity & cyber insurance from NZ\'s leading providers.',
  alternates: { canonical: 'https://www.fraudprotection.co.nz/' },
};

const stats = [
  { value: '$3 billion', label: 'Lost to fraud last year', color: 'text-red-400' },
  { value: '30%', label: 'Year-on-year increase — and still climbing', color: 'text-orange-400' },
  { value: '82%', label: 'Of us are targeted by scammers every week', color: 'text-amber-400' },
  { value: '36%', label: 'Recovery rate after reporting to your bank', color: 'text-slate-300' },
];

const personalPathways = [
  { slug: 'identity-theft', name: 'Identity Theft', icon: '🪪', desc: 'Someone using your name, IRD number, or ID to commit fraud' },
  { slug: 'card-fraud', name: 'Card Fraud', icon: '💳', desc: 'Unauthorised use of your debit or credit card' },
  { slug: 'online-scams', name: 'Online Scams', icon: '🎣', desc: 'Phishing, fake investments, and romance scams' },
  { slug: 'account-takeover', name: 'Account Takeover', icon: '🔓', desc: 'SIM swap and credential theft draining your accounts' },
  { slug: 'investment-scams', name: 'Investment Scams', icon: '📈', desc: 'Fake platforms and unlicensed advisers stealing your savings' },
];

const businessPathways = [
  { slug: 'commercial-crime', name: 'Commercial Crime', icon: '🏢', desc: 'Internal and external criminal acts against your business' },
  { slug: 'fidelity-insurance', name: 'Fidelity Insurance', icon: '👤', desc: 'Protect against employee fraud and embezzlement' },
  { slug: 'cyber-insurance', name: 'Cyber Insurance', icon: '🛡️', desc: 'Data breaches, ransomware, and cyber attack costs' },
  { slug: 'social-engineering', name: 'Social Engineering', icon: '🎭', desc: 'CEO fraud, BEC, and fake invoice payment diversion' },
  { slug: 'funds-transfer-fraud', name: 'Funds Transfer Fraud', icon: '💸', desc: 'Cover for fraudulent payment instructions and diversions' },
];

const recentPosts = blogPosts.slice(0, 3);
const featuredProviders = businessProviders.filter(p => p.featured);

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FraudProtection.co.nz',
  url: 'https://www.fraudprotection.co.nz/',
  logo: { '@type': 'ImageObject', url: 'https://www.fraudprotection.co.nz/favicon-32x32.png' },
  contactPoint: { '@type': 'ContactPoint', email: 'hello@cover4you.co.nz', contactType: 'customer service' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FraudProtection.co.nz',
  url: 'https://www.fraudprotection.co.nz/',
  potentialAction: { '@type': 'SearchAction', target: 'https://www.fraudprotection.co.nz/search?q={search_term_string}', 'query-input': 'required name=search_term_string' },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 opacity-90" />
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              $3 Billion Lost to Fraud Last Year — Up 30% on the Year Before
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Don&apos;t Become<br />
              <span className="text-red-400">a Fraud Statistic</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
              Fraud is the fastest-growing crime in the country — hitting families, sole traders, and businesses that never saw it coming. Whether you need personal protection or commercial cover, we&apos;ll show you what&apos;s available and who to call when it matters most.
            </p>
            {/* Dual pathway CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/personal"
                className="group flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-lg"
              >
                <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Personal Protection</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link
                href="/business"
                className="group flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Business Protection</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics bar */}
      <section className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-4">Source: Netsafe / GASA NZ Scam Report 2025</p>
        </div>
      </section>

      {/* Dual pathway section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Personal */}
            <div className="border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Personal Protection</h2>
                    <p className="text-slate-300 text-sm">Individual & family fraud cover</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Understand your options for personal fraud protection — from your bank's fraud guarantees to emerging cyber cover. Direct links to providers and free support services.
                </p>
                <div className="inline-flex items-center gap-1.5 bg-slate-700/50 text-slate-200 text-xs px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  Direct insurers
                </div>
              </div>
              <div className="p-6 space-y-2">
                {personalPathways.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/personal/${p.slug}`}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-2xl w-10 text-center">{p.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-slate-700">{p.name}</div>
                      <div className="text-xs text-slate-500">{p.desc}</div>
                    </div>
                    <svg className="w-4 h-4 text-slate-300 group-hover:text-slate-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                ))}
                <div className="pt-3 border-t border-slate-100">
                  <Link href="/personal" className="flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-slate-900 font-medium">
                    View all personal protection options →
                  </Link>
                </div>
              </div>
            </div>

            {/* Business */}
            <div className="border-2 border-red-200 rounded-2xl overflow-hidden hover:border-red-300 transition-colors">
              <div className="bg-gradient-to-br from-red-700 to-red-900 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Business Protection</h2>
                    <p className="text-red-200 text-sm">Commercial, corporate & SME cover</p>
                  </div>
                </div>
                <p className="text-red-100 text-sm leading-relaxed mb-4">
                  Commercial crime, fidelity, and cyber insurance for local businesses. Get a tailored quote from a licensed insurance adviser — form submissions sent directly to specialists.
                </p>
                <div className="inline-flex items-center gap-1.5 bg-red-600/50 text-red-100 text-xs px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Our trusted brokers find the best deal for you
                </div>
              </div>
              <div className="p-6 space-y-2">
                {businessPathways.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/business/${p.slug}`}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 transition-colors"
                  >
                    <span className="text-2xl w-10 text-center">{p.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-red-700">{p.name}</div>
                      <div className="text-xs text-slate-500">{p.desc}</div>
                    </div>
                    <svg className="w-4 h-4 text-slate-300 group-hover:text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                ))}
                <div className="pt-3 border-t border-slate-100">
                  <Link href="/quote" className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                    Get a Business Insurance Quote →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why protection matters */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Fraud Protection Matters Now</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The fraud epidemic is accelerating. Understanding your risk is the first step to protection.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                ),
                title: 'AI-Powered Scams Are Getting Smarter',
                body: 'Artificial intelligence is enabling criminals to create hyper-personalised phishing attacks, deepfake voice calls, and convincing fake investment platforms at scale. In 2025, AI-generated scam content became indistinguishable from legitimate communications.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: 'Banks Cover Less Than You Think',
                body: 'Only 36% of scam victims who report to their bank recover their funds. Banks reimburse unauthorised transactions, but when you were tricked into authorising a payment — as in most modern scams — they often have no legal obligation to refund you.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                ),
                title: 'Business Fraud Has a Human Element',
                body: 'The majority of business fraud is committed by employees, not external hackers. The average employee fraud runs 18 months before detection and costs $150,000+ per case. Controls reduce risk — insurance protects you when controls fail.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Privacy Act 2020 Creates New Obligations',
                body: 'The Privacy Act 2020 requires mandatory notification of serious data breaches. For businesses, this means notification costs, legal fees, and potential fines — all covered by cyber insurance. Non-compliance penalties can exceed the cost of the insurance itself.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                ),
                title: 'Recovery Is Harder Than Prevention',
                body: 'Investment scam victims recover less than 10% of lost funds. Ransomware recovery costs routinely exceed $100,000. Identity theft takes 200+ hours to resolve. Spending a few hundred dollars per year on prevention and protection is far more cost-effective than recovery.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: 'Anyone Can Be Targeted',
                body: '23% of adults lost money to scams last year — nearly one in four. Fraud does not discriminate by age, income, or education. Awareness and the right protections in place make the critical difference between a near-miss and a devastating loss.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Providers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Business Insurance Providers</h2>
              <p className="text-slate-600 text-sm mt-1">Leading commercial fraud and cyber insurance specialists</p>
            </div>
            <Link href="/providers" className="text-sm text-red-600 hover:text-red-700 font-medium">View all providers →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProviders.map((p) => (
              <div key={p.id} className="border-2 border-slate-200 hover:border-red-200 rounded-2xl p-5 transition-all hover:shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-slate-900">{p.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${p.type === 'insurer' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}>
                    {p.type === 'insurer' ? 'Insurer' : 'Broker'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-3 italic">{p.tagline}</p>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.products.map((prod) => (
                    <span key={prod} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{prod}</span>
                  ))}
                </div>
                <Link href="/quote" className="block w-full text-center text-sm bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors">
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Fraud News & Guides</h2>
              <p className="text-slate-600 text-sm mt-1">Stay informed on the latest fraud trends</p>
            </div>
            <Link href="/blog" className="text-sm text-red-600 hover:text-red-700 font-medium">View all articles →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div
                  className="h-44 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.heroImage})` }}
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      post.category === 'business' ? 'bg-red-100 text-red-700' :
                      post.category === 'statistics' ? 'bg-orange-100 text-orange-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-red-700 text-sm mb-2 line-clamp-2 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business CTA */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Business Covered</h2>
          <p className="text-red-200 text-lg mb-8">
            Employee fraud, cyber attacks, and payment diversion are not hypothetical risks — they're affecting businesses every day. A specialist adviser can find you comprehensive cover, often for less than you expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-red-700 hover:bg-red-50 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg">
              Get a Free Business Quote →
            </Link>
            <Link href="/business" className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-colors">
              Explore Business Cover
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency resources strip */}
      <section className="py-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-400 mb-4 font-medium">Immediate Fraud Assistance</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Netsafe', number: '0508 638 723', url: 'https://www.netsafe.org.nz/' },
              { name: 'NZ Police', number: '105', url: 'https://www.police.govt.nz/' },
              { name: 'IDCARE', number: '0800 432 273', url: 'https://www.idcare.org/new-zealand' },
              { name: 'CERT NZ', number: 'cert.govt.nz', url: 'https://www.cert.govt.nz/' },
              { name: 'FMA Scam Line', number: '0800 434 566', url: 'https://www.fma.govt.nz/consumers/scams/' },
            ].map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="text-center hover:text-white transition-colors">
                <div className="text-xs text-slate-500">{r.name}</div>
                <div className="text-sm font-bold text-slate-300 hover:text-white">{r.number}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
