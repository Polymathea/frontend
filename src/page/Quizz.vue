<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	inject: ["faker"],
});
</script>

<template>
	<section class="hero container is-fullheight-with-navbar mt-6 mb-6">
		<div class="box columns has-background-white-bis">
			<div class="column is-flex is-flex-direction-column">
				<figure class="image">
					<img :src="faker.image.technics()" alt="sujet" />
				</figure>
				<hr />
				<p>
					{{ faker.lorem.sentence() }}
				</p>
				<hr />
				<p>
					{{ faker.lorem.paragraphs(2) }}
				</p>
			</div>
			<div class="column">
				<form>
					<ul>
						<li><input type="checkbox" />Choix 1</li>
						<li><input type="checkbox" />Choix 2</li>
						<li><input type="checkbox" />Choix 3</li>
						<li><input type="checkbox" />Choix 4</li>
					</ul>
				</form>
				<hr />
				<div class="columns is-centered is-mobile">
					<div class="column is-narrow m-0">
						<button class="button is-warning">
							<i class="fa-solid fa-chevron-left" />&nbsp;Previous
						</button>
					</div>
					<div class="column is-narrow m-0">
						<button class="button is-primary">
							Next&nbsp;<i class="fa-solid fa-chevron-right" />
						</button>
					</div>
				</div>
				<hr />
				<progress
					class="progress is-success is-large"
					:value="faker.mersenne.rand(0, 100)"
					max="100"
				>
					X%
				</progress>
			</div>
		</div>
	</section>
</template>

<style lang="scss"></style>
