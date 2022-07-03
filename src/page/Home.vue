<script setup lang="ts">
import { defineComponent } from "vue";

import { faker } from "@faker-js/faker";

import TeamMember from "@/components/TeamMember.vue";

faker.setLocale("fr");

const team = Array.from(Array(5)).map(() => {
	return {
		name: faker.name.firstName(),
		role: faker.name.jobTitle(),
		desc: faker.lorem.paragraph(),
		pp: faker.image.people(96, 96, true),
	};
});
</script>

<script lang="ts">
export default defineComponent({});
</script>

<template>
	<!-- Hero -->
	<section class="hero is-fullheight-with-navbar is-primary">
		<div class="hero-body columns">
			<div
				class="column is-flex is-flex-direction-column is-justify-content-center"
			>
				<p class="title">Polymathée</p>
				<p class="subtitle">Solution d'apprentissage</p>
			</div>
			<div class="column is-two-fifths">
				<figure class="image">
					<img src="/img/logo.png" />
				</figure>
			</div>
		</div>
	</section>

	<!-- Présentation du projet -->
	<section id="prez" class="section">
		<div class="title">Qui sommes-nous?</div>
		<div class="box">
			<div
				class="block"
				v-for="i in 2"
				:key="i"
				v-text="faker.lorem.paragraph()"
			></div>
		</div>
	</section>

	<!-- Pricing et contact -->
	<section id="contact" class="section">
		<div class="title">Formule et Contact</div>
		<div class="box columns is-8">
			<div class="column is-one-fifth is-flex is-flex-direction-column">
				<div class="title">Prix</div>
				<div
					class="block"
					v-html="faker.commerce.price(0, 100, 2, '€')"
				></div>
			</div>
			<div class="column is-flex is-flex-direction-column">
				<div
					class="container"
					v-for="i in 3"
					:key="i"
					v-text="faker.lorem.paragraph()"
				></div>
			</div>
			<div class="column is-two-fifths is-flex is-flex-direction-column">
				<div class="box is-flex is-flex-direction-column">
					<div class="title">Téléphone:</div>
					<div class="block" v-text="faker.phone.number()"></div>
					<div class="title">Courriel:</div>
					<div class="block" v-text="faker.internet.email()"></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Présentation de l'équipe -->
	<!-- TODO: faire un carrousel -->
	<section id="team" class="section">
		<div class="title">L'équipe</div>
		<div class="columns">
			<div
				class="column is-flex is-two-fifths"
				v-for="(member, idx) in team"
				:key="idx"
			>
				<TeamMember
					:name="member.name"
					:role="member.role"
					:desc="member.desc"
					:pp="member.pp"
				/>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
#team {
	overflow-x: scroll;
}
</style>
