import Vue from 'vue';
import moment from 'moment';

Vue.filter('date', (date) => {
  return date ? moment(date).format('hh:mm:ss A') : date;
});
