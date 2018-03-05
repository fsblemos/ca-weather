<template>
  <button
    class="ca-button"
    :class="{ 'is-rounded': rounded }"
    type="button"
    @click="$emit('click', $event)">

    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CaButton',
  props: {
    rounded: Boolean,
  },
};
</script>

<style scoped>
.ca-button {
  background-color: white;
  box-shadow: none;
  border: 2px solid grey;
  width: fit-content;
  padding-right: 1rem;
  padding-left: 1rem;
  height: 40px;
  cursor: pointer;
  outline: none;
  color: var(--grey-darker);
}

.ca-button:hover {
  background-color: var(--grey-light);
}

.ca-button.is-rounded {
  border-radius: 20px;
}

</style>
