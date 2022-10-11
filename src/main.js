import Buefy from 'buefy';
import Layout from '~/layouts/Default.vue';
import '~/scss/theme.scss';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import Cta from "./components/Cta";
import ReadMoreColumn from "./components/ReadMoreColumn";

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy);
  Vue.component('Cta', Cta);
  Vue.component('ReadMoreColumn', ReadMoreColumn);
  Vue.component('Layout', Layout);
}
