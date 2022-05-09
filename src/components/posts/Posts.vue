<template>
  <div class="posts">
		<h2>Posts</h2>
		<List :items="posts" />
  </div>
</template>

<script>
import { get } from "../../utils";
import List from "../shared/List";

export default {
  name: "Posts",
	components: { List },
	data() {
		return {
			posts: []
		}
	},
  async mounted() {
    this.posts = await get("posts");
  }
};
</script>