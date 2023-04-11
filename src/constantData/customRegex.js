export const customRegex = {
  englishLangRegex: /^[a-zA-Z0-9$@$!%*?&#-^_. +]+$/,
  arabicLangRegex: /[\u0600-\u06FF]/,
  phoneRegExp:
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
  camelCase: /^[a-zA-Z]+([A-Z][a-z]+)+$/,
  passwordRegExp:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[()"!@#_'+-/=?`|{}~£\$%\^&\*])(?=.{7,})/,
  domainRegex:
    /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.){2,}([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]){2,}$/,
};
