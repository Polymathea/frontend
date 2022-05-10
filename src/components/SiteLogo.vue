<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
  <a href="/">
    <img class="site-logo" src="https://bulma.io/images/bulma-logo.png" />
  </a>
</template>

<style lang="scss">
@import "@/style/settings.scss";
.site-logo {
  transition: transform 0.2s $easing;
}

.site-logo:hover {
  transform: scale(1.2);
}
</style>
