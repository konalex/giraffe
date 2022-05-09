<template>
  <div class="badge">
    <span>
			{{ info }}
		</span>
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    info: Object,
  },
};
</script>

<style lang="sass" scoped>
.badge
  padding: 0.5rem
  border-radius: 0.25rem
  box-shadow: 4px 0 10px 0 rgba(82,82,82,0.5)
</style>