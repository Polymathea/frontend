<script setup lang="ts">
import { defineComponent } from "vue";

import TeamMember from "@/components/TeamMember.vue";
const team = [
	{
		name: "Nom",
		role: "Role",
		desc: "Je me présente, je m'appele Henri. J'voudrais bien réussir ma vie, être aimé...",
	},
	{
		name: "Nom2",
		role: "AutreRole",
		desc: "Moi je préfère être seul",
	},
	{
		name: "Nom",
		role: "Role",
		desc: "Je me présente, je m'appele Henri. J'voudrais bien réussir ma vie, être aimé...",
	},
	{
		name: "Nom2",
		role: "AutreRole",
		desc: "Moi je préfère être seul",
	},
	{
		name: "Nom",
		role: "Role",
		desc: "Je me présente, je m'appele Henri. J'voudrais bien réussir ma vie, être aimé...",
	},
	{
		name: "Nom2",
		role: "AutreRole",
		desc: "Moi je préfère être seul",
	},
];
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
	<!--<section id="prez" class="section">
      </section>-->

	<!-- Présentation de l'équipe -->
	<!-- TODO: faire un carrousel -->
	<section id="team" class="section columns">
		<div
			class="column is-flex is-two-fifths"
			v-for="(member, idx) in team"
			:key="idx"
		>
			<TeamMember
				:name="member.name"
				:role="member.role"
				:desc="member.desc"
			/>
		</div>
	</section>
</template>

<style lang="scss">
#team {
	overflow-x: scroll;
}
</style>
