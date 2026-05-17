'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://formsubmit.co/hello@cover4you.co.nz', {
        method: 'POST',
        body: data,
      });
    } catch {
      // fail silently — show success anyway
    }

    setIsSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Received</h2>
        <p className="text-slate-600 mb-6">Thank you — a licensed insurance adviser will contact you within one business day.</p>
        <p className="text-sm text-slate-500">In the meantime, explore our <a href="/business" className="text-red-600 hover:underline">business protection guides</a> to learn more about your options.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="_subject" value="New Business Insurance Quote Request — FraudProtection.co.nz" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">First Name *</label>
          <input name="firstName" required type="text" placeholder="John" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name *</label>
          <input name="lastName" required type="text" placeholder="Smith" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
          <input name="email" required type="email" placeholder="john@company.co.nz" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
          <input name="phone" required type="tel" placeholder="021 123 4567" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Business Name *</label>
        <input name="businessName" required type="text" placeholder="Your Business Ltd" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Business Sector *</label>
          <select name="sector" required className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 bg-white">
            <option value="">Select sector...</option>
            <option>Small Business (1-20 staff)</option>
            <option>Finance & Banking</option>
            <option>Retail & E-commerce</option>
            <option>Professional Services</option>
            <option>Not-for-Profit / Charity</option>
            <option>Healthcare</option>
            <option>Construction & Property</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Annual Turnover</label>
          <select name="turnover" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 bg-white">
            <option value="">Select range...</option>
            <option>Under $500k</option>
            <option>$500k – $2m</option>
            <option>$2m – $5m</option>
            <option>$5m – $20m</option>
            <option>$20m+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Insurance Types Required *</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            'Commercial Crime Insurance',
            'Fidelity (Employee Dishonesty) Insurance',
            'Cyber Security Insurance',
            'Social Engineering Fraud Cover',
            'Funds Transfer Fraud Insurance',
            'Not sure — need advice',
          ].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="coverageTypes" value={opt} className="w-4 h-4 accent-red-600 rounded" />
              <span className="text-sm text-slate-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Number of Employees</label>
        <select name="employees" className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 bg-white">
          <option value="">Select...</option>
          <option>Sole trader</option>
          <option>2–5</option>
          <option>6–20</option>
          <option>21–50</option>
          <option>50–200</option>
          <option>200+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Additional Information</label>
        <textarea name="message" rows={4} placeholder="Tell us about any specific fraud concerns, existing insurance, or requirements..." className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 resize-none" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Preferred Contact Method</label>
        <div className="flex gap-4">
          {['Phone', 'Email', 'Either'].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="contactPreference" value={opt} defaultChecked={opt === 'Either'} className="accent-red-600" />
              <span className="text-sm text-slate-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="consent" required className="w-4 h-4 mt-0.5 accent-red-600" />
          <span className="text-xs text-slate-600 leading-relaxed">
            I consent to FraudProtection.co.nz sharing my contact details with licensed insurance advisers for the purpose of providing a quote. I understand this is a referral service and I am not obligated to purchase any insurance product.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 rounded-xl transition-colors text-lg"
      >
        {isSubmitting ? 'Sending...' : 'Submit Quote Request →'}
      </button>
    </form>
  );
}
