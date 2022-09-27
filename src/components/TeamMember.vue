<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
	props: {
		name: String,
		role: String,
		desc: String,
		pp: String,
	},
});
</script>

<template>
	<div class="card is-flex-grow-1">
		<!--<div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>-->
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<!-- à changer: pp -->
					<figure class="image is-48x48">
						<img :src="pp" alt="Placeholder image" />
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-4">{{ name }}</p>
					<p class="subtitle is-6">{{ role }}</p>
				</div>
			</div>

			<div class="content" v-html="desc"></div>
		</div>
	</div>
</template>

<style lang="scss"></style>
