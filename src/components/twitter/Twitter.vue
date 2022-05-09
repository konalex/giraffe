<template>
  <div class="twitter">
    <div class="container">
      <Badge v-if="user.length" :info="user" />
      <Loading v-else />
    </div>
  </div>
</template>

<script>
import { get } from "../../utils";
const Badge = () => import("./Badge");
const Loading = () => import("./Loading");

export default {
  name: "Twitter",
  components: { Badge, Loading },
  props: {
    username: String,
  },
	data() {
		return {
			user: null
		}
	},
	watch: {
		username:{
			handler() {
				this.search()
			}
		}, immediate: true
	},
  methods: {
		async search() {
			this.user = await get('users', `username=${this.username}`);
		}
	}
};
</script>

<style lang="sass" scoped>
.twitter
  margin: 2rem 0
</style>
