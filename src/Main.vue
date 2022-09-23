<script lang="ts">
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";

// permet à vite de découper les sources
// et de les importer dynamiquement pendant l'exécution du code chez le client
// permet au client de ne télécharge le nécessaire qu'au moment où il en aura besoin
export default defineComponent({
	components: {
		// enregistrer les composants asychrone
		Navbar: defineAsyncComponent(() => import("@/components/Navbar.vue")),
		Footer: defineAsyncComponent(() => import("@/components/Footer.vue")),
	},
});
</script>

<template>
	<Suspense> <Navbar /></Suspense>
	<Suspense><router-view /></Suspense>
	<Suspense><Footer /></Suspense>
</template>

<style lang="scss" src="@/style/base.scss"></style>
