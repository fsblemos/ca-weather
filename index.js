import Vue from 'vue';
import App from './src/App';

const context = require.context('./src/', true, /\.vue$/i);

context.keys().forEach(key => {
  const name = key.match(/\w+/)[0];
  return Vue.component(name, context(key).default);
});

new Vue({
  el: '#app',
  render: h => h(App),
});
