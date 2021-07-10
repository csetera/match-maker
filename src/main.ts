// import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Vue from 'vue'
import Router from 'vue-router';
import MatchSelectionView from '@/views/MatchSelectionView.vue';
import UserEntryView from '@/views/UserEntryView.vue';

const router = new Router({
  mode: 'history',
  routes: [
      { path: '/', name: 'user-entry', component: UserEntryView },
      { path: '/select-matches', name: 'select-matches', component: MatchSelectionView, props: true }
  ],
});

Vue.use(Router);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
