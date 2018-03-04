import Vue from 'vue';
import App from './App';
import api from './api';

import './filters/index';

const requireComponents = (context) => {
  context.keys().forEach(key => {
    const name = key.match(/\w+/)[0];
    return Vue.component(name, context(key).default);
  });
};

requireComponents(require.context('./components', true, /\.vue$/i));

Vue.prototype.$api = api;
Vue.api = api;

new Vue({
  el: '#app',
  render: h => h(App),
});
