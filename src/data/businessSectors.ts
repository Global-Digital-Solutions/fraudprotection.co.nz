export interface BusinessSector {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  topRisks: string[];
  recommendedCover: string[];
  faqs: { question: string; answer: string }[];
}

export const businessSectors: BusinessSector[] = [
  {
    slug: 'small-business',
    name: 'Small Business',
    icon: '🏪',
    tagline: 'Affordable fraud protection for NZ SMEs — from sole traders to businesses with 20 staff.',
    description: 'Small businesses are disproportionately targeted by fraudsters — they often have fewer controls and less oversight than large organisations. Employee theft, invoice fraud, and cyber attacks affect thousands of NZ SMEs each year. Affordable fidelity and cyber insurance packages are available specifically designed for small businesses.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80',
    metaTitle: 'Small Business Fraud Insurance NZ | SME Fidelity & Cyber Cover | FraudProtection.co.nz',
    metaDescription: 'Protect your small business from employee fraud, cyber attacks, and payment fraud. Affordable fidelity and cyber insurance packages for NZ SMEs.',
    topRisks: ['Employee cash theft', 'Invoice fraud from fake suppliers', 'Ransomware attacks', 'BEC payment diversion', 'Phishing targeting owner credentials'],
    recommendedCover: ['Fidelity Insurance', 'Cyber Insurance', 'Social Engineering Fraud Add-on'],
    faqs: [
      { question: 'Is fraud insurance affordable for small businesses?', answer: 'Yes — fidelity insurance for SMEs can start from $800-$1,500 per year, and basic cyber insurance from $1,500-$3,000 per year. For a business with $1-5m revenue, this is a modest cost compared to the potential loss from a single fraud event, which averages $50,000+ for NZ SMEs.' },
      { question: 'We\'re a small team — do we really need fraud insurance?', answer: 'Smaller teams can mean less segregation of duties and more reliance on individual trust. This actually increases fraud risk. Many of NZ\'s most significant employee frauds have occurred in small businesses where a single trusted person controlled both accounts and payments with limited oversight.' },
    ],
  },
  {
    slug: 'finance-banking',
    name: 'Finance & Banking',
    icon: '🏦',
    tagline: 'Comprehensive fraud protection for NZ financial services firms, lenders, and payment processors.',
    description: 'Financial services businesses face the highest fraud exposure of any sector — managing client funds, processing transactions, and holding sensitive financial data. Commercial crime, cyber insurance, and professional indemnity all intersect for finance sector businesses in NZ. Regulatory requirements under the FMCA may also mandate certain fraud controls.',
    heroImage: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1600&q=80',
    metaTitle: 'Finance Sector Fraud Insurance NZ | Banks, Lenders & Financial Services | FraudProtection.co.nz',
    metaDescription: 'Fraud insurance for NZ financial services, banks, lenders, and advisers. Comprehensive commercial crime, cyber, and social engineering cover.',
    topRisks: ['Client fund misappropriation', 'BEC targeting settlement payments', 'Insider trading or fraud by advisers', 'Data breach of financial records', 'Cyber attacks on trading platforms'],
    recommendedCover: ['Commercial Crime Insurance', 'Cyber Insurance', 'Professional Indemnity', 'Management Liability'],
    faqs: [
      { question: 'Are financial advisers in NZ required to hold fraud insurance?', answer: 'Financial advisers licensed under the FMCA must hold professional indemnity insurance as a licensing requirement. Commercial crime and cyber insurance are not mandated but are strongly recommended by the FMA for firms handling client funds.' },
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    icon: '🛒',
    tagline: 'Protect your retail or online store from payment fraud, refund scams, and cyber attacks.',
    description: 'Retail and e-commerce businesses face a unique combination of fraud risks — from in-store cash theft and employee fraud, to online payment fraud, chargeback scams, and data breaches affecting customer card details. NZ\'s growing e-commerce sector is an increasingly attractive target for international fraud rings.',
    heroImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&q=80',
    metaTitle: 'Retail & E-commerce Fraud Insurance NZ | Card Fraud & Cyber Cover | FraudProtection.co.nz',
    metaDescription: 'Protect your NZ retail or online business from payment fraud, chargeback scams, and data breaches. Compare fraud insurance options for retailers.',
    topRisks: ['Employee cash theft', 'Payment card fraud and chargebacks', 'Data breach of customer card data', 'Refund fraud and return scams', 'Ransomware targeting POS systems'],
    recommendedCover: ['Fidelity Insurance', 'Cyber Insurance', 'Commercial Crime Insurance'],
    faqs: [
      { question: 'Does cyber insurance cover data breaches affecting customer credit cards?', answer: 'Yes — most cyber insurance policies cover the costs of a data breach including notification costs, credit monitoring for affected customers, forensic investigation, and regulatory defence. PCI-DSS fines may also be covered under some policies.' },
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    icon: '💼',
    tagline: 'Law firms, accountants, consultants — protecting client funds and your practice from fraud.',
    description: 'Professional services firms hold a position of trust — often managing client funds, sensitive information, and significant transactions. Law firms handling conveyancing settlements, accountants with access to client tax accounts, and consultants with access to corporate systems all face elevated fraud risk from both internal and external threats.',
    heroImage: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=1600&q=80',
    metaTitle: 'Professional Services Fraud Insurance NZ | Law, Accounting & Consulting | FraudProtection.co.nz',
    metaDescription: 'Law firms, accountants, and consultants face unique fraud risks. Get commercial crime, fidelity, and cyber insurance to protect your practice and client funds.',
    topRisks: ['Client trust account fraud', 'Employee embezzlement of trust funds', 'BEC targeting conveyancing settlements', 'Cyber attack on client data systems', 'Impersonation of firm partners'],
    recommendedCover: ['Commercial Crime Insurance', 'Cyber Insurance', 'Professional Indemnity', 'Fidelity Insurance'],
    faqs: [
      { question: 'Are law firms required to hold trust account fraud insurance in NZ?', answer: 'The New Zealand Law Society requires law firms to maintain appropriate insurance. While not all forms are mandated, the Law Society strongly recommends commercial crime and cyber insurance, particularly for firms managing significant trust account funds in conveyancing.' },
    ],
  },
  {
    slug: 'nonprofit-charity',
    name: 'Not-for-Profit & Charities',
    icon: '🤝',
    tagline: 'Protecting charitable funds from fraud — because trust is everything to a charity\'s mission.',
    description: 'Charities and not-for-profit organisations are particularly vulnerable to fraud — they often rely on volunteers, have limited financial oversight, and depend on donor trust. Employee or volunteer fraud at a charity can be devastating not just financially but to reputation and community confidence. Specialist NFP fidelity insurance is available and often surprisingly affordable.',
    heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80',
    metaTitle: 'Charity & Not-for-Profit Fraud Insurance NZ | Fidelity Cover for NFPs | FraudProtection.co.nz',
    metaDescription: 'Protect your charity or NFP from employee and volunteer fraud. Specialist fidelity insurance for NZ charities — from Rothbury and other trusted brokers.',
    topRisks: ['Volunteer and staff embezzlement', 'Donation fund misappropriation', 'Cyber attacks targeting donor databases', 'Fraudulent grant applications in your name', 'Payment diversion by trusted staff'],
    recommendedCover: ['Fidelity Insurance (including volunteers)', 'Cyber Insurance', 'Management Liability'],
    faqs: [
      { question: 'Can NFP fidelity insurance cover volunteers as well as paid staff?', answer: 'Yes — specialist NFP fidelity policies can be extended to cover volunteers, which is important for charities that rely heavily on unpaid workers. Make sure to specifically ask brokers about volunteer coverage when obtaining quotes.' },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    tagline: 'Medical practices, clinics, and aged care — protecting patient data and practice funds.',
    description: 'Healthcare businesses hold uniquely sensitive patient data and often manage significant financial flows. Ransomware attacks on healthcare organisations have increased dramatically globally, with attackers knowing that healthcare providers are more likely to pay due to critical patient care dependencies. NZ medical practices also face risk from billing fraud and employee embezzlement.',
    heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80',
    metaTitle: 'Healthcare Fraud Insurance NZ | Medical Practice Cyber & Fidelity Cover | FraudProtection.co.nz',
    metaDescription: 'Protect your NZ medical practice, clinic, or aged care facility from ransomware, data breaches, and employee fraud. Healthcare-specific cyber and crime insurance.',
    topRisks: ['Ransomware attacks on patient management systems', 'Patient data breach under Privacy Act', 'Employee billing fraud and embezzlement', 'Supplier fraud targeting medical supplies procurement', 'Identity theft using patient health records'],
    recommendedCover: ['Cyber Insurance', 'Fidelity Insurance', 'Commercial Crime Insurance'],
    faqs: [
      { question: 'Does cyber insurance cover ransomware attacks on medical practice systems?', answer: 'Yes — cyber insurance typically covers ransomware extortion payments, system restoration costs, and business interruption losses. For healthcare, coverage for patient notification costs and Privacy Commissioner regulatory response is particularly important.' },
    ],
  },
  {
    slug: 'construction-property',
    name: 'Construction & Property',
    icon: '🏗️',
    tagline: 'High-value transactions, subcontractors, and progress payments create significant fraud exposure.',
    description: 'Construction and property development businesses handle large, time-sensitive transactions — progress payments, subcontractor invoices, and property settlements — that are prime targets for payment diversion fraud. Business Email Compromise targeting construction projects has increased significantly in NZ, with criminals intercepting payment communications to redirect funds.',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
    metaTitle: 'Construction & Property Fraud Insurance NZ | BEC & Payment Fraud Cover | FraudProtection.co.nz',
    metaDescription: 'Construction and property businesses face BEC and payment fraud on high-value transactions. Get social engineering and commercial crime cover for NZ construction firms.',
    topRisks: ['BEC diverting subcontractor or settlement payments', 'Fraudulent invoice substitution', 'Employee theft of materials or funds', 'False progress claim fraud', 'Contractor impersonation for upfront payments'],
    recommendedCover: ['Social Engineering Fraud Insurance', 'Commercial Crime Insurance', 'Cyber Insurance'],
    faqs: [
      { question: 'How do criminals target construction businesses?', answer: 'The most common attack is Business Email Compromise: criminals compromise the email of a subcontractor or supplier and send fake "updated bank details" just before a large payment is due. The payment goes to a fraudulent account. Strict phone-verification procedures for any banking change requests are the best prevention.' },
    ],
  },
];
