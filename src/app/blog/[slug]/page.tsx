import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://www.fraudprotection.co.nz/blog/${post.slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.fraudprotection.co.nz/blog/${post.slug}/`,
      images: [{ url: post.heroImage, width: 1600, alt: post.title }],
      type: 'article',
    },
  };
}

const categoryColors: Record<string, string> = {
  personal: 'bg-slate-100 text-slate-700',
  business: 'bg-red-100 text-red-700',
  statistics: 'bg-orange-100 text-orange-700',
  advice: 'bg-green-100 text-green-700',
};

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.heroImage,
    datePublished: post.date,
    dateModified: '2026-05-17',
    author: {
      '@type': 'Organization',
      name: 'FraudProtection.co.nz Editorial Team',
      url: 'https://www.fraudprotection.co.nz/about/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FraudProtection.co.nz',
      url: 'https://www.fraudprotection.co.nz/',
      logo: { '@type': 'ImageObject', url: 'https://www.fraudprotection.co.nz/favicon-32x32.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.fraudprotection.co.nz/blog/${post.slug}/` },
  };

  const paragraphs = post.content.split('\n\n');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
          <li><Link href="/" className="hover:text-red-600">Home</Link></li>
          <li><span className="text-slate-300 mx-1">/</span></li>
          <li><Link href="/blog" className="hover:text-red-600">Blog</Link></li>
          <li><span className="text-slate-300 mx-1">/</span></li>
          <li className="text-slate-700 font-medium truncate max-w-[200px]">{post.title}</li>
        </ol>
      </nav>

      <section className="relative text-white min-h-[45vh] flex items-end">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-900/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[post.category] ?? 'bg-slate-100 text-slate-700'}`}>
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            <span className="text-xs text-slate-300">{post.readTime}</span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-400">
              {new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 max-w-3xl drop-shadow-md">{post.title}</h1>
          <p className="text-slate-200 max-w-2xl text-sm">{post.excerpt}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="flex items-center gap-3 text-xs text-slate-500 border-l-2 border-red-300 pl-4 mb-8">
                <div>
                  <span className="font-medium text-slate-700">Written by </span>
                  <Link href="/about/" className="text-red-600 hover:underline font-medium">FraudProtection.co.nz Editorial Team</Link>
                  <span className="mx-2">·</span>
                  <span>Updated {new Date(post.date).toLocaleDateString('en-NZ', { month: 'long', year: 'numeric' })}</span>
                </div>
              </div>

              <div className="prose prose-sm max-w-none">
                {paragraphs.map((para, i) => {
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return <h2 key={i} className="text-xl font-bold text-slate-900 mt-8 mb-3">{para.replace(/\*\*/g, '')}</h2>;
                  }
                  if (para.startsWith('*') && para.endsWith('*')) {
                    return <h3 key={i} className="text-base font-bold text-slate-800 mt-6 mb-2 italic">{para.replace(/\*/g, '')}</h3>;
                  }
                  if (para.startsWith('- ')) {
                    const items = para.split('\n').filter(l => l.startsWith('- '));
                    return (
                      <ul key={i} className="space-y-2 my-4">
                        {items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-700 text-sm">
                            <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  // Handle numbered lists
                  if (/^\d+\.\s/.test(para)) {
                    const items = para.split('\n').filter(l => /^\d+\.\s/.test(l));
                    return (
                      <ol key={i} className="space-y-2 my-4">
                        {items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-700 text-sm">
                            <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">{j + 1}.</span>
                            {item.replace(/^\d+\.\s/, '')}
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  return <p key={i} className="text-slate-700 leading-relaxed text-sm my-4">{para}</p>;
                })}
              </div>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-lg font-bold text-slate-900 mb-4">Related Articles</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {relatedPosts.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="group border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-all">
                        <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url(${p.heroImage})` }} />
                        <div className="p-3">
                          <h3 className="text-xs font-bold text-slate-900 group-hover:text-red-700 line-clamp-2 transition-colors">{p.title}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-red-600 text-white rounded-xl p-5 sticky top-4">
                <h3 className="font-bold mb-2">Business Insurance Quotes</h3>
                <p className="text-red-100 text-sm mb-4">Get a tailored quote for commercial crime, fidelity, or cyber insurance from a licensed NZ adviser.</p>
                <Link href="/quote" className="block w-full bg-white text-red-700 hover:bg-red-50 font-bold py-2.5 rounded-lg text-center text-sm transition-colors">
                  Get Free Quote →
                </Link>
              </div>

              <div className="border-2 border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Immediate Help</h3>
                <div className="space-y-2">
                  <a href="tel:0508638723" className="block text-sm font-bold text-red-600 hover:text-red-700">Netsafe: 0508 638 723</a>
                  <a href="tel:105" className="block text-sm font-bold text-red-600 hover:text-red-700">NZ Police: 105</a>
                  <a href="tel:0800432273" className="block text-sm font-bold text-red-600 hover:text-red-700">IDCARE: 0800 432 273</a>
                  <a href="tel:0800434566" className="block text-sm text-red-600 hover:text-red-700">FMA: 0800 434 566</a>
                </div>
              </div>

              <div className="border-2 border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Explore More</h3>
                <div className="space-y-2">
                  <Link href="/personal" className="block text-sm text-red-600 hover:text-red-700">Personal Protection →</Link>
                  <Link href="/business" className="block text-sm text-red-600 hover:text-red-700">Business Protection →</Link>
                  <Link href="/providers" className="block text-sm text-red-600 hover:text-red-700">View All Providers →</Link>
                  <Link href="/blog" className="block text-sm text-red-600 hover:text-red-700">All Articles →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Get Protected?</h2>
          <p className="text-red-200 mb-6">Whether you need personal protection resources or business insurance — we can help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/personal" className="bg-white text-red-700 hover:bg-red-50 font-bold px-6 py-3 rounded-xl transition-colors">Personal Protection →</Link>
            <Link href="/quote" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-colors">Business Quote →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
