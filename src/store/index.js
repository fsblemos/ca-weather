import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import api from '@/api/weather';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const MINUTES_INTERVAL = 10;
const MILISSECONDS_INTERVAL = moment.duration(MINUTES_INTERVAL, 'minutes').asMilliseconds();

const getCardByName = (cards, { city, country }) =>
  cards.find(card => card.city === city && card.country === country);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    updatedAt: null,
    cards: [
      { city: 'Nuuk', country: 'GL', loading: true },
      { city: 'Urubici', country: 'BR', loading: true },
      { city: 'Nairobi', country: 'KE', loading: true },
    ],
  },
  mutations: {
    setUpdatedAt(state, updatedAt) {
      state.updatedAt = updatedAt;
    },
    setCardWeather(state, { city, country, weather }) {
      const stateCard = getCardByName(state.cards, { city, country });

      if (stateCard) {
        stateCard.temperature = weather.temp;
        stateCard.humidity = weather.humidity;
        stateCard.pressure = weather.pressure;
      }
    },
    setCardLoading(state, { city, country, loading }) {
      const stateCard = getCardByName(state.cards, { city, country });

      if (stateCard) {
        stateCard.loading = loading;
      }
    },
  },
  actions: {
    setCardWeather({ commit }, card) {
      return api.getWeather(card).then((weather) => {
        const { temp, humidity, pressure } = weather;
        const { city, country } = card;

        console.log(`Buscou ${city} da API`);

        commit('setCardWeather', { city, country, weather });
        commit('setCardLoading', { city, country, loading: false });
        commit('setUpdatedAt', moment());
      });
    },
    getCards({ state, dispatch }) {
      const updatedAt = moment(state.updatedAt);
      const isExpired = moment().diff(updatedAt, 'minutes') >= MINUTES_INTERVAL;

      state.cards.forEach(async (card) => {
        if (!state.updatedAt || isExpired) {
          await dispatch('setCardWeather', card);
        }
      });

      setTimeout(() => dispatch('getCards'), MILISSECONDS_INTERVAL);
    },
  }
});
