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
  longFormContent?: { heading: string; body: string }[];
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
    longFormContent: [
      {
        heading: 'What is Commercial Crime Insurance?',
        body: `Commercial crime insurance is a specialist business insurance product designed to cover financial losses arising from criminal acts committed against a business — whether by employees, third parties, or a combination of both. Unlike standard business insurance policies (which focus on property damage, liability, and business interruption from physical events), commercial crime insurance specifically addresses financial crime.

The policy fills a critical gap. Standard business insurance typically excludes or provides very limited cover for fraud, dishonesty, and criminal acts committed by people with authorised access to the business. Commercial crime insurance steps in precisely where other policies step out.

Modern commercial crime policies are broad in scope. They cover both internal threats — employee embezzlement, payroll fraud, forged payment authorities — and external threats such as third-party computer fraud, forged cheques, and counterfeit currency. Leading products in the NZ market, such as Chubb's FraudProtector policy, are designed specifically for this intersection of internal and external financial crime risk.

The contrast with general liability or property insurance is important to understand. If a fire destroys your office, your property insurance responds. If a trusted bookkeeper steals $300,000 over three years, general insurance almost certainly does not respond — commercial crime insurance does. For any business with employees who have financial access, this distinction represents a material gap in protection if commercial crime cover is absent.`,
      },
      {
        heading: 'The Scale of Business Fraud in New Zealand',
        body: `Business fraud is a significant and underreported problem. Based on data from the Association of Certified Fraud Examiners (ACFE) and local reporting, the scale of commercial crime in New Zealand is substantial. Overall fraud losses — including personal and business fraud — exceeded $3 billion in 2025, with business fraud representing a significant component of that total.

The ACFE's global research, which reflects patterns closely mirrored locally, finds that businesses lose approximately 5% of revenue to fraud annually. The median single fraud loss per case exceeds $150,000, and the average employee fraud scheme runs for 18 months before detection. These are not outlier events — they are the statistical norm for organisations without comprehensive fraud management strategies.

Employee fraud represents a significant component of commercial crime losses. Trusted, long-tenured employees with financial access commit the majority of internal fraud — not entry-level staff. Senior managers and executives, who have greater access and less oversight, commit larger frauds on average.

The Privacy Act 2020 also creates an overlay obligation: businesses that suffer data breaches as part of a fraud event — for example, where employee records or customer financial data are compromised — are required to notify the Privacy Commissioner and affected individuals. This creates a regulatory exposure on top of the direct financial loss, reinforcing the importance of comprehensive commercial crime insurance.

External fraud threats — BEC, computer fraud, counterfeit instruments — add to the internal employee risk picture. Businesses must manage both vectors simultaneously.`,
      },
      {
        heading: 'What Does Commercial Crime Insurance Cover?',
        body: `A comprehensive commercial crime policy typically covers the following key insuring agreements:

Employee Dishonesty: This is the fidelity component — covering direct financial loss caused by a dishonest or fraudulent act committed by an employee. This includes embezzlement, theft of cash or assets, fraudulent invoicing, payroll fraud, and stock theft. Most policies cover all employees as a blanket, without requiring individual names to be specified.

Computer Fraud: Loss resulting from the fraudulent input of data or instructions into a computer system to cause an unauthorised transfer of funds or property. This covers scenarios where criminals hack into your financial systems and initiate fraudulent transactions. Note that socially engineered payments — where an employee authorises the transfer after being deceived — typically require a separate social engineering endorsement.

Forgery and Alteration: Loss resulting from forgery or alteration of financial instruments — cheques, promissory notes, payment orders, or similar instruments. This covers both third-party forgery and situations where an employee forges documents.

Counterfeit Currency: Loss from accepting counterfeit banknotes in the normal course of business. Most relevant for retail, hospitality, and cash-handling businesses.

Client Asset Protection: Available for financial services firms, this extension covers losses of client funds or assets held in trust or under management resulting from employee dishonesty.

Premises and Transit Theft: Some policies extend to cover theft of money and securities from your premises or while in transit (e.g., a cash carry). This bridges the gap between crime insurance and property insurance.

Defence Costs and Investigation Expenses: Legal costs incurred defending an allegation, and costs of investigating a fraud (forensic accountants, legal advisers) are often covered, subject to limits.`,
      },
      {
        heading: 'How Claims Work',
        body: `Understanding how commercial crime insurance claims work before you need to make one is essential. The mechanics differ from property insurance in important ways.

Trigger: Commercial crime policies are typically written on a "discovery" basis — the policy responds to losses that are discovered during the policy period, regardless of when the fraud actually occurred. This is important: a fraud that ran for three years may be discovered in year four, and the current year's policy would respond (subject to any retroactive date limitations). Some policies are "loss sustained" — meaning the loss must have occurred during the policy period — so check your policy wording carefully.

Notification: Most policies require you to notify your insurer as soon as you have reasonable grounds to believe a loss covered by the policy has occurred — not necessarily when you have confirmed it. Delaying notification can jeopardise your claim. If you suspect fraud, notify your insurer and your broker immediately.

What You Need to Prove: Unlike property claims, fraud claims require you to establish that an employee (or third party, depending on the insuring agreement) committed a dishonest act that caused the loss. You don't need a criminal conviction — you need to establish the facts on the balance of probabilities. A forensic investigation will typically be required.

Investigation Process: Your insurer will appoint investigators (often forensic accountants and loss adjusters) to assess the claim. Cooperation is typically required as a condition of the policy. Preserve all evidence from the moment you suspect fraud — documents, system logs, electronic records.

Settlement Timeframes: Commercial crime claims can take 3-12 months to resolve, depending on complexity. Large or complex cases involving forensic investigation, legal proceedings, or international elements take longer. Simple cases with clear evidence can be settled in a few months.`,
      },
      {
        heading: 'Comparing Commercial Crime Insurance Products in NZ',
        body: `The commercial crime insurance market in New Zealand is served by several specialist insurers and brokers, with products varying in breadth, limits, and pricing.

Chubb FraudProtector: Chubb is arguably the most well-known commercial crime insurer in the NZ and Australian market. Their FraudProtector product offers comprehensive coverage including employee dishonesty, computer fraud, forgery, counterfeit currency, and client asset protection. Available through specialist brokers, with limits from $100,000 to $10m+.

AIG CyberEdge with Crime Module: AIG offers integrated cyber and crime coverage, with the commercial crime elements available as part of a broader cyber package. This can be an efficient approach for businesses seeking both covers, reducing the risk of coverage gaps between separate policies.

Delta Insurance: Delta is a NZ-based specialty insurer with commercial crime products available through brokers. They have a reputation for nimble underwriting and flexibility on coverage terms.

NZI: NZI (IAG's commercial lines brand) offers crime insurance as part of their business insurance portfolio. Particularly relevant for businesses already holding NZI property or liability insurance who want to consolidate providers.

When to Use a Specialist Broker: For commercial crime insurance, using a specialist broker — such as Marsh NZ, Rothbury Insurance Brokers, or Gallagher — is strongly recommended. The coverage nuances, especially around social engineering, computer fraud triggers, and discovery period terms, require expert advice to navigate correctly. A broker can also access markets that are not available direct and negotiate better terms for your specific risk profile.`,
      },
      {
        heading: 'How Much Does Commercial Crime Insurance Cost in NZ?',
        body: `Commercial crime insurance premiums in New Zealand vary considerably based on the size and nature of the business, but the following benchmarks provide a useful starting guide.

For SMEs (up to $10m turnover), premiums typically fall in the range of $1,500-$3,000 per year for $1-2m of cover. Mid-market businesses ($10-100m turnover) can expect premiums of $3,000-$10,000+ for $2-5m limits. Larger corporates and financial institutions pay significantly more for broader and higher-limit policies.

Key factors that influence premium:
- Annual turnover: Higher revenue generally means greater exposure and higher premium
- Number of employees with financial access: More people with access to funds = greater risk
- Financial controls: Strong controls (segregation of duties, dual authorisation, regular audits) reduce premium meaningfully
- Industry sector: Financial services, property, legal, and retail sectors attract higher premiums than others
- Prior loss history: Any prior fraud claims will significantly affect premium and may require excess loading
- Limits required: Higher limits cost more, though the relationship is not linear

How to reduce your premium:
- Implement and document strong financial controls
- Conduct regular independent reconciliations
- Run background checks for all finance roles
- Maintain clear separation of duties in accounts payable and payroll
- Implement dual authorisation for payments above a threshold
- Demonstrate a clear fraud response policy

Commercial crime insurance at $2,000-$3,000 per year represents exceptional value for most SMEs when set against the median fraud loss of $150,000+.`,
      },
      {
        heading: 'Who Needs Commercial Crime Insurance?',
        body: `Commercial crime insurance is relevant to virtually any business with employees who have financial access. However, certain sectors face elevated exposure:

Professional Services (accounting, legal, consulting): Client funds are handled, employees have access to trust accounts and payment systems, and clients expect fiduciary responsibility. A single embezzlement incident in a legal firm can exceed the firm's professional indemnity limits if the loss involves client funds.

Financial Services (mortgage brokers, financial advisers, fund managers): The combination of client asset exposure and regulatory oversight makes commercial crime insurance near-essential. Licensing bodies may require it.

Retail and Hospitality: Cash handling, multiple staff with till access, high employee turnover, and significant inventory create multiple fraud exposure vectors. Employee theft (cash, stock) is among the most common fraud types in this sector.

Property Management: Rental income, bond management, and vendor payment processing create substantial embezzlement opportunities. Property managers handling significant monthly cash flows should regard commercial crime insurance as a baseline requirement.

Not-for-Profits (charities, clubs, religious organisations): NFPs are often disproportionately affected by employee and volunteer fraud because oversight tends to be informal and controls weak. Yet governance failures can be devastating to a charity's reputation and donor base. NFP-specific fidelity cover is available.

Construction and Property Development: High-value subcontractor payments, tender processes, and complex cash flows create significant BEC and computer fraud exposure, in addition to internal fraud risk.

Real-world NZ scenarios illustrate the need: a bookkeeper at an Auckland professional services firm embezzled $480,000 over four years by creating fictitious supplier accounts; a property manager in Wellington diverted rental income to personal accounts totalling $200,000 before detection. In both cases, commercial crime insurance would have provided the financial recovery mechanism.`,
      },
    ],
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
    longFormContent: [
      {
        heading: 'What is Fidelity Insurance?',
        body: `Fidelity insurance — also called fidelity guarantee insurance or employee dishonesty insurance — is a specialist business insurance product that covers direct financial losses caused by the dishonest or fraudulent acts of employees. It is one of the oldest forms of commercial insurance, and one of the most consistently misunderstood.

The core protection is straightforward: if an employee steals money, embezzles funds, or commits fraud that causes a direct financial loss to the business, fidelity insurance reimburses that loss (subject to policy terms and limits).

The term "fidelity" references the loyalty — or faithfulness — expected of employees. When that loyalty is betrayed, the insurance steps in. The policy may be called "fidelity insurance," "employee dishonesty insurance," or "fidelity guarantee" depending on the insurer and jurisdiction. In New Zealand, you will encounter all three terms.

Fidelity insurance differs from commercial crime insurance in scope. Fidelity is specifically and exclusively about internal employee dishonesty — acts committed by your own staff, against your own business. Commercial crime insurance is broader: it covers fidelity as a subset but also extends to external criminal acts such as computer fraud by third parties, forgery of documents by outsiders, and counterfeit currency. For many businesses, a commercial crime policy that encompasses fidelity within a broader package is the preferred approach.`,
      },
      {
        heading: 'Why Employee Fraud Is Your Biggest Financial Risk',
        body: `The most counterintuitive finding in business fraud research is also the most important: the greatest fraud threat to most businesses is not hackers, not scammers, not external fraudsters — it is trusted employees.

Global research from the Association of Certified Fraud Examiners (ACFE) — the most comprehensive study of occupational fraud — consistently finds:
- 43% of fraudsters have been employed by their victim organisation for more than five years
- The median single fraud loss exceeds $150,000
- The average fraud scheme runs for 18 months before detection
- Over 90% of fraudsters had no prior criminal record

These patterns mirror what is observed locally. The profile of the typical employee fraudster is not a reckless opportunist — it is a trusted, long-serving employee in a position of financial access and responsibility. They are often well-regarded by colleagues and management. The extended tenure is precisely what enables long-running frauds: the employee understands the control environment, knows where the gaps are, and has accumulated enough trust that oversight is minimal.

The 18-month average detection lag is particularly significant. A business losing $10,000 per month to employee embezzlement that goes undetected for 18 months faces a $180,000 loss — well above the cost of three to four years of fidelity insurance premiums.

Personal financial stress is a common trigger: ACFE data shows approximately half of fraudsters are experiencing financial difficulties (debt, divorce, gambling, medical costs) at the time of the fraud. This does not excuse the behaviour, but it helps explain why background checks alone are not sufficient — they capture prior convictions, not current pressures.`,
      },
      {
        heading: 'What Fidelity Insurance Covers in New Zealand',
        body: `A fidelity insurance policy covers direct financial losses caused by dishonest or fraudulent acts committed by employees of the business. Key coverage categories include:

Cash Theft: Physical theft of cash from registers, petty cash funds, safes, or cash in transit. Common in retail, hospitality, gaming, and any business with significant cash handling.

Embezzlement of Business Funds: The most common and highest-value fraud type — gradually diverting business funds to personal accounts through false invoices, duplicate payments, or direct bank transfers. Can run for years before detection.

Ghost Employees and Payroll Fraud: Creating fictitious employees on the payroll and redirecting their salaries, or inflating hours worked for existing employees with the approval of a colluding supervisor. Particularly common in larger organisations with complex payroll systems.

Fraudulent Payment Authorisations: Forging the signature or authorisation of a business owner, director, or authorised signatory on payment instructions, cheques, or electronic fund transfer approvals.

Stock and Asset Theft: Systematic removal of inventory, equipment, or physical business assets. Common in retail, warehousing, and manufacturing.

Unauthorised Fund Transfers: Directing payments to personal accounts or controlled third parties using legitimate access to banking systems. This form of fraud exploits the employee's authorised system access to initiate fraudulent transactions.

Most fidelity policies are written on a "blanket" basis — covering all employees without needing to specify individuals. This is important because the fraudster is typically not who you would expect.`,
      },
      {
        heading: 'The Claims Process Explained',
        body: `When you discover — or suspect — employee fraud, the steps you take in the immediate aftermath significantly affect your ability to recover both the funds and the insurance claim.

What Triggers a Claim: Fidelity insurance responds when you discover that an employee has committed a dishonest act that caused a direct financial loss. You don't need certainty — reasonable grounds for suspecting fraud is typically sufficient to trigger the notification obligation. Do not wait until you have proven the fraud beyond doubt before notifying your insurer and broker.

Documentation Required: When making a claim, you will typically need to provide: a detailed account of how the fraud was discovered; quantification of the loss with supporting documentation (bank statements, invoices, payroll records, accounts reconciliation); identification of the employee(s) involved (if known); and evidence that the loss resulted from a dishonest act (not an error).

Police Report Requirement: Most fidelity insurers require or strongly encourage you to report the fraud to NZ Police. This creates an official record and may assist with evidence gathering. File a report with NZ Police (105) and note the case number. This is separate from the insurance claim, which can proceed independently.

No Conviction Needed: Critically, a criminal conviction is not required to make a successful fidelity insurance claim. You need to establish on the balance of probabilities that the employee committed the dishonest act. Many fraud cases settle with the employee leaving without criminal prosecution — a fidelity claim can still succeed in these circumstances.

Typical Resolution Timeline: Straightforward fidelity claims with clear evidence can resolve in 3-6 months. Complex cases involving forensic accounting, disputed facts, or large dollar amounts can take 12+ months. Engaging a specialist forensic accountant from the outset can expedite the process.`,
      },
      {
        heading: 'Fidelity Insurance Providers in New Zealand',
        body: `Fidelity insurance in New Zealand is primarily accessed through specialist insurance brokers. Unlike some insurance types where direct online purchase is common, fidelity and commercial crime insurance is almost always brokered, given the complexity and the need for tailored advice.

Rothbury Insurance Brokers: One of the largest NZ-owned brokers, Rothbury has specialist expertise in commercial crime and fidelity products. They can access multiple underwriters and provide comparative advice for businesses of all sizes.

Unite Insurance: A specialist NZ broker with focus on the SME segment. Unite Insurance offers fidelity products suitable for small businesses that may find larger broker minimums prohibitive.

Marsh NZ: The local arm of the global Marsh brokerage, Marsh specialises in larger corporate and mid-market risks. For businesses with complex exposures or high-limit requirements, Marsh can access Lloyd's of London and international markets in addition to local insurers.

Cover4You Referral: FraudInsurance.co.nz connects businesses with licensed insurance advisers who can assist with fidelity and commercial crime insurance. Submit a quote request through our form and a licensed adviser will be in contact.

When selecting a provider, the most important considerations are: the breadth of coverage (does it include discovery-period extensions?), the limit available relative to your maximum exposure, and whether social engineering and computer fraud are included or available as extensions.`,
      },
      {
        heading: 'Prevention + Insurance: A Combined Strategy',
        body: `Insurance and prevention work best together — and in the case of fidelity insurance, good controls actually reduce your premium while also reducing the likelihood and scale of losses.

Key preventive controls:

Dual Authorisation for Payments: Require two separate authorisations for payments above a threshold. Make this a genuine control — two people checking independently, not one person countersigning without review. This single control stops a significant proportion of embezzlement attempts.

Segregation of Duties: No single person should control a financial process from initiation to completion. The person who writes the cheque should not be the person who reconciles the bank statement. The person who approves invoices should not be the person who processes payments. In small businesses, this may mean the business owner personally reviewing reconciliations.

Reference and Background Checks: Conduct proper reference checks for all employees with financial access. Credit and criminal background checks are appropriate for senior finance roles.

Regular Surprise Reconciliations: Periodic unannounced audits of accounts payable, payroll, and petty cash. Scheduled annual audits are important, but fraudsters know when they're coming. Surprise audits are significantly more effective at detecting ongoing fraud.

Encourage Reporting: Anonymous reporting channels (tip lines, email reporting) enable colleagues who suspect fraud to raise concerns without personal risk. ACFE data shows that tips are the most common method by which fraud is initially detected — more effective than audits or management reviews.

Why controls don't eliminate the need for insurance: Even the strongest control environments fail. Controls require human application, and humans make mistakes, are colluded with, or are overridden by people in authority. Fidelity insurance is the financial backstop that covers the cases where controls are circumvented. The premium is modest; the protection is material.`,
      },
      {
        heading: 'Fidelity Insurance Costs and Coverage Limits',
        body: `Fidelity insurance is among the most cost-effective business insurances available relative to the risk it covers. For most SMEs, coverage is accessible and affordable.

Typical Premium Ranges:
- Small businesses (under 10 staff, under $1m turnover): from $800-$1,500 per year for $100,000-$500,000 in cover
- Medium businesses (10-50 staff, $1-10m turnover): $1,500-$4,000 per year for $500,000-$2m in cover
- Larger businesses and professional services firms: $3,000-$10,000+ for $2-5m limits

These are indicative ranges — your specific premium will depend on the factors discussed below.

Coverage Limits: Policy limits for fidelity insurance typically range from $100,000 (minimum for most policies) to $5 million or more for large corporates. Setting the right limit is critical: the limit should represent the maximum plausible loss your business could suffer from a single fraud scheme, taking into account the employee with the greatest financial access and the length of time a fraud could go undetected in your control environment.

Excess Levels: Most fidelity policies have a minimum excess (deductible) — often $1,000-$5,000. Higher excesses reduce premium but mean you absorb more of smaller losses.

Coverage Period Nuances: Discovery-based policies cover losses discovered during the policy period, regardless of when the fraud occurred. This is generally the preferred form. Loss-sustained policies cover losses that occurred during the policy period — a subtle but important distinction that can leave gaps if a fraud spans policy periods. Always clarify the basis of coverage with your broker.

The value proposition is compelling: a $1,500 annual premium providing $1 million of fidelity cover against a $150,000 average fraud loss represents an extraordinary risk transfer for most businesses.`,
      },
    ],
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
    longFormContent: [
      {
        heading: 'What is Cyber Insurance in New Zealand?',
        body: `Cyber insurance — also called cyber liability insurance or cyber security insurance — is a specialist policy designed to cover the financial consequences of cyber attacks, data breaches, and related digital threats. It is one of the fastest-growing insurance categories globally and is rapidly becoming standard for businesses of all sizes in New Zealand.

The policy covers two broad categories of cost. First-party costs are those you incur directly: forensic investigation to understand what happened, restoring your systems and data, business interruption losses while your systems are down, and crisis management. Third-party costs are those you become liable to pay: compensation to customers whose data was breached, regulatory fines, and legal defence costs.

What cyber insurance does not typically cover is equally important to understand. Standard cyber policies generally do not cover: losses from employee embezzlement or dishonesty (fidelity insurance territory), physical damage to property from a cyber event (covered under property insurance in some cases), losses where the business deliberately caused the incident, and war or state-sponsored cyber attacks (an exclusion that has been the subject of significant litigation globally).

The key distinction from commercial crime insurance: cyber insurance focuses on the cyber event itself and its financial consequences, whereas commercial crime insurance focuses on the criminal act and the direct financial loss. A ransomware attack that causes business interruption is a cyber insurance claim. An employee who steals funds using their authorised system access is a fidelity insurance claim. These are different policies for different risks — and businesses increasingly need both.`,
      },
      {
        heading: 'The Cyber Threat Landscape for NZ Businesses 2026',
        body: `The cyber threat environment for businesses has intensified dramatically over the past three years, and shows no sign of abating. CERT NZ (the government's Computer Emergency Response Team) received thousands of incident reports from NZ businesses in 2024-2025, representing significant financial and operational losses across the economy.

Ransomware remains the dominant threat by financial impact. Organised criminal groups deploy ransomware — software that encrypts business data and systems, demanding a ransom for the decryption key — against businesses of all sizes. SMEs are increasingly targeted because they often have valuable data but weaker cybersecurity than large corporations. The average cost of a ransomware recovery (including IT restoration, business interruption, and ransom payments where made) ranges from $50,000 for small businesses to $500,000+ for mid-market organisations.

Business Email Compromise (BEC) is the fastest-growing threat by volume and continues to cost businesses tens of millions annually. BEC attacks involve criminals compromising or spoofing email accounts to redirect payments or extract sensitive information. AI-generated phishing messages are now virtually indistinguishable from authentic communications, significantly lowering the detection rate.

The Privacy Act 2020 creates a regulatory overlay that makes cyber incidents more expensive than before. Serious privacy breaches must be notified to the Privacy Commissioner and affected individuals. Failure to notify appropriately can result in investigation, adverse findings, and reputational damage — in addition to the direct costs of the breach.

Supply chain attacks — where criminals target a supplier's systems to gain access to that supplier's customers — are growing. A small business may have excellent security but be compromised through a software provider or managed service provider. This emerging threat is covered by cyber insurance but often overlooked in businesses' risk assessments.`,
      },
      {
        heading: 'First-Party vs Third-Party Cyber Cover',
        body: `Cyber insurance policies are typically structured around two categories: first-party cover (your own losses) and third-party cover (your liability to others). Understanding this distinction is essential when comparing policies and ensuring you have appropriate protection.

First-Party Cover includes:

Incident Response and Forensic Investigation: The immediate costs of responding to a cyber incident — engaging specialist cybersecurity firms to investigate what happened, how the attacker got in, and what data or systems were affected. These costs can run to tens of thousands of dollars even for modest incidents.

System Restoration and Data Recovery: The technical costs of restoring systems, recovering data from backups (or rebuilding data where backups are absent or affected), and returning to operational status. Often the most significant direct cost category.

Business Interruption: Lost revenue and increased operating costs arising from the period your systems are down or impaired following a cyber attack. For businesses dependent on digital systems — which is now nearly all businesses — this can dwarf the technical recovery costs.

Ransomware Extortion Payments and Negotiation: If you choose (or are advised) to pay a ransom, cyber insurance can cover the payment subject to legal requirements. Insurers now provide specialist ransomware negotiators to engage with criminals, often significantly reducing the demanded amount.

Customer and Staff Notification: The Privacy Act 2020 requires notification of serious breaches. The cost of drafting, printing, and mailing notification letters, providing credit monitoring services to affected individuals, and managing the customer communication process is covered.

Third-Party Cover includes liability to customers, regulatory investigation costs and fines (where legally insurable), media liability (for defamation or breach of privacy arising from the incident), and professional liability arising from a breach of client data.`,
      },
      {
        heading: 'Cyber Insurance Providers in New Zealand',
        body: `The NZ cyber insurance market has matured significantly over the past five years, with several strong options available for businesses at different size and risk profiles.

DUAL NZ: DUAL is a specialist underwriter that offers online cyber insurance through their WebRater platform — businesses in 500+ occupations can get an indicative quote online in minutes. Their cyber policy is one of the most accessible in the NZ market for SMEs. A key feature is the optional social engineering fraud add-on, providing up to $250,000 coverage for BEC and related losses. This makes DUAL a strong starting point for SMEs seeking combined cyber and social engineering protection.

NZI Cyber Base and Cyber Ultra: NZI (part of IAG, the largest general insurer in NZ and Australia) offers a tiered cyber product — Cyber Base for smaller risks and Cyber Ultra for businesses needing broader cover and higher limits. Available through NZI's broker network and well-suited to businesses already in the NZI ecosystem.

Delta Insurance: Delta is a NZ-based specialty insurer with a strong reputation in the cyber space. Their products are available through the broker market and tend to offer flexibility in coverage terms. Delta is a good option for businesses with specific coverage requirements or risk profiles that standard products don't accommodate.

Chubb Electronic and Computer Crime (ECC): Chubb's ECC product sits at the intersection of cyber and commercial crime, covering computer-enabled fraud as well as broader cyber risks. Suited to financial services and other businesses where the computer crime/cyber overlap is significant.

AIG CyberEdge: AIG's global cyber platform, CyberEdge, is available in NZ through their local operations and broker partners. CyberEdge is a comprehensive product suited to mid-market and corporate businesses, with access to specialist incident response resources globally.

How to Compare: The most important comparison points are: coverage triggers (what events activate the policy?), sublimits (are any covers capped at a lower amount?), social engineering inclusion or exclusion, and incident response quality (who do you actually call when you have an incident?).`,
      },
      {
        heading: 'Does Your Business Need Cyber Insurance?',
        body: `Most businesses do need cyber insurance — the question is what level of cover is appropriate. The following framework can help assess your exposure.

Revenue threshold: Any business with more than $500,000 in annual revenue faces cyber exposure that justifies insurance review. Below that threshold, basic cyber policies still make sense if the business holds customer data.

Data-holding businesses: If your business holds personal information about customers, employees, or third parties — addresses, dates of birth, financial information, health data — the Privacy Act 2020 creates mandatory notification obligations on breach. The notification and response costs alone justify insurance. Healthcare providers, professional services firms, and any business with a customer database are in this category.

Regulated sectors: Financial services providers, healthcare organisations, and other regulated businesses face heightened obligations around data security. Regulators increasingly expect cyber insurance as part of a comprehensive risk management approach.

Supply chain exposure: Businesses that are part of significant supply chains — as either supplier or buyer — face exposure both from their own systems and from attacks that enter through supply chain partners. This is increasingly relevant as attack methods become more sophisticated.

The honest assessment: If your business would face costs of more than $50,000 from a significant cyber incident — and for most businesses with any IT dependency, this is a reasonable estimate — then cyber insurance at $1,500-$4,000 per year is excellent value.

Businesses without cyber insurance: You remain responsible for all incident response costs, system restoration, business interruption losses, regulatory compliance, and third-party liability. A single significant incident could be financially devastating for an SME.`,
      },
      {
        heading: 'How to Make a Cyber Insurance Claim',
        body: `The first 24 hours after discovering a cyber incident are critical — both for containing the attack and for protecting your insurance claim. The order of operations matters enormously.

Step 1 — Notify Your Insurer BEFORE Taking Major Action: This is the most important instruction. Contact your insurer (or their 24/7 incident hotline) before making any significant decisions — including paying a ransom. Most cyber policies include access to specialist incident response firms, and using insurer-approved responders is typically required for coverage. Acting without notifying the insurer first can jeopardise your claim.

Step 2 — Engage the Incident Response Team: Your insurer will connect you with specialist cyber incident response professionals. These are specialists in cyber forensics, ransomware negotiation, legal obligations, and PR management. Their involvement is typically covered under the policy.

Step 3 — Forensic Investigation: A forensic investigation determines how the attacker got in, what they accessed, how long they were in your systems, and whether data was exfiltrated. This is essential both for remediation and for regulatory notification decisions.

Step 4 — Legal Notification Assessment: Your legal and insurance team will assess whether the incident triggers Privacy Act notification obligations. If notification is required, the process, timing, and content must be managed carefully.

Step 5 — PR and Customer Communication: Significant incidents typically require customer communication. Cyber policies often include PR crisis management support to manage the reputational aspects alongside the technical recovery.

Common claim mistakes to avoid: paying a ransom without notifying the insurer, deleting or overwriting systems before forensic investigation, failing to document decisions and costs during the incident, and not notifying the insurer promptly (most policies have strict notification timeframes).`,
      },
      {
        heading: 'Cyber Insurance Costs for NZ Businesses',
        body: `Cyber insurance premiums in New Zealand have increased over the past three to four years as claims frequency and severity have risen — but for most SMEs, cover remains accessible and competitively priced relative to the exposure.

Indicative Premium Ranges for 2026:
- Small businesses ($1-2m revenue, basic data holdings): $500-$2,000 per year for $1m cover
- Medium businesses ($2-10m revenue, significant customer data): $2,000-$5,000 per year for $2-5m cover
- Professional services firms (law, accounting, finance): $3,000-$8,000+ per year for $2-5m cover
- Healthcare providers: $4,000-$10,000+ per year due to elevated data sensitivity
- E-commerce businesses with payment card data: $3,000-$8,000+ per year

Key Factors Affecting Your Premium:
- Annual revenue: Higher revenue = more at risk from business interruption
- Industry sector: Healthcare, financial services, and legal sectors carry higher premiums
- Data holdings: Volume and sensitivity of personal data held
- Security posture: Multi-factor authentication (MFA), endpoint protection, and regular patching all reduce premium
- Backup practices: Regular, tested, offline backups significantly reduce ransomware risk — and premium
- Prior claims: Prior cyber incidents will affect premium meaningfully

How to Reduce Your Premium:
- Implement MFA across all systems (this alone can reduce premium by 15-30%)
- Demonstrate regular, tested, and offline backup practices
- Apply security patches promptly
- Conduct regular staff phishing awareness training
- Have an incident response plan in place

The ROI calculation: if a ransomware attack costs your business $100,000-$300,000 to resolve, and the annual probability of such an event is 5-15%, then the expected annual cost is $5,000-$45,000. Cyber insurance at $2,000-$5,000 per year transfers most of that risk at a fraction of the expected cost.`,
      },
    ],
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
    longFormContent: [
      {
        heading: 'What is Social Engineering Insurance?',
        body: `Social engineering insurance — or social engineering fraud cover — is a specialist extension designed to cover financial losses that occur when criminals psychologically manipulate employees into taking actions that cause financial harm to the business. It is one of the most important — and most commonly missing — elements of a complete business fraud insurance programme.

The defining characteristic of social engineering fraud is that the employee does exactly what they are supposed to do: they follow instructions from what appears to be a trusted source. There is no system hack, no malware, no technical breach. The criminal's tool is deception, not technology. This is why standard policies — which focus on external attacks or internal dishonesty — typically fail to respond.

Social engineering fraud encompasses several key attack types. Business Email Compromise (BEC) involves criminals spoofing or compromising email accounts to redirect payments. CEO fraud involves impersonating a senior executive to instruct staff to make urgent transfers. Invoice fraud involves substituting real supplier invoices with fraudulent ones. Payroll diversion involves requesting bank detail changes for employees to redirect salary payments.

The insurance gap is significant. Standard commercial crime policies typically have an "authorised payment" exclusion — if an employee authorised the transfer, even under false pretences, many policies will not respond. Standard cyber insurance covers hacking-based losses but not the deception-based ones. Social engineering insurance fills exactly this gap, providing cover for the specific scenario where a business loses money because a trusted employee was manipulated into authorising a fraudulent payment.`,
      },
      {
        heading: 'How Social Engineering Attacks Work in New Zealand',
        body: `Social engineering attacks targeting businesses follow recognisable patterns. Understanding how they work is the first step toward effective prevention — and toward understanding why standard insurance is insufficient.

Business Email Compromise Anatomy: A typical BEC attack starts with reconnaissance. Criminals research the target business online — its suppliers, its payment processes, its key personnel. This information is freely available from company websites, LinkedIn, and sometimes from compromised email accounts. The criminal then either hacks a supplier's email account, or creates a near-identical spoofed domain (e.g., acme-nz.com instead of acmenz.com). At the right moment — when a payment is due — they send an email with new banking details. The accounts payable team, seeing a familiar-looking sender and a plausible explanation, updates the details and makes the payment.

NZ Case Examples: The construction and property sector has been heavily targeted. In one documented pattern, criminals monitored email communications between a Wellington property developer and its law firm, intercepting a settlement instruction and substituting fraudulent banking details — resulting in a loss of over $500,000. In another case, a Christchurch manufacturer received what appeared to be an updated invoice from a regular supplier, totalling $180,000, which was paid before the supplier contacted them about non-payment.

The scale of sophistication has increased dramatically with AI tools. AI can now generate phishing emails that are personalised, grammatically perfect, and contextually aware — written in the style of the impersonated person, referencing real projects and relationships. Deepfake voice and video technology can impersonate executives convincingly on phone calls. The "human hacking" threat is evolving faster than awareness of it.

Sectors most targeted: Construction (high-value subcontractor payments), property development and conveyancing (settlement funds), legal services (client trust accounts), professional services (accounts payable processes), and manufacturing and import/export (supplier payment processes).`,
      },
      {
        heading: 'What Does Social Engineering Cover?',
        body: `Social engineering insurance covers direct financial losses arising from an employee being deceived into authorising or executing a fraudulent payment or transaction. The coverage is specific and the trigger is important to understand.

Fraudulent Instruction Loss: The core coverage — financial loss resulting from the business acting on fraudulent instructions that it believed to be genuine. This covers BEC, CEO fraud, and invoice fraud where a payment is made to a criminal-controlled account based on instructions that appeared to come from a legitimate source.

Fraudulent Executive Impersonation: Losses arising from an employee following instructions from someone who fraudulently impersonated a senior executive of the business. The criminal doesn't need to have hacked the executive's email — a convincing spoofed email or phone call is sufficient to trigger coverage.

Supplier Impersonation Losses: Losses arising from a fraudulent party impersonating a legitimate supplier, vendor, or business partner to redirect payments.

Payroll Diversion: Losses arising from a fraudulent bank account change instruction for an employee's salary, causing payroll to be directed to a criminal-controlled account.

Sublimits vs Standalone Cover: Social engineering coverage is most commonly available as a sublimited endorsement to a cyber insurance policy — for example, a $1m cyber policy with a $250,000 social engineering sublimit. This means the total social engineering payout is capped at $250,000 even if the main policy limit is higher. For businesses with significant exposure (regular high-value payments, settlement funds), a standalone social engineering policy or a higher sublimit is warranted.`,
      },
      {
        heading: 'The Authorised Payment Gap — Why Banks Won\'t Refund You',
        body: `Understanding why banks do not automatically refund social engineering losses is essential to understanding why this insurance exists and why it matters.

The distinction in payment law is between unauthorised payments (where a criminal initiates a transaction without your involvement or knowledge) and authorised payments (where you — or your employee — initiates the transaction, even if under false pretences). Banks in New Zealand are obligated to refund unauthorised transactions promptly. For authorised transactions, even fraudulent ones, the bank's legal obligation is much less clear.

When your accounts payable staff member follows what they believe to be a legitimate supplier instruction and makes a payment — using their own login, through the normal payment process, to an account they believe belongs to the supplier — that payment is authorised. The fact that the instruction was fraudulent does not, in New Zealand law, automatically create an obligation on the bank to refund the payment.

Banks will attempt to recall funds from fraudulent transfers, and where the receiving bank has not yet disbursed the funds, recall can succeed. But success depends heavily on speed — the faster you report, the better your chances. International transfers are significantly harder to recall than domestic ones.

The UK has addressed this gap through the Authorised Push Payment (APP) fraud mandatory reimbursement code, which requires banks to reimburse victims in defined circumstances. Australia has adopted a similar framework. New Zealand has not yet done so — banks here operate on voluntary codes, which provide weaker protection.

In this environment, social engineering insurance fills the critical gap between what happened (a legitimate employee made a fraudulent payment) and what the bank will cover (nothing, or very little). The insurance responds precisely because the payment was authorised — the very characteristic that excludes it from bank protection.`,
      },
      {
        heading: 'Social Engineering Insurance Providers in NZ',
        body: `Social engineering insurance is not available as a standalone product from most insurers in New Zealand — it is typically structured as an endorsement or rider on a cyber insurance policy. The market is evolving, but the following are the main access points for 2026.

DUAL NZ: DUAL offers a social engineering fraud endorsement on their cyber insurance policy with a standard sublimit of up to $250,000. This is one of the most accessible products in the market, available through their WebRater online platform for many business types. The DUAL endorsement covers BEC, CEO fraud, and fraudulent instruction losses within the sublimit.

Chubb FraudProtector: Chubb's commercial crime product, FraudProtector, includes social engineering fraud as a standard or optional component depending on the version. The Chubb product can offer higher limits than sublimited cyber endorsements, making it more suitable for businesses with higher-value transaction exposures.

AIG CyberEdge: AIG's cyber product can include social engineering coverage as an extension, available through specialist brokers. AIG's broader international claims management capability is relevant for businesses with cross-border transaction exposure.

Delta Insurance: Delta offers social engineering coverage as part of their cyber product suite, with flexibility on limits for businesses where standard sublimits are insufficient.

Marsh and Rothbury as Access Points: Neither Marsh nor Rothbury underwrite insurance, but both are leading brokers with access to the full range of products including specialist social engineering coverage. For businesses with high-value exposure or complex needs, working with a specialist broker is strongly recommended. A broker can also negotiate higher sublimits or standalone social engineering cover where standard products are insufficient.

Cover4You Referral: FraudInsurance.co.nz connects businesses with licensed advisers who can help assess social engineering exposure and arrange appropriate cover. Submit a quote request through our form.`,
      },
      {
        heading: 'Prevention: How to Stop Social Engineering Attacks',
        body: `Social engineering attacks exploit human psychology and process weaknesses, not technology. The most effective prevention measures are therefore process controls and staff education, not software tools.

The Call-Back Verification Protocol: This single control stops the majority of BEC and social engineering attacks. The rule is simple: any change to a supplier's, customer's, or employee's banking details must be verbally confirmed by a phone call to a number obtained from your own existing records — not from the email, invoice, or document making the request. Even if the email appears to come from the correct address, even if the caller ID looks right, even if the explanation sounds completely plausible — call the number you already have on file. This is the most important fraud prevention control a business can implement.

Dual Authorisation for High-Value Payments: No single person should be able to initiate and approve a significant payment unilaterally. The second authoriser must genuinely review the payment — not just countersign without scrutiny. For payments above a threshold (e.g., $10,000-$50,000 depending on business size), a second approval through a separate communication channel adds a critical verification layer.

Domain Monitoring and Email Security: Use email security tools that flag emails from lookalike domains (e.g., supp1iernz.co.nz instead of suppliernz.co.nz). DMARC, DKIM, and SPF email authentication records reduce spoofing of your own domain by criminals.

Staff Training and Simulated Attacks: Regular training on how BEC and CEO fraud work — including simulated phishing exercises — builds recognition and healthy scepticism in your team. Staff who feel comfortable questioning an unusual request are your best defence.

CERT NZ Guidance: CERT NZ publishes practical guidance for businesses on preventing BEC and social engineering fraud. Their resources at cert.govt.nz are free and regularly updated with the latest threat intelligence.`,
      },
      {
        heading: 'Cost and Claims: What to Expect',
        body: `Social engineering insurance is generally affordable relative to the potential loss, particularly when taken as an endorsement on an existing cyber policy.

Premium Ranges:
- Social engineering endorsement on cyber policy (up to $250,000 sublimit): $300-$800 additional premium per year
- Higher sublimit endorsements ($500,000-$1m): $800-$2,500 additional per year
- Standalone social engineering policy for high-exposure businesses: $2,000-$5,000+ per year

Context for premium decisions: the average BEC loss in NZ is in the range of $50,000-$500,000. An endorsement at $500 per year for $250,000 of coverage represents extraordinary value against that exposure.

What Triggers a Claim: A social engineering insurance claim is triggered when your business suffers a direct financial loss because an employee was deceived into authorising or executing a fraudulent payment. The loss must result from a fraudulent instruction — as opposed to an employee's own dishonesty (fidelity) or an external computer hack (cyber). The employee must have genuinely believed they were following legitimate instructions.

Immediate Steps After Discovering a BEC Loss:
1. Contact your bank immediately — request a recall of the payment. Every hour counts.
2. Notify your insurer and broker immediately — before taking any further significant action.
3. Preserve all evidence: the original emails, any phone records, banking confirmations.
4. Do not alert the criminal — if there is ongoing email access, alerting them may cause further damage.
5. Report to NZ Police (105) and consider reporting to CERT NZ.
6. Begin your insurer's claim process with your broker's assistance.

Speed of reporting to the bank is the most critical variable in loss recovery — a successfully recalled payment makes the insurance claim unnecessary. When recall fails, insurance provides the financial recovery.`,
      },
    ],
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
    longFormContent: [
      {
        heading: 'What is Funds Transfer Fraud Insurance?',
        body: `Funds transfer fraud insurance provides specific coverage for financial losses arising from fraudulent instructions — whether computer-generated or human-authorised — that cause your business to send money to accounts controlled by criminals. It sits at the intersection of commercial crime, social engineering, and cyber insurance, and is one of the most practically important — and most frequently misunderstood — business insurance covers.

The core coverage addresses what is ultimately the most costly outcome of most financial crimes against businesses: money leaving your account and not coming back. Whether the trigger is a hacked payment system, a manipulated accounts payable file, or an employee deceived into authorising a wire transfer, funds transfer fraud insurance responds to the financial loss.

The distinction from related insurance types is important. Commercial crime insurance covers computer fraud (where criminals directly manipulate your systems) and employee dishonesty (where your own staff are the perpetrators). Social engineering insurance covers losses where employees are deceived into authorising payments. Cyber insurance covers the event and its consequences. Funds transfer fraud cover typically addresses the overlapping zone: fraudulent payment instructions, regardless of whether the vector was a system hack or human deception.

This specificity matters because claims involving payment fraud often fall into disputed territory between commercial crime and cyber policies. A dedicated funds transfer fraud cover removes that ambiguity by directly insuring the outcome — the misdirected payment — rather than a specific mechanism.`,
      },
      {
        heading: 'Why Funds Transfer Fraud Is Growing Fast',
        body: `Funds transfer fraud has grown dramatically as businesses have moved their payment processes online and adopted electronic fund transfer systems. Every efficiency gain in electronic payments creates a corresponding attack surface for criminals.

BEC Volumes: Business Email Compromise remains the primary driver of funds transfer fraud losses globally. The FBI's Internet Crime Complaint Center (IC3) consistently identifies BEC as the highest-dollar-value cybercrime category. Locally, CERT NZ and the NZ Police Financial Crime Group track significant growth in BEC incidents, with individual losses routinely exceeding $100,000-$500,000.

NZ Construction Industry Losses: The construction sector is disproportionately targeted for funds transfer fraud. High-value subcontractor payments, time-sensitive progress payment schedules, and complex payment chains involving multiple parties create ideal conditions for payment diversion attacks. A construction company making a $2 million subcontractor payment is a highly attractive target, and the payment volume and urgency creates pressure to pay without thorough verification.

Law Firm Trust Account Fraud: The legal profession faces specific exposure from funds transfer fraud relating to trust accounts and settlement funds. Client settlement funds and property conveyancing transactions are routinely targeted — a single compromised settlement instruction in a property transaction can result in hundreds of thousands of dollars being misdirected. The Law Society has issued multiple warnings about this risk.

Financial Services Exposure: Financial services businesses, fund managers, and treasury departments face elevated exposure from sophisticated attacks that target payment authorisation systems and SWIFT messaging (for international transfers). These attacks require greater technical sophistication but the rewards for criminals are commensurately larger.

International Organised Crime: The criminal groups behind funds transfer fraud operate internationally, often from jurisdictions with limited law enforcement cooperation. This makes post-loss recovery extremely difficult and reinforces the importance of prevention and insurance as primary strategies.`,
      },
      {
        heading: 'What Funds Transfer Fraud Insurance Covers',
        body: `Funds transfer fraud insurance provides coverage for direct financial losses arising from specific fraud scenarios involving the misdirection of funds. Key coverage elements include:

Fraudulent Payment Instructions: Losses arising from the business following payment instructions that were fraudulently issued or altered — including BEC-originated instructions, spoofed email instructions, and fraudulent SWIFT messages.

Electronic Funds Transfer Manipulation: Losses arising from the manipulation of electronic funds transfer systems — including alteration of payment files, corruption of batch payment instructions, or fraudulent input into banking platforms.

Counterfeit Wire Fraud: Losses arising from fraudulent wire transfer instructions presented to the business's bank that appear to have authorised origin but do not.

Third-Party Impersonation Losses: Losses arising from a third party (supplier, customer, bank, regulatory body) being impersonated to issue instructions that cause funds to be transferred to fraudulent accounts.

Recovery Costs: In addition to the direct financial loss, many policies cover costs associated with attempting to recover the misdirected funds — including legal costs of pursuing recalls through banking and legal channels, and forensic investigation costs.

What is typically excluded: Losses arising from your own employee's dishonest acts (fidelity territory), losses arising from speculative or investment decisions, and losses that are recoverable from a third party (e.g., where bank recall succeeds).

The boundary with social engineering: Some funds transfer fraud policies incorporate social engineering as a component; others treat it separately. When reviewing coverage, confirm whether human-authorised payment diversions (BEC, CEO fraud) are included or whether they require a separate endorsement.`,
      },
      {
        heading: 'The Anatomy of a Funds Transfer Fraud Attack',
        body: `Understanding how funds transfer fraud attacks unfold in practice helps businesses recognise both the warning signs and the points where prevention is most effective.

Step 1 — Reconnaissance: Criminals research their target thoroughly before making contact. They monitor publicly available information — company websites, LinkedIn, Companies Office filings, industry publications — to identify the business's key personnel, suppliers, payment processes, and upcoming transactions. For higher-value attacks, this reconnaissance phase can take weeks.

Step 2 — Account Compromise or Domain Spoofing: Either the criminal gains access to a legitimate email account (through phishing or credential theft) or they create a convincing fake — a near-identical domain name or a carefully crafted impersonation. For BEC, supplier email compromise is particularly effective because the attacker can monitor real payment conversations.

Step 3 — The Fraudulent Instruction: At the right moment — typically when a large payment is due or a transaction is in progress — the criminal issues the fraudulent instruction. This might be new banking details for a pending invoice, a change to settlement account instructions, or an urgent wire transfer request from what appears to be a senior executive.

Step 4 — Exploitation of Urgency and Authority: Social engineering attacks typically incorporate two psychological elements: urgency (there's a deadline, a deal is closing, a crisis is unfolding) and authority (the instruction comes from someone the employee is conditioned to follow). These two elements combined suppress the normal inclination to verify.

Step 5 — Detection Failure: Many fraudulent transfers are not detected until the legitimate payee contacts the business about non-receipt of payment. By this point, the funds have typically been moved multiple times and may have left New Zealand. The window for bank recall — which closes within hours for international transfers — has almost certainly passed.

The critical insight: the detection failure is almost always a process failure, not an individual failure. A well-designed verification process would have stopped the fraud at Step 3.`,
      },
      {
        heading: 'Accessing Funds Transfer Fraud Cover in New Zealand',
        body: `Funds transfer fraud cover in New Zealand is most commonly accessed as a component of commercial crime or cyber insurance, rather than as a standalone product. Understanding how to access appropriate cover requires understanding the market structure.

Bundled with Commercial Crime: Most commercial crime policies include a computer fraud insuring agreement that covers some funds transfer fraud scenarios — specifically those involving direct computer system manipulation. If the fraud was initiated by hacking your payment system, the computer fraud section should respond. Socially engineered transfers typically require an additional social engineering endorsement.

Bundled with Cyber Insurance: Many cyber insurance policies now include funds transfer fraud or social engineering as an endorsement. DUAL NZ offers a social engineering fraud add-on with their cyber product. This is often the most cost-efficient access point for SMEs seeking BEC and payment diversion coverage.

Specialist Providers: For businesses with high transaction volumes or elevated exposure (legal, financial services, property, construction), a standalone commercial crime policy with a dedicated funds transfer fraud insuring agreement — and higher limits — may be more appropriate. Chubb, AIG, and Delta Insurance all offer products in this space.

Broker Placement for High Limits: For businesses requiring more than $1-2m in funds transfer fraud cover, broker placement is typically required. Specialist brokers — Marsh NZ, Rothbury, Gallagher — can access Lloyd's of London and international markets for high-limit placements. This is relevant for law firms holding client settlement funds, fund managers, and businesses with treasury operations.

Cover4You Referral: Submit a quote request through FraudInsurance.co.nz and a licensed adviser will assess your specific exposure and connect you with appropriate coverage options.`,
      },
      {
        heading: 'Prevention Controls and Insurance Working Together',
        body: `The most effective risk management strategy for funds transfer fraud combines strong preventive controls with appropriate insurance coverage. Each element reinforces the other, and good controls typically reduce the cost of insurance.

Callback Verification for All Payment Changes: This is the most impactful single control. Any change to payment details — banking account numbers, SWIFT codes, beneficiary names — must be verified by a voice call to a telephone number obtained from your existing records (not from the instruction requesting the change). This stops the majority of BEC and payment diversion attacks.

Out-of-Band Verification for High-Value Transfers: For payments above a threshold, require verification through a communication channel different from the one used to receive the instruction. If the instruction came by email, verify by phone. If by phone, confirm in writing through a known-secure channel.

Transaction Monitoring and Anomaly Detection: Banking platforms increasingly offer transaction monitoring — alerts for unusual transaction patterns, payments to new payees, or transfers above thresholds. Enable these alerts and ensure they are reviewed by more than one person.

Dual Approval Thresholds: Require two independent approvals for all payments above a defined amount. Make this a genuine two-person check, not a rubber stamp. The two approvers should independently satisfy themselves that the payment is legitimate.

How Good Controls Reduce Premium: Insurers underwriting funds transfer fraud risks consider the business's control environment as a primary rating factor. Businesses with documented callback verification procedures, dual authorisation for large payments, and staff training typically attract meaningfully lower premiums than those without these controls. Some insurers will offer additional premium reductions for businesses that can demonstrate specific security certifications or audit processes.`,
      },
      {
        heading: 'What to Do If You\'ve Been a Victim',
        body: `If you discover that funds have been misdirected as a result of a fraudulent instruction, the actions you take in the first few hours are critical. Speed is the most important factor in recovery.

Immediately Notify Your Bank — Within Hours: Contact your bank's fraud line immediately. Ask them to issue a recall request to the receiving bank. For domestic NZ transactions, recalls are possible for 24-72 hours. For international transfers, the window is shorter — sometimes just hours. Even partial recovery is valuable: if $500,000 was misdirected and $300,000 is recovered, your insurer needs to respond to only $200,000.

Notify Your Insurer and Broker: Contact your insurer and broker before taking further significant action. Your policy likely requires prompt notification as a condition of cover. Your insurer may have specialist fraud recovery resources and legal support that can assist with the bank recall process.

Preserve All Evidence: Do not delete or overwrite any emails, payment instructions, authorisation records, or communication logs. These are essential for the insurance claim and for any law enforcement investigation. Where possible, capture screenshots of the fraudulent emails and payment confirmations before system changes occur.

Contact Netsafe and NZ Police: Report the incident to Netsafe (0508 638 723 or netsafe.org.nz) and NZ Police (105). Netsafe can provide guidance on the recovery process and connect you with appropriate resources. NZ Police involvement creates an official record that supports the insurance claim process.

File a Report with CERT NZ: CERT NZ (cert.govt.nz) receives reports of BEC and payment fraud and maintains threat intelligence that helps them warn other businesses. Your report contributes to the collective defence.

Manage Communication Carefully: Be cautious about who you tell and when. If the criminal still has access to your email systems, alerting them (through an email conversation they can monitor) that you have discovered the fraud may cause them to take additional destructive action. Secure your email accounts before communicating internally about the fraud.

Realistic Expectations on Recovery: For domestic transfers, partial recovery is possible in many cases if reported within hours. For international transfers — particularly to accounts in jurisdictions with limited cooperation — full recovery is rare. Insurance provides the financial recovery when the funds cannot be recalled.`,
      },
    ],
  },
];
