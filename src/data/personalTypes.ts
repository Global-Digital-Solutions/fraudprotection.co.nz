export interface PersonalFraudType {
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
  stats: { label: string; value: string }[];
  whatItCovers: string[];
  howToProtect: string[];
  whereToGo: { name: string; url: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedTypes: string[];
}

export const personalTypes: PersonalFraudType[] = [
  {
    slug: 'identity-theft',
    name: 'Identity Theft',
    shortName: 'Identity Theft',
    icon: '🪪',
    tagline: 'When criminals steal your personal information to open accounts, take out loans, or commit fraud in your name.',
    description: 'Identity theft occurs when someone unlawfully obtains and uses your personal information — name, date of birth, IRD number, driver licence, passport — to commit fraud. Identity theft can result in fraudulent bank accounts, loans, or credit cards being opened in your name, causing lasting financial and reputational damage.',
    details: 'There is no standalone identity theft insurance product available here, but several layers of protection exist: bank zero-liability guarantees, credit bureau monitoring, and the free IDCARE support service. Prevention is the primary defence — secure document disposal, strong unique passwords, and monitoring your credit report are essential.',
    heroImage: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1600&q=80',
    metaTitle: 'Identity Theft Protection NZ 2026 | What to Do & How to Recover | FraudProtection.co.nz',
    metaDescription: 'Identity theft affects thousands of New Zealanders each year. Learn how to protect yourself, what to do if you\'re targeted, and what cover is available.',
    stats: [
      { label: 'Adults who encountered identity fraud', value: '1 in 5' },
      { label: 'Average recovery time', value: '200+ hours' },
      { label: 'IDCARE cases handled in NZ/AU (2024)', value: '30,000+' },
      { label: 'Cost of identity theft per victim', value: '$3,352 avg' },
    ],
    whatItCovers: [
      'Fraudulent credit cards or loans opened in your name',
      'Unauthorised use of your IRD number or government identity',
      'Identity used to create false business registrations',
      'SIM swap fraud to access your banking',
      'Passport or driver licence cloning',
    ],
    howToProtect: [
      'Shred all documents containing personal information before disposal',
      'Use unique, strong passwords and enable two-factor authentication on all accounts',
      'Monitor your credit report regularly via Centrix, Equifax, or Illion',
      'Set up account alerts with your bank for unusual transactions',
      'Be cautious with personal information shared online or over the phone',
      'Report suspected identity theft to Police (105) and IDCARE (0800 432 273)',
    ],
    whereToGo: [
      { name: 'IDCARE', url: 'https://www.idcare.org/new-zealand', description: 'Free identity & cyber support service' },
      { name: 'Netsafe NZ', url: 'https://www.netsafe.org.nz/', description: 'Free online safety advice and reporting' },
      { name: 'NZ Police', url: 'https://www.police.govt.nz/advice/personal-and-community-advice/fraud', description: 'Report identity fraud to NZ Police' },
      { name: 'CERT NZ', url: 'https://www.cert.govt.nz/', description: 'NZ\'s computer emergency response team' },
    ],
    faqs: [
      { question: 'Is there identity theft insurance available?', answer: 'There is no standalone identity theft insurance product available here. However, your bank\'s zero-liability guarantee covers fraudulent transactions, and some cyber insurance policies include identity restoration cover. The free IDCARE service provides expert support for recovery.' },
      { question: 'What should I do if my identity is stolen?', answer: 'Act immediately: report to NZ Police (105), contact IDCARE (0800 432 273), notify your bank, alert the three credit bureaus (Centrix, Equifax, Illion) to place a fraud alert, and report to the relevant government agencies if your IRD number or passport has been misused.' },
      { question: 'How do I check if my identity has been stolen?', answer: 'Review your bank statements regularly, check your credit report for accounts you didn\'t open, monitor for unexpected bills or debt collection notices, and watch for government communications about tax returns or benefits you didn\'t claim.' },
      { question: 'What is a credit fraud alert?', answer: 'A fraud alert notifies lenders to take extra verification steps before approving credit in your name. You can request this from the three credit bureaus — Centrix, Equifax NZ, and Illion. This makes it harder for identity thieves to open new accounts.' },
    ],
    relatedTypes: ['card-fraud', 'online-scams', 'account-takeover'],
  },
  {
    slug: 'card-fraud',
    name: 'Card & Payment Fraud',
    shortName: 'Card Fraud',
    icon: '💳',
    tagline: 'Unauthorised use of your debit or credit card — from skimming and cloning to online purchases you didn\'t make.',
    description: 'Card fraud is the most common form of financial fraud. It includes card skimming at ATMs and EFTPOS terminals, card cloning, "card not present" fraud (online purchases with stolen card details), and contactless tap fraud. All major banks offer zero-liability guarantees on eligible accounts when fraud is reported promptly.',
    details: 'Your first line of defence is your bank\'s fraud protection. All major banks — ANZ, BNZ, ASB, Westpac, and Kiwibank — guarantee to reimburse unauthorised card transactions provided you follow their security requirements and report fraud quickly. Card fraud is generally the most straightforward type of fraud to recover from.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80',
    metaTitle: 'Card & Payment Fraud Protection NZ 2026 | Bank Cover & How to Report | FraudProtection.co.nz',
    metaDescription: 'Card fraud affects thousands of New Zealanders each year. Compare bank zero-liability protection, understand your rights, and learn how to report card fraud.',
    stats: [
      { label: 'Card fraud losses per year', value: '$100m+' },
      { label: 'Banks offering zero-liability protection', value: '5 major banks' },
      { label: 'Fraud recovery rate with prompt reporting', value: 'Up to 100%' },
      { label: 'Time to report for full protection', value: 'ASAP' },
    ],
    whatItCovers: [
      'Unauthorised purchases made in-store or online',
      'Card skimming and cloned card transactions',
      'Contactless tap-and-pay fraud',
      'Card details stolen in a data breach',
      'Transactions made after a lost or stolen card report',
    ],
    howToProtect: [
      'Enable real-time transaction alerts on your banking app',
      'Use virtual card numbers for online purchases where possible',
      'Check for skimming devices at ATMs and EFTPOS terminals (look for loose fittings)',
      'Cover your PIN when entering at terminals',
      'Never share your card details or PIN via phone, email, or text',
      'Report lost or stolen cards immediately to your bank',
    ],
    whereToGo: [
      { name: 'ANZ Fraud', url: 'https://www.anz.co.nz/personal/bank-accounts/security/', description: 'ANZ zero-liability card protection' },
      { name: 'BNZ Fraud', url: 'https://www.bnz.co.nz/personal-banking/ways-to-bank/online/security', description: 'BNZ online banking guarantee' },
      { name: 'ASB Security', url: 'https://www.asb.co.nz/security', description: 'ASB fraud protection and reporting' },
      { name: 'Westpac Security', url: 'https://www.westpac.co.nz/security/', description: 'Westpac online banking guarantee' },
      { name: 'Kiwibank Security', url: 'https://www.kiwibank.co.nz/personal-banking/security/', description: 'Kiwibank internet banking fraud protection' },
    ],
    faqs: [
      { question: 'Will my bank refund card fraud?', answer: 'Yes — all five major banks (ANZ, BNZ, ASB, Westpac, Kiwibank) offer zero-liability guarantees on eligible accounts for unauthorised card transactions. You must report the fraud promptly and have followed the bank\'s security guidelines (e.g., not sharing your PIN). Contact your bank immediately if you spot unauthorised transactions.' },
      { question: 'How quickly must I report card fraud?', answer: 'Report as soon as you discover it. The sooner you report, the better your chances of full recovery. Banks generally require you to report within a reasonable time. Leaving it weeks or months before reporting may affect your ability to claim.' },
      { question: 'What is card skimming and how does it work?', answer: 'Card skimming involves criminals attaching a small device to an ATM or EFTPOS terminal that reads and copies your card\'s magnetic stripe data. A hidden camera or false PIN pad captures your PIN. The fraudster then clones your card and makes withdrawals or purchases.' },
      { question: 'Does travel insurance cover card fraud overseas?', answer: 'Some travel insurance policies include a benefit for fraudulent use of cards stolen during your trip. Check your policy wording. Your bank\'s zero-liability guarantee may also apply to overseas transactions — check with your bank before travelling.' },
    ],
    relatedTypes: ['identity-theft', 'account-takeover', 'online-scams'],
  },
  {
    slug: 'online-scams',
    name: 'Online Scam Protection',
    shortName: 'Online Scams',
    icon: '🎣',
    tagline: 'Phishing, fake websites, romance scams, and investment fraud — protecting people from digital deception.',
    description: 'Online scams are the fastest-growing form of fraud, with $3 billion lost in 2025 alone. Scams include phishing emails and texts, fake investment platforms, romance and relationship scams, online marketplace fraud, and impersonation of banks, IRD, or government agencies. Unlike card fraud, scam losses are harder to recover because victims voluntarily authorise the payment.',
    details: 'When you are tricked into sending money to a scammer, banks may not automatically refund the loss — because you authorised the payment. We are working toward a Scam Code similar to the UK\'s voluntary code, but currently there is no mandatory reimbursement obligation. Prevention, reporting to Netsafe and Police, and acting quickly to try to reverse transactions are your main options.',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80',
    metaTitle: 'Online Scam Protection NZ 2026 | Phishing, Investment & Romance Scams | FraudProtection.co.nz',
    metaDescription: '$3 billion lost to online scams in NZ in 2025. Learn how to spot and avoid phishing, romance, investment, and marketplace scams — and what to do if you\'re targeted.',
    stats: [
      { label: 'Scam losses in 2025', value: '$3 billion' },
      { label: 'Increase from 2024', value: '+30%' },
      { label: 'People who encounter scams weekly', value: '82%' },
      { label: 'Recovery rate for reported bank scams', value: '36%' },
    ],
    whatItCovers: [
      'Phishing emails and text messages (smishing)',
      'Fake investment platforms and cryptocurrency scams',
      'Romance and relationship scams',
      'IRD, bank, and government impersonation scams',
      'Online marketplace and payment fraud',
      'Courier and package delivery scams',
    ],
    howToProtect: [
      'Never click links in unexpected emails or texts — go directly to the official website',
      'Verify investment opportunities independently — check the FMA register',
      'Be very cautious of online relationships that quickly request money',
      'The IRD, banks, and NZ Police will never ask for your password or full card number',
      'Research sellers on Trade Me and online marketplaces before paying',
      'Report scams to Netsafe (0508 638 723) and NZ Police (105)',
    ],
    whereToGo: [
      { name: 'Netsafe', url: 'https://www.netsafe.org.nz/', description: 'Report scams and get free advice — 0508 NETSAFE' },
      { name: 'FMA Scam Alerts', url: 'https://www.fma.govt.nz/consumers/scams/', description: 'Financial Markets Authority scam warnings' },
      { name: 'Consumer NZ', url: 'https://www.consumer.org.nz/', description: 'Consumer rights and scam advice' },
      { name: 'CERT NZ', url: 'https://www.cert.govt.nz/', description: 'Report cyber scams and get technical help' },
    ],
    faqs: [
      { question: 'Will my bank refund me if I\'m scammed?', answer: 'Only 36% of scam victims who report to their bank recover their funds, according to 2025 data. Banks distinguish between "authorised" payments (where you sent money, even under false pretences) and "unauthorised" payments (where a fraudster accessed your account without permission). Unauthorised transactions are generally refunded; authorised scam payments are much harder to recover. Act immediately — the faster you report to your bank, the better chance of a recall.' },
      { question: 'What is the fastest-growing scam type?', answer: 'Investment scams (particularly fake cryptocurrency trading platforms) and business email compromise are among the fastest-growing fraud types. Romance scams and phishing/smishing also continue to increase year-on-year, with total losses reaching $3 billion in 2025.' },
      { question: 'How do I report a scam?', answer: 'Report to Netsafe (0508 638 723 or www.netsafe.org.nz) for online scams. Report to NZ Police (105) if money has been stolen. Report investment scams to the FMA. Contact your bank immediately to attempt a payment recall. If it involves a government agency impersonation, also report to that agency.' },
      { question: 'Is there scam insurance available?', answer: 'There is no mainstream standalone scam insurance product for individuals. Some cyber insurance policies include social engineering fraud coverage, which can apply to certain scam losses. Banks\' zero-liability guarantees do not generally cover authorised scam payments. We are monitoring developments in the UK, where banks have adopted voluntary reimbursement codes for scam victims.' },
    ],
    relatedTypes: ['identity-theft', 'card-fraud', 'investment-scams'],
  },
  {
    slug: 'account-takeover',
    name: 'Account Takeover Fraud',
    shortName: 'Account Takeover',
    icon: '🔓',
    tagline: 'Criminals gain access to your bank, email, or social media accounts — then drain funds or lock you out.',
    description: 'Account takeover (ATO) fraud is where a criminal gains unauthorised access to your online accounts — banking, email, social media, or e-commerce — by stealing credentials through phishing, data breaches, SIM swapping, or credential stuffing attacks. Once inside, they may drain bank accounts, make purchases, or use your identity to defraud your contacts.',
    details: 'SIM swap fraud is a particularly damaging form of ATO, where a criminal convinces your mobile carrier to transfer your phone number to a SIM card they control. This bypasses SMS-based two-factor authentication, giving them access to your banking and email. Multi-factor authentication apps (not SMS) and strong, unique passwords are the best defences.',
    heroImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1600&q=80',
    metaTitle: 'Account Takeover Fraud NZ 2026 | SIM Swap & Credential Theft | FraudProtection.co.nz',
    metaDescription: 'Account takeover is growing in NZ — criminals steal banking and email credentials to drain your accounts. Learn how to protect yourself and what to do.',
    stats: [
      { label: 'Adults affected by account compromise', value: '1 in 10' },
      { label: 'Most targeted account type', value: 'Banking apps' },
      { label: 'SIM swap reports to carriers (2024)', value: 'Hundreds p/a' },
      { label: 'Avg time to detect ATO', value: '12+ weeks' },
    ],
    whatItCovers: [
      'SIM swap fraud bypassing SMS two-factor authentication',
      'Credential stuffing attacks using leaked passwords',
      'Phishing attacks harvesting banking login details',
      'Keylogger malware capturing your username and password',
      'Email account hijacking to reset banking passwords',
      'Social media account takeover for financial fraud',
    ],
    howToProtect: [
      'Use an authenticator app (Google Authenticator, Authy) instead of SMS for 2FA',
      'Use a unique password for every account — a password manager makes this easy',
      'Check haveibeenpwned.com to see if your email has appeared in data breaches',
      'Set a PIN or passphrase lock on your mobile account with your carrier',
      'Enable login notifications on all banking and email accounts',
      'Report SIM swap fraud immediately to your carrier and bank',
    ],
    whereToGo: [
      { name: 'CERT NZ', url: 'https://www.cert.govt.nz/', description: 'Report account takeover and get technical guidance' },
      { name: 'IDCARE', url: 'https://www.idcare.org/new-zealand', description: 'Free support for account takeover victims' },
      { name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', description: 'Check if your email was in a data breach' },
      { name: 'Netsafe', url: 'https://www.netsafe.org.nz/', description: 'Online safety advice and scam reporting' },
    ],
    faqs: [
      { question: 'What is SIM swap fraud and how common is it?', answer: 'SIM swap fraud involves a criminal impersonating you to your mobile carrier and convincing them to port your phone number to a new SIM. This lets the criminal receive your SMS verification codes, bypassing two-factor authentication. Carriers have implemented additional verification steps after a series of high-profile SIM swap fraud cases.' },
      { question: 'If my banking app is hacked, will my bank refund me?', answer: 'If a criminal gained access to your banking app without your knowledge or assistance, this is generally treated as unauthorised access and your bank\'s zero-liability guarantee should apply. However, if you were tricked into providing login credentials through a phishing attack, the bank may consider you partly responsible. Report immediately and let your bank investigate.' },
      { question: 'How can I tell if my account has been taken over?', answer: 'Warning signs include: unexpected password reset emails, being locked out of your accounts, charges you don\'t recognise, contacts receiving messages from you that you didn\'t send, or your phone losing signal (SIM swap). Act immediately if you notice any of these signs.' },
    ],
    relatedTypes: ['identity-theft', 'card-fraud', 'online-scams'],
  },
  {
    slug: 'investment-scams',
    name: 'Investment Scam Protection',
    shortName: 'Investment Scams',
    icon: '📈',
    tagline: 'Fake trading platforms, crypto scams, and Ponzi schemes targeting investors.',
    description: 'Investment scams are among the most financially devastating fraud types, with individual losses often reaching tens of thousands of dollars. Scammers create sophisticated fake trading platforms, clone legitimate financial services firms, and use social media and dating apps to build relationships before encouraging "investment." Hundreds of millions were lost to investment scams in 2024-2025.',
    details: 'The Financial Markets Authority (FMA) maintains a warning list of investment scams and unlicensed operators. Always verify that a financial adviser is registered on the FMA\'s Financial Service Providers Register (FSPR) before investing. If a return sounds too good to be true, it almost certainly is — legitimate investments are regulated and transparent.',
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80',
    metaTitle: 'Investment Scam Protection NZ 2026 | Crypto Scams & Fake Platforms | FraudProtection.co.nz',
    metaDescription: 'Investment scams are devastating NZ investors. Learn to spot fake trading platforms, crypto scams, and unlicensed advisers — and what to do if you\'re targeted.',
    stats: [
      { label: 'Investment scam losses (2024)', value: '$100m+' },
      { label: 'FMA warning notices issued', value: '50+ per year' },
      { label: 'Avg individual investment scam loss', value: '$20,000+' },
      { label: 'Recovery rate for investment scams', value: 'Under 10%' },
    ],
    whatItCovers: [
      'Fake cryptocurrency trading platforms',
      'Clone firm scams impersonating licensed advisers',
      'Ponzi and pyramid scheme investments',
      'Pig butchering (romance-to-investment) scams',
      'Unlicensed managed investment schemes',
      'Pump-and-dump stock manipulation',
    ],
    howToProtect: [
      'Check the FMA Financial Service Providers Register (FSPR) before investing',
      'Research any unsolicited investment opportunity thoroughly and independently',
      'Never invest based on advice from someone you met only online',
      'Be extremely wary of "guaranteed" high returns — legitimate investments carry risk',
      'Don\'t let time pressure rush you into investing — legitimate offers don\'t expire in hours',
      'Report suspected investment scams to the FMA (0800 434 566)',
    ],
    whereToGo: [
      { name: 'FMA Warning List', url: 'https://www.fma.govt.nz/consumers/scams/', description: 'Check the FMA\'s list of known investment scams' },
      { name: 'FSPR Register', url: 'https://www.fspr.govt.nz/', description: 'Verify a financial adviser or firm is licensed' },
      { name: 'Sorted.org.nz', url: 'https://sorted.org.nz/', description: 'Independent financial guidance' },
      { name: 'Netsafe', url: 'https://www.netsafe.org.nz/', description: 'Report online investment scams' },
    ],
    faqs: [
      { question: 'Can I get my money back from an investment scam?', answer: 'Recovery of investment scam losses is very difficult — typically under 10% of victims recover funds. You should immediately report to the FMA and NZ Police, and contact your bank to attempt to trace or reverse any transfers. If funds went overseas, recovery becomes even harder. Acting within the first 24-48 hours gives the best chance of a bank recall.' },
      { question: 'How do I check if an investment is legitimate?', answer: 'Check the FMA\'s Financial Service Providers Register (FSPR) at fspr.govt.nz to verify the firm is licensed. Check the FMA\'s warning list for known scams. Search for reviews and complaints. Ask for a Product Disclosure Statement (PDS) — all regulated investment offers require one. If any of these checks fail, don\'t invest.' },
      { question: 'What is a "pig butchering" scam?', answer: 'Pig butchering is a sophisticated scam where criminals spend weeks or months building a romantic or friendly relationship with the victim online before introducing an "investment opportunity." Once the victim has "invested" significant funds (been "fattened up"), the criminals take all the money and disappear. These scams are now extremely common.' },
    ],
    relatedTypes: ['online-scams', 'identity-theft', 'account-takeover'],
  },
];
