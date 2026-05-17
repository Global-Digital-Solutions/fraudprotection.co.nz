import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fraud Protection Insurance NZ | Personal & Business Cover | FraudProtection.co.nz',
  description: 'NZ\'s guide to fraud protection insurance. Personal scam & identity theft cover plus commercial crime, fidelity, and cyber insurance for businesses. Compare options and get protected today.',
  metadataBase: new URL('https://www.fraudprotection.co.nz'),
  alternates: { canonical: 'https://www.fraudprotection.co.nz/' },
  openGraph: {
    title: 'Fraud Protection Insurance NZ | FraudProtection.co.nz',
    description: 'Personal scam protection and business fraud insurance in New Zealand. $3 billion lost to fraud in NZ last year — find the right cover.',
    url: 'https://www.fraudprotection.co.nz/',
    siteName: 'FraudProtection.co.nz',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
