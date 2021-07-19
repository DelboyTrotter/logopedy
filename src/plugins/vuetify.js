import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2a3042',
        secondary: '#f8f8fb',
        accent: '#556ee6',
        error: '#b71c1c',
      },
    },
  },
});
