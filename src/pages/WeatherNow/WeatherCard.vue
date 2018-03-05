<template>
  <ca-card :title="`${city}, ${country}`" :loading="loading">
    <div v-if="!!error" class="weather-card-error">
      <span>{{ error }}</span>
      <ca-button rounded @click="$store.dispatch('setCardWeather', { city, country })">
        Try again
      </ca-button>
    </div>
    <template v-else>
      <WeatherCardTemperature :temperature="temperature" />
      <WeatherCardFooter
        slot="footer"
        :humidity="humidity"
        :pressure="pressure" />
    </template>
  </ca-card>
</template>

<script>
import WeatherCardFooter from './WeatherCardFooter';
import WeatherCardTemperature from './WeatherCardTemperature';

export default {
  name: 'WeatherCard',
  components: {
    WeatherCardFooter,
    WeatherCardTemperature,
  },
  props: {
    loading: Boolean,
    city: String,
    country: String,
    temperature: Number,
    humidity: Number,
    pressure: Number,
    error: String,
  },
};
</script>

<style scoped>
.weather-card-error {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-card-error > span {
  color: var(--weather-red);
  margin-bottom: 10px;
}
</style>
