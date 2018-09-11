import i18n from "i18next";

i18n.init({
  resources: {
    en: {
      people: {
        'list.title': 'People list',
        'add.title': 'Add person',
        'loading': 'Loading...',
      },
      list: {
        "no-data": "No data found",
        "header.first-name": "First name",
        "header.last-name": "Last name",
        "header.email": "E-mail address"
      }
    }
  },
  fallbackLng: "en",
  debug: true,
  ns: ["app"],
  defaultNS: "app",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ","
  },
  react: {
    wait: true
  }
});

export default i18n;
