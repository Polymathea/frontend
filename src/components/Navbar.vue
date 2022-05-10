<script lang="ts" setup>
import { defineComponent } from "vue";

import Logo from "./SiteLogo.vue";
</script>

<script lang="ts">
export default defineComponent({
  data: () => ({
    displayMenu: false,
  }),
});
</script>

<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-item">
        <Logo />
      </div>

      <a
        class="navbar-burger"
        :class="{ 'is-active': displayMenu }"
        @click="displayMenu = !displayMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': displayMenu }">
      <div class="navbar-start">
        <a class="navbar-item">Home</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">About</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">Project</a>
            <a class="navbar-item">Team</a>
            <a class="navbar-item">Contact</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
