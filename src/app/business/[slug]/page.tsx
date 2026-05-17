import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { businessTypes } from '@/data/businessTypes';
import { businessProviders } from '@/data/businessProviders';
import FaqAccordion from '@/components/FaqAccordion';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return businessTypes.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const type = businessTypes.find((t) => t.slug === params.slug);
  if (!type) return {};
  return {
    title: type.metaTitle,
    description: type.metaDescription,
    alternates: { canonical: `https://www.fraudinsurance.co.nz/business/${type.slug}/` },
    openGraph: {
      title: type.metaTitle,
      description: type.metaDescription,
      url: `https://www.fraudinsurance.co.nz/business/${type.slug}/`,
      images: [{ url: type.heroImage, width: 1600, alt: `${type.name} NZ` }],
    },
  };
}

const AUTHOR = {
  name: 'FraudInsurance.co.nz Editorial Team',
  url: 'https://www.fraudinsurance.co.nz/about/',
};

export default function BusinessTypePage({ params }: Props) {
  const type = businessTypes.find((t) => t.slug === params.slug);
  if (!type) notFound();

  const relatedTypes = businessTypes.filter((t) => type.relatedTypes.includes(t.slug));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: type.metaTitle,
    description: type.metaDescription,
    image: type.heroImage,
    datePublished: '2026-01-01',
    dateModified: '2026-05-17',
    author: { '@type': 'Organization', name: AUTHOR.name, url: AUTHOR.url },
    publisher: { '@type': 'Organization', name: 'FraudInsurance.co.nz', url: 'https://www.fraudinsurance.co.nz/' },
  };

  const faqSchema = type.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: type.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
          <li><Link href="/" className="hover:text-red-600">Home</Link></li>
          <li><span className="text-slate-300 mx-1">/</span></li>
          <li><Link href="/business" className="hover:text-red-600">Business Protection</Link></li>
          <li><span className="text-slate-300 mx-1">/</span></li>
          <li><span className="text-slate-700 font-medium">{type.name}</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative text-white min-h-[50vh] flex items-end">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${type.heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-slate-900/65 to-slate-900/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="text-xs font-medium bg-red-600/80 backdrop-blur-sm px-3 py-1 rounded-full">Business Insurance Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 drop-shadow-md">{type.name}</h1>
          <p className="text-slate-200 text-lg max-w-2xl mb-5">{type.tagline}</p>
          <Link href="/quote" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg">
            Get a Quote →
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">

              {/* Description */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-3">What is {type.shortName}?</h2>
                <p className="text-sm text-slate-700 leading-relaxed">{type.description}</p>
                {type.details && <p className="text-sm text-slate-600 mt-3 leading-relaxed">{type.details}</p>}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 text-xs text-slate-500 border-l-2 border-red-300 pl-4">
                <div>
                  <span className="font-medium text-slate-700">Written by </span>
                  <Link href="/about/" className="text-red-600 hover:underline font-medium">{AUTHOR.name}</Link>
                  <span className="mx-2">·</span>
                  <span>Updated May 2026</span>
                </div>
              </div>

              {/* Key risks */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Key Risks This Covers</h2>
                <ul className="space-y-2">
                  {type.keyRisks.map((risk) => (
                    <li key={risk} className="flex items-start gap-3 text-sm text-slate-700">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What it covers */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">What {type.shortName} Covers</h2>
                <ul className="space-y-2">
                  {type.whatItCovers.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who benefits */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Who Needs {type.shortName}?</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {type.whoBenefits.map((who) => (
                    <div key={who} className="flex items-start gap-2 text-sm text-slate-700 bg-slate-50 rounded-lg p-3">
                      <svg className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      {who}
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical cost */}
              <div className="border-l-4 border-red-400 pl-5 py-2">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">Typical Premium Range</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{type.typicalCost}</p>
              </div>

              {/* FAQs */}
              {type.faqs.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FaqAccordion faqs={type.faqs} />
                </div>
              )}

              {/* Related types */}
              {relatedTypes.length > 0 && (
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-4">Related Insurance Types</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {relatedTypes.map((t) => (
                      <Link key={t.slug} href={`/business/${t.slug}`} className="group border-2 border-slate-200 rounded-xl p-4 hover:border-red-300 transition-all">
                          <div className="font-semibold text-slate-900 group-hover:text-red-700 text-sm transition-colors">{t.name}</div>
                        <div className="text-xs text-slate-500 mt-1 line-clamp-2">{t.tagline}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Quote CTA */}
              <div className="bg-red-600 text-white rounded-xl p-5 sticky top-4">
                <h3 className="font-bold mb-2">Get a Tailored Quote</h3>
                <p className="text-red-100 text-sm mb-4">Complete our brief form and a licensed adviser will contact you with options for {type.shortName}.</p>
                <Link href="/quote" className="block w-full bg-white text-red-700 hover:bg-red-50 font-bold py-2.5 rounded-lg text-center text-sm transition-colors">
                  Start Free Quote →
                </Link>
              </div>

              {/* Providers */}
              <div className="border-2 border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Key Providers</h3>
                <div className="space-y-2">
                  {businessProviders.slice(0, 5).map((p) => (
                    <div key={p.id} className="flex items-center justify-between py-1.5 px-3 rounded-lg border border-slate-200 text-sm">
                      <span className="font-medium text-slate-700 text-xs">{p.name}</span>
                      <span className={`text-xs ${p.type === 'insurer' ? 'text-red-500' : 'text-slate-400'}`}>
                        {p.type === 'insurer' ? 'Insurer' : 'Broker'}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href="/providers" className="block mt-3 text-xs text-center text-red-600 hover:text-red-700 font-medium">
                  View all providers →
                </Link>
              </div>

              {/* Sectors */}
              <div className="border-2 border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">By Business Sector</h3>
                <div className="space-y-2">
                  {['small-business', 'finance-banking', 'professional-services', 'nonprofit-charity'].map((s) => (
                    <Link key={s} href={`/sectors/${s}`} className="block text-sm text-red-600 hover:text-red-700 capitalize">
                      {s.replace('-', ' ').replace('-', ' ')} →
                    </Link>
                  ))}
                  <Link href="/sectors" className="block text-sm text-slate-600 hover:text-slate-900 mt-2">All sectors →</Link>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
                <p className="text-xs text-amber-800 leading-relaxed">
                  This page provides general information only. Insurance needs vary by business. Always consult a licensed insurance adviser before purchasing. Our quote form connects you to licensed advisers only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Protect Your Business from {type.name}</h2>
          <p className="text-red-200 mb-6">Get a tailored quote from a licensed insurance adviser — no obligation, no pressure.</p>
          <Link href="/quote" className="inline-block bg-white text-red-700 hover:bg-red-50 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg">
            Get a Free Business Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
