import type { Metadata } from 'next';
import Link from 'next/link';
import { businessSectors } from '@/data/businessSectors';

export const metadata: Metadata = {
  title: 'Business Fraud Insurance by Sector NZ 2026 | FraudProtection.co.nz',
  description: 'Find fraud insurance specific to your industry — from small business and retail to finance, healthcare, construction, and not-for-profit.',
  alternates: { canonical: 'https://www.fraudprotection.co.nz/sectors/' },
};

export default function SectorsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-red-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/business" className="hover:text-white">Business Protection</Link>
            <span className="mx-1">/</span>
            <span className="text-slate-200">By Sector</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Fraud Insurance by Business Sector</h1>
          <p className="text-slate-300 text-lg max-w-2xl">Different industries face different fraud risks. Find guidance and insurance options specific to your sector.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessSectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectors/${sector.slug}`}
                className="group border-2 border-slate-200 hover:border-red-300 rounded-2xl p-6 transition-all hover:shadow-md"
              >
                <div className="text-3xl mb-3">{sector.icon}</div>
                <h2 className="font-bold text-slate-900 group-hover:text-red-700 mb-2 transition-colors">{sector.name}</h2>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">{sector.tagline}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {sector.topRisks.slice(0, 2).map((risk) => (
                    <span key={risk} className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-full">{risk}</span>
                  ))}
                </div>
                <span className="text-sm text-red-600 font-medium group-hover:text-red-700">
                  Sector-specific guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Not Sure What Cover You Need?</h2>
          <p className="text-red-200 mb-6">Submit a brief form and a licensed adviser will assess your risk profile and recommend appropriate cover.</p>
          <Link href="/quote" className="inline-block bg-white text-red-700 hover:bg-red-50 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
