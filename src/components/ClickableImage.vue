<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			displayModal: false,
		};
	},
	methods: {
		setDisplayModal(b) {
			this.displayModal = b;
		},
	},
});
</script>

<template>
	<figure class="block image" @click="setDisplayModal(true)">
		<img :src="src" :alt="alt" />
	</figure>
	<Teleport to="body">
		<div
			class="modal"
			:class="{ 'is-active': displayModal }"
			@click="setDisplayModal(false)"
		>
			<div class="modal-background"></div>
			<div class="modal-content">
				<img :src="src" :alt="alt" />
			</div>
		</div>
	</Teleport>
</template>

<style lang="scss" scoped>
.modal-content {
	min-margin-left: 3em;
	min-margin-right: 3em;
	width: auto;
}
</style>
