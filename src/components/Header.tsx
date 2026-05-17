'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <span className="font-bold text-white text-base sm:text-lg leading-tight">
              FraudProtection<span className="text-red-400">.co.nz</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">
                Personal Protection
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                  <Link href="/personal" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Personal Fraud Hub</Link>
                  <Link href="/personal/identity-theft" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Identity Theft</Link>
                  <Link href="/personal/card-fraud" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Card & Payment Fraud</Link>
                  <Link href="/personal/online-scams" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Online Scams</Link>
                  <Link href="/personal/account-takeover" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Account Takeover</Link>
                  <Link href="/personal/investment-scams" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Investment Scams</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">
                Business Protection
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-1 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                  <Link href="/business" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Business Fraud Hub</Link>
                  <Link href="/business/commercial-crime" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Commercial Crime Insurance</Link>
                  <Link href="/business/fidelity-insurance" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Fidelity Insurance</Link>
                  <Link href="/business/cyber-insurance" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Cyber Insurance</Link>
                  <Link href="/business/social-engineering" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Social Engineering Cover</Link>
                  <Link href="/business/funds-transfer-fraud" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">Funds Transfer Fraud</Link>
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <Link href="/sectors" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600">By Business Sector</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/providers" className="text-sm text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">Providers</Link>
            <Link href="/blog" className="text-sm text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">Blog</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/quote" className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              Get Business Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-slate-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-800 py-3 space-y-1">
            <div className="px-3 py-2 text-xs font-semibold text-red-400 uppercase tracking-wide">Personal Protection</div>
            <Link href="/personal" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Personal Fraud Hub</Link>
            <Link href="/personal/identity-theft" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Identity Theft</Link>
            <Link href="/personal/card-fraud" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Card & Payment Fraud</Link>
            <Link href="/personal/online-scams" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Online Scams</Link>
            <Link href="/personal/investment-scams" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Investment Scams</Link>
            <div className="px-3 py-2 text-xs font-semibold text-red-400 uppercase tracking-wide mt-2">Business Protection</div>
            <Link href="/business" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Business Fraud Hub</Link>
            <Link href="/business/commercial-crime" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Commercial Crime</Link>
            <Link href="/business/fidelity-insurance" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Fidelity Insurance</Link>
            <Link href="/business/cyber-insurance" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Cyber Insurance</Link>
            <Link href="/sectors" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>By Business Sector</Link>
            <div className="px-3 pt-3 pb-1 border-t border-slate-800 mt-2">
              <Link href="/providers" className="block py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Providers</Link>
              <Link href="/blog" className="block py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/contact" className="block py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link href="/quote" className="mt-2 block w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center transition-colors" onClick={() => setMenuOpen(false)}>Get Business Quote</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
