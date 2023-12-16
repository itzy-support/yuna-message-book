// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#0D47A1",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#0D47A1",
        },
      },
    },
  },
});
