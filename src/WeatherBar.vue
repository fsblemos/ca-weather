<template>
  <nav class="weather-bar">
    <img src="/src/assets/images/logo.svg" alt="Logo da aplicação">
  </nav>
</template>

<script>
export default {
  name: 'WeatherBar',
};
</script>

<style scoped>
.weather-bar {
  align-items: center;
  background-color: white;
  display: flex;
  height: var(--nav-height);
  justify-content: center;
  position: fixed;
  width: 100%;
}

img {
  height: 50%;
}
</style>
