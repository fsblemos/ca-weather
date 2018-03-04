<template>
  <nav class="ca-navbar">
    <img :src="src" :alt="alt">
  </nav>
</template>

<script>
export default {
  name: 'CaNavbar',
  props: {
    src: String,
    alt: String,
  },
};
</script>

<style scoped>
.ca-navbar {
  align-items: center;
  background-color: white;
  box-shadow: 2px 1px 7px 0px var(--box-shadow-color);
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
