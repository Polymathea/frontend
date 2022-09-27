<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
	props: {
		label: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},
});
</script>

<template>
	<div class="checkbox-label">
		<input type="checkbox" :name="name" :id="name" /><label :for="name">{{ label }}</label
	>
	</div>
</template>

<style lang="scss">
@import "@/style/settings.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

.checkbox-label {
	border: $grey-dark solid 1px;
	background-color: $grey-light;
	position: relative;

	input {
		display: none;
	}

	label {
		width: 100%;
		padding: 1em;
		display: block;
		overflow-x: hidden;
		cursor: pointer;
		position: relative;
		z-index: 2;

		&:before {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 0;
			height: 100%;
			background-color: $info;
			content: "";
			opacity: 0;
			transition: all 100ms ease-in;
			z-index: -1;
		}

		&:after {
			position: absolute;
			top: 50%;
			right: 10%;
			transform: translate(-50%, -50%);
			font-family: "Font Awesome 6 Free";
			font-weight: 900;
			color: $white;
			content: "";
			text-align: center;
			background-color: $white;
			border-radius: 100%;
			border: $grey solid 0.2em;
			z-index: 1;
			width: 2em;
			height: 2em;
			transition: all 100ms ease-in;
		}
	}

	input:checked ~ label {
		color: $white;

		&:before {
			width: calc(100% + 2em);
			opacity: 1;
		}

		&:after {
			background-color: $success;
			border-color: $success;
		}
	}
}
</style>
