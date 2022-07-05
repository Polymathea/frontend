// vue bootstrap function
import { createApp, defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const Main = defineAsyncComponent(() => import("@/Main.vue"));

const app = createApp(Main);

app.component("Main", Main);

// fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // import only required icon
library.add(faChevronLeft, faChevronRight); // add imported icon(s) to library

const FontAwesomeIcon = () => import("@fortawesome/vue-fontawesome");

app.component("font-awesome-icon", FontAwesomeIcon); // register fontawesome component

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("@/page/Home.vue"),
		},
		{
			path: "/test",
			name: "Test",
			component: () => import("@/page/Test.vue"),
		},
	],
	scrollBehavior: function (to) {
		if (to.hash) {
			return { el: to.hash };
		}
	},
});

app.use(router);

app.mount("#app"); // bootstrap vue
