import { withDocus } from "docus";

// Learn more at https://docus.dev
export default withDocus({
  docus: {
    // primaryColor: '#E24F55'
  },
  i18n: {
    locales: () => [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
      {
        code: "tr",
        iso: "tr-TR",
        file: "tr-TR.js",
        name: "Türkçe",
      },
    ],
  },
});
