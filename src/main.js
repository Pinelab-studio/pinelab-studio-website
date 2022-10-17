import Buefy from 'buefy';
import Layout from '~/layouts/Default.vue';
import '~/scss/theme.scss';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import Cta from "./components/Cta";
import ReadMoreColumn from "./components/ReadMoreColumn";
import checkView from 'vue-check-view';
import 'aos/dist/aos.css'
import VueGtag from "vue-gtag";
import Consent from "./components/Consent";

export default function (Vue, { router, head, isClient }) {
    head.htmlAttrs = { lang: 'nl' }
    Vue.use(Buefy);
    Vue.use(checkView);
    Vue.component('Cta', Cta);
    Vue.component('ReadMoreColumn', ReadMoreColumn);
    Vue.component('Layout', Layout);
    Vue.component('Consent', Consent);
    Vue.mixin({
        methods: {
            logClick(label, value) {
                this.$gtag.event('click', {
                    event_category: 'Button',
                    event_label: label,
                    value: value
                })
            }
        }
    });
    if (isClient) {
        Vue.use(
            VueGtag,
            {
                config: {
                    id: 'G-V15SX04B0P',
                    params: {
                        anonymize_ip: true,
                    },
                },
                bootstrap: false,
            },
            router
        );
    }
}
