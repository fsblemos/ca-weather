<template>
  <div class="weather-card-footer">
    <div class="weather-card-data">
      <div class="weather-card-data-item">
        <span>HUMIDITY</span>
        <span>
          {{ humidity }}<small>%</small>
        </span>
      </div>
      <div class="weather-card-data-item">
        <span>PRESSURE</span>
        <span>
          {{ pressure }}<small>hPa</small>
        </span>
      </div>
    </div>
    <span>Updated at {{ updatedAt | date }}</span>
  </div>
</template>

<script>
export default {
  name: 'WeatherCardFooter',
  props: {
    humidity: Number,
    pressure: Number,
    updatedAt: Date,
  },
};
</script>

<style scoped>
.weather-card-footer {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
}

.weather-card-data {
  display: flex;
  justify-content: space-around;
}

.weather-card-data-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-card-data-item > span:first-child {
  font-size: 10px;
  margin-bottom: 5px;
}

.weather-card-data-item > span:last-child {
  color: var(--grey-darker);
}

.weather-card-footer > span:last-child {
  font-size: 10px;
  align-self: center;
}
</style>
