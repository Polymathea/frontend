<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	data: () => ({
		displayLoginModal: false,
	}),
	methods: {
		setDisplayLoginModal(b) {
			this.displayLoginModal = b;
		},
	},
});
</script>

<template>
	<div class="buttons">
		<a class="button is-primary" @click="setDisplayLoginModal(true)">
			<strong>Log in / Sign up</strong>
		</a>
	</div>

	<Teleport to="body">
		<div class="modal" :class="{ 'is-active': displayLoginModal }">
			<div
				class="modal-background"
				@click="setDisplayLoginModal(false)"
			></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<div class="modal-card-title">Connectez-Vous</div>
					<div
						class="delete"
						@click="setDisplayLoginModal(false)"
					></div>
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
							<label class="label" for="password"
								>Mot de passe</label
							>
							<input
								class="input"
								name="password"
								type="password"
								placeholder="1234"
							/>
						</div>
						<div
							class="is-flex flex-direction-row is-justify-content-flex-end"
						>
							<a class="tag is-warning is-light"
								>Mot de passe oublié?</a
							>
						</div>
					</form>
				</section>
				<footer class="modal-card-foot">
					<router-link
						to="/profile"
						@click="setDisplayLoginModal(false)"
						class="button is-primary"
						>Save changes</router-link
					>
					<button class="button">Cancel</button>
				</footer>
			</div>
		</div>
	</Teleport>
</template>

<style lang="scss" scoped>
.buttons {
	margin: auto;
}
.buttons .button {
	margin: auto;
}
</style>
