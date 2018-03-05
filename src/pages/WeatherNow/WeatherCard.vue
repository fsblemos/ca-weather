<template>
  <ca-card :title="`${city}, ${country}`" :loading="loading">
    <WeatherCardTemperature :temperature="temperature" />
    <WeatherCardFooter
      slot="footer"
      :humidity="humidity"
      :pressure="pressure"
      :updated-at="updatedAt" />
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
    updatedAt: Date,
  },
};
</script>
