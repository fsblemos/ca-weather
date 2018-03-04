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
  data() {
    return {
      cards: [
        { city: 'Nuuk', uf: 'GL', temperature: -4, humidity: 75, pressure: 892 },
        { city: 'Urubici', uf: 'BR', temperature: 19, humidity: 75, pressure: 892 },
        { city: 'Nairobi', uf: 'KE', temperature: 31, humidity: 75, pressure: 892 },
      ],
    };
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
