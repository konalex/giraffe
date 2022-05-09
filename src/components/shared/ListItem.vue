<template>
	<div class="item">
		<span
			v-for="(key, index) in Object.keys(item)"
			:key="index"
			:data-label="key"
			class="value"
		>
			{{ item[key] }}
		</span>
		<br>
	</div>
</template>

<script>
export default {
	name: "Item",
	props: {
		item: Object
	}
}
</script>

<style lang="sass" scoped>
.item
	padding: 0.75rem 0.5rem 0 0.5rem
	border-bottom: 1px solid #2c3e50
	.value 
		display: inline-block
		position: relative
		border: 1px solid #bdc3c7
		border-radius: 0.2rem
		margin: 0 1rem 0.75rem 0
		padding: 0.25rem 0.5rem

		&::after
			content: attr(data-label)
			position: absolute
			background-color: #fff
			top: 0
			left: 0
			transform: translate(-25%, -50%)
			font-size: 0.75rem
</style>