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
  faCheckDouble, faCertificate, faClipboardCheck,
  faChartBar, faLeaf, faHouseUser, faMapPin, faPhone,
  faCalendar, faCalendarAlt, faComment, faFolder, faCheckCircle,faBell,faHistory,faUserPlus, faPhotoVideo, faPlusCircle, faTimesCircle, faClock, faPodcast
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
  faChartBar,  faLeaf, faHouseUser, faMapPin,
  faPhone, faCalendarAlt, faComment, faFolder, faCheckCircle, faBell, faHistory, faUserPlus, faPhotoVideo, faPlusCircle, faTimesCircle, faClock, faPodcast
)

Vue.component('fa', FontAwesomeIcon)
