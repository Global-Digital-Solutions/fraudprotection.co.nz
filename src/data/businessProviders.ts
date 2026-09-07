export interface BusinessProvider {
  id: string;
  name: string;
  type: 'insurer' | 'broker';
  tagline: string;
  description: string;
  keyFeature: string;
  highlight: string;
  accessMethod: 'broker-only' | 'direct' | 'broker-or-direct';
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
    tagline: 'FraudProtector — purpose-built commercial crime policy',
    description: 'Chubb\'s FraudProtector is a dedicated commercial crime insurance product covering direct financial loss from employee dishonesty, theft of securities or property, forgery, counterfeiting, and computer crime. An optional extension covers third-party client asset loss. Chubb also offers a separate Electronic & Computer Crime policy for advanced cyber-enabled fraud threats.',
    keyFeature: 'Purpose-built commercial crime policy with optional client loss extension',
    highlight: 'Only standalone FraudProtector product on the market',
    accessMethod: 'broker-only',
    products: ['FraudProtector', 'Electronic & Computer Crime Insurance'],
    coverTypes: ['Employee Dishonesty', 'Forgery & Alteration', 'Computer Fraud', 'Counterfeit Currency', 'Client Asset Loss', 'Securities Theft'],
    url: 'https://www.chubb.com/nz-en/',
    featured: true,
  },
  {
    id: 'dual',
    name: 'DUAL NZ',
    type: 'insurer',
    tagline: 'Cyber + social engineering fraud — instant online quote',
    description: 'DUAL NZ provides cyber insurance covering third-party claims, business interruption, first-party incident response, and a social engineering fraud endorsement (up to $250,000 sublimit). Updated policy wording from January 2024. Primary limits to $5m; excess layers to $10m. Available for 500+ occupations via the WebRater instant quote platform — no broker required for many SME segments.',
    keyFeature: '$250k social engineering fraud endorsement included',
    highlight: 'Instant online quotes via WebRater for 500+ occupations',
    accessMethod: 'direct',
    products: ['Cyber Insurance', 'Social Engineering Fraud Endorsement'],
    coverTypes: ['Social Engineering Fraud', 'Data Breach', 'Business Interruption', 'Network Extortion', 'Third-Party Cyber Liability'],
    url: 'https://www.dualgroup.com/nz/',
    featured: true,
  },
  {
    id: 'nzi-business',
    name: 'NZI',
    type: 'insurer',
    tagline: 'Cyber Base and Cyber Ultra — scalable cover for every business size',
    description: 'NZI offers two tiered cyber products: Cyber Base for essential coverage and Cyber Ultra for comprehensive protection. Both cover data breach, ransomware, cyber fraud, and business interruption. Cyber Ultra adds enhanced third-party liability, regulatory defence costs, and media liability. Distributed through the Vero/IAG broker network.',
    keyFeature: 'Two-tier cyber product range from entry-level to enterprise',
    highlight: 'Part of IAG — biggest general insurer in Australasia',
    accessMethod: 'broker-only',
    products: ['Cyber Base', 'Cyber Ultra'],
    coverTypes: ['Data Breach', 'Ransomware', 'Cyber Fraud', 'Business Interruption', 'Regulatory Defence', 'Third-Party Liability'],
    url: 'https://www.nzi.co.nz/',
    featured: true,
  },
  {
    id: 'delta',
    name: 'Delta Insurance NZ',
    type: 'insurer',
    tagline: '100% NZ-owned specialist insurer — cyber liability to $10m',
    description: 'Delta Insurance is a 100% locally-owned specialist insurer founded in 2014, underwriting on behalf of Lloyd\'s of London capacity. Their flagship cyber liability product covers data breach response, business interruption, ransomware, social engineering fraud, and 24/7 IT security rapid response. Covers 30,000+ risks across NZ, Singapore, and Australia. Distributes exclusively through insurance brokers.',
    keyFeature: 'Lloyd\'s-backed cyber liability up to $10m with 24/7 incident response',
    highlight: '100% NZ-owned — founded 2014, 30,000+ risks insured',
    accessMethod: 'broker-only',
    products: ['Cyber Liability Insurance', 'Specialty Lines'],
    coverTypes: ['Data Breach Response', 'Business Interruption', 'Ransomware', 'Social Engineering', 'IT Security Response', 'Third-Party Liability'],
    url: 'https://www.deltainsurance.co.nz/',
  },
  {
    id: 'aig',
    name: 'AIG NZ',
    type: 'insurer',
    tagline: 'CyberEdge — global expertise with local commercial crime cover',
    description: 'AIG\'s CyberEdge policy includes an optional commercial crime module covering fraudulent or dishonest acts by employees and third parties. Recent policy updates added Criminal Reward Fund, System Failure, and Electronic Data Incident extensions. Includes Breach Coach service, IT Specialist Services, and PR response support — backed by AIG\'s global claims expertise.',
    keyFeature: 'CyberEdge with optional commercial crime module for employee + third-party fraud',
    highlight: 'Breach Coach + PR response + IT specialist services included',
    accessMethod: 'broker-only',
    products: ['CyberEdge', 'Commercial Crime Insurance'],
    coverTypes: ['Employee Fraud', 'Third-Party Fraud', 'Data Breach', 'Business Interruption', 'Ransomware', 'PR Response'],
    url: 'https://www.aig.co.nz/',
  },
  {
    id: 'marsh',
    name: 'Marsh NZ',
    type: 'broker',
    tagline: 'Global broking expertise for cyber and commercial crime',
    description: 'Marsh NZ is one of the country\'s largest insurance brokers, placing cyber and commercial crime risks for corporates and mid-market clients across all major insurers. Coverage typically encompasses incident response, data recovery, business interruption, regulatory liability, legal fees, and PR expenses. Marsh\'s NZ cyber practice is growing rapidly given that more than half of NZ SMEs reported a cyber threat in a recent 6-month period.',
    keyFeature: 'Access to all major insurers through one broker relationship',
    highlight: 'Global network, local specialists — corporates to mid-market',
    accessMethod: 'broker-or-direct',
    products: ['Cyber Insurance', 'Commercial Crime', 'Management Liability'],
    coverTypes: ['Cyber Security', 'Business Interruption', 'PR Response', 'Legal Fees', 'Scam & Phishing', 'Regulatory Liability'],
    url: 'https://www.marsh.com/nz/en.html',
  },
  {
    id: 'rothbury',
    name: 'Rothbury Insurance Brokers',
    type: 'broker',
    tagline: 'Fidelity and fraud insurance specialists for local businesses',
    description: 'Rothbury is one of the largest independently-owned insurance brokers in the country, with specialist expertise in fidelity insurance. Their fidelity product protects businesses from employee dishonesty, fraud, embezzlement, theft of cash or inventory, and unauthorised use of corporate credit cards — whether the acts are discovered or remain undiscovered for some time.',
    keyFeature: 'Specialist fidelity insurance covering discovered and undiscovered employee fraud',
    highlight: 'One of the largest independent brokers in the country',
    accessMethod: 'broker-or-direct',
    products: ['Fidelity Insurance', 'Commercial Crime', 'Business Insurance'],
    coverTypes: ['Employee Dishonesty', 'Fidelity Guarantee', 'Embezzlement', 'Cash Theft', 'Inventory Theft', 'Credit Card Fraud'],
    url: 'https://www.rothbury.co.nz/',
  },
  {
    id: 'unite',
    name: 'Unite Insurance',
    type: 'broker',
    tagline: 'Fidelity insurance for SMEs — straightforward cover, expert advice',
    description: 'Unite Insurance is a trusted brokerage specialising in commercial insurance for SMEs. Their fidelity insurance solutions cover employee embezzlement, theft, forgery, and other acts of dishonesty — critical protection for businesses where staff handle cash, accounts, or valuable assets on a daily basis.',
    keyFeature: 'SME-focused fidelity insurance with hands-on broker support',
    highlight: 'Specialist SME broker — straightforward access to fidelity cover',
    accessMethod: 'broker-or-direct',
    products: ['Fidelity Insurance', 'Commercial Insurance'],
    coverTypes: ['Embezzlement', 'Employee Theft', 'Forgery', 'Dishonesty', 'Asset Misappropriation'],
    url: 'https://www.uniteinsurance.co.nz/',
  },
];
