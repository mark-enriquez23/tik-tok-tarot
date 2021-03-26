import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

import {
  faUser, faLock, faSignOutAlt, faCog, faStar,
  faStarAndCrescent, faStarHalfAlt, faStarHalf,
  faCaretRight, faChevronRight, faQuoteLeft,
  faQuoteRight, faReceipt, faImages, faVideo,
  faBook, faUserTie, faHandsHelping, faEnvelope,
  faCheckDouble, faCertificate, faClipboardCheck, faChartBar, faLeaf, faHouseUser,
} from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser, faLock, faSignOutAlt, faCog, faStar,
  faStarAndCrescent, faStarHalfAlt, faStarHalf,
  faCaretRight, faChevronRight, faQuoteLeft,
  faQuoteRight, faReceipt, faImages, faVideo,
  faBook, faUserTie, faHandsHelping, faEnvelope,
  faCheckDouble, faCertificate, faClipboardCheck,
  faFacebook, faTwitter, faLinkedin, faInstagram,
  faChartBar,  faLeaf, faHouseUser
)

Vue.component('fa', FontAwesomeIcon)
