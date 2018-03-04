<template>
  <div class="weather-container">
    <WeatherCard v-for="card in cards" v-bind="card"/>
  </div>
</template>

<script>
export default {
  name: 'WeatherNow',
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
.weather-cards {
  display: flex;
  margin: 20px;
}

@media screen and (max-width: 880px) {
  .weather-container {
    flex-direction: column;
    padding: 2rem;
  }
}

.weather-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: var(--body-width);
  height: 100%;
}
</style>
