<template>
  <main id="app">
    <CaNavbar src="/src/assets/images/logo.svg" alt="Logo da aplicação" />
    <section class="section">
      <WeatherNow/>
    </section>
  </main>
</template>

<script>
import WeatherNow from './pages/WeatherNow';

export default {
  name: 'App',
  components: {
    WeatherNow,
  },
};
</script>
