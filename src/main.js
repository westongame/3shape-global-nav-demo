import Vue from 'vue';

import GlobalNavigation from './components/GlobalNavigation/GlobalNavigation.vue';


Vue.config.productionTip = false;

new Vue({
    render: (h) => h(GlobalNavigation)
}).$mount('#app');
