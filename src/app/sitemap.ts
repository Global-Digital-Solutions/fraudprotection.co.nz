import type { MetadataRoute } from 'next'

const SITE = 'https://www.fraudinsurance.co.nz'

/**
 * Generated rather than static.
 *
 * The previous public/sitemap.xml carried a hardcoded lastmod of 2026-05-17 on
 * every one of its 48 URLs. A sitemap whose dates never move gives Google no
 * reason to come back after the first read, which is how a site that is fully
 * indexed still goes stale. Dates now move with each deployment.
 */
const ROUTES = [
  { path: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/personal/', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/business/', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/providers/', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/sectors/', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/blog/', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/quote/', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/about/', changeFrequency: 'monthly' as const, priority: 0.5 },
  { path: '/contact/', changeFrequency: 'monthly' as const, priority: 0.5 },
  { path: '/faq/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/personal/identity-theft/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/personal/card-fraud/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/personal/online-scams/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/personal/account-takeover/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/personal/investment-scams/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/business/commercial-crime/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/business/fidelity-insurance/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/business/cyber-insurance/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/business/social-engineering/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/business/funds-transfer-fraud/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/sectors/small-business/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/sectors/finance-banking/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/sectors/retail-ecommerce/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/sectors/professional-services/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/sectors/nonprofit-charity/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/sectors/healthcare/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/sectors/construction-property/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/nz-fraud-statistics-2025/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/protect-yourself-online-scams-nz/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/fidelity-insurance-nz-businesses/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/cyber-insurance-nz-small-businesses/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/identity-theft-nz-what-to-do/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/employee-fraud-nz-businesses/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/social-engineering-attacks-nz/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/romance-scams-nz/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/investment-scam-warning-signs-nz/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/business-email-compromise-nz/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/bank-fraud-protection-nz/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/commercial-crime-vs-cyber-insurance-nz/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/what-is-fraud-insurance-nz/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/cyber-insurance-vs-commercial-crime-nz/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/how-to-make-a-fraud-insurance-claim-nz/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/nz-privacy-act-2020-business-obligations/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/protect-your-business-from-employee-fraud/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog/investment-scam-warning-signs-nz-2026/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/privacy/', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/terms/', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/disclaimer/', changeFrequency: 'yearly' as const, priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const built = new Date()
  return ROUTES.map(r => ({
    url: `${SITE}${r.path}`,
    lastModified: built,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
