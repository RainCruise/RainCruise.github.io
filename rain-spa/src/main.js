import Vue from 'vue';
import ElementUI from 'element-ui';

import '@styles/element-variables.scss';

import App from '@/app';

Vue.use(ElementUI);

const app = new Vue(App);
app.$mount('#app');

export default app;
