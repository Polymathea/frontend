<script setup lang="ts">
import { defineComponent } from "vue";

import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<script lang="ts">
export default defineComponent({});
</script>

<template>
  <Navbar />
  <slot></slot>
  <Footer />
</template>
