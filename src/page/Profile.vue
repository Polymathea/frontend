<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
	inject: ["faker"],
});
</script>

<template>
	<div id="profile">
		<div class="box has-background-white-bis">
			<div>
				<strong>Nom: </strong> {{ faker.name.lastName() }}
			</div>
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
</template>

<style lang="scss">
#profile {
	padding: 5%;
}

#profile > * {
	width: 50%;
	margin: auto;
	padding: 2.5%;
}
</style>
