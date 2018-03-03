<template>
  <div class="weather-now">
    <WeatherBar/>
    <div class="container">
      <WeatherCard v-for="card in cards" v-bind="card"/>
    </div>
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

@media screen and (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media screen and (max-width: 767px) {
  .container {
    flex-direction: column;
  }
}

.container {
  margin: auto;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: space-between;
}

/deep/ .weather-card {
  width: 28%;
}
</style>
