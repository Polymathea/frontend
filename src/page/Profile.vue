<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
	inject: ["faker"],
});
</script>

<template>
	<section class="section is-fullheight-with-navbar">
		<div class="container">
			<div id="profile" class="box has-background-white-bis">
				<div><strong>Nom: </strong> {{ faker.name.lastName() }}</div>
				<div>
					<strong>Prénom: </strong> {{ faker.name.firstName() }}
				</div>
				<div>
					<strong>Téléphone: </strong> {{ faker.phone.number() }}
				</div>
				<div>
					<strong>Courriel: </strong> {{ faker.internet.email() }}
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
#profile {
	margin: 5%;
	padding: 2.5%;
}
</style>
