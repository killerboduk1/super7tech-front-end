import { createApp } from 'vue';
import router from './router';

import VueSplide from '@splidejs/vue-splide';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Default theme
import '@splidejs/vue-splide/css';

import App from './App.vue';

const app = createApp(App);

app.use( VueSplide );
app.use(router);

app.mount('#app')
