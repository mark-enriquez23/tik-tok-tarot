import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import VModal from 'vue-js-modal'
import CoolLightBox from 'vue-cool-lightbox'
import ToggleButton from 'vue-js-toggle-button'
import VuePhoneNumberInput from 'vue-phone-number-input'
import moment from 'vue-moment'
import Clipboard from 'v-clipboard'
import ImageUploader from 'vue-image-upload-resize'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import 'vue-birth-datepicker/dist/vueBirthDatepicker.css'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

import '~/plugins'
import '~/components'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import './sass/app.scss'

Vue.use(ToggleButton)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Clipboard)
Vue.use(moment)
Vue.use(ImageUploader)
Vue.use(VueCompositionAPI)

Vue.component('vue-phone-number-input', VuePhoneNumberInput)

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
