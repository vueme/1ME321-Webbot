import Vue from 'vue';
import App from './App.vue';
window.axios = require('axios');
import 'normalize.css';

export const EventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});