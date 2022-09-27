<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({});
</script>

<template>
	<router-link to="/">
		<img class="site-logo" src="/img/logo.png" alt="Polymathea logo" />
	</router-link>
</template>

<style lang="scss">
@import "@/style/settings.scss";
.site-logo {
	transition: transform 0.2s $easing;
}

.site-logo:hover {
	transform: scale(1.3);
}
</style>
