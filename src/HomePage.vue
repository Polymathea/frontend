<script setup lang="ts">
import { defineComponent } from "vue";

import Template from "@/components/PageTemplate.vue";
</script>

<script lang="ts">
export default defineComponent({});
</script>

<template>
  <Template>
    <!-- Hero -->
    <section class="hero is-fullheight-with-navbar is-primary">
      <div class="hero-body">
        <div>
          <p class="title">Polymathée</p>
          <p class="subtitle">Solution d'apprentissage</p>
        </div>
      </div>
    </section>
  </Template>
</template>

<style lang="scss">
@import "@/style/base.scss";
</style>
