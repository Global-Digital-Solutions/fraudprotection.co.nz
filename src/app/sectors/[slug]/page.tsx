import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { businessSectors } from '@/data/businessSectors';
import FaqAccordion from '@/components/FaqAccordion';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return businessSectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sector = businessSectors.find((s) => s.slug === params.slug);
  if (!sector) return {};
  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    alternates: { canonical: `https://www.fraudinsurance.co.nz/sectors/${sector.slug}/` },
  };
}

export default function SectorPage({ params }: Props) {
  const sector = businessSectors.find((s) => s.slug === params.slug);
  if (!sector) notFound();

  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
          <li><Link href="/" className="hover:text-red-600">Home</Link></li>
          <li><span className="text-slate-300 mx-1">/</span></li>
          <li><Link href="/business" className="hover:text-red-600">Business Protection</Link></li>
          <li><span className="text-slate-300 mx-1">/</span></li>
          <li><Link href="/sectors" className="hover:text-red-600">By Sector</Link></li>
          <li><span className="text-slate-300 mx-1">/</span></li>
          <li><span className="text-slate-700 font-medium">{sector.name}</span></li>
        </ol>
      </nav>

      <section className="relative text-white min-h-[45vh] flex items-end">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sector.heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-slate-900/60 to-slate-900/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs font-medium bg-red-600/80 px-3 py-1 rounded-full">Business Sector Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{sector.icon} {sector.name} Fraud Insurance</h1>
          <p className="text-slate-200 max-w-2xl">{sector.tagline}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-3">Fraud Risks for {sector.name}</h2>
                <p className="text-sm text-slate-700 leading-relaxed">{sector.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Top Fraud Risks in Your Sector</h2>
                <ul className="space-y-2">
                  {sector.topRisks.map((risk) => (
                    <li key={risk} className="flex items-start gap-3 text-sm text-slate-700">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Recommended Insurance Cover</h2>
                <div className="flex flex-wrap gap-2">
                  {sector.recommendedCover.map((cover) => (
                    <span key={cover} className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full">{cover}</span>
                  ))}
                </div>
              </div>

              {sector.faqs.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FaqAccordion faqs={sector.faqs} />
                </div>
              )}
            </div>

            <div className="space-y-5">
              <div className="bg-red-600 text-white rounded-xl p-5 sticky top-4">
                <h3 className="font-bold mb-2">Get a {sector.name} Insurance Quote</h3>
                <p className="text-red-100 text-sm mb-4">A licensed adviser will recommend cover specific to your sector and risk profile.</p>
                <Link href="/quote" className="block w-full bg-white text-red-700 hover:bg-red-50 font-bold py-2.5 rounded-lg text-center text-sm transition-colors">
                  Start Free Quote →
                </Link>
              </div>

              <div className="border-2 border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Coverage Types</h3>
                <div className="space-y-2">
                  <Link href="/business/commercial-crime" className="block text-sm text-red-600 hover:text-red-700">Commercial Crime Insurance →</Link>
                  <Link href="/business/fidelity-insurance" className="block text-sm text-red-600 hover:text-red-700">Fidelity Insurance →</Link>
                  <Link href="/business/cyber-insurance" className="block text-sm text-red-600 hover:text-red-700">Cyber Insurance →</Link>
                  <Link href="/business/social-engineering" className="block text-sm text-red-600 hover:text-red-700">Social Engineering Cover →</Link>
                  <Link href="/business" className="block text-sm text-slate-600 hover:text-slate-900 mt-2">All coverage types →</Link>
                </div>
              </div>

              <div className="border-2 border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Other Sectors</h3>
                <div className="space-y-2">
                  <Link href="/sectors/small-business" className="block text-sm text-red-600 hover:text-red-700">Small Business →</Link>
                  <Link href="/sectors/finance-banking" className="block text-sm text-red-600 hover:text-red-700">Finance & Banking →</Link>
                  <Link href="/sectors/professional-services" className="block text-sm text-red-600 hover:text-red-700">Professional Services →</Link>
                  <Link href="/sectors" className="block text-sm text-slate-600 hover:text-slate-900 mt-2">All sectors →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Get {sector.name} Fraud Insurance</h2>
          <p className="text-red-200 mb-6">Protect your {sector.name.toLowerCase()} business against the most common fraud risks in your sector.</p>
          <Link href="/quote" className="inline-block bg-white text-red-700 hover:bg-red-50 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
