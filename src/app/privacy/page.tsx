import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | FraudInsurance.co.nz',
  description: 'Privacy Policy for FraudInsurance.co.nz. How we collect, use, and protect your personal information under the Privacy Act 2020.',
  alternates: { canonical: 'https://www.fraudinsurance.co.nz/privacy/' },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-slate-900 border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: 17 May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-700 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who We Are</h2>
              <p>FraudInsurance.co.nz (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an insurance information and referral service operated by Cover4You. We connect New Zealanders with licensed insurance advisers and brokers specialising in fraud protection insurance. Our contact email is <a href="mailto:hello@cover4you.co.nz" className="text-red-600 hover:underline">hello@cover4you.co.nz</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
              <p>We collect personal information that you provide voluntarily when submitting a quote request or contacting us, including your name, email address, phone number, business name and size, type of cover required, and any other details you choose to share. We also collect standard website usage data through Google Analytics (GA4), including page views, session duration, and general geographic location.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
              <p>We use your personal information to match you with appropriate licensed insurance advisers and brokers, to respond to your enquiries, and to improve our service. We do not sell your personal information to third parties other than the licensed advisers we refer you to as part of our core service.</p>
              <p className="mt-3">Website analytics data is used in aggregate form only to understand how visitors use FraudInsurance.co.nz and to improve our content and user experience.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Sharing Your Information</h2>
              <p>When you submit a quote request, your information is forwarded to one or more licensed insurance advisers or brokers who will contact you directly to discuss your insurance needs. These professionals are regulated under the Financial Markets Conduct Act 2013 and are bound by their own privacy obligations under the Privacy Act 2020.</p>
              <p className="mt-3">We do not share your information with any other third parties except where required by law.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data Security</h2>
              <p>We take reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. Quote request data is transmitted securely and stored only as long as necessary to fulfil the referral purpose.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Your Rights Under the Privacy Act 2020</h2>
              <p>Under the Privacy Act 2020, you have the right to access personal information we hold about you and to request corrections where that information is inaccurate, incomplete, or misleading. To exercise these rights, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-red-600 hover:underline">hello@cover4you.co.nz</a>. We will respond within 20 working days.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Cookies and Analytics</h2>
              <p>We use cookies and Google Analytics (GA4) to understand how visitors interact with our website. Analytics data is anonymised and aggregated. By using our website, you consent to our use of cookies for analytics purposes. You can disable cookies in your browser settings or opt out of Google Analytics at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">tools.google.com/dlpage/gaoptout</a>, though this may affect website functionality.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. External Links</h2>
              <p>FraudInsurance.co.nz contains links to external websites including insurance providers, government agencies, and support services. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any websites you visit.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of our website following any changes constitutes your acceptance of the revised policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Contact</h2>
              <p>For privacy-related enquiries or to exercise your rights under the Privacy Act 2020, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-red-600 hover:underline">hello@cover4you.co.nz</a>. If you are not satisfied with our response, you may contact the Office of the Privacy Commissioner at <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">privacy.org.nz</a>.</p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
