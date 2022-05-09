<template>
	<div class="container">
		<div class="sort">
			<div>
				<template v-if="sortable">
					<span>Sorted </span>
					<select @change="resort($event)">
						<option v-for="option in options" :key="option" :value="option">by {{ option }}</option>
					</select>
				</template>
			</div>
			<button @click="toggle" class="toggle">
				<span v-if="show">Hide</span>
				<span v-else>Show</span>
			</button>
		</div>
		<div class="list">
			<ListItem
				v-show="show"
				v-for="item in sorted"
				:key="item.id"
				:item="item"
				class="item"
			/>
		</div>
	</div>
</template>

<script>
import { sortByKey } from "../../utils";
import ListItem from "./ListItem";

export default {
	name: "List",
	components: { ListItem },
	props: {
		sortable: {
			type: Boolean,
			default: true
		},
		items: Array
	},
	data() {
    return {
			key: "id",
			show: true
    };
  },
	computed: {
		options() {
			return Object.keys(this.items[0] || {}).filter(item => ['string', 'number', 'boolean'].includes(typeof this.items[0][item]));
		},
		sorted() {
			if(!this.items.length) return []
			let result = [...this.items];
			return sortByKey(result, this.key);
		}
	},
	methods: {
		resort($event) {
			this.key = $event.target.value;
		},
		toggle() {
			this.show = !this.show;
		}
	}
}
</script>

<style lang="sass" scoped>
.container
	overflow: hidden
	.sort
		display: flex
		justify-content: space-between
		padding: 0.5rem
		box-shadow: 0 1px 4px 0 rgba(82,82,82,0.5)
	.list
		max-height: 50vh
		overflow-x: hidden
		overflow-y: auto
</style>