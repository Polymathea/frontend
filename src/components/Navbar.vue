<script lang="ts">
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";
export default defineComponent({
	data: () => ({
		displayMenu: false,
	}),
	components: {
		Logo: defineAsyncComponent(() => import("./SiteLogo.vue")),
		Account: defineAsyncComponent(() => import("./Account.vue")),
	},
});
</script>

<template>
	<nav class="navbar">
		<div class="navbar-brand">
			<div class="navbar-item">
				<Logo />
			</div>

			<a
				class="navbar-burger"
				:class="{ 'is-active': displayMenu }"
				@click="displayMenu = !displayMenu"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div
			class="navbar-menu"
			:class="{ 'is-active': displayMenu }"
			@click="displayMenu = !displayMenu"
		>
			<div class="navbar-start">
				<router-link to="/" class="navbar-item">Home</router-link>

				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">About</a>

					<div class="navbar-dropdown">
						<router-link to="/#prez" class="navbar-item"
							>Project</router-link
						>
						<router-link to="/#team" class="navbar-item"
							>Team</router-link
						>
						<router-link to="/#contact" class="navbar-item"
							>Contact</router-link
						>
					</div>
				</div>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<Account />
				</div>
			</div>
		</div>
	</nav>
</template>
