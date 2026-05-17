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
  longFormContent?: { heading: string; body: string }[];
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
    metaTitle: 'Identity Theft Protection NZ 2026 | What to Do & How to Recover | FraudInsurance.co.nz',
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
    longFormContent: [
      {
        heading: 'What is Identity Theft?',
        body: `Identity theft is the unauthorised use of another person's personal identifying information — name, date of birth, IRD number, passport number, driver licence, or combinations thereof — to commit fraud or other crimes. The stolen identity is typically used to open bank accounts, obtain credit cards or loans, make fraudulent tax refund claims, or establish businesses in the victim's name.

The mechanics of identity theft vary. In its simplest form, a criminal obtains physical documents — from mail theft, a discarded statement, or a stolen wallet — and uses that information directly. In more sophisticated forms, identity information is compiled from multiple data breach sources, social media profiles, and phishing attacks to build a comprehensive profile of the victim.

What fraudsters do with stolen identity information: The most common uses are financial — opening credit cards or personal loans in the victim's name, taking out buy-now-pay-later accounts, or making tax refund claims with IRD. Beyond direct financial fraud, stolen identity can be used to create fraudulent business registrations, obtain employment, evade criminal records, or facilitate other crimes.

The harm to victims extends well beyond the immediate financial loss. The administrative burden of resolving identity theft — closing fraudulent accounts, disputing credit listings, liaising with government agencies, and managing ongoing credit monitoring — consumes an average of 200+ hours over months or years. The emotional impact of having one's identity used by criminals is significant, and the financial consequences (damage to credit score, difficulty obtaining credit, unexpected debt collection) can persist for years after the initial theft is resolved.`,
      },
      {
        heading: 'Identity Theft in New Zealand: The Statistics',
        body: `Identity theft and identity fraud are significantly more prevalent than many people realise. While comprehensive local statistics are not published centrally, a combination of IDCARE data, credit bureau reporting, and the Netsafe/GASA annual scam reports provides a picture of the scale.

Approximately 1 in 5 New Zealand adults has experienced some form of identity fraud or misuse of their personal information. IDCARE — the specialist identity and cyber support service operating across New Zealand and Australia — handled over 30,000 identity-related cases in the 2024 reporting year. Many of these cases involve New Zealanders.

The average financial cost of identity theft to victims was approximately $3,352 in 2025, though individual cases vary enormously — from a few hundred dollars in fraudulent charges quickly resolved, to tens of thousands of dollars in loans or tax fraud that takes years to unwind. The average recovery time of 200+ hours understates the burden for victims with complex cases involving multiple fraudulent accounts or government identity misuse.

IRD number misuse is a growing concern. Criminals use stolen IRD numbers to file fraudulent tax returns and claim refunds, or to register fraudulent businesses. Victims typically discover this when their genuine tax return is rejected because one has already been filed, or when IRD contacts them about a business registration they know nothing about.

Credit fraud — fraudulent credit applications using stolen identity — is tracked by the three credit bureaus. Centrix, Equifax NZ, and Illion each maintain fraud alert systems and receive regular reports of identity theft affecting credit files. Placing a fraud alert with all three bureaus is one of the most effective immediate responses to suspected identity theft.`,
      },
      {
        heading: 'Warning Signs That Your Identity Has Been Stolen',
        body: `Identity theft often goes undetected for months before the victim becomes aware. Knowing the warning signs allows you to act quickly and limit the damage.

Unexpected credit applications or credit inquiries: If you receive notification of a credit application you didn't make, or if your credit report shows credit inquiries from lenders you have no relationship with, this is a strong indicator that someone is applying for credit in your name.

Unfamiliar accounts on your credit report: Check your credit report regularly — free annual reports are available from Centrix, Equifax NZ, and Illion. Accounts you don't recognise are a clear warning sign.

Unexpected bills or debt collection notices: Receiving bills for accounts you didn't open, or calls from debt collectors about debts you don't owe, are common ways identity theft victims first discover the fraud.

Tax refund complications: If IRD tells you a tax return has already been filed for the year, or if your refund is unexpectedly delayed, this could indicate that a fraudster has filed a return using your IRD number.

Unusual mail or lack of expected mail: Unexpected financial statements for accounts you don't have, or unexpected absence of your regular bank statements (indicating a change of address by a fraudster), are warning signs.

Notifications from government agencies: Contact from government departments about benefits, registrations, or accounts you didn't create is a serious warning sign requiring immediate investigation.

Bank or credit card alerts: Unexpected alerts from your bank about transactions, new payees, or account changes you didn't initiate require immediate investigation and contact with your bank's fraud team.`,
      },
      {
        heading: 'What to Do If Your Identity Is Stolen',
        body: `Acting promptly and in the right order when identity theft is discovered significantly affects your ability to limit losses and recover. Follow these steps:

Step 1 — Contact IDCARE First (0800 432 273): IDCARE is a free, specialist identity and cyber support service for New Zealanders and Australians. They will assign you a dedicated case manager who will guide you through the entire recovery process, help you prioritise steps, and liaise with agencies on your behalf. This is the single most valuable call you can make.

Step 2 — Freeze Credit with All Three Bureaus: Contact Centrix (0800 236 874), Equifax NZ (0800 964 564), and Illion (0800 445 566) to place a fraud alert or credit freeze. A fraud alert requires lenders to verify your identity before approving credit. A full credit freeze (available from some bureaus) prevents any new credit being approved at all — more restrictive but more protective.

Step 3 — Report to NZ Police (105): File a police report — you will need the report number for subsequent steps. Online reporting is available at police.govt.nz. NZ Police may not be able to actively investigate every identity theft case, but the official record is essential for disputing fraudulent accounts and liaising with government agencies.

Step 4 — Notify Your Bank and Financial Institutions: Call your bank's fraud line and explain what has happened. Ask them to review all your accounts for suspicious activity, place additional security on your accounts, and flag your file for enhanced verification requirements.

Step 5 — Contact IRD if Your IRD Number Was Used: If you suspect your IRD number has been misused, contact Inland Revenue (0800 775 247) to report the fraud and request a review of your tax records. IRD has processes for dealing with identity theft relating to tax fraud.

Step 6 — Report to Relevant Government Agencies: If specific identity documents were compromised — passport (contact Department of Internal Affairs), driver licence (contact NZTA) — contact the relevant agency to flag the misuse and potentially cancel and replace the document.`,
      },
      {
        heading: 'Is There Identity Theft Insurance in New Zealand?',
        body: `This is a question many people ask, and the honest answer is nuanced: there is no mainstream standalone identity theft insurance product available in New Zealand in the way that exists in the United States.

What banks cover: Your bank's zero-liability guarantee covers unauthorised transactions — where a criminal accesses your account without your knowledge and makes fraudulent transactions. If your identity is used to make purchases on your existing cards, or if a fraudster gains access to your existing accounts, your bank should reimburse these losses. Contact your bank immediately.

What banks do not cover: Banks do not cover the administrative and recovery costs of identity theft — the time spent closing fraudulent accounts, the cost of legal advice, credit monitoring services, or any financial losses from fraudulent accounts or loans opened in your name at other institutions.

What IDCARE provides: IDCARE is a free government-funded support service — not insurance — but extremely valuable. They provide case management support, guidance through the recovery process, and advocacy with credit bureaus, government agencies, and financial institutions. Their support has tangible financial value in the time and cost of recovery they save victims.

What cyber insurance policies sometimes include: Some business cyber insurance policies include an "identity restoration" benefit that covers costs associated with resolving identity theft for key employees or principals. This is not widely available for personal (individual) buyers in NZ.

The coverage gap and what's developing: The gap between what banks cover and the full cost of identity theft recovery is real and significant. FraudInsurance.co.nz monitors the market for identity theft protection products and will update this guide as new products become available. In the meantime, the combination of bank zero-liability protection, credit bureau fraud alerts, and IDCARE support provides the best available protection.`,
      },
      {
        heading: 'Prevention: How to Protect Your Identity',
        body: `Identity theft prevention is largely a matter of managing how and where your personal information is accessible. The following measures significantly reduce your risk.

Secure Document Disposal: Shred all documents containing personal information before disposal — bank statements, insurance documents, utility bills, anything with your name, address, or account information. Criminals actively search through recycling and rubbish for personal information. A cross-cut shredder is inexpensive and highly effective.

Credit Monitoring: Sign up for credit monitoring through Centrix, Equifax NZ, or Illion. These services alert you to new credit inquiries or account openings in your name, allowing you to respond quickly. Free credit reports are available from each bureau once per year — check all three annually.

Strong Unique Passwords and Multi-Factor Authentication: Use a different strong password for every account. A password manager (LastPass, 1Password, Bitwarden) makes this practical. Enable multi-factor authentication — ideally using an authenticator app rather than SMS — on all important accounts, especially banking and email.

Phishing Awareness: The single largest source of identity theft is phishing — criminals tricking people into providing their information directly. Never click links in unexpected emails or texts. Banks, IRD, and government agencies do not ask for passwords, PINs, or full account numbers via email or text. When in doubt, go directly to the organisation's official website.

Protect Your IRD Number: Your IRD number is highly sensitive. It enables tax fraud and is a key component of identity theft. Share it only with your employer and Inland Revenue. Never provide it in response to an unsolicited contact.

Passport and Driver Licence Security: Keep physical identity documents secure. If your passport is lost or stolen, report it to the Department of Internal Affairs and request cancellation. Consider whether you actually need to carry your physical driver licence or passport on a daily basis — a phone-stored copy (where acceptable) reduces the risk of physical document theft.`,
      },
      {
        heading: 'Key Resources and Contacts for Identity Theft Victims',
        body: `If you are a victim of identity theft, or suspect you may be, these are the key contacts and resources you need.

IDCARE — 0800 432 273 (idcare.org): New Zealand's specialist identity and cyber support service. Free, confidential, and staffed by experienced case managers. This is your first call.

NZ Police — 105 (police.govt.nz): Report identity theft to NZ Police to obtain an official crime report number. Online reporting available for non-urgent reports.

Credit Bureaus — Place fraud alerts or credit freezes:
- Centrix: 0800 236 874 (centrix.co.nz)
- Equifax NZ: 0800 964 564 (equifax.co.nz)
- Illion: 0800 445 566 (illion.co.nz)

Netsafe — 0508 638 723 (netsafe.org.nz): Free online safety advice and support, including for identity-related cyber incidents.

Inland Revenue — 0800 775 247 (ird.govt.nz): Report misuse of your IRD number and request a review of your tax records.

Department of Internal Affairs — 0800 225 050 (dia.govt.nz): Report stolen or misused passports; apply for emergency cancellation.

NZTA — 0800 822 422 (nzta.govt.nz): Report misused or stolen driver licences.

Banking Ombudsman — 0800 805 950 (bankomb.org.nz): If your bank does not resolve your identity theft-related complaint satisfactorily, the Banking Ombudsman can intervene.

Privacy Commissioner — 0800 803 909 (privacy.org.nz): If your personal information was compromised through a data breach at an organisation, you can report this to the Privacy Commissioner.

Keep records of all contacts, case numbers, and correspondence — you will need these for the recovery process and for any insurance or legal proceedings.`,
      },
    ],
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
    metaTitle: 'Card & Payment Fraud Protection NZ 2026 | Bank Cover & How to Report | FraudInsurance.co.nz',
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
    longFormContent: [
      {
        heading: 'What is Card and Payment Fraud?',
        body: `Card and payment fraud encompasses a range of criminal activities involving the unauthorised use of your debit or credit card details to make purchases or withdraw money. It is the most commonly experienced form of financial fraud, affecting hundreds of thousands of New Zealanders each year.

Card-Not-Present (CNP) Fraud: The most prevalent form, CNP fraud involves criminals using your card number, expiry date, and CVV to make online purchases without needing the physical card. Card details are obtained through data breaches, phishing attacks, skimming devices, or purchase from other criminals on darknet markets.

Card Skimming: Criminals attach devices to ATMs, EFTPOS terminals, or petrol station payment points that copy the magnetic stripe data from your card as you use it. A separate camera or overlaid keypad captures your PIN. The criminal then creates a cloned card or uses the data for CNP fraud.

Stolen Card Use: Physical theft of your card, followed by use before you report it stolen. Contactless payment limits have reduced the impact of this form, but purchases below contactless limits can still be made before a stolen card is cancelled.

Contactless and Tap Fraud: Using a stolen card for contactless transactions below the threshold requiring PIN, or in rare cases, using specialist equipment to skim contactless card data in public. The contactless fraud risk is lower than some consumers fear — the technology includes protections — but physical card loss still creates immediate exposure.

Account Takeover Leading to Card Fraud: Criminals who gain access to your online banking can issue themselves new cards, change delivery addresses, or initiate transfers. This is technically account takeover (covered separately on this site) but the end result overlaps with card fraud.`,
      },
      {
        heading: 'How NZ Banks Protect You from Card Fraud',
        body: `All five major New Zealand banks — ANZ, BNZ, ASB, Westpac, and Kiwibank — have adopted zero-liability policies for card fraud, meaning they will reimburse you for unauthorised transactions subject to specific conditions. Understanding what these guarantees actually cover is essential.

ANZ Fraud Protection: ANZ's Online Banking Security Guarantee commits to reimbursing losses from unauthorised transactions where you have taken reasonable security precautions and reported the fraud promptly. This covers internet banking fraud and card fraud on ANZ accounts.

BNZ Online Banking Guarantee: BNZ guarantees to reimburse any losses resulting from unauthorised transactions where you have complied with their security requirements, including not sharing your access credentials and reporting fraud immediately.

ASB Zero Liability: ASB's fraud protection covers losses from unauthorised card transactions provided you report them promptly and haven't shared your PIN or contributed to the fraud through negligence.

Westpac Online Banking Guarantee: Westpac covers unauthorised online transactions and card fraud under their guarantee, with the requirement that you report fraud promptly and maintain appropriate security on your accounts.

Kiwibank Security Guarantee: Kiwibank offers equivalent protection for unauthorised transactions, with the same fundamental conditions around prompt reporting and reasonable security.

The conditions for coverage are consistent across all five banks: the transaction must be genuinely unauthorised (you did not make it), you must not have contributed to the loss through gross negligence (such as writing your PIN on your card), and you must report the fraud as soon as you become aware. Meeting these conditions makes card fraud one of the most recoverable fraud types.`,
      },
      {
        heading: 'When Banks Won\'t Reimburse You',
        body: `While bank zero-liability guarantees provide strong protection for genuine card fraud, there are important categories where banks may decline to reimburse — and understanding these limitations is important.

Authorised Payment Fraud: If you were deceived into voluntarily authorising a payment — for example, by a phone scammer impersonating your bank, or a fake online seller who took payment but never delivered — the bank may not consider this an "unauthorised" transaction. You authorised the payment; the fact that you were deceived is a separate matter. This is a critical limitation of bank fraud protection and covers many of the most common and costly scam scenarios.

Gross Negligence: If you shared your PIN with someone, wrote your PIN on your card, or allowed someone else to use your card, the bank may argue you contributed to the fraud and decline reimbursement. "Gross negligence" is interpreted differently by different banks and is sometimes the subject of Banking Ombudsman disputes.

Delayed Reporting: If you discover fraud on your account but delay reporting it for weeks or months, banks may reduce or decline reimbursement on the basis that prompt action could have limited the loss. Report immediately — there is no benefit in delay.

Merchant Disputes vs Fraud: If you made a payment and the merchant did not deliver as agreed, this is a dispute or potential chargeback situation, not a fraud claim. Chargebacks have their own process through your bank. Card fraud is specifically about transactions you did not authorise or intend.

Conditions Not Met: Each bank's guarantee has specific conditions. If you failed to enable security features the bank made available, or if you shared your credentials in violation of the bank's terms, this can affect your claim. Read your bank's guarantee documentation.`,
      },
      {
        heading: 'What to Do If You\'re a Victim of Card Fraud',
        body: `If you discover unauthorised transactions on your card or bank account, act immediately. The steps below should be taken in order.

Step 1 — Contact Your Bank Immediately: Every bank has a 24-hour fraud line. Call the number on the back of your card — not any number you find in an email or text, which could be a scam. Report the specific transactions you are disputing and ask the bank to:
- Block the compromised card immediately
- Issue a replacement card
- Open a fraud dispute for the specific transactions
- Apply additional security monitoring to your accounts

Step 2 — Freeze Your Card via the App: Most banking apps allow you to freeze your card instantly. Do this while you are waiting for the bank to answer if the fraud line is busy. This prevents any further transactions.

Step 3 — Report the Specific Transactions: When speaking to your bank, be specific about which transactions you are disputing, when you noticed them, and whether your card has been in your possession. If your card was lost or stolen, confirm when you lost it.

Step 4 — Change PINs and Passwords: If you suspect your PIN was compromised (e.g., through skimming), change all PINs and online banking passwords immediately. Use the bank's secure app or website — not a link from an email or text.

Step 5 — Monitor Your Other Accounts: Card fraud is sometimes a precursor to broader account compromise. Check all your accounts for unusual activity.

Escalation: If your bank declines your fraud claim or the resolution is unsatisfactory, you have the right to escalate internally within the bank and then to the Banking Ombudsman (0800 805 950 or bankomb.org.nz). The Ombudsman resolves disputes between banks and their customers for free.`,
      },
      {
        heading: 'Scams That Look Like Card Fraud But Aren\'t',
        body: `Many people contact their bank expecting card fraud protection for losses that are legally classified as something different — and are therefore subject to different (and typically weaker) protections. Understanding this distinction is important.

Push Payment Scams: You receive a call, text, or email convincing you to transfer money to a "safe account" (typically impersonating your bank's fraud team), to pay a fake invoice, or to help with an investment opportunity. You initiate the transfer through your own banking app. From the bank's perspective, this was an authorised payment — you made it, using your login, following your instructions. This is a scam, but it does not meet the definition of card fraud or an unauthorised transaction.

Phone Banking Scams: Criminals call you impersonating your bank, extract your security credentials, and then use those credentials to access your account. Whether this constitutes "unauthorised" depends on whether you wilfully gave them access or were deceived — banks treat these cases differently.

Online Marketplace Fraud: You pay for something on a marketplace and never receive it. This may be a merchant dispute (chargeback process) rather than card fraud. If you paid by credit card, you have stronger protections than if you paid by bank transfer.

Investment or Romance Scam Payments: You send money to an investment platform or person that turns out to be fraudulent. These are authorised transfers from your bank account and are not covered by card fraud protection. The bank may attempt a recall if you report quickly, but there is no guarantee of recovery.

Understanding these distinctions helps set realistic expectations and reinforces the importance of never authorising any payment under pressure without independent verification.`,
      },
      {
        heading: 'How to Protect Yourself from Card Fraud',
        body: `The most effective card fraud prevention combines good habits, technology features, and prompt reporting when something looks wrong.

Enable Transaction Alerts: All major NZ banks offer real-time push notifications for card transactions via their banking apps. Enable these — they are the fastest way to detect unauthorised transactions. If a transaction fires an alert that you didn't initiate, you can freeze your card and call the bank within seconds.

Use Virtual Card Numbers for Online Shopping: Many banks now offer virtual card numbers for online purchases — single-use or limited-use card numbers that cannot be used for in-person fraud even if compromised. This significantly reduces CNP fraud exposure for regular online shoppers.

Inspect ATMs and EFTPOS Terminals: Before inserting your card, look for anything that appears to be an addition to the machine — loose fittings, mismatched colours, or overlaying panels around the card reader. Legitimate terminals are securely fitted. If something looks wrong, use a different machine and report to the bank.

Cover Your PIN: Always shield your PIN entry with your free hand, even at terminals with overhead cameras. Skimming devices are almost always paired with a PIN-capture mechanism — denying them your PIN prevents card cloning from working.

Never Share Your PIN or Card Details: No legitimate organisation — your bank, IRD, NZ Police, or any other entity — will ask for your PIN or full card number over the phone, by email, or by text. If asked, it is a scam.

Report Lost or Stolen Cards Immediately: The sooner you report a lost or stolen card, the less exposure you have. Every major bank has a 24-hour card cancellation line. The few minutes to make this call could save hundreds or thousands of dollars.`,
      },
      {
        heading: 'The Future of Card Fraud Protection in NZ',
        body: `The landscape of card fraud protection is evolving, both in terms of the threats and the regulatory response. Understanding where things are heading helps you make informed decisions about your protection strategy.

Mandatory Reimbursement Codes Under Discussion: New Zealand is watching international developments carefully. In the UK, banks are required by regulation (via the Payment Systems Regulator) to reimburse victims of Authorised Push Payment (APP) fraud — the category that covers most phone and online scams. Australia has adopted a similar framework. A mandatory Scam Code for New Zealand has been discussed at government and industry level, though as of mid-2026 no mandatory code has been enacted. If adopted, this would significantly strengthen protection for scam victims.

EMV Chip and PIN Technology: The introduction of chip-and-PIN technology has dramatically reduced in-person card cloning (skimming). Card-not-present fraud has increased as a consequence — criminals shifted to online fraud when in-person fraud became harder. The next frontier is strengthening online transaction authentication.

What NZ Banks Are Doing: All five major banks continue to invest in fraud detection technology — machine learning systems that identify unusual transaction patterns and automatically flag or block suspicious transactions. Real-time transaction monitoring has improved significantly, and most banks now block obviously suspicious transactions before they are processed. When your bank calls or texts to verify an unusual transaction, take it seriously and respond promptly.

Biometric Authentication: Banking apps increasingly use biometric authentication (face ID, fingerprint) instead of or in addition to passwords. This strengthens account security and reduces the risk of credential theft enabling card fraud via account takeover.

The advice for consumers remains consistent: enable all security features your bank offers, monitor your accounts closely, and report any anomaly immediately.`,
      },
    ],
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
    metaTitle: 'Online Scam Protection NZ 2026 | Phishing, Investment & Romance Scams | FraudInsurance.co.nz',
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
    longFormContent: [
      {
        heading: 'What Are Online Scams?',
        body: `Online scams are fraudulent schemes conducted primarily through digital channels — email, text messages, social media, fake websites, and phone calls — designed to trick people into handing over money, personal information, or access to their accounts. They range from opportunistic mass-targeting (phishing emails sent to millions of recipients) to highly personalised, long-running deceptions (romance scams, pig butchering).

Phishing: Emails that appear to come from trusted organisations — your bank, IRD, NZ Post, a major retailer — directing you to a fake website designed to capture your credentials or payment details. Phishing is the most common form of online scam by volume.

Smishing: The text message equivalent of phishing. Common smishing pretexts include NZ Post parcel delivery notifications (with a fake tracking link), bank fraud alerts, and toll notices. Smishing is growing rapidly because many people instinctively trust text messages more than emails.

Vishing: Voice phishing — phone calls from scammers impersonating banks, IRD, government agencies, or technical support. AI voice synthesis is now used to impersonate known individuals convincingly.

Fake Websites and Online Marketplaces: Fraudulent e-commerce sites, fake marketplace listings (on Trade Me or similar), and clone websites that mimic legitimate retailers. Victims pay for goods that are never delivered.

Impersonation Scams: Criminals impersonate known organisations (banks, IRD, NZ Police, FMA) or known individuals (family members, friends, executives) to extract money or information. Government agency impersonation scams are particularly effective because they create fear and urgency.

Investment and Crypto Scams: Fake investment platforms and cryptocurrency trading sites that show fabricated returns to encourage larger and larger deposits, then disappear.`,
      },
      {
        heading: 'The Most Common Online Scams Targeting New Zealanders',
        body: `Based on Netsafe reporting data and FMA warning notices, these are the most prevalent online scams targeting New Zealanders in 2025-2026.

IRD Tax Refund Phishing: Emails and texts purporting to be from Inland Revenue, offering a tax refund and directing recipients to a fake IRD website to "claim" the refund by entering banking details. IRD never sends unsolicited links to claim refunds — any refund owed is credited directly to your bank account on file.

NZ Post Parcel Scams: SMS messages claiming a parcel is waiting for delivery and requiring a small fee to be paid via a link. The link leads to a fake payment page capturing card details. NZ Post does not request payment by text message.

Bank Impersonation Scams: Phone calls from "bank fraud teams" claiming suspicious activity on your account and requesting you move money to a "safe account" — which is the criminal's account. No legitimate bank will ever ask you to move money to a new account to protect it from fraud.

Tech Support Scams: Pop-up warnings on computers claiming a virus infection, directing victims to call a number where "Microsoft" or "Apple" technicians request remote access and ultimately access to banking apps.

Romance-to-Investment Pipeline: An online relationship develops over weeks or months, during which the other person introduces an "amazing investment opportunity." Victims invest and lose everything when the platform disappears. Also called pig butchering (see investment scams section).

Government Benefits Scams: Fake notices claiming overdue debt to IRD, NZTA, or MSD with threats of legal action unless immediate payment is made by gift card or bank transfer. Government agencies do not threaten immediate legal action by text or automated call.`,
      },
      {
        heading: 'How to Recognise an Online Scam',
        body: `Scam messages and websites have consistent characteristics that, once recognised, make them easier to spot. The following indicators should trigger immediate caution.

Urgency and Time Pressure: Scams almost always create artificial urgency — "act in the next 2 hours," "your account will be closed," "the police are on their way." Legitimate organisations give you time to consider and verify. Urgency is a manipulation tactic designed to prevent you from thinking clearly.

Unsolicited Contact: You did not initiate the interaction. A call, email, or text appeared out of nowhere with an offer, a problem, or an opportunity. While not all unsolicited contact is fraud, it should trigger heightened caution.

Too Good to Be True: Guaranteed investment returns, unexpected windfalls, prizes you didn't enter for. Legitimate financial products involve risk; legitimate prizes require genuine entry.

Unusual Payment Methods: Requests for payment by gift card, cryptocurrency, wire transfer to an unfamiliar account, or cash. These payment methods are preferred by scammers because they are difficult or impossible to reverse.

Grammatical and Spelling Errors: Many scam messages still contain errors that genuine communications from professional organisations would not. However, AI-generated scams are now grammatically perfect — this indicator is less reliable than it was.

Suspicious Sender Domains: The email claims to be from your bank but the sender address is @bankofnewzealand-security.com rather than @bnz.co.nz. Always check the actual sender address, not just the display name.

Requests for Sensitive Information: Legitimate organisations never ask for your password, full card number, PIN, or two-factor authentication codes over phone, email, or text.`,
      },
      {
        heading: 'What to Do If You\'ve Been Scammed Online',
        body: `If you realise you have fallen victim to an online scam, the speed and order of your response significantly affects your chances of recovery.

Stop All Contact Immediately: Cease all communication with the scammer. Do not pay any more money regardless of what you are told — additional payments for "taxes," "fees," or "insurance" to release funds are always further scam payments.

Contact Your Bank Immediately: Call your bank's 24-hour fraud line using the number on the back of your card or from the bank's official website — not any number provided in the scam communication. Ask them to:
- Attempt to recall any transfers made
- Block the accounts or cards used in the fraud
- Flag your account for enhanced monitoring
Every hour matters for payment recall — international recalls become nearly impossible after 24 hours.

Report to Netsafe (0508 638 723 or netsafe.org.nz): Netsafe is New Zealand's online safety organisation. They can provide guidance on your specific situation and connect you with appropriate agencies. All reports help them identify patterns and warn other New Zealanders.

Report to NZ Police (105): File a report with NZ Police to obtain an official crime number. This is important for insurance purposes and for any subsequent recovery action. Online reporting is available at police.govt.nz.

Preserve All Evidence: Before deleting any messages or closing any accounts, take screenshots of the scam communications, websites, transaction records, and any other relevant evidence. This is essential for police investigations and insurance claims.

Protect Your Accounts: Change passwords on any accounts that may have been compromised. If you provided banking credentials, change your internet banking password and PIN immediately. Enable multi-factor authentication if not already in place.`,
      },
      {
        heading: 'Will Your Bank Refund an Online Scam Payment?',
        body: `This is the question most scam victims ask urgently, and the honest answer is: it depends — and you should not assume the bank will automatically reimburse you.

The Authorised vs Unauthorised Distinction: Banks distinguish between transactions you did not authorise (where a criminal accessed your account without your knowledge) and transactions you authorised but were deceived into making (where you sent the money yourself, under false pretences). Banks are obligated to refund unauthorised transactions. For authorised-but-fraudulent transactions, the legal obligation is much less clear.

When Banks Are More Likely to Refund: If the transfer was recent and the bank can recall the funds before the receiving bank disburses them. If the scam pattern is well-known and the bank had fraud warnings they failed to act on. If you reported promptly and took reasonable precautions.

When Banks Are Less Likely to Refund: If you were warned during the payment process (some banks now show fraud warnings for unusual transfers) and proceeded anyway. If you deliberately moved money under instructions from a third party. If significant time has passed before reporting.

Netsafe's Advice: Netsafe recommends always reporting to your bank immediately, even if you doubt you'll be refunded — banks use this data to track fraud patterns, and some cases that initially seem unlikely to be refunded are resolved in the victim's favour after investigation.

The Banking Ombudsman: If your bank declines your claim, you can escalate to the Banking Ombudsman (bankomb.org.nz) for free dispute resolution. The Ombudsman has resolved many cases in victims' favour, particularly where the bank had inadequate fraud prevention measures.

The UK Comparison: In the UK, banks are required by regulation to reimburse most Authorised Push Payment (APP) fraud losses — the category covering online scams where victims authorise the payment. Lobby groups and some politicians have called for New Zealand to adopt a similar mandatory code. As of mid-2026 this has not been enacted, but remains under active discussion.`,
      },
      {
        heading: 'Protecting Yourself from Online Scams',
        body: `Online scam prevention combines digital hygiene habits, a healthy scepticism toward unsolicited contact, and knowing where to verify information independently.

Never Click Links in Unexpected Messages: The cardinal rule of online scam prevention. If you receive an email or text claiming action is needed on your bank account, IRD assessment, or parcel delivery — go directly to the organisation's official website by typing the address yourself, or use your existing app. Never use the link provided in the message.

Two-Factor Authentication (Not SMS): Enable two-factor authentication on all important accounts. Use an authenticator app (Google Authenticator, Authy, Microsoft Authenticator) rather than SMS where possible — SMS 2FA can be intercepted through SIM swap attacks.

Verify Financial Services on the FSPR: Before dealing with any financial adviser, investment platform, or financial services provider, check the Financial Service Providers Register at fspr.govt.nz. All legitimate financial advisers in New Zealand must be registered. Absence from this register is a significant red flag.

Check the FMA Scam Warnings: The Financial Markets Authority maintains a list of known investment scams and unregistered operators at fma.govt.nz/consumers/scams/. Check this list before investing with any unfamiliar platform.

Use Netsafe Resources: Netsafe provides free resources for New Zealanders at netsafe.org.nz, including guides on recognising specific scam types, reporting tools, and the online safety helpline (0508 638 723).

Talk to Someone You Trust: One of the most effective scam prevention measures is simple: before sending money or providing personal information in any unusual situation, talk to a trusted family member or friend first. Scammers specifically try to prevent this — urgency and secrecy are hallmarks of scam pressure. A brief conversation with someone you trust can provide the reality check that prevents a significant loss.`,
      },
      {
        heading: 'Key Contacts: Online Scam Support in New Zealand',
        body: `If you have been scammed or suspect a scam attempt, these are the key contacts and resources.

Netsafe — 0508 638 723 (netsafe.org.nz): New Zealand's online safety organisation. Provides free advice, support, and reporting for online scams of all types. Available weekdays and many weekends.

CERT NZ (cert.govt.nz): The government's Computer Emergency Response Team. For scams with a cyber or technical element — phishing, account compromise, malware — CERT NZ provides technical guidance and collects incident data.

NZ Police — 105 (police.govt.nz): Report financial crimes including online scams. File online for non-urgent reports or call 105 for non-emergency matters. Emergency situations (you are at immediate risk) — call 111.

Financial Markets Authority (FMA) — 0800 434 566 (fma.govt.nz): The regulator for financial services. Report investment scams, unlicensed advisers, and clone firm impersonations. Check their warning list before investing.

IDCARE — 0800 432 273 (idcare.org): If personal information was compromised as part of the scam — providing identity documents, IRD number, or banking credentials — contact IDCARE for specialist identity theft recovery support.

Consumer NZ (consumer.org.nz): For scams involving goods or services, Consumer NZ provides guidance on your rights and how to escalate disputes.

Banking Ombudsman — 0800 805 950 (bankomb.org.nz): If your bank declines to refund a scam loss and you believe they should, escalate to the Banking Ombudsman for free dispute resolution.

Sorted.org.nz: The government's financial guidance website includes resources on scam prevention and investment fraud. Useful for checking whether an investment opportunity is legitimate.`,
      },
    ],
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
    metaTitle: 'Account Takeover Fraud NZ 2026 | SIM Swap & Credential Theft | FraudInsurance.co.nz',
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
    longFormContent: [
      {
        heading: 'What is Account Takeover Fraud?',
        body: `Account takeover (ATO) fraud is a specific form of identity and financial crime where a criminal gains unauthorised control of one or more of your online accounts — most critically banking accounts, but also email, social media, e-commerce, and investment accounts. Once in control, the criminal can drain funds, make purchases, access sensitive information, or use your account to defraud your contacts.

Account takeover differs from general identity theft in its immediacy and directness: rather than creating new accounts in your name, the criminal takes control of existing accounts with real funds and established relationships. This directness is what makes it so financially damaging.

SIM Swap Fraud: A particularly dangerous form of account takeover where a criminal convinces your mobile carrier to transfer your phone number to a SIM card they control. Once they receive your phone number, they can reset your banking and email passwords via SMS verification codes — bypassing two-factor authentication entirely.

Credential Stuffing: Using large databases of username-and-password combinations from data breaches to systematically attempt logins across banking, shopping, and other platforms. If you use the same password across multiple sites, and one site suffers a data breach, every account using that password becomes vulnerable.

Phishing for Credentials: Fake websites or emails that collect your username and password when you "log in" — giving criminals direct access to your real account.

Keylogger Malware: Software installed on your device (through a malicious download, phishing link, or compromised website) that records your keystrokes and transmits your credentials to criminals.

Email Account Hijacking: Taking control of your email account — often through phishing or credential stuffing — and then using the "forgot password" function on banking and other sites to reset credentials and gain access.`,
      },
      {
        heading: 'How Account Takeover Fraud Happens in New Zealand',
        body: `Account takeover fraud uses several distinct methods, each with different warning signs and prevention measures. Understanding the specific attack vectors helps you prioritise your defences.

SIM Swap Attack Anatomy: The criminal contacts your mobile carrier (Spark, One NZ, 2degrees, Skinny, etc.) by phone or online, impersonating you. Using personal information gathered from social media, data breaches, or previous phishing attacks — your name, address, date of birth, sometimes your account PIN — they convince the carrier to port your number to a new SIM. From this point, all SMS-based two-factor authentication codes go to the criminal's phone, not yours. Your phone loses service (often the first sign you notice). Within minutes, the criminal resets your banking passwords using SMS verification and drains your accounts.

Credential Stuffing from Data Breaches: International data breaches — thousands of which occur annually — generate vast databases of email/password combinations. Criminal groups purchase or obtain these databases and run automated tools testing the credentials against banking sites, PayPal, e-commerce platforms, and other targets. If you use the same password across multiple sites, a single breach of any one of them compromises all your accounts.

Social Engineering of Mobile Carrier Call Centres: Criminals can obtain enough personal information from social media and other sources to successfully impersonate you to a carrier's call centre. Carriers have improved verification processes, but trained social engineers can still succeed, particularly if the call centre representative is having a busy day and takes shortcuts on verification.

Phishing Campaigns Targeting Banking Apps: Sophisticated phishing messages — often arriving as text messages — direct you to convincing fake versions of your bank's login page. Your credentials, once entered, are captured and used immediately. Some phishing attacks are real-time: the criminal is waiting for your credentials and uses them while you are still on the fake site.`,
      },
      {
        heading: 'The Damage Account Takeover Causes',
        body: `Account takeover fraud causes a range of direct and downstream harms that can extend well beyond the immediate financial loss.

Immediate Fund Transfer Losses: The most obvious harm — criminals transfer funds from your bank account immediately upon gaining access. Bank transfers can occur within minutes. Savings, term deposits, and linked investment accounts may all be accessible. For accounts with high balances, the losses can be catastrophic.

Identity Theft Downstream: Email account takeover is particularly dangerous because it enables further fraud. A criminal who controls your email can reset passwords on any account linked to that email, access personal correspondence containing sensitive information, impersonate you to your contacts, and intercept communications from your bank and other institutions.

Credit Applications: With email access and enough personal information, a criminal can complete credit applications in your name — personal loans, credit cards, buy-now-pay-later accounts — adding financial obligations you will need to dispute and remove.

Difficulty Reversing the Damage: Unlike card fraud (where the bank can block the card and reverse transactions), account takeover can result in funds being transferred out and moved multiple times before you are aware. Recovery depends on the speed of your response and the willingness of the receiving bank to cooperate with recall requests.

Reputational Damage from Account Misuse: If your social media, email, or messaging accounts are taken over and used to defraud your contacts — requesting money, spreading malware, or sharing inappropriate content — the reputational damage can be significant and long-lasting.

Psychological Impact: Account takeover is a violation of privacy and security that many victims find deeply distressing. The time and stress of recovery — changing passwords across dozens of accounts, liaising with banks and carriers, monitoring for ongoing misuse — is considerable.`,
      },
      {
        heading: 'What Banks Cover and What They Don\'t',
        body: `How banks treat account takeover claims depends significantly on the specific circumstances — particularly on whether the takeover involved genuine hacking (without your participation) or whether you provided credentials through phishing.

SIM Swap vs Customer Negligence: When a criminal successfully executes a SIM swap and drains your account, this is generally treated as unauthorised access — you took no action that gave the criminal access; they exploited a vulnerability in the carrier's verification process. Banks have generally reimbursed SIM swap victims, though the process can require escalation and persistence.

Zero Liability Conditions: Banks' zero-liability guarantees apply when you have taken reasonable security precautions and the access was genuinely without your participation. If you provided your login credentials to a phishing site — even if you were deceived — the bank may characterise this as your having shared your credentials voluntarily, which may affect your claim.

Cases Where Banks Have Denied Claims: Banks have denied account takeover claims in cases where: the customer used a weak or reused password that appeared in a known data breach; the customer clicked a phishing link and entered their credentials; the customer shared their access codes with a family member; or the customer delayed reporting. Whether these denials are appropriate is regularly contested through the Banking Ombudsman.

What to Do If Your Bank Declines: If your account takeover claim is declined, escalate through the bank's internal complaints process and then to the Banking Ombudsman (bankomb.org.nz). The Ombudsman has ruled against banks in cases where the victim took reasonable precautions and the bank failed to detect obviously suspicious activity.

The Practical Position: If your account is taken over and your bank is investigating, cooperate fully, provide all information about how the takeover happened, and document everything. Do not assume the bank will not reimburse you — the outcome depends on the specific facts.`,
      },
      {
        heading: 'What to Do If Your Account Is Taken Over',
        body: `Speed is the most critical variable when responding to account takeover. The faster you act, the better your chance of limiting losses and recovery.

Immediate — Call Your Bank First: If you notice your phone has lost service unexpectedly (possible SIM swap), or if you receive notifications of password changes or transactions you didn't initiate, call your bank immediately using the number on the back of your card — not any number from an email or text. Ask them to:
- Freeze all accounts immediately
- Reverse any recent transactions where possible
- Issue new account numbers and cards
- Place a fraud flag on your file requiring additional verification for all future transactions

Lock Your SIM With Your Carrier: Call your mobile carrier (Spark, One NZ, 2degrees, or your virtual carrier) immediately if you suspect a SIM swap. Ask them to lock your SIM against any port-out requests and review recent account changes. If a SIM swap occurred, they can reverse it and restore your number.

Change All Passwords from a Clean Device: Using a device you are confident is not compromised (not the one you believe has malware), change passwords on all accounts — starting with your email, then banking, then everything else. Use unique, strong passwords for each account.

Report to NZ Police (105): File a police report to obtain an official crime record. This supports the insurance claim process and any recovery action.

Enable Stronger Authentication: After securing your accounts, enable authenticator-app-based multi-factor authentication on all important accounts. Remove SMS-based authentication where possible — SIM swap attacks bypass SMS.

Check All Linked Accounts: A compromised email account or banking account may have been used to access other linked services. Check all accounts linked to the compromised one for unauthorised activity.`,
      },
      {
        heading: 'How to Protect Your Accounts from Takeover',
        body: `Account takeover prevention is primarily about reducing the number of ways a criminal can obtain your credentials or bypass your authentication. Each layer of protection you add makes you a harder target.

Unique Strong Passwords for Every Account: This is the single most important protection. A password used on one site that is later breached gives criminals access to every account using that same password. Use a password manager — LastPass, 1Password, Bitwarden, or your device's built-in manager — to generate and store unique passwords. You only need to remember one master password.

Authenticator App-Based MFA (Not SMS): Enable two-factor authentication on all accounts that support it. Critically, use an authenticator app (Google Authenticator, Microsoft Authenticator, Authy) rather than SMS — authenticator app codes cannot be intercepted by SIM swap attacks.

Set a PIN or Passphrase with Your Mobile Carrier: Contact your carrier and ask them to add a port-protection PIN or passphrase to your account. This requires anyone requesting a SIM swap or number port to provide the PIN — a critical protection against SIM swap attacks.

Account Lock Features: Many banks and email providers offer optional account lock features — requiring in-person verification before certain changes can be made, or sending alerts for any account setting changes. Enable these features.

Security Questions You Don't Answer Truthfully: Security questions ("What was your first car?") can often be answered from social media research. Consider using nonsense answers stored in your password manager — "first car: purple elephant47" is not findable from your Facebook posts.

Credit Freeze as Downstream Protection: A credit freeze with all three bureaus prevents a criminal who has taken over your identity from opening new credit accounts in your name. It's a meaningful downstream protection for high-risk individuals.`,
      },
      {
        heading: 'Account Takeover Insurance: What Exists?',
        body: `Account takeover is primarily addressed through bank zero-liability guarantees rather than standalone insurance products in New Zealand. Here is an honest assessment of what coverage exists and what the gaps are.

Bank Zero-Liability Guarantees: As discussed throughout this guide, your bank's zero-liability policy should cover genuine unauthorised account access — including SIM swap attacks and hacking. This is the primary financial protection layer for most individuals. The limitations relate to cases where you were involved in providing credentials (phishing) or where negligence is alleged.

NZI Cyber Cover for Individuals: NZI offers a cyber safety product that includes some individual identity and account protection features. This is an emerging product category in New Zealand — personal cyber insurance for individuals rather than businesses. Coverage typically includes identity restoration support and some financial loss coverage for account takeover scenarios. Availability and terms may change — check directly with NZI or an insurance broker.

Business Cyber Insurance: For business owners and self-employed individuals, business cyber insurance (from DUAL, NZI, Delta, or others) typically covers business account takeover events as part of the cyber coverage suite. This does not cover personal accounts but is relevant for protecting business banking and systems.

What's Coming: The personal cyber insurance market is developing globally and locally. As account takeover and identity theft losses increase, insurers are developing individual-focused products. FraudInsurance.co.nz monitors these developments and will update this guide as new products become available.

The Gap Summary: For personal account takeover, your primary financial protection is your bank's guarantee (for genuinely unauthorised transactions), supplemented by IDCARE support services for recovery assistance. There is a coverage gap for phishing-related credential loss where the bank may argue partial responsibility. This gap is an argument for the strongest possible preventive measures — authenticator apps, unique passwords, carrier port protection — rather than a gap that is currently insurable in New Zealand for individuals.`,
      },
    ],
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
    metaTitle: 'Investment Scam Protection NZ 2026 | Crypto Scams & Fake Platforms | FraudInsurance.co.nz',
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
    longFormContent: [
      {
        heading: 'What Are Investment Scams?',
        body: `Investment scams are fraudulent schemes that deceive people into transferring money to criminals under the pretence of a legitimate investment opportunity. They range from simple fake trading accounts to complex, months-long deceptions involving manufactured relationships and sophisticated fake platforms.

Ponzi Schemes: Criminal enterprises that pay returns to earlier investors using the money from newer investors, creating an illusion of a profitable investment while generating nothing. Ponzi schemes eventually collapse when there is insufficient new investment to pay returns. They are named for Charles Ponzi but continue in modern forms, including several cryptocurrency-related schemes.

Fake Cryptocurrency Trading Platforms: A major and growing fraud category. Criminals build convincing fake trading platforms showing impressive returns on the victim's "portfolio." Victims can log in, see their "balance" growing, and even withdraw small amounts to build confidence. When they try to withdraw larger amounts, they are told fees, taxes, or verification requirements must be met — all requiring further deposits. The platform then disappears.

Pig Butchering (Romance-to-Investment): A sophisticated combination of romance scam and investment fraud. Criminals build online relationships over weeks or months, then introduce an "amazing investment opportunity." The victim invests progressively more as the fake returns grow, then loses everything when the platform disappears.

Clone Firm Scams: Criminals create fake websites and communications impersonating licensed NZ financial services firms — using similar names, logos, and even registrations numbers. Victims invest through the fake "firm" and never see their money again.

Unlicensed Investment Advice and Managed Schemes: Individuals or groups offering investment management or advice without being registered on the FSPR. This is illegal in New Zealand and the absence of regulatory oversight means there is no recourse when the "investment" proves fraudulent.`,
      },
      {
        heading: 'Investment Scam Statistics in New Zealand',
        body: `Investment scams are the highest-value fraud category by individual loss, and represent a substantial portion of total fraud losses in New Zealand. The scale is significant and growing.

The FMA issued more than 50 investment scam warning notices in 2025, the highest annual total on record. These warnings represent a fraction of the actual scam operations targeting New Zealanders — warning notices are issued for known scams that have been reported, not the full universe of fraudulent platforms.

Netsafe and GASA research for 2025 found investment scams among the highest-loss categories, with average individual losses exceeding $20,000 and significant numbers of victims losing $50,000-$200,000 or more. The cumulative losses from investment scams exceeded $100 million in the 2024 reporting year.

Notable 2024-2025 case examples (generalised to protect victims): A Wellington couple in their 60s lost $180,000 to a fake cryptocurrency platform recommended by an online contact; an Auckland professional lost $95,000 to a clone firm impersonating a well-known NZ investment manager; a Christchurch retiree lost $250,000 over 18 months through a pig butchering scheme that began on a dating app.

The FMA has specifically warned about: fake platforms impersonating legitimate NZ investment services including Sharesies, InvestNow, and Fisher Funds; crypto platforms promoted through social media advertising featuring celebrity endorsements (which are fabricated); and romance-to-investment pipelines operating primarily through dating apps and WhatsApp.

Recovery rates are sobering: under 10% of investment scam victims recover any significant portion of their losses. Funds are typically moved offshore rapidly, making recall and recovery very difficult.`,
      },
      {
        heading: 'The Psychology of Investment Scams',
        body: `Investment scams are not primarily about technology or even financial sophistication — they are about psychology. Understanding why intelligent, educated, financially competent people fall victim is essential to understanding both how to protect yourself and how to support someone who has been victimised.

FOMO (Fear of Missing Out): Scammers create narratives around exclusive or time-limited opportunities. "This window closes in 48 hours." "Only 10 spots left in this round." "My group has been making 30% per month — you can get in before the next phase." The fear of missing out on genuine wealth suppresses the critical thinking that would otherwise detect the fraud.

Social Proof: Testimonials (fabricated), screenshots of returns (fabricated), references from "other investors" (who are criminal operatives) create an illusion that many people have successfully invested and profited. Social proof is one of the most powerful persuasion tools humans respond to — and scammers exploit it systematically.

The Grooming Process: Pig butchering scams in particular invest enormous time in building genuine-feeling relationships before introducing the investment opportunity. By the time money is requested, the victim has an emotional connection with the scammer that makes it psychologically difficult to be appropriately sceptical. The relationship is the scam's primary tool.

Authority Impersonation: Clone firm scams and fake advisers create an illusion of legitimate authority — official-looking websites, fake registrations, fabricated credentials. Humans are conditioned to defer to apparent authority, and scammers exploit this by creating convincing simulations.

Confirmation Bias After Initial Investment: Once someone has invested and seen (fabricated) positive returns, confirmation bias makes them more likely to continue investing and less receptive to warnings. The initial positive experience is a deliberate tool to encourage further, larger deposits.

The Sunk Cost Fallacy: When victims begin to doubt, they often continue investing because they don't want to "lose" what they've already put in — even though the earlier "gains" were never real. Scammers actively exploit this by timing doubts against requests for additional investment to "release" existing funds.`,
      },
      {
        heading: 'Common Investment Scams Targeting New Zealanders',
        body: `Specific investment scam types and their distinctive features help you recognise them before you are harmed.

Fake FMA-Licensed Platforms: Websites with URLs resembling legitimate NZ investment platforms, often using names one word different from a real firm. They display fabricated FMA licence numbers or claim registration that can be easily fact-checked on the FSPR — but many victims don't check. These sites often have professional design, live chat support (operated by criminal call centres), and convincing fake portfolio displays.

Fake Sharesies and InvestNow Impersonation: The FMA has specifically warned about platforms impersonating well-known NZ retail investment services. These may be approached through social media advertising, email, or referral through a social engineering approach. Always access Sharesies, InvestNow, and other platforms through the URL you already have bookmarked — never through a link.

Celebrity-Endorsed Crypto Platforms: Fake advertisements featuring New Zealand celebrities or well-known investors "endorsing" cryptocurrency trading platforms. These endorsements are fabricated — the celebrities have not approved them. If you see an advertisement featuring a celebrity recommending a cryptocurrency investment, it is almost certainly a scam. Report it to the FMA and to Netsafe.

Romance Pig Butchering: Described in detail elsewhere on this page, pig butchering begins with an online relationship (dating app, WhatsApp, LinkedIn, Instagram) and progresses to an "investment opportunity" the scammer says has changed their life. The investment platform is entirely fabricated. Losses average $50,000-$200,000 per victim.

Advance Fee Fraud: You've won a prize, inherited money, or been selected for an investment opportunity — but must pay a fee, tax, or deposit first. The legitimate payment never follows. This pattern is ancient but continues to catch victims despite being widely known.`,
      },
      {
        heading: 'How to Check If an Investment Is Legitimate',
        body: `Verifying an investment opportunity before committing money is straightforward if you know where to look. These steps should be non-negotiable for any investment opportunity.

Step 1 — FMA Financial Service Providers Register (FSPR): All financial advisers and firms offering financial services in New Zealand must be registered on the FSPR (fspr.govt.nz). Search the specific person's name and firm name. Check that the registration is current (not expired or cancelled). Verify the authorised services include investment advice or management. If the firm or person is not on the register, do not proceed.

Step 2 — FMA Warning List: The Financial Markets Authority maintains an up-to-date list of known investment scams and unlicensed operators at fma.govt.nz/consumers/scams/. Check this list for the firm or platform name. Also check for warnings about similar-sounding names — clone firms often use slight variations of legitimate names.

Step 3 — Search for Reviews and Complaints: Search "[company name] scam" or "[company name] FMA warning" online. Real fraud victims and consumer protection organisations often document scam operations online. The absence of any reviews or presence is also suspicious — legitimate firms have track records.

Step 4 — Request a Product Disclosure Statement (PDS): All regulated investment products in New Zealand must have a Product Disclosure Statement filed with the FMA. If you are offered an investment and no PDS exists or is provided, the offer is likely unregulated and possibly fraudulent.

Step 5 — Verify Contact Details Independently: Don't use contact details provided by the firm to verify the firm. Look up the firm's contact details independently through the FSPR or a general internet search and contact them to confirm the opportunity is genuine.

Step 6 — Consult Sorted.org.nz: The government-backed Sorted.org.nz provides independent financial guidance and resources for checking investment opportunities. Their resources include a fraud checker tool.

Step 7 — Ask a Licensed Independent Adviser: Before investing any significant sum with an unfamiliar firm or platform, pay for an independent review by a registered financial adviser who has no connection to the opportunity. The cost of advice is trivial compared to potential losses.`,
      },
      {
        heading: 'What to Do If You\'ve Lost Money to an Investment Scam',
        body: `If you have lost money to an investment scam, taking the right steps quickly maximises your limited chances of recovery and ensures the scam is properly documented to protect others.

Step 1 — Report to the FMA Immediately (0800 434 566 or fma.govt.nz): The Financial Markets Authority is the primary regulator for investment fraud. Report immediately, providing all available details about the platform, the communications you received, how you found them, and the amounts transferred. The FMA investigates investment fraud and publishes warnings — your report contributes to protecting others.

Step 2 — Contact Your Bank to Attempt Recall: If you transferred funds from your bank account, contact your bank's fraud line immediately. Request an urgent recall of the most recent transfers. Recovery is much more likely for recent domestic transfers — international transfers and transfers to crypto wallets are nearly impossible to recall after 24 hours. Do not wait.

Step 3 — Report to NZ Police (105): File a report with NZ Police for the official record. The police may not actively investigate every investment fraud case (particularly international ones), but the report number is needed for subsequent steps.

Step 4 — Report to Netsafe: Report at netsafe.org.nz or call 0508 638 723. Netsafe collects intelligence on scam operations targeting New Zealanders.

Step 5 — Contact IDCARE if Personal Information Was Shared: If you provided identity documents, IRD number, or other personal information as part of the "investment" process, contact IDCARE (0800 432 273) for identity theft recovery support.

Realistic Expectations on Recovery: International recovery is very difficult. Investment scam funds are typically moved through multiple jurisdictions rapidly. INTERPOL's Financial Crimes unit and the FMA collaborate with international counterparts, but recovery rates are under 10%. Do not pay any further amounts to any "recovery service" promising to retrieve your funds — these are almost universally secondary scams targeting victims who have already lost money.

Compensation Funds: There is no general government compensation fund for investment scam victims in New Zealand. The FMA's compensation scheme relates specifically to regulated firms that have failed — not to fraudulent unregistered operators.`,
      },
      {
        heading: 'Is There Insurance for Investment Scam Losses?',
        body: `This is one of the most common questions from investment scam victims and those seeking protection. The honest answer, as of mid-2026, is that there is no mainstream insurance product in New Zealand that covers investment scam losses for individuals.

Why No Insurance Product Exists: Investment scam losses present significant insurance challenges. The "authorised payment" problem means the victim voluntarily transferred funds — unlike card fraud where banks cover unauthorised transactions. Moral hazard concerns arise if insurance were to cover investment losses resulting from a victim's decision to invest with an unverified platform. The diversity and evolution of scam methods makes underwriting extremely difficult.

What Banks Provide: Bank zero-liability guarantees cover truly unauthorised transactions — not decisions to invest with fraudulent platforms, even if the decision was made under deception. Some banks have provided partial reimbursement in investment scam cases as a goodwill gesture, particularly where the bank had fraud warnings and failed to alert the customer. This is not guaranteed.

Recovery Funds and Schemes: The FMA's Dispute Resolution Schemes cover disputes with licensed financial services providers — not fraudulent unlicensed operators. The Banking Ombudsman covers disputes with banks — potentially relevant if the bank failed to warn you of an obvious scam despite having intelligence about it.

Private Cyber Insurance for Businesses: Business owners and self-employed individuals may have business cyber insurance that includes social engineering fraud coverage. If an investment scam involved social engineering targeting a business decision, this may be worth exploring with your broker.

The Practical Position: The best protection against investment scam losses remains prevention — through FSPR verification, FMA warning checks, and independent advice before investing. Once funds have been lost to a fraudulent international platform, financial recovery options are very limited. This reinforces the importance of verification before investing rather than insurance after losses occur.`,
      },
    ],
  },
];
