module.exports = {
  locales: ["en", "fr"],
  defaultLocale: "en",
  pages: {
    // Note: common is our only namespace
    // For tutorial purposes, we have only one file per locale
    // called: ${lang}.json
    "*": ["common"],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}.json`).then((m) => m.default),
};
