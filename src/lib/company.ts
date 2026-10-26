// Facts that appear in pricing, legal pages and structured data. Keep them in one place and change them only when the real business detail changes.
export const company = {
  name: 'Worbee EOOD',
  representative: 'Robert Ivanov',
  // The public worbee.com page lists only the town. German imprint rules expect a full street address, so add it here before publishing.
  address: ['Bankya, Sofia', 'Bulgaria, EU'],
  uic: '206543923',
  vatId: 'BG206543923',
  email: 'rob@worbee.com',
};

// Leave empty while the core repository is private. Once it is public, set the URL and the self-hosted plan links to it instead of email.
export const coreRepository = '';

export const plan = {
  // Paddle prices are tax-inclusive everywhere (tax_mode internal): nobody pays more than these amounts.
  monthly: 29,
  annual: 190,
  currency: 'USD',
  trialDays: 14,
  refundDays: 14,
  projects: 10,
  sources: 50,
  workspaces: 5,
  members: 10,
};
