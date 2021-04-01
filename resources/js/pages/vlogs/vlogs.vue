<template>
  <div class="" v-if="aboutUs">
    <div class="bg-light">
      <div class="container py-5">
        <div class="row h-100 align-items-center py-5">
          <div class="col-lg-6">
            <div class="section-title">
              <h2>Why Vlog?</h2>
              <p>{{ aboutUs.sub_title }}</p>
            </div>
          </div>
          <div class="col-lg-6 mt-lg-0 mt-4 d-lg-block"><img :src="imageUrl + aboutUs.banner_image" alt="" class="banner img-fluid"></div>
        </div>
      </div>
    </div>

    <!-- <section class="pb-5">
      <div class="container pb-4">
        <header class="text-center mb-5">
          <h2>Backpack traveler</h2>
          <p>A place for your Instagram pictures or gallery.</p>
        </header>
        <div class="row">
          <div class="col-lg-3 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-1.jpg'" alt="">
              <div class="instagram-item-overlay p-5">
                <h6>We travel not to escape life, but for life not to escape us.</h6>
              </div></a></div>
          <div class="col-lg-3 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-2.jpg'"  alt="">
              <div class="instagram-item-overlay p-5">
                <h6>We travel not to escape life, but for life not to escape us.</h6>
              </div></a></div>
          <div class="col-lg-3 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-3.jpg'"  alt="">
              <div class="instagram-item-overlay p-5">
                <h6>We travel not to escape life, but for life not to escape us.</h6>
              </div></a></div>
          <div class="col-lg-3 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-4.jpg'"  alt="">
              <div class="instagram-item-overlay p-5">
                <h6>We travel not to escape life, but for life not to escape us.</h6>
              </div></a></div>
          <div class="col-lg-3 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-6.jpg'"  alt="">
              <div class="instagram-item-overlay p-5">
                <h6>We travel not to escape life, but for life not to escape us.</h6>
              </div></a></div>
          <div class="col-lg-3 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-5.jpg'"  alt="">
              <div class="instagram-item-overlay p-5">
                <h6>We travel not to escape life, but for life not to escape us.</h6>
              </div></a></div>
          <div class="col-lg-3 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-1.jpg'"  alt="">
              <div class="instagram-item-overlay p-5">
                <h6>We travel not to escape life, but for life not to escape us.</h6>
              </div></a></div>
          <div class="col-lg-3 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-2.jpg'" alt="">
              <div class="instagram-item-overlay p-5">
                <h6>We travel not to escape life, but for life not to escape us.</h6>
              </div></a></div>
        </div>
      </div>
    </section> -->

    <div class="container py-5">
      <header class="text-center mb-5">
          <h2>Our Vlogs</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </header>
      <div class="card-columns">
        <div class="card" v-for="(vlog, index) in vlogs" :key="index" >
          <img class="card-img-top" :src="vlog.image" :alt="vlog.title">
            <div class="card-body">
              <h4 class="card-title text-danger mb-0">{{ vlog.title }}</h4>
              <p class="text-muted">By {{ vlog.author }}</p>
              <p class="meta mb-2">
              <span class="mr-2"><fa class="" :icon="['fas', 'calendar-alt']" /> {{ vlog.date_created }}</span>
              <span><fa class="" :icon="['fas', 'comment']" /> {{vlog.comments}} Comments</span>
              </p>
              <p class="card-text text-muted">
                {{ vlog.description }}
              </p>
              <a href="" class="text-danger">Continue Reading</a>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  components: { },
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },
  beforeCreate() {
    this.$store.dispatch('about-us/fetchAboutUsData')
  },

  data: () => ({
    title: window.config.appName,
    imageUrl: window.config.assetURL + 'images/',
    userImageeUrl: window.config.assetURL + 'images/testimonials/',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    vlogs: [
      {
        title: 'Lorem Impsum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-4.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: 5,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Duis aute irure dolor',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-2.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: 2,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Ut enim ad minim veniam',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        comments: 3,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Deserunt mollit anim id est laborum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-3.jpg',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        comments: 8,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Lorem Impsum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-4.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: 5,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Duis aute irure dolor',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-2.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: 2,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Ut enim ad minim veniam',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        comments: 3,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Deserunt mollit anim id est laborum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-3.jpg',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        comments: 8,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Lorem Impsum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-4.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: 5,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Duis aute irure dolor',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-2.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: 2,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Ut enim ad minim veniam',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        comments: 3,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Deserunt mollit anim id est laborum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-3.jpg',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        comments: 8,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Lorem Impsum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-4.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: 5,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Duis aute irure dolor',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-2.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: 2,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Ut enim ad minim veniam',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        comments: 3,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Deserunt mollit anim id est laborum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-3.jpg',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        comments: 8,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Lorem Impsum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-4.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: 5,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Duis aute irure dolor',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-2.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: 2,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Ut enim ad minim veniam',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        comments: 3,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Deserunt mollit anim id est laborum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-3.jpg',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        comments: 8,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Lorem Impsum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-4.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: 5,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Duis aute irure dolor',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-2.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: 2,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Ut enim ad minim veniam',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        comments: 3,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Deserunt mollit anim id est laborum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-3.jpg',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        comments: 8,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Lorem Impsum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-4.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: 5,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Duis aute irure dolor',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-2.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: 2,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Ut enim ad minim veniam',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        comments: 3,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Deserunt mollit anim id est laborum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-3.jpg',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        comments: 8,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Lorem Impsum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-4.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: 5,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Duis aute irure dolor',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-2.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: 2,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Ut enim ad minim veniam',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        comments: 3,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Deserunt mollit anim id est laborum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-3.jpg',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        comments: 8,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Lorem Impsum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-4.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: 5,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Duis aute irure dolor',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-2.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: 2,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Ut enim ad minim veniam',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        comments: 3,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Deserunt mollit anim id est laborum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-3.jpg',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        comments: 8,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Lorem Impsum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-4.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: 5,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Duis aute irure dolor',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-2.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: 2,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Ut enim ad minim veniam',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        comments: 3,
        date_created: moment().format('MMMM DD, YYYY')
      },
      {
        title: 'Deserunt mollit anim id est laborum',
        author: 'John Doe',
        image: window.config.assetURL + 'images/listing-tnumbnail-3.jpg',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        comments: 8,
        date_created: moment().format('MMMMMMMM DD, YYYY')
      }
    ]
  }),

  computed: mapGetters({
    authenticated: 'auth/check',
    aboutUs: 'about-us/aboutUs'
  })
}
</script>

<style lang="scss" scoped>
  .banner {
    box-shadow: 0 8px 6px -6px black;
  }
  .img {
    display: block;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-size: contain;
  }
.instagram-item-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 0.3s;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
}

.instagram-item {
  position: relative;
}

.instagram-item:hover .instagram-item-overlay {
  opacity: 1;
}


.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: none;
  .card-text {
    font-size: .8rem;
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
  a {
    color: initial;
    &:hover {
      text-decoration: initial;
    }
  }
  .text-muted i {
    margin: 0 10px;
  }
}
</style>

<style lang="scss">
</style>
