import { copy, type Locale } from '../i18n/copy';
import { home, local } from './urls';

export function structuredData(locale: Locale, site: URL) {
  const root = new URL(home('en'), site).href;
  const page = new URL(home(locale), site).href;
  const organization = `${root}#organization`;
  const website = `${root}#website`;
  const application = `${root}#application`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organization,
        name: 'Worbee EOOD',
        url: root,
      },
      {
        '@type': 'WebSite',
        '@id': website,
        name: 'Metribay',
        url: root,
        inLanguage: ['en', 'de'],
        publisher: { '@id': organization },
        about: { '@id': application },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': application,
        name: 'Metribay',
        url: 'https://app.metribay.com/',
        description: copy[locale].description,
        applicationCategory: 'BusinessApplication',
        inLanguage: 'en',
        isAccessibleForFree: true,
        image: new URL(local('assets/metribay-share.png'), site).href,
        publisher: { '@id': organization },
      },
      {
        '@type': 'WebPage',
        '@id': `${page}#webpage`,
        url: page,
        name: copy[locale].title,
        description: copy[locale].description,
        inLanguage: locale,
        isPartOf: { '@id': website },
        about: { '@id': application },
      },
    ],
  };
}

// Keep JSON-LD inert even if future copy includes HTML or a closing script tag.
export const serializeStructuredData = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
