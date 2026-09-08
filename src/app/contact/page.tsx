import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Contact FraudInsurance.co.nz | NZ Fraud Insurance Enquiries',
  description: 'Contact FraudInsurance.co.nz for business fraud insurance enquiries, general questions, or to report issues with the site.',
  alternates: { canonical: 'https://www.fraudinsurance.co.nz/contact/' },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95" />
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
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
                <p className="text-sm text-slate-600 mb-4">If you've been targeted by fraud right now, contact these services immediately:</p>
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
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
