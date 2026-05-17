export interface BusinessProvider {
  id: string;
  name: string;
  type: 'insurer' | 'broker';
  tagline: string;
  description: string;
  products: string[];
  coverTypes: string[];
  url: string;
  featured?: boolean;
}

export const businessProviders: BusinessProvider[] = [
  {
    id: 'chubb',
    name: 'Chubb NZ',
    type: 'insurer',
    tagline: 'FraudProtector — market-leading commercial crime policy',
    description: 'Chubb\'s FraudProtector policy is purpose-built for local businesses. Covers internal crime (employee fraud, embezzlement), external crime (computer fraud, forgery, counterfeit currency), physical asset theft, client loss, and defence costs.',
    products: ['FraudProtector', 'Crime Insurance'],
    coverTypes: ['Employee Fraud', 'Commercial Crime', 'Computer Fraud', 'Forgery', 'Counterfeit Currency', 'Client Asset Loss'],
    url: 'https://www.chubb.com/nz-en/',
    featured: true,
  },
  {
    id: 'dual',
    name: 'DUAL NZ',
    type: 'insurer',
    tagline: 'Cyber insurance with social engineering fraud cover',
    description: 'DUAL NZ offers comprehensive cyber insurance with optional social engineering fraud endorsement (up to $250k sublimit). Primary limits to $5m, excess up to $10m. Available for 500+ occupations via WebRater instant quote.',
    products: ['Cyber Insurance', 'Social Engineering Fraud Add-on'],
    coverTypes: ['Cyber Security', 'Social Engineering Fraud', 'Business Interruption', 'Data Breach', 'Network Extortion'],
    url: 'https://www.dualgroup.com/nz/',
    featured: true,
  },
  {
    id: 'nzi-business',
    name: 'NZI',
    type: 'insurer',
    tagline: 'Cyber Base and Cyber Ultra — enterprise-grade cover',
    description: 'NZI\'s Cyber Base and Cyber Ultra products cover a wide range of cyber threats for businesses, from data breach and ransomware through to cyber fraud and third-party liability.',
    products: ['Cyber Base', 'Cyber Ultra'],
    coverTypes: ['Cyber Security', 'Data Breach', 'Ransomware', 'Cyber Fraud', 'Third-Party Liability'],
    url: 'https://www.nzi.co.nz/',
    featured: true,
  },
  {
    id: 'delta',
    name: 'Delta Insurance NZ',
    type: 'insurer',
    tagline: 'Cyber Liability up to $10m for local businesses',
    description: 'Delta Insurance provides specialist cyber liability insurance up to $10 million. Coverage includes business interruption, third-party liability, hacker theft, network extortion, and forensic investigation costs.',
    products: ['Cyber Liability Insurance'],
    coverTypes: ['Cyber Liability', 'Business Interruption', 'Hacker Theft', 'Network Extortion', 'Data Forensics'],
    url: 'https://www.deltainsurance.co.nz/',
  },
  {
    id: 'marsh',
    name: 'Marsh NZ',
    type: 'broker',
    tagline: 'Global broking expertise for cyber and crime risk',
    description: 'Marsh NZ is a leading insurance broker placing cyber and commercial crime risks for local corporates and mid-market businesses. Coverage encompasses business interruption, repair costs, PR response, legal fees, and fraud/phishing protection.',
    products: ['Cyber Insurance', 'Commercial Crime', 'Management Liability'],
    coverTypes: ['Cyber Security', 'Business Interruption', 'PR Response', 'Legal Fees', 'Scam & Phishing', 'Third-Party Liability'],
    url: 'https://www.marsh.com/nz/en.html',
  },
  {
    id: 'rothbury',
    name: 'Rothbury Insurance Brokers',
    type: 'broker',
    tagline: 'Fidelity and fraud insurance specialists',
    description: 'Rothbury is one of the largest and most trusted insurance brokers in the country, offering fidelity insurance to protect businesses from employee dishonesty, fraud, and criminal acts — whether discovered or undiscovered.',
    products: ['Fidelity Insurance', 'Commercial Crime'],
    coverTypes: ['Employee Dishonesty', 'Fidelity Guarantee', 'Embezzlement', 'Forgery', 'Criminal Acts'],
    url: 'https://www.rothbury.co.nz/',
  },
  {
    id: 'unite',
    name: 'Unite Insurance',
    type: 'broker',
    tagline: 'Fidelity insurance for SMEs and corporates',
    description: 'Unite Insurance brokers fidelity insurance policies covering employee embezzlement, theft, forgery, and other acts of dishonesty — critical protection for businesses with staff handling cash or assets.',
    products: ['Fidelity Insurance'],
    coverTypes: ['Embezzlement', 'Employee Theft', 'Forgery', 'Dishonesty'],
    url: 'https://www.uniteinsurance.co.nz/',
  },
  {
    id: 'aig',
    name: 'AIG NZ',
    type: 'insurer',
    tagline: 'Commercial crime and cyber insurance for corporates',
    description: 'AIG offers commercial crime and cyber insurance solutions for mid-market to large businesses, with global reach and specialist underwriting expertise.',
    products: ['Commercial Crime', 'Cyber Insurance'],
    coverTypes: ['Commercial Crime', 'Employee Fraud', 'Cyber Security', 'Social Engineering'],
    url: 'https://www.aig.co.nz/',
  },
];
