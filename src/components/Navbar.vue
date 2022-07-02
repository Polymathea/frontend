<script lang="ts" setup>
import { defineComponent } from "vue";

import Logo from "./SiteLogo.vue";
</script>

<script lang="ts">
export default defineComponent({
	data: () => ({
		displayMenu: false,
	}),
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

				<router-link to="/test" class="navbar-item">Test</router-link>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<a class="button is-primary">
							<strong>Sign up</strong>
						</a>
						<a class="button is-light"> Log in </a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
