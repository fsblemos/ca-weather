<template>
  <div class="ca-card">
    <header class="ca-card-header">
      <p class="ca-card-title">{{ title }}</p>
    </header>
    <div class="ca-card-body">
      <CaLoader v-if="loading" />
      <slot v-else></slot>
    </div>
    <footer class="ca-card-footer" v-if="!loading && $slots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CaCard',
  props: {
    title: String,
    loading: {
      type: Boolean,
      default: true,
    },
  }
};
</script>

<style scoped>
.ca-card {
  display: flex;
  flex-flow: column;
  background-color: white;
  box-shadow: 2px 1px 5px 0px var(--box-shadow-color);
  border: 1px solid var(--grey-light);
  min-height: 250px;
  min-width: 225px;
  position: relative;
}

/* .ca-card /deep/ .ca-loader {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
} */

.ca-card-title {
  text-align: center;
  color: var(--grey-darker);
}

.ca-card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  flex-grow: 1;

}

.ca-card-footer {
  background-color: var(--grey-lighter);
  color: var(--grey-dark);
  height: 5rem;
  width: 100%;
}
</style>
