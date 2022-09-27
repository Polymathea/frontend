// vue bootstrap function
import { createApp, defineAsyncComponent } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

const Main = defineAsyncComponent(() => import("@/Main.vue"));
const app = createApp(Main);

// router
const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("@/page/Home.vue"),
		},
		{
			path: "/profile",
			name: "Profile",
			component: () => import("@/page/Profile.vue"),
		},
		{
			path: "/quizz",
			name: "Quizz",
			component: () => import("@/page/Quizz.vue"),
		},
	],
	scrollBehavior(to) {
		if (to.hash) {
			return { el: to.hash };
		}
	},
});
app.use(router);

// faker
import { faker } from "@faker-js/faker";
faker.setLocale("fr");
app.provide("faker", faker);

// mount
app.mount("#app"); // bootstrap vue
