import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Fraud News & Guides NZ 2026 | FraudProtection.co.nz',
  description: 'Expert guides on fraud protection, NZ scam statistics, business fraud insurance, and how to protect yourself and your business from fraud.',
  alternates: { canonical: 'https://www.fraudprotection.co.nz/blog/' },
};

const categoryColors: Record<string, string> = {
  personal: 'bg-slate-100 text-slate-700',
  business: 'bg-red-100 text-red-700',
  statistics: 'bg-orange-100 text-orange-700',
  advice: 'bg-green-100 text-green-700',
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95" />
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Fraud News & Guides</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Expert analysis, statistics, and practical guides on fraud protection for individuals and businesses.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <Link href={`/blog/${featured.slug}`} className="group block mb-10">
            <div className="grid lg:grid-cols-2 gap-0 border-2 border-slate-200 hover:border-red-200 rounded-2xl overflow-hidden transition-all hover:shadow-md">
              <div className="h-64 lg:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${featured.heroImage})` }} />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[featured.category] ?? 'bg-slate-100 text-slate-700'}`}>
                    {featured.category.charAt(0).toUpperCase() + featured.category.slice(1)}
                  </span>
                  <span className="text-xs text-slate-400">{featured.readTime}</span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs text-slate-400">{new Date(featured.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-red-700 mb-3 transition-colors">{featured.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <span className="text-red-600 font-semibold text-sm group-hover:text-red-700">Read the full guide →</span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border-2 border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-all hover:shadow-md"
              >
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${post.heroImage})` }} />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[post.category] ?? 'bg-slate-100 text-slate-700'}`}>
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-red-700 text-sm mb-2 line-clamp-2 transition-colors">{post.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Is Your Business Protected?</h2>
          <p className="text-red-200 mb-6">Get a tailored quote for commercial crime, fidelity, or cyber insurance from a licensed adviser.</p>
          <Link href="/quote" className="inline-block bg-white text-red-700 hover:bg-red-50 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
