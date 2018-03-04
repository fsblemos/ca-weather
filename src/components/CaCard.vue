<template>
  <div class="ca-card">
    <header class="ca-card-header">
      <p class="ca-card-title">{{ title }}</p>
    </header>
    <div class="ca-card-body">
      <slot></slot>
    </div>
    <footer class="ca-card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CaCard',
  props: {
    title: String,
  }
};
</script>

<style scoped>
.ca-card {
  background-color: white;
  box-shadow: 2px 1px 5px 0px var(--box-shadow-color);
  border: 1px solid var(--grey-light);
  /* box-shadow: 1px 1px 4px -1px var(--box-shadow-color); */
  min-height: 250px;
  min-width: 225px;
  position: relative;
}

.ca-card-title {
  text-align: center;
  color: var(--grey-darker);
}

.ca-card-body {
  text-align: center;
}

.ca-card-footer {
  background-color: var(--grey-lighter);
  bottom: 0;
  color: var(--grey-dark);
  height: 5rem;
  position: absolute;
  width: 100%;
}
</style>
