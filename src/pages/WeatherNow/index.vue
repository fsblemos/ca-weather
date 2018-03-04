<template>
  <div class="weather-container">
    <WeatherCard
      class="weather-card"
      v-for="card in cards"
      :key="card.city"
      v-bind="card" />
  </div>
</template>

<script>
import WeatherCard from './WeatherCard';

export default {
  name: 'WeatherNow',
  components: {
    WeatherCard,
  },
  created() {
    this.cards.forEach((card) => {
      this.$api.weather.getWeather({ city: card.city, uf: card.uf })
        .then(weather => this.setData(card, weather));
    })
  },
  data() {
    return {
      cards: [
        { city: 'Nuuk', uf: 'GL' },
        { city: 'Urubici', uf: 'BR' },
        { city: 'Nairobi', uf: 'KE' },
      ],
    };
  },
  methods: {
    setData(card, { temp, humidity, pressure }) {
      this.$set(card, 'temperature', temp);
      this.$set(card, 'humidity', humidity);
      this.$set(card, 'pressure', pressure);
    },
  },
};
</script>

<style scoped>
.weather-container {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  max-width: var(--body-width);
}

@media screen and (max-width: 880px) {
  .weather-container {
    flex-direction: column;
    padding: 2rem;
  }

  .weather-card:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>
