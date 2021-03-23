import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

import {
  faUser, faLock, faSignOutAlt, faCog, faStar, faStarAndCrescent, faStarHalfAlt, faStarHalf, faCaretRight, faChevronRight, faQuoteLeft, faQuoteRight, faReceipt, faImages, faVideo, faBook, faUserTie, faHandsHelping
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser, faLock, faSignOutAlt, faCog, faStar,
  faStarAndCrescent, faStarHalfAlt, faStarHalf,
  faUser, faCaretRight, faChevronRight, faQuoteLeft,
  faQuoteRight, faReceipt, faImages, faVideo,
  faBook, faUserTie, faHandsHelping
)

Vue.component('fa', FontAwesomeIcon)
