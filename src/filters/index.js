import Vue from 'vue';
import moment from 'moment';

Vue.filter('date', (date) => {
  return moment(date).format('hh:mm:ss A');
});
