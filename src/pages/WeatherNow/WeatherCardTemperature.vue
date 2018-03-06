<template>
  <span class="weather-card-temperature" :class="[`weather-${weather}`, { 'is-negative': temperature < 0}]">
    {{ Math.round(Math.abs(temperature)) }}
  </span>
</template>

<script>
export default {
  name: 'WeatherCardTemperature',
  props: {
    temperature: Number,
  },
  computed: {
    isCold() {
      return this.temperature <= 5;
    },
    isNormal() {
      return this.temperature >= 6 && this.temperature <= 25;
    },
    isWarm() {
      return this.temperature >= 26;
    },
    weather() {
      return this.isCold && 'cold' ||
        this.isNormal && 'normal' ||
        this.isWarm && 'warm';
    }
  },
}
</script>

<style scoped>
.weather-card-temperature {
  font-size: 74px;
  position: relative;
}

.weather-card-temperature::after {
  content: 'º';
  font-size: 40px;
  top: 10px;
  position: absolute;
  right: -15px;
}

.weather-card-temperature.is-negative::before {
  content: '-';
  left: -1.5rem;
  position: absolute;
}

.weather-cold {
  color: var(--weather-blue);
}

.weather-normal {
  color: var(--weather-orange);
}

.weather-warm {
  color: var(--weather-red);
}
</style>
