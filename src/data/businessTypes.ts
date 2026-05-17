export interface BusinessFraudType {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  description: string;
  details: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  keyRisks: string[];
  whatItCovers: string[];
  whoBenefits: string[];
  typicalCost: string;
  faqs: { question: string; answer: string }[];
  relatedTypes: string[];
}

export const businessTypes: BusinessFraudType[] = [
  {
    slug: 'commercial-crime',
    name: 'Commercial Crime Insurance',
    shortName: 'Commercial Crime',
    icon: '🏢',
    tagline: 'Comprehensive cover for both internal and external criminal acts affecting your business.',
    description: 'Commercial crime insurance protects businesses from financial losses arising from criminal acts — both from within (employees) and outside (third parties). Purpose-built products like Chubb\'s FraudProtector cover employee dishonesty, computer fraud, forgery, counterfeit currency, and external theft, with options to include client asset protection and defence costs.',
    details: 'Commercial crime is the broadest form of fraud cover for businesses, designed to address the full spectrum of criminal exposures. It is particularly important for businesses that handle significant cash flows, maintain client assets, or employ staff with financial access. Policy limits typically range from $100,000 to multi-million dollar limits for larger corporates.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    metaTitle: 'Commercial Crime Insurance NZ 2026 | Chubb FraudProtector & More | FraudInsurance.co.nz',
    metaDescription: 'Commercial crime insurance protects NZ businesses from employee fraud, forgery, computer crime, and external theft. Compare providers and get a quote today.',
    keyRisks: [
      'Employee embezzlement and theft of funds',
      'Third-party computer fraud and phishing',
      'Forged cheques or payment instructions',
      'Counterfeit currency acceptance',
      'Fraudulent transfer of client assets',
    ],
    whatItCovers: [
      'Employee dishonesty and embezzlement',
      'Computer and funds transfer fraud',
      'Forgery and alteration of financial instruments',
      'Counterfeit currency losses',
      'Client asset protection (for financial services firms)',
      'Defence costs and investigation expenses',
      'Premises and transit theft (select policies)',
    ],
    whoBenefits: [
      'Any business with employees handling cash or financial transactions',
      'Financial services firms and accountancy practices',
      'Law firms holding client trust account funds',
      'Retailers and hospitality businesses with cash handling',
      'Property management companies',
      'Not-for-profit organisations with donation income',
    ],
    typicalCost: 'Premiums for commercial crime insurance typically start from around $1,500-$3,000 per year for SMEs, scaling with turnover, employee numbers, and the level of financial controls in place.',
    faqs: [
      { question: 'What is the difference between commercial crime and fidelity insurance?', answer: 'Fidelity insurance specifically covers losses from employee dishonesty and fraudulent acts by your own staff. Commercial crime insurance is broader — it covers both internal (employee) fraud AND external criminal acts such as computer fraud, forgery by third parties, and counterfeit currency. Most modern "commercial crime" policies encompass fidelity as a subset.' },
      { question: 'Does commercial crime insurance cover cyber fraud?', answer: 'Traditional commercial crime policies cover "computer fraud" — where criminals manipulate your computer systems to cause a fraudulent funds transfer. However, broader cyber risks like ransomware, data breach response costs, and business interruption from a hack are generally covered by a separate cyber insurance policy. Some insurers bundle these, so check your policy wording.' },
      { question: 'Does our business need commercial crime insurance if we have internal controls?', answer: 'Yes — internal controls reduce the likelihood of fraud but don\'t eliminate it. The majority of commercial fraud is committed by trusted, long-term employees. Many frauds go undetected for years. Internal controls and insurance work together: good controls can help reduce your premium, while insurance provides a financial safety net when controls fail.' },
    ],
    relatedTypes: ['fidelity-insurance', 'cyber-insurance', 'social-engineering'],
  },
  {
    slug: 'fidelity-insurance',
    name: 'Fidelity (Employee Dishonesty) Insurance',
    shortName: 'Fidelity Insurance',
    icon: '👤',
    tagline: 'Protect your business from the financial devastation of employee fraud, embezzlement, and theft.',
    description: 'Fidelity insurance — also called employee dishonesty insurance — covers financial losses your business suffers as a direct result of fraudulent or dishonest acts by your employees. This includes embezzlement, theft of cash or assets, forgery of payment instructions, and other deliberate criminal acts by staff. Employee fraud is estimated to cost businesses hundreds of millions of dollars annually.',
    details: 'Research consistently shows that the majority of business fraud is committed by trusted, often long-tenured employees — not strangers. The average employee fraud runs for 18 months before detection and causes $150,000+ in losses. Fidelity insurance is available as a standalone policy or as part of a broader commercial crime package, with coverage available from specialist brokers including Rothbury and Unite Insurance.',
    heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80',
    metaTitle: 'Fidelity Insurance NZ 2026 | Employee Fraud & Dishonesty Cover | FraudInsurance.co.nz',
    metaDescription: 'Employee fraud costs NZ businesses hundreds of millions each year. Fidelity insurance protects against embezzlement, theft, and dishonesty by your own staff.',
    keyRisks: [
      'Cash theft from registers or petty cash',
      'Embezzlement of funds over time',
      'Fraudulent invoicing or vendor payments to self',
      'Payroll fraud (ghost employees, false overtime)',
      'Theft of stock, equipment, or client assets',
    ],
    whatItCovers: [
      'Direct financial loss from employee theft or embezzlement',
      'Fraudulent transfer of business funds',
      'Forged authorisation of payments',
      'Theft of physical property or stock',
      'Payroll fraud and ghost employees',
      'Discovery-based cover (losses uncovered after the event)',
    ],
    whoBenefits: [
      'Small businesses with limited oversight of accounts staff',
      'Charities and not-for-profit organisations',
      'Professional services firms (law, accounting)',
      'Retail businesses with multiple staff handling cash',
      'Property managers handling rental income',
      'Any business where employee access to funds exists',
    ],
    typicalCost: 'Fidelity insurance premiums typically start from around $800-$2,000 per year for basic cover, depending on the number of employees, turnover, and financial controls in place.',
    faqs: [
      { question: 'Does fidelity insurance cover all employees or just specific roles?', answer: 'Most fidelity policies cover all employees as a blanket — you don\'t need to specify individual names. However, some policies have provisions allowing you to exclude certain individuals or require that you conduct reference and credit checks for financial roles. Check with your broker about your policy\'s exact coverage.' },
      { question: 'What if the employee who committed fraud is never caught or convicted?', answer: 'Fidelity insurance does not require a criminal conviction to make a claim. You generally need to establish, on the balance of probabilities, that an employee committed the dishonest act. Criminal prosecution is separate and your insurer may assist with the investigation, but the insurance claim can proceed independently.' },
      { question: 'Are volunteers covered by fidelity insurance?', answer: 'Standard fidelity insurance typically covers "employees" as defined in the policy — usually permanent, part-time, and casual staff. Volunteers may or may not be covered depending on the policy wording. Charities and not-for-profits should specifically ask about volunteer coverage, as some insurers extend this for the NFP sector.' },
    ],
    relatedTypes: ['commercial-crime', 'cyber-insurance', 'social-engineering'],
  },
  {
    slug: 'cyber-insurance',
    name: 'Cyber Security Insurance',
    shortName: 'Cyber Insurance',
    icon: '🛡️',
    tagline: 'Protect your business from the financial impact of cyber attacks, data breaches, and ransomware.',
    description: 'Cyber insurance is now essential for businesses of all sizes. A cyber attack or data breach can result in significant costs: forensic investigation, system restoration, business interruption losses, regulatory fines, legal liability to affected customers, and PR/crisis communications. Insurers including DUAL, NZI, and Delta Insurance offer cyber products up to $10m in cover.',
    details: 'There has been a dramatic rise in cyber attacks on businesses — from ransomware attacks on critical infrastructure to spear-phishing campaigns targeting SMEs. CERT NZ reported thousands of cyber incidents in 2024-2025. The Privacy Act 2020 also creates mandatory breach notification obligations and potential fines, making cyber insurance not just commercially important but legally relevant.',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80',
    metaTitle: 'Cyber Insurance NZ 2026 | DUAL, NZI & Delta Insurance | FraudInsurance.co.nz',
    metaDescription: 'Cyber attacks are surging in NZ. Compare cyber insurance from DUAL, NZI, and Delta Insurance — covering data breach, ransomware, business interruption, and social engineering fraud.',
    keyRisks: [
      'Ransomware attacks encrypting your business data',
      'Data breaches exposing customer personal information',
      'Business email compromise and wire fraud',
      'Phishing attacks targeting staff credentials',
      'Supply chain cyber attacks',
    ],
    whatItCovers: [
      'First-party incident response and forensic investigation',
      'System restoration and data recovery costs',
      'Business interruption losses from a cyber event',
      'Ransomware extortion payments and negotiations',
      'PR, crisis management, and customer notification costs',
      'Third-party liability to affected individuals',
      'Regulatory defence and fines (where insurable)',
      'Social engineering fraud add-on (select policies)',
    ],
    whoBenefits: [
      'Any business that stores customer personal data',
      'E-commerce businesses processing online payments',
      'Professional services firms with sensitive client data',
      'Healthcare providers under Privacy Act obligations',
      'Financial services businesses with high-value transactions',
      'Any business dependent on digital systems for operations',
    ],
    typicalCost: 'Cyber insurance premiums for SMEs typically start from $1,500-$4,000 per year for $1-2m cover. Larger corporates can access $5-10m limits. Premiums depend on revenue, data holdings, security posture, and industry sector.',
    faqs: [
      { question: 'Does cyber insurance cover social engineering fraud?', answer: 'Standard cyber insurance focuses on external attacks (hacking, malware, data breaches). Social engineering fraud — where criminals trick employees into transferring funds — is often available as a separate endorsement or add-on. DUAL NZ, for example, offers a social engineering fraud add-on with up to $250,000 sublimit. Always check the specific policy wording.' },
      { question: 'Do small businesses need cyber insurance?', answer: 'Yes — cyber attacks affect businesses of all sizes, and SMEs are often targeted because they have valuable data but weaker security than large corporates. A ransomware attack on a small business can cost $50,000-$500,000 to resolve. Cyber insurance is now one of the most important and underutilised forms of business insurance for SMEs.' },
      { question: 'How does the Privacy Act 2020 affect cyber insurance?', answer: 'The Privacy Act 2020 requires businesses to notify the Privacy Commissioner and affected individuals of serious privacy breaches. This can trigger significant costs — notification letters, credit monitoring for affected customers, legal fees, and reputational management. Cyber insurance typically covers these breach response costs, making it particularly relevant after the Privacy Act came into force.' },
    ],
    relatedTypes: ['commercial-crime', 'social-engineering', 'fidelity-insurance'],
  },
  {
    slug: 'social-engineering',
    name: 'Social Engineering Fraud Cover',
    shortName: 'Social Engineering',
    icon: '🎭',
    tagline: 'When criminals manipulate your staff into authorising fraudulent payments or transferring funds.',
    description: 'Social engineering fraud occurs when criminals deceive or manipulate your employees into taking actions that result in financial loss — such as transferring funds to a fraudulent account, providing sensitive information, or authorising payments. Common forms include CEO fraud (impersonating the CEO to request urgent payments), invoice fraud (fake supplier invoices), and business email compromise.',
    details: 'Business Email Compromise (BEC) is the most costly form of social engineering fraud, with criminals intercepting or spoofing email communications to redirect supplier payments to fraudulent accounts. The average BEC loss is significantly higher than other fraud types. Because an employee authorised the payment, standard crime insurance often does not cover these losses without a specific social engineering endorsement.',
    heroImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1600&q=80',
    metaTitle: 'Social Engineering Fraud Insurance NZ 2026 | CEO Fraud & BEC Cover | FraudInsurance.co.nz',
    metaDescription: 'Business Email Compromise and CEO fraud are costing NZ businesses millions. Get specific social engineering fraud cover and protect your business from human hacking.',
    keyRisks: [
      'Business Email Compromise (BEC) diverting supplier payments',
      'CEO fraud — impersonating executives to authorise urgent transfers',
      'Fake supplier invoice substitution',
      'Phone impersonation of IT support or banks',
      'Payroll diversion to fraudulent accounts',
    ],
    whatItCovers: [
      'Funds transferred based on fraudulent instructions',
      'Payment diversion to criminal-controlled accounts',
      'CEO/executive impersonation fraud losses',
      'Fraudulent supplier invoice payments',
      'Payroll fraud via account change manipulation',
      'Investigation and recovery costs',
    ],
    whoBenefits: [
      'Businesses with accounts payable staff making regular supplier payments',
      'Professional services firms receiving large client fund transfers',
      'Construction companies with high-value subcontractor payments',
      'Property developers handling settlement funds',
      'Any business relying on email-based payment instructions',
    ],
    typicalCost: 'Social engineering fraud cover is often available as an endorsement to a cyber insurance policy for an additional premium of $500-$2,000 per year, with sublimits typically ranging from $100,000 to $500,000. Standalone social engineering policies can offer higher limits.',
    faqs: [
      { question: 'What is Business Email Compromise (BEC)?', answer: 'BEC is a sophisticated scam targeting businesses that regularly conduct payment transfers. Criminals hack or spoof email accounts and intercept payment communications, changing banking details to divert payments to their own accounts. This most commonly occurs when a supplier\'s email is compromised and the criminal sends fake "updated bank details" just before a large payment is due.' },
      { question: 'Will our commercial crime insurance cover BEC losses?', answer: 'Not always. Standard commercial crime policies cover losses from computer fraud where systems are manipulated. BEC involves an employee being deceived into authorising a payment — this is treated as an authorised (if fraudulent) instruction, which many crime policies exclude. You need a specific social engineering fraud endorsement. DUAL NZ offers this as an add-on to their cyber policy.' },
      { question: 'How do we prevent social engineering attacks?', answer: 'Key controls include: a strict call-back verification procedure for any payment instruction received by email; dual authorisation for high-value payments; staff training on BEC and phishing recognition; domain monitoring for lookalike email addresses; and updating supplier payment details only after phone verification using a number from your own records — never the number in the email.' },
    ],
    relatedTypes: ['cyber-insurance', 'commercial-crime', 'fidelity-insurance'],
  },
  {
    slug: 'funds-transfer-fraud',
    name: 'Funds Transfer Fraud',
    shortName: 'Funds Transfer Fraud',
    icon: '💸',
    tagline: 'Cover for losses when criminals manipulate your payment systems or deceive staff into misdirecting funds.',
    description: 'Funds transfer fraud encompasses a range of criminal activities that result in money being sent to fraudulent accounts — whether through direct computer manipulation of payment systems, or through social engineering that tricks employees into initiating the transfer. This is one of the most significant financial crime risks for businesses across all sectors.',
    details: 'This coverage area sits at the intersection of commercial crime, social engineering, and cyber insurance. Some policies cover it under computer fraud provisions; others require a specific endorsement. With businesses losing millions annually to payment diversion and fraudulent instructions, having clear, contractual cover in place is increasingly important for risk management and lender covenants.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80',
    metaTitle: 'Funds Transfer Fraud Insurance NZ 2026 | Payment Diversion & Wire Fraud Cover | FraudInsurance.co.nz',
    metaDescription: 'Funds transfer fraud costs NZ businesses millions each year. Understand your insurance options and get cover for payment diversion, wire fraud, and computer-initiated transfers.',
    keyRisks: [
      'Unauthorised electronic funds transfers by hackers',
      'Employee-initiated fraudulent bank transfers',
      'Manipulation of payment files or batch transfers',
      'Third-party computer fraud altering payment instructions',
      'Fraudulent payment orders accepted by banks',
    ],
    whatItCovers: [
      'Direct financial loss from unauthorised electronic transfers',
      'Computer crime resulting in misdirected payments',
      'Manipulation of accounts payable systems',
      'Fraudulent SWIFT or international wire transfers',
      'Recovery and investigation costs',
      'Legal expenses in recovery proceedings',
    ],
    whoBenefits: [
      'Finance and treasury departments handling large transactions',
      'Importers and exporters making international payments',
      'Law firms and conveyancers handling settlement funds',
      'Managed investment and financial services entities',
      'Construction and development companies',
    ],
    typicalCost: 'Funds transfer fraud cover limits range from $250,000 for SMEs to $10m+ for corporates. Premiums depend on your transaction volumes, financial controls, and whether cover is standalone or bundled with cyber or crime insurance.',
    faqs: [
      { question: 'Is funds transfer fraud covered by my commercial crime policy?', answer: 'It depends on the specific policy wording and how the fraud was initiated. Computer-initiated fraud (where a criminal directly manipulates your system) is typically covered under computer fraud provisions. Employee-initiated fraud is covered by fidelity sections. Socially engineered payments (where a staff member was tricked) often require a specific social engineering endorsement. Review your policy carefully and speak to your broker.' },
      { question: 'Does my bank reimburse fraudulent wire transfers?', answer: 'Banks will attempt to recall funds from fraudulent transfers, but success depends on speed of reporting and whether the receiving bank has already disbursed the funds. Banks are not legally required to reimburse authorised payment fraud (where your employee made the payment, even under false pretences). Insurance provides the financial backstop when a bank recall fails.' },
    ],
    relatedTypes: ['social-engineering', 'cyber-insurance', 'commercial-crime'],
  },
];
