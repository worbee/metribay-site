export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const local = (path = '') => `${base}/${path.replace(/^\//, '')}`;
export const home = (locale: 'en' | 'de') => local(locale === 'de' ? 'de/' : '');
export const register = 'https://app.metribay.com/register';
export const login = 'https://app.metribay.com/login';
