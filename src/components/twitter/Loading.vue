<template>
  <div class="loading">
    <div class="active"></div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="sass" scoped>
.loading
  .active
    height: 1rem
    width: 1rem
    border: 2px solid #686de0
    border-bottom: none
    border-left: none
    border-radius: 50%
    animation: rotate 500ms ease-in infinite

@keyframes rotate
  0%
    transform: rotate(0)
  100%
    transform: rotate(360deg)
</style>