import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import {router} from "./routeur";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
import {faUser, faTag} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faDiscord, faUser, faTag)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
