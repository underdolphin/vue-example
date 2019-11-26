import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const opts = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.purple.darken1,
        secondary: colors.purple.lighten4,
        accent: colors.purple.accent4
      }
    }
  }
};

export default new Vuetify(opts);
