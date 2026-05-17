import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="font-bold text-white text-base">FraudProtection<span className="text-red-400">.co.nz</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Your guide to personal and business fraud protection insurance. Expert guides, provider comparisons, and qualified adviser referrals.
            </p>
            <p className="text-xs text-slate-500">
              Contact: <a href="mailto:hello@cover4you.co.nz" className="hover:text-slate-300">hello@cover4you.co.nz</a>
            </p>
          </div>

          {/* Personal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Personal Protection</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/personal" className="hover:text-white transition-colors">Personal Fraud Hub</Link></li>
              <li><Link href="/personal/identity-theft" className="hover:text-white transition-colors">Identity Theft</Link></li>
              <li><Link href="/personal/card-fraud" className="hover:text-white transition-colors">Card & Payment Fraud</Link></li>
              <li><Link href="/personal/online-scams" className="hover:text-white transition-colors">Online Scams</Link></li>
              <li><Link href="/personal/account-takeover" className="hover:text-white transition-colors">Account Takeover</Link></li>
              <li><Link href="/personal/investment-scams" className="hover:text-white transition-colors">Investment Scams</Link></li>
              <li><Link href="/providers" className="hover:text-white transition-colors">Personal Providers</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Business Protection</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/business" className="hover:text-white transition-colors">Business Fraud Hub</Link></li>
              <li><Link href="/business/commercial-crime" className="hover:text-white transition-colors">Commercial Crime Insurance</Link></li>
              <li><Link href="/business/fidelity-insurance" className="hover:text-white transition-colors">Fidelity Insurance</Link></li>
              <li><Link href="/business/cyber-insurance" className="hover:text-white transition-colors">Cyber Insurance</Link></li>
              <li><Link href="/business/social-engineering" className="hover:text-white transition-colors">Social Engineering Cover</Link></li>
              <li><Link href="/business/funds-transfer-fraud" className="hover:text-white transition-colors">Funds Transfer Fraud</Link></li>
              <li><Link href="/sectors" className="hover:text-white transition-colors">By Business Sector</Link></li>
              <li><Link href="/quote" className="hover:text-white transition-colors">Get a Business Quote</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">Fraud News & Guides</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><a href="https://www.netsafe.org.nz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Netsafe NZ ↗</a></li>
              <li><a href="https://www.cert.govt.nz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CERT NZ ↗</a></li>
              <li><a href="https://www.fma.govt.nz/consumers/scams/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FMA Scam Alerts ↗</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 pt-8 text-xs text-slate-500 space-y-2">
          <p>
            FraudProtection.co.nz is an information and referral service. We are not a licensed insurer or financial adviser. Business insurance enquiries are referred to licensed insurance advisers and brokers who are regulated under New Zealand law. Personal protection information links directly to providers and official resources.
          </p>
          <p>
            The information on this website is general in nature and does not constitute financial advice. Always seek professional advice before purchasing insurance products.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <span>© 2026 FraudProtection.co.nz</span>
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Use</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
