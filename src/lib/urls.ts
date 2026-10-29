import type { Locale } from '../i18n/copy';
import { company, coreRepository } from './company';

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const local = (path = '') => `${base}/${path.replace(/^\//, '')}`;
export const home = (locale: Locale) => local(locale === 'de' ? 'de/' : '');
export const docs = (locale: Locale) => `${home(locale)}docs/`;
export const register = 'https://app.metribay.com/register';
export const login = 'https://app.metribay.com/login';
export const contact = `mailto:${company.email}`;
export const selfHosted = coreRepository || `mailto:${company.email}?subject=Metribay%20self-hosted`;

export type LegalPage = 'terms' | 'privacy' | 'refunds' | 'imprint';
export const legalPages: LegalPage[] = ['terms', 'privacy', 'refunds', 'imprint'];
const legalSlugs: Record<Locale, Record<LegalPage, string>> = {
  en: { terms: 'terms', privacy: 'privacy', refunds: 'refunds', imprint: 'imprint' },
  de: { terms: 'agb', privacy: 'datenschutz', refunds: 'erstattung', imprint: 'impressum' },
};
export const legalSlug = (locale: Locale, page: LegalPage) => legalSlugs[locale][page];
export const legal = (locale: Locale, page: LegalPage) => `${home(locale)}${legalSlug(locale, page)}/`;
