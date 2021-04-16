import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import VModal from 'vue-js-modal'
import CoolLightBox from 'vue-cool-lightbox'
import ToggleButton from 'vue-js-toggle-button'

import '~/plugins'
import '~/components'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(ToggleButton)
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
