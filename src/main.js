import Buefy from 'buefy';
import Layout from '~/layouts/Default.vue';
import '~/scss/theme.scss';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import Cta from "./components/Cta";

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy);
  Vue.component('Cta', Cta);
  Vue.component('Layout', Layout);
}
