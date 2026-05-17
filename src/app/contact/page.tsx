import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact FraudProtection.co.nz | NZ Fraud Insurance Enquiries',
  description: 'Contact FraudProtection.co.nz for business fraud insurance enquiries, general questions, or to report issues with the site.',
  alternates: { canonical: 'https://www.fraudprotection.co.nz/contact/' },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-slate-300 max-w-xl">Get in touch for business insurance enquiries, general questions, or feedback.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h2 className="font-bold text-slate-900 mb-4">General Enquiries</h2>
                <p className="text-sm text-slate-600 mb-3">For general questions about the website, corrections, or feedback:</p>
                <a href="mailto:hello@cover4you.co.nz" className="text-red-600 hover:text-red-700 font-semibold text-sm">hello@cover4you.co.nz</a>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="font-bold text-slate-900 mb-3">Business Insurance Quote</h2>
                <p className="text-sm text-slate-600 mb-4">To get a tailored business fraud insurance quote, use our dedicated quote form.</p>
                <Link href="/quote" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm">
                  Get a Business Quote →
                </Link>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h2 className="font-bold text-slate-900 mb-3">Emergency Fraud Assistance</h2>
                <p className="text-sm text-slate-600 mb-4">If you've been targeted by fraud right now, contact these NZ services immediately:</p>
                <div className="space-y-2">
                  <p className="text-sm"><strong className="text-slate-900">Netsafe:</strong> <a href="tel:0508638723" className="text-red-600 hover:text-red-700">0508 638 723</a></p>
                  <p className="text-sm"><strong className="text-slate-900">NZ Police:</strong> <a href="tel:105" className="text-red-600 hover:text-red-700">105</a></p>
                  <p className="text-sm"><strong className="text-slate-900">IDCARE:</strong> <a href="tel:0800432273" className="text-red-600 hover:text-red-700">0800 432 273</a></p>
                  <p className="text-sm"><strong className="text-slate-900">FMA (investment scams):</strong> <a href="tel:0800434566" className="text-red-600 hover:text-red-700">0800 434 566</a></p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
              <form action="https://formsubmit.co/hello@cover4you.co.nz" method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value="Website enquiry — FraudProtection.co.nz" />
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name</label>
                  <input name="name" required type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                  <input name="email" required type="email" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea name="message" required rows={5} className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 resize-none" />
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
