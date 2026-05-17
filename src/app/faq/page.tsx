import type { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Fraud Insurance FAQs NZ 2026 | Common Questions Answered | FraudProtection.co.nz',
  description: 'Answers to the most common questions about fraud insurance in New Zealand — personal, business, cyber, fidelity, and commercial crime cover.',
  alternates: { canonical: 'https://www.fraudprotection.co.nz/faq/' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is there fraud insurance for individuals in New Zealand?', acceptedAnswer: { '@type': 'Answer', text: 'There is no standalone fraud or identity theft insurance product for individuals in NZ. Personal protection comes primarily through your bank\'s fraud guarantee (covering unauthorised transactions), the free IDCARE support service, and Netsafe. Some cyber insurance policies include personal fraud elements.' } },
    { '@type': 'Question', name: 'What is commercial crime insurance in NZ?', acceptedAnswer: { '@type': 'Answer', text: 'Commercial crime insurance covers financial losses to your business from criminal acts — both internal (employee fraud, embezzlement) and external (computer fraud, forgery, counterfeit currency). Products like Chubb\'s FraudProtector are purpose-built for NZ businesses.' } },
    { '@type': 'Question', name: 'Do NZ small businesses need cyber insurance?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — cyber attacks affect NZ SMEs at significant rates. The average ransomware recovery cost for a NZ small business is $50,000-$200,000. Cyber insurance covers these costs and is now among the most important forms of business insurance for NZ SMEs.' } },
  ],
};

const faqs = [
  {
    heading: 'Personal Fraud Protection',
    items: [
      { question: 'Is there fraud insurance for individuals in New Zealand?', answer: 'There is no standalone fraud or identity theft insurance product for individuals in NZ. Personal protection comes primarily through your bank\'s fraud guarantee (covering unauthorised transactions), the free IDCARE support service, and Netsafe. Some cyber insurance policies include personal fraud elements, but these are typically oriented toward businesses.' },
      { question: 'Will my bank refund me if I\'m scammed in NZ?', answer: 'It depends on the type of fraud. For "unauthorised" transactions — where a criminal accessed your account without your involvement — banks\' zero-liability guarantees should apply and you should be reimbursed. For "authorised" transactions — where you were tricked into sending money yourself — banks are not legally required to reimburse you, and only about 36% of victims recover funds. Report immediately and escalate to the Banking Ombudsman if your bank declines.' },
      { question: 'What should I do immediately if I\'ve been scammed?', answer: 'Act immediately: (1) Contact your bank to attempt a payment recall, (2) Report to Netsafe on 0508 638 723, (3) Report to NZ Police on 105, (4) If personal information was compromised, contact IDCARE on 0800 432 273, (5) If an investment scam, report to the FMA on 0800 434 566. Speed is critical — the faster you report, the better your recovery chances.' },
      { question: 'What is IDCARE and how can it help?', answer: 'IDCARE is Australasia\'s national identity and cyber support service, free to New Zealanders. If you\'ve been a victim of identity theft or cyber fraud, IDCARE assigns you a case manager who guides you through recovery — from reporting to police and credit bureaus through to contacting creditors about fraudulent accounts. Call 0800 432 273 or visit idcare.org/new-zealand.' },
      { question: 'How do I check if an investment is legitimate in NZ?', answer: 'Check the FMA\'s Financial Service Providers Register at fspr.govt.nz — any legitimate NZ financial adviser or firm must be registered. Also check the FMA\'s warning list at fma.govt.nz/consumers/scams/ for known scams. Request a Product Disclosure Statement — all regulated NZ investment offers must have one. If any of these checks fail, do not invest.' },
    ],
  },
  {
    heading: 'Business Fraud Insurance',
    items: [
      { question: 'What types of business fraud insurance are available in NZ?', answer: 'The main types are: (1) Commercial Crime Insurance — comprehensive cover for internal and external fraud; (2) Fidelity Insurance — specifically covers employee dishonesty and embezzlement; (3) Cyber Insurance — data breaches, ransomware, and cyber attack response costs; (4) Social Engineering Fraud Cover — BEC, CEO fraud, and payment diversion (usually an add-on to cyber); (5) Funds Transfer Fraud Insurance — fraudulent payment instructions and computer-initiated fraud.' },
      { question: 'What is the difference between fidelity and commercial crime insurance?', answer: 'Fidelity insurance specifically covers losses from dishonest or fraudulent acts by your own employees. Commercial crime insurance is broader — it covers both internal employee fraud AND external criminal acts such as computer fraud, forgery by third parties, and counterfeit currency. Most modern commercial crime policies include fidelity as a component.' },
      { question: 'Does commercial crime insurance cover social engineering / BEC losses?', answer: 'Standard commercial crime policies often do not cover social engineering fraud (BEC, CEO fraud) because the payment was "authorised" by your employee — even if obtained through deception. A specific social engineering endorsement is required. DUAL NZ offers this as an add-on to their cyber policy with up to $250,000 sublimit. Check your specific policy wording carefully.' },
      { question: 'Do NZ small businesses need cyber insurance?', answer: 'Yes — cyber attacks affect NZ SMEs at significant rates, and the average ransomware recovery cost for a NZ small business is $50,000-$200,000. Cyber insurance covers forensic investigation, system restoration, business interruption, and breach notification costs. The NZ Privacy Act 2020 also creates breach notification obligations, making cyber insurance particularly important.' },
      { question: 'How much does business fraud insurance cost in NZ?', answer: 'Rough premium ranges: Fidelity insurance from ~$800-$2,000/year for SMEs; Cyber insurance from ~$1,500-$4,000/year for $1-2m cover; Commercial crime from ~$1,500-$3,000/year. Premiums depend on your turnover, number of employees, sector, financial controls, and cover limits. Our quote service connects you with advisers who can provide tailored pricing.' },
      { question: 'Is a criminal conviction needed to make a fidelity insurance claim?', answer: 'No — fidelity insurance does not require a criminal conviction to make a claim. You generally need to establish, on the balance of probabilities, that an employee committed the dishonest act. This is a lower standard of proof than criminal conviction. Your insurer may assist with the investigation process.' },
    ],
  },
  {
    heading: 'Getting a Quote',
    items: [
      { question: 'How do I get a business fraud insurance quote in NZ?', answer: 'Complete the quote form on our website and a licensed NZ insurance adviser will contact you within one business day. We work with advisers who specialise in commercial crime, cyber, and fidelity insurance for NZ businesses. The referral is free and there is no obligation to purchase.' },
      { question: 'Is FraudProtection.co.nz a licensed insurer?', answer: 'No — FraudProtection.co.nz is an information and referral service. We are not a licensed insurer or financial adviser. Business insurance enquiries are referred to licensed NZ insurance advisers who are regulated under NZ law and required to act in your best interests.' },
      { question: 'What information do I need to get a quote?', answer: 'For a preliminary quote, you\'ll typically need: business name and description, sector, number of employees, approximate annual turnover, and the type(s) of cover you\'re interested in. Your adviser will ask for more detail as the quote progresses, including information about your financial controls and existing insurance.' },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Answers to the most common questions about fraud protection and insurance in New Zealand.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {faqs.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">{section.heading}</h2>
              <FaqAccordion faqs={section.items} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-red-200 mb-6">Contact us directly or get a quote and our adviser network will answer your specific questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-red-700 hover:bg-red-50 font-bold px-6 py-3 rounded-xl transition-colors">Contact Us</Link>
            <Link href="/quote" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-colors">Get a Business Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
