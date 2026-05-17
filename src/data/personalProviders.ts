export interface PersonalProvider {
  id: string;
  name: string;
  type: 'bank' | 'insurer' | 'broker';
  tagline: string;
  description: string;
  coverTypes: string[];
  url: string;
  logo?: string;
}

export const personalProviders: PersonalProvider[] = [
  {
    id: 'anz',
    name: 'ANZ Bank',
    type: 'bank',
    tagline: 'Zero liability on unauthorised card transactions',
    description: 'ANZ provides zero liability protection on all unauthorised card transactions when you report fraud promptly. Online and mobile banking fraud protection included.',
    coverTypes: ['Card Fraud', 'Unauthorised Transactions', 'Online Banking Fraud'],
    url: 'https://www.anz.co.nz/personal/bank-accounts/security/',
  },
  {
    id: 'bnz',
    name: 'BNZ Bank',
    type: 'bank',
    tagline: 'Guaranteed fraud protection on eligible accounts',
    description: 'BNZ\'s Online Banking Guarantee protects you against loss from unauthorised transactions on your internet banking — provided you follow their security guidelines.',
    coverTypes: ['Card Fraud', 'Internet Banking Fraud', 'Unauthorised Transactions'],
    url: 'https://www.bnz.co.nz/personal-banking/ways-to-bank/online/security',
  },
  {
    id: 'asb',
    name: 'ASB Bank',
    type: 'bank',
    tagline: 'Secure internet and mobile banking protection',
    description: 'ASB guarantees to reimburse losses from unauthorised transactions through ASB FastNet Classic or ASB Mobile, subject to their security conditions.',
    coverTypes: ['Card Fraud', 'Mobile Banking Fraud', 'FastNet Fraud'],
    url: 'https://www.asb.co.nz/security',
  },
  {
    id: 'westpac',
    name: 'Westpac NZ',
    type: 'bank',
    tagline: 'Digital fraud protection across all channels',
    description: 'Westpac\'s Online Banking Guarantee covers losses from unauthorised use of your Westpac accounts through online or mobile banking, under their terms.',
    coverTypes: ['Card Fraud', 'Online Banking Fraud', 'Digital Wallet Fraud'],
    url: 'https://www.westpac.co.nz/security/',
  },
  {
    id: 'kiwibank',
    name: 'Kiwibank',
    type: 'bank',
    tagline: 'Kiwi-owned banking with fraud safety net',
    description: 'Kiwibank provides fraud protection guarantees on internet banking transactions, covering losses from unauthorised access where you\'ve met their security requirements.',
    coverTypes: ['Card Fraud', 'Internet Banking Fraud', 'Account Takeover'],
    url: 'https://www.kiwibank.co.nz/personal-banking/security/',
  },
  {
    id: 'nzi-cyber-personal',
    name: 'NZI',
    type: 'insurer',
    tagline: 'Personal cyber insurance add-on cover',
    description: 'NZI offers cyber insurance products that can include personal fraud elements. Contact NZI or a broker to discuss personal cyber cover options.',
    coverTypes: ['Identity Theft', 'Cyber Fraud', 'Online Scams'],
    url: 'https://www.nzi.co.nz/',
  },
  {
    id: 'idcare',
    name: 'IDCARE',
    type: 'broker',
    tagline: 'Free identity & cyber security support service',
    description: 'IDCARE is Australasia\'s national identity & cyber support service. Free to New Zealanders — helps you respond, recover, and protect after identity theft or online fraud.',
    coverTypes: ['Identity Theft Recovery', 'Cyber Support', 'Fraud Response'],
    url: 'https://www.idcare.org/new-zealand',
  },
];
