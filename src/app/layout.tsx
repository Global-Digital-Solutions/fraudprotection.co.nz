import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fraud Protection Insurance NZ | Personal & Business Cover | FraudInsurance.co.nz',
  description: 'NZ\'s guide to fraud protection insurance. Personal scam & identity theft cover plus commercial crime, fidelity, and cyber insurance for businesses. Compare options and get protected today.',
  metadataBase: new URL('https://www.fraudinsurance.co.nz'),
  alternates: { canonical: 'https://www.fraudinsurance.co.nz/' },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Fraud Protection Insurance NZ | FraudInsurance.co.nz',
    description: 'Personal scam protection and business fraud insurance in New Zealand. $3 billion lost to fraud in NZ last year — find the right cover.',
    url: 'https://www.fraudinsurance.co.nz/',
    siteName: 'FraudInsurance.co.nz',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-83MNN45KZX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-83MNN45KZX');
          `}
        </Script>
      </head>
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
