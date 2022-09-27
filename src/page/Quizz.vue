<script>
import { defineComponent, defineAsyncComponent } from "@vue/runtime-core";

export default defineComponent({
	inject: ["faker"],
	components: {
		Image: defineAsyncComponent(() =>
			import("@/components/ClickableImage.vue")
		),
		Checkbox: defineAsyncComponent(() =>
			import("@/components/Checkbox.vue")
		),
	},
});
</script>

<template>
	<section class="hero container is-fullheight-with-navbar mt-6 mb-6">
		<div class="box columns has-background-white-bis is-vcentered">
			<div class="column is-flex is-flex-direction-column">
				<Image
					:src="faker.image.technics()"
					:alt="faker.lorem.sentence()"
				/>
				<p class="block title is-4">
					{{ faker.lorem.sentence() }}
				</p>
				<p class="block">
					{{ faker.lorem.paragraphs(2) }}
				</p>
			</div>
			<div class="column is-5">
				<form class="block">
					<Checkbox
						:label="'Choix' + i"
						:name="'choix' + i"
						v-for="i in 4"
						:key="i"
					/>
				</form>
				<div class="block columns is-centered is-mobile">
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
				<progress
					class="block progress is-success is-large"
					:value="faker.mersenne.rand(0, 100)"
					max="100"
				>
					X%
				</progress>
			</div>
		</div>
	</section>
</template>
