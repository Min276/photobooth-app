var en = require("./translations.en.json");
var my = require("./translations.my.json");

const i18n = {
  translations: {
    en,
    my,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;