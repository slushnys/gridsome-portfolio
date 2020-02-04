// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/styles.css";
import {
  FontAwesomeIcon,
  FontAwesomeLayers
} from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faDev,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(faGithub, faTwitter, faDev, faInstagram, faCheckCircle);

// export default function(Vue, { router, head, isClient }) {
export default function(Vue, { head }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Karla|Rubik&display=swap"
  });
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);
}
