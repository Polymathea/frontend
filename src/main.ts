// vue bootstrap function
import { createApp } from "vue";

import HomePage from "@/HomePage.vue";
const app = createApp(HomePage);

// fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";

//import { faHeart } from "@fortawesome/free-solid-svg-icons"; // import only required icon
//library.add(faHeart); // add imported icon(s) to library
library.add();

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

app.component("font-awesome-icon", FontAwesomeIcon); // register fontawesome component

app.mount("#app"); // bootstrap vue
