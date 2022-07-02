<script setup lang="ts">
import { defineComponent } from "vue";

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<script lang="ts">
export default defineComponent({});
</script>

<template>
	<Navbar />
	<router-view />
	<Footer />
</template>

<style lang="scss" src="@/style/base.scss"></style>
