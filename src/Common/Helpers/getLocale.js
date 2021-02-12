export const langs = [
  { lang: 'English', codes: ['en', 'en-US'], flag: 'gb' },
  { lang: 'Francais', codes: ['fr'], flag: 'fr' },
  // { lang: 'Svenska', codes: ['sv'], flag: 'se' },
]

const getLocale = (i18n) => {
  const currentLang =
    langs.find(lang =>
      lang.codes.some(l => i18n.language.split(',').includes(l)),
    ) || langs[0]

  return currentLang
}

export default getLocale
