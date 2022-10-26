import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Vue.use(VueTelInput)
library.add(fas);
Vue.component('fa-icon', FontAwesomeIcon);
// vue-tel-input

