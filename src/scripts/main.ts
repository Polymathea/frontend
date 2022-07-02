// vue bootstrap function
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import Main from "@/Main.vue";

import HomePage from "@/page/Home.vue";
import TestPage from "@/page/Test.vue";

const app = createApp(Main);

// fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // import only required icon
library.add(faChevronLeft, faChevronRight); // add imported icon(s) to library

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

app.component("font-awesome-icon", FontAwesomeIcon); // register fontawesome component

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "Home", component: HomePage },
		{ path: "/test", name: "Test", component: TestPage },
	],
	scrollBehavior: function (to) {
		if (to.hash) {
			return { el: to.hash };
		}
	},
});

app.use(router);

app.mount("#app"); // bootstrap vue
