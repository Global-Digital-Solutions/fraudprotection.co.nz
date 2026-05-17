import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { businessProviders } from '@/data/businessProviders';

export const metadata: Metadata = {
  title: 'Fraud Protection Insurance NZ 2026 | Personal & Business Cover | FraudInsurance.co.nz',
  description: '$3 billion lost to fraud last year. Protect yourself and your business — personal scam protection and commercial crime, fidelity & cyber insurance from leading local providers.',
  alternates: { canonical: 'https://www.fraudinsurance.co.nz/' },
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
  name: 'FraudInsurance.co.nz',
  url: 'https://www.fraudinsurance.co.nz/',
  logo: { '@type': 'ImageObject', url: 'https://www.fraudinsurance.co.nz/favicon-32x32.png' },
  contactPoint: { '@type': 'ContactPoint', email: 'hello@cover4you.co.nz', contactType: 'customer service' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FraudInsurance.co.nz',
  url: 'https://www.fraudinsurance.co.nz/',
  potentialAction: { '@type': 'SearchAction', target: 'https://www.fraudinsurance.co.nz/search?q={search_term_string}', 'query-input': 'required name=search_term_string' },
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
                <Link
                  href="/personal"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  Explore personal cover
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
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
                  <Link href="/personal" className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                    View All Personal Protection Options →
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
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #ef4444 0%, transparent 50%), radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              New Zealand Fraud Statistics 2025–26
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Why Fraud Protection Matters Now</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The fraud epidemic is accelerating. These are the numbers behind the risk — and why protection is no longer optional.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                stat: '↑ 300%',
                statColor: 'text-red-400',
                statBg: 'bg-red-500/10 border-red-500/20',
                title: 'AI-Powered Scams Are Getting Smarter',
                body: 'AI enables hyper-personalised phishing, deepfake voice calls, and convincing fake platforms at scale. In 2025, AI-generated scam content became indistinguishable from legitimate communications.',
                cta: 'See personal protection →',
                href: '/personal/online-scams',
              },
              {
                stat: 'Only 36%',
                statColor: 'text-orange-400',
                statBg: 'bg-orange-500/10 border-orange-500/20',
                title: 'Banks Cover Less Than You Think',
                body: 'Only 36% of scam victims who report to their bank recover funds. When you were tricked into authorising a payment — as in most modern scams — banks often have no legal obligation to refund you.',
                cta: 'Understand the gap →',
                href: '/personal/card-fraud',
              },
              {
                stat: '$150k+',
                statColor: 'text-amber-400',
                statBg: 'bg-amber-500/10 border-amber-500/20',
                title: 'Business Fraud Has a Human Element',
                body: 'Most business fraud is committed by employees, not hackers. The average case runs 18 months before detection and costs $150,000+. Controls reduce risk — insurance protects when they fail.',
                cta: 'Explore fidelity cover →',
                href: '/business/fidelity-insurance',
              },
              {
                stat: 'Mandatory',
                statColor: 'text-blue-400',
                statBg: 'bg-blue-500/10 border-blue-500/20',
                title: 'Privacy Act 2020 Creates New Obligations',
                body: 'Mandatory breach notification under the Privacy Act means businesses face notification costs, legal fees, and potential fines. Non-compliance penalties can exceed the insurance premium itself.',
                cta: 'Learn about cyber cover →',
                href: '/business/cyber-insurance',
              },
              {
                stat: '<10%',
                statColor: 'text-green-400',
                statBg: 'bg-green-500/10 border-green-500/20',
                title: 'Recovery Is Harder Than Prevention',
                body: 'Investment scam victims recover less than 10% of losses. Ransomware recovery costs routinely exceed $100k. Identity theft takes 200+ hours to resolve. Prevention costs far less.',
                cta: 'Compare your options →',
                href: '/business',
              },
              {
                stat: '1 in 4',
                statColor: 'text-purple-400',
                statBg: 'bg-purple-500/10 border-purple-500/20',
                title: 'Anyone Can Be Targeted',
                body: '23% of NZ adults lost money to scams last year. Fraud doesn\'t discriminate by age, income, or education. The right protections make the difference between a near-miss and a devastating loss.',
                cta: 'Protect yourself now →',
                href: '/personal',
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex flex-col bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
              >
                {/* Stat badge */}
                <div className={`inline-flex items-center self-start border rounded-lg px-3 py-1.5 mb-4 ${card.statBg}`}>
                  <span className={`text-xl font-black leading-none ${card.statColor}`}>{card.stat}</span>
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-red-300 transition-colors leading-snug">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{card.body}</p>
                <div className={`mt-4 text-xs font-semibold flex items-center gap-1 ${card.statColor} group-hover:gap-2 transition-all`}>
                  {card.cta}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
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
