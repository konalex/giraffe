<template>
  <div class="products">
		<List :items="products" />
  </div>
</template>

<script>
import { get } from "../../utils";
import List from "../shared/List";

export default {
  name: "Products",
	components: { List },
	data() {
		return {
			products: []
		}
	},
  async mounted() {
    this.products = await get("products");
  }
};
</script>