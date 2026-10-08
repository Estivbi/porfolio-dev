import es from './es.json'
import en from './en.json'

export type Lang = 'es' | 'en'
export const LANGS: Lang[] = ['es', 'en']
export type Dict = typeof es

// Si en.json no tiene la misma forma que es.json, TypeScript falla aquí.
// PENDIENTE DE REVISIÓN: el inglés (en.json) es una traducción sin revisar.
const dict: Record<Lang, Dict> = { es, en }

export const getDict = (lang: Lang): Dict => dict[lang]

export const getLang = (url: URL): Lang =>
  url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'es'

/** Ruta localizada: es en la raíz, en bajo /en */
export const path = (lang: Lang, p = '/'): string =>
  lang === 'es' ? p : `/en${p === '/' ? '/' : p}`
