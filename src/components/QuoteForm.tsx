'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const coverageOptions = [
  { id: 'commercial-crime', label: 'Commercial Crime', desc: 'Internal & external criminal acts' },
  { id: 'fidelity', label: 'Fidelity / Employee Fraud', desc: 'Embezzlement, dishonesty' },
  { id: 'cyber', label: 'Cyber Security', desc: 'Data breaches, ransomware' },
  { id: 'social-engineering', label: 'Social Engineering', desc: 'CEO fraud, BEC attacks' },
  { id: 'funds-transfer', label: 'Funds Transfer Fraud', desc: 'Fraudulent payment diversion' },
  { id: 'unsure', label: 'Not Sure — Need Advice', desc: 'Happy to be guided' },
];

export default function QuoteForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCover, setSelectedCover] = useState<string[]>([]);

  function toggleCover(id: string) {
    setSelectedCover((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload: Record<string, string> = {
      _subject: 'New Business Fraud Insurance Quote — FraudProtection.co.nz',
      _to: 'hello@cover4you.co.nz',
      _cc: 'butlerdarin@gmail.com',
      firstName: fd.get('firstName') as string,
      lastName: fd.get('lastName') as string,
      email: fd.get('email') as string,
      phone: fd.get('phone') as string,
      businessName: fd.get('businessName') as string,
      sector: fd.get('sector') as string,
      turnover: fd.get('turnover') as string,
      employees: fd.get('employees') as string,
      contactPreference: fd.get('contactPreference') as string,
      coverageTypes: selectedCover.join(', ') || 'None selected',
      message: fd.get('message') as string,
    };

    try {
      await fetch('https://worker.cover4you.co.nz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // fail silently — redirect regardless
    }

    setIsSubmitting(false);
    router.push('/thank-you/');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">

      {/* Section 1: Contact Details */}
      <div className="mb-1">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
          <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Your Contact Details</h3>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
              <input
                name="firstName" required type="text" placeholder="John"
                className="w-full border-2 border-slate-200 hover:border-slate-300 focus:border-red-400 focus:ring-0 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name <span className="text-red-500">*</span></label>
              <input
                name="lastName" required type="text" placeholder="Smith"
                className="w-full border-2 border-slate-200 hover:border-slate-300 focus:border-red-400 focus:ring-0 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
              <input
                name="email" required type="email" placeholder="john@company.co.nz"
                className="w-full border-2 border-slate-200 hover:border-slate-300 focus:border-red-400 focus:ring-0 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
              <input
                name="phone" required type="tel" placeholder="021 123 4567"
                className="w-full border-2 border-slate-200 hover:border-slate-300 focus:border-red-400 focus:ring-0 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Contact Method</label>
            <div className="flex gap-3">
              {['Phone', 'Email', 'Either'].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer bg-slate-50 hover:bg-slate-100 border-2 border-slate-200 hover:border-slate-300 rounded-xl px-4 py-2.5 transition-colors">
                  <input type="radio" name="contactPreference" value={opt} defaultChecked={opt === 'Either'} className="accent-red-600" />
                  <span className="text-sm font-medium text-slate-700">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-dashed border-slate-100 my-7" />

      {/* Section 2: Business Info */}
      <div className="mb-1">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
          <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Your Business</h3>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Business Name <span className="text-red-500">*</span></label>
            <input
              name="businessName" required type="text" placeholder="Your Business Ltd"
              className="w-full border-2 border-slate-200 hover:border-slate-300 focus:border-red-400 focus:ring-0 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Business Sector <span className="text-red-500">*</span></label>
              <select name="sector" required className="w-full border-2 border-slate-200 hover:border-slate-300 focus:border-red-400 focus:ring-0 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white">
                <option value="">Select sector...</option>
                <option>Small Business (1–20 staff)</option>
                <option>Finance &amp; Banking</option>
                <option>Retail &amp; E-commerce</option>
                <option>Professional Services</option>
                <option>Not-for-Profit / Charity</option>
                <option>Healthcare</option>
                <option>Construction &amp; Property</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Number of Employees</label>
              <select name="employees" className="w-full border-2 border-slate-200 hover:border-slate-300 focus:border-red-400 focus:ring-0 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white">
                <option value="">Select...</option>
                <option>Sole trader</option>
                <option>2–5</option>
                <option>6–20</option>
                <option>21–50</option>
                <option>50–200</option>
                <option>200+</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Annual Turnover</label>
            <select name="turnover" className="w-full border-2 border-slate-200 hover:border-slate-300 focus:border-red-400 focus:ring-0 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white">
              <option value="">Select range...</option>
              <option>Under $500k</option>
              <option>$500k – $2m</option>
              <option>$2m – $5m</option>
              <option>$5m – $20m</option>
              <option>$20m+</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-dashed border-slate-100 my-7" />

      {/* Section 3: Cover Required */}
      <div className="mb-1">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
          <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Cover Required</h3>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
        <p className="text-xs text-slate-500 mb-4">Select all that apply — or choose "Not Sure" and your adviser will guide you.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {coverageOptions.map((opt) => {
            const isSelected = selectedCover.includes(opt.id);
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => toggleCover(opt.id)}
                className={`text-left border-2 rounded-xl px-4 py-3.5 transition-all ${
                  isSelected
                    ? 'border-red-400 bg-red-50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                    isSelected ? 'bg-red-600 border-2 border-red-600' : 'border-2 border-slate-300 bg-white'
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className={`text-sm font-semibold leading-tight ${isSelected ? 'text-red-700' : 'text-slate-800'}`}>{opt.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{opt.desc}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t-2 border-dashed border-slate-100 my-7" />

      {/* Section 4: Additional info */}
      <div className="mb-7">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-7 h-7 bg-slate-400 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
          <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Anything Else?</h3>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
        <textarea
          name="message" rows={3}
          placeholder="Any specific fraud concerns, existing insurance, or other requirements..."
          className="w-full border-2 border-slate-200 hover:border-slate-300 focus:border-red-400 focus:ring-0 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white resize-none"
        />
      </div>

      {/* Consent */}
      <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4 mb-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="consent" required className="w-4 h-4 mt-0.5 accent-red-600 flex-shrink-0" />
          <span className="text-xs text-slate-600 leading-relaxed">
            I consent to FraudProtection.co.nz sharing my contact details with licensed insurance advisers for the purpose of providing a quote. I understand this is a referral service and I am not obligated to purchase any insurance product.
          </span>
        </label>
      </div>

      {/* Submit */}
      <div className="space-y-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:bg-red-400 text-white font-bold py-4 rounded-xl transition-colors text-base shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending your request...
            </>
          ) : (
            <>
              Submit Quote Request
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>
        <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-.62-.052-1.227-.15-1.818z" />
            </svg>
            100% free, no obligation
          </span>
          <span className="text-slate-200">|</span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your data is secure
          </span>
          <span className="text-slate-200">|</span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Response within 1 business day
          </span>
        </div>
      </div>
    </form>
  );
}
