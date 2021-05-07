import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import VModal from 'vue-js-modal'
import CoolLightBox from 'vue-cool-lightbox'
import ToggleButton from 'vue-js-toggle-button'
import VuePhoneNumberInput from 'vue-phone-number-input';
import birthDatepicker from 'vue-birth-datepicker';
import Clipboard from 'v-clipboard';

import 'vue-birth-datepicker/dist/vueBirthDatepicker.css';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

import '~/plugins'
import '~/components'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(ToggleButton)
Vue.use(Clipboard)
Vue.component('vue-phone-number-input', VuePhoneNumberInput);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  VModal,
  CoolLightBox,
  ...App
})
