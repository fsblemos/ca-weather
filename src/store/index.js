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
  getters: {
    card: state => ({ city, country }) => getCardByName(state.cards, { city, country }),
    isExpired: state => moment().diff(state.updatedAt, 'minutes') >= MINUTES_INTERVAL,
  },
  mutations: {
    setUpdatedAt(state, updatedAt) {
      state.updatedAt = updatedAt;
    },
    setCardError(state, { city, country, error }) {
      const stateCard = getCardByName(state.cards, { city, country });

      stateCard.error = error;
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
    async setCardWeather({ commit }, card) {
      const { city, country } = card;

      commit('setCardLoading', { city, country, loading: true });

      try {
        const weather = await api.getWeather(card);

        console.log(`Buscou ${city} da API`);

        commit('setCardWeather', { city, country, weather });
        commit('setUpdatedAt', moment());
        commit('setCardError', { city, country, error: null });
      } catch (e) {
        commit('setCardError', { city, country, error: 'Something went wrong' });
      } finally {
        commit('setCardLoading', { city, country, loading: false });
      }
    },
    getCards({ state, getters, dispatch }) {
      const updatedAt = moment(state.updatedAt);

      state.cards.forEach(async (card) => {
        if (!state.updatedAt || getters.isExpired || card.error) {
          await dispatch('setCardWeather', card);
        }
      });

      setTimeout(() => dispatch('getCards'), MILISSECONDS_INTERVAL);
    },
  }
});
