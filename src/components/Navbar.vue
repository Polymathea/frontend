<script lang="ts" setup>
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";
</script>

<script lang="ts">
export default defineComponent({
	data: () => ({
		displayMenu: false,
		displayLoginModal: false,
	}),
	methods: {
		setDisplayLoginModal(b: boolean) {
			this.displayLoginModal = b;
		},
	},
	components: {
		Logo: defineAsyncComponent(() => import("./SiteLogo.vue")),
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
					<div class="buttons">
						<a
							class="button is-primary"
							@click="setDisplayLoginModal(true)"
						>
							<strong>Log in / Sign up</strong>
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<div class="modal" :class="{ 'is-active': displayLoginModal }">
		<div
			class="modal-background"
			@click="setDisplayLoginModal(false)"
		></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<div class="modal-card-title">Connectez-Vous</div>
				<div class="delete" @click="setDisplayLoginModal(false)"></div>
			</header>
			<section class="modal-card-body">
				<form
					class="is-flex is-flex-direction-column is-justify-content-space-between"
					id="loginForm"
				>
					<div id="email">
						<label class="label" for="email">Courriel</label>
						<input
							class="input"
							name="email"
							type="email"
							placeholder="nobody@example.org"
						/>
					</div>

					<div id="password">
						<label class="label" for="password">Mot de passe</label>
						<input
							class="input"
							name="password"
							type="password"
							placeholder="1234"
						/>
					</div>
				</form>
			</section>
			<footer class="modal-card-foot">
				<button class="button is-primary">Save changes</button>
				<button class="button">Cancel</button>
			</footer>
		</div>
		<div
			class="modal-close is-large"
			aria-label="close"
			@click="setDisplayLoginModal(false)"
		></div>
	</div>
</template>
