function addLanguageToUrl(url, currentLanguage) {
  const urlParts = url?.split("/").filter(Boolean);

  if (urlParts[0] !== "en" && urlParts[0] !== "ar") {
    urlParts.unshift(currentLanguage);
  }
  return "/" + urlParts.join("/");
}

function resolveHome(url) {
  if (url === "/en") {
    return "/en/app";
  }
  if (url === "/ar") {
    return "/ar/app";
  }
  return url;
}

function extractLanguageFromUrl(url) {
  const regExpResilt = url.match(/^\/(ar|en)\/.*$/);
  if (!regExpResilt) return "ar";
  return regExpResilt[1];
}

export async function buildCanonicalUrl(currentUrl, currentLanguage) {
  sessionStorage.removeItem("language-switch");
  let canonicalUrl = currentUrl;
  canonicalUrl = addLanguageToUrl(canonicalUrl, currentLanguage);
  canonicalUrl = resolveHome(canonicalUrl);
  const canonicalLanguage = extractLanguageFromUrl(canonicalUrl);
  return { canonicalUrl, canonicalLanguage };
}

export async function switchLanguages() {
  const url = window.location.pathname;
  const urlParts = url.split("/").filter(Boolean);

  const currentLanguage = urlParts[0];
  const targetLanguage = currentLanguage === "en" ? "ar" : "en";

  urlParts[0] = targetLanguage;

  sessionStorage.setItem("language-switch", true);

  window.location.href = "/" + urlParts.join("/");
}

export const pagination = (displayedContent = [], itemsNum, pageNum) => {
  const count = Math.ceil(displayedContent?.length / itemsNum);
  const startIndex = (pageNum - 1) * itemsNum;
  const requiredArr = displayedContent.slice(startIndex, startIndex + itemsNum);
  return { count, requiredArr };
};

export const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
