<template>
  <div class="ca-card">
    <header class="ca-card-header">
      <p class="ca-card-title">{{ title }}</p>
    </header>
    <CaLoader v-if="loading" />
    <template v-else>
      <div class="ca-card-body">
        <slot></slot>
      </div>
      <footer class="ca-card-footer">
        <slot name="footer"></slot>
      </footer>
    </template>
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
  background-color: white;
  box-shadow: 2px 1px 5px 0px var(--box-shadow-color);
  border: 1px solid var(--grey-light);
  min-height: 250px;
  min-width: 225px;
  position: relative;
}

.ca-card /deep/ .ca-loader {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
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
