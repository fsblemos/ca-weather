<template>
  <div class="weather-card">
    <header class="weather-card-header">
      <p class="weather-card-title">{{ city }}, {{ uf }}</p>
    </header>
    <div class="weather-card-body">
      <span class="weather-card-temperature" :class="[`weather-${weather}`]">
        {{ temperature }}º
      </span>
    </div>
    <footer class="weather-card-footer">
      {{ humidity }}
      {{ pressure }}
    </footer>
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    city: String,
    uf: String,
    temperature: Number,
    humidity: Number,
    pressure: Number,
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
};
</script>

<style scoped>
.weather-card {
  padding: 5px;
  /* width: 250px;
  height: 250px; */
  background-color: white;
  box-shadow: 1px 1px 4px -1px var(--box-shadow-color);
}

.weather-card-title {
  text-align: center;
}

.weather-card-body {
  text-align: center;
}

.weather-card-temperature {
  font-size: 74px;
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
