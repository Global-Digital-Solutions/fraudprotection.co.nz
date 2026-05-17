import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { personalTypes } from '@/data/personalTypes';
import FaqAccordion from '@/components/FaqAccordion';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return personalTypes.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const type = personalTypes.find((t) => t.slug === params.slug);
  if (!type) return {};
  return {
    title: type.metaTitle,
    description: type.metaDescription,
    alternates: { canonical: `https://www.fraudinsurance.co.nz/personal/${type.slug}/` },
    openGraph: {
      title: type.metaTitle,
      description: type.metaDescription,
      url: `https://www.fraudinsurance.co.nz/personal/${type.slug}/`,
      images: [{ url: type.heroImage, width: 1600, alt: `${type.name} protection NZ` }],
    },
  };
}

export default function PersonalTypePage({ params }: Props) {
  const type = personalTypes.find((t) => t.slug === params.slug);
  if (!type) notFound();

  const relatedTypes = personalTypes.filter((t) => type.relatedTypes.includes(t.slug));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: type.metaTitle,
    description: type.metaDescription,
    image: type.heroImage,
    datePublished: '2026-01-01',
    dateModified: '2026-05-17',
    author: { '@type': 'Organization', name: 'FraudInsurance.co.nz', url: 'https://www.fraudinsurance.co.nz/about/' },
    publisher: { '@type': 'Organization', name: 'FraudInsurance.co.nz', url: 'https://www.fraudinsurance.co.nz/' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.fraudinsurance.co.nz/personal/${type.slug}/` },
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
          <li><Link href="/personal" className="hover:text-red-600">Personal Protection</Link></li>
          <li><span className="text-slate-300 mx-1">/</span></li>
          <li><span className="text-slate-700 font-medium">{type.name}</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative text-white min-h-[50vh] flex items-end">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${type.heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="text-xs font-medium bg-slate-700/80 backdrop-blur-sm px-3 py-1 rounded-full">Personal Protection Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 drop-shadow-md">{type.icon} {type.name}</h1>
          <p className="text-slate-200 text-lg max-w-2xl">{type.tagline}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">

              {/* Stats */}
              <div className="grid sm:grid-cols-2 gap-4">
                {type.stats.map((stat) => (
                  <div key={stat.label} className="bg-slate-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-3">What is {type.name}?</h2>
                <p className="text-sm text-slate-700 leading-relaxed">{type.description}</p>
                {type.details && <p className="text-sm text-slate-600 mt-3 leading-relaxed">{type.details}</p>}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 text-xs text-slate-500 border-l-2 border-red-300 pl-4">
                <div>
                  <span className="font-medium text-slate-700">Written by </span>
                  <Link href="/about/" className="text-red-600 hover:underline font-medium">FraudInsurance Editorial Team</Link>
                  <span className="mx-2">·</span>
                  <span>Updated May 2026</span>
                </div>
              </div>

              {/* What it covers */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">What {type.name} Involves</h2>
                <ul className="space-y-2">
                  {type.whatItCovers.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to protect */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">How to Protect Yourself</h2>
                <ul className="space-y-3">
                  {type.howToProtect.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ul>
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
                  <h2 className="text-lg font-bold text-slate-900 mb-4">Related Fraud Guides</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {relatedTypes.map((t) => (
                      <Link key={t.slug} href={`/personal/${t.slug}`} className="group border-2 border-slate-200 rounded-xl p-4 hover:border-red-300 transition-all">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-semibold text-slate-900 group-hover:text-red-700 text-sm">{t.name}</div>
                        <div className="text-xs text-slate-500 mt-1 line-clamp-2">{t.tagline}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Where to go */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-5 sticky top-4">
                <h3 className="font-bold text-slate-900 mb-3">Where to Get Help</h3>
                <div className="space-y-3">
                  {type.whereToGo.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-slate-200 bg-white rounded-xl p-3 hover:border-slate-400 transition-colors group"
                    >
                      <div className="font-semibold text-slate-900 text-sm group-hover:text-red-700 mb-1">{resource.name} ↗</div>
                      <div className="text-xs text-slate-500">{resource.description}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
                <h3 className="font-semibold text-red-900 mb-3 text-sm">Immediate Assistance</h3>
                <div className="space-y-2">
                  <a href="tel:0508638723" className="block text-sm font-bold text-red-700 hover:text-red-800">Netsafe: 0508 638 723</a>
                  <a href="tel:105" className="block text-sm font-bold text-red-700 hover:text-red-800">NZ Police: 105</a>
                  <a href="tel:0800432273" className="block text-sm font-bold text-red-700 hover:text-red-800">IDCARE: 0800 432 273</a>
                </div>
              </div>

              {/* Business link */}
              <div className="border-2 border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">Business Owner?</h3>
                <p className="text-xs text-slate-500 mb-3">Get commercial crime, fidelity, and cyber insurance through our business section.</p>
                <Link href="/business" className="block text-center text-sm bg-slate-900 hover:bg-slate-700 text-white font-semibold py-2 rounded-lg transition-colors">
                  Business Protection →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Protect Your Business Too</h2>
          <p className="text-slate-300 mb-6">Personal fraud awareness is the first step. If you run a business, commercial crime and cyber insurance provide critical financial protection.</p>
          <Link href="/quote" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg">
            Get a Business Insurance Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
