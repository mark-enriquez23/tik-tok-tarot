<template>
  <b-container fluid class="px-0">
    <b-row no-gutters>
      <b-col>
        <b-jumbotron lead="" header-level="4" text-variant="light" fluid class="d-flex flex-column justify-content-center align-items-center text-center">
          <template #header>
            <strong>
              Welcome to TikTok Tarot
            </strong>
          </template>
          <!-- <p>For more infoh f  rmation visit website</p> -->

          <template #lead>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
            featured content or information.
          </template>

          <p>
            24/7 live psychics at your services.
          </p>
          <router-link :to="{ name: 'register' }">
            <a class="btn btn-danger btn-lg">Register</a>
          </router-link>
        </b-jumbotron>
      </b-col>
    </b-row>

    <b-container>
      <b-row class="d-flex flex-row justify-content-center align-items-center my-5">
        <b-col class="d-flex flex-column justify-content-center align-items-center">
          <router-link :to="{ name: 'readers' }" class="nav-link d-flex flex-column justify-content-center align-items-center" active-class="active">
            <span class="h5 font-weight-bold text-muted"> VIEWER </span>
            <b-avatar variant="danger" :text="viewerCount" size="6rem" />
          </router-link>
        </b-col>
        <b-col class="d-flex flex-column justify-content-center align-items-center">
          <router-link :to="{ name: 'vlogs.list' }" class="nav-link d-flex flex-column justify-content-center align-items-center" active-class="active">
            <span class="h5 font-weight-bold text-muted"> VLOGS </span>
            <b-avatar variant="danger" :text="vlogCount" size="6rem" />
          </router-link>
        </b-col>
        <b-col class="d-flex flex-column justify-content-center align-items-center">
          <router-link :to="{ name: 'sessions' }" class="nav-link d-flex flex-column justify-content-center align-items-center" active-class="active">
            <span class="h5 font-weight-bold text-muted"> SESSIONS </span>
            <b-avatar variant="danger" :text="sessionCount" size="6rem" />
          </router-link>
        </b-col>
      </b-row>
    </b-container>

    <!-- ======= Testimonials Section ======= -->
    <b-container class="section-bg" fluid>
      <b-row class="rows-min-height py-5">
        <b-col align-self="start" sm="12" md="6" offset-lg="1" lg="5" class="d-flex flex-column p-5 mb-2">
          <h2 class="text-uppercase font-weight-bold">
            Testimonials
          </h2>
          <div class="bg-danger" style="height:10px; width:60px;" />
          <p class="my-2 mr-5">
            Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </b-col>
        <b-col sm="12" md="6" lg="4">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
          >
            <b-carousel-slide v-for="testimonial in testimonials" :key="testimonial.id">
              <template #img>
                <b-card class="py-5 d-flex flex-column justify-content-center align-items-center text-center">
                  <b-card-title>
                    <star-rating
                      :rating="testimonial.rate"
                      :read-only="true"
                      :show-rating="false"
                      :rounded-corners="true"
                      :star-size="50"
                    />
                    <h5 class="font-weight-bold text-uppercase blockquote mt-3">
                      "{{ testimonial.body }}"
                    </h5>
                  </b-card-title>
                  <b-card-sub-title class="pb-2">
                    <span class="blockquote-footer">
                      <b-avatar :src="`/images/${testimonial.user.user_details.profile_photo}`" />
                      {{ testimonial.user.firstName }} {{ testimonial.user.lastName }}
                    </span>
                  </b-card-sub-title>
                </b-card>
              </template>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
    <!-- End Testimonials Section -->

    <!-- ======= Live Session Section ======= -->
    <b-container v-if="!sessions">
      <b-row class="py-5">
        <b-col class="d-flex flex-column">
          <h2 class="text-uppercase font-weight-bold">
            Active Live Sessions
          </h2>
          <div class="bg-danger" style="height:10px; width:60px;" />
          <p class="my-2 mr-5">
            Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </b-col>
        <b-col>
          <b-row class="d-flex flex-row-reverse">
            <b-col v-for="session in sessions" :key="session.id">
              <router-link :to="`/reader/go-live/${session.room_name}`" class="nav-link" active-class="active">
                <b-img :src="`/images/${session.user.user_details.profile_photo}`" fluid />
                <p class="text-muted">
                  <b-icon icon="play-fill" variant="success" />
                  {{ session.room_name }}
                </p>
              </router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <!-- End Live Session Section -->

    <!-- ======= Cta Section ======= -->
    <section id="cta" class="cta">
      <div class="container">
        <div class="text-center" data-aos="zoom-in">
          <h3>Join us Now!</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div class="row col-md-6 mx-auto">
            <div class="col-md-6 ">
              <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
                <button class="w-100 btn btn-secondary">
                  Login
                </button>
              </router-link>
            </div>
            <div class="col-md-6  mt-md-0 mt-4">
              <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
                <button class="w-100 btn btn-danger">
                  Register
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Cta Section -->

    <section v-if="!vlogs.data" class="container my-5">
      <div class="">
        <div class="section-title">
          <h2>Featured Vlogs</h2>
          <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
      </div>

      <div class="mb-2">
        <div class="row">
          <div v-for="vlog in vlogs.data" :key="vlog.id" class="col-md-4 mb-4">
            <div class="card ">
              <a href="#">
                <img class="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ vlog.title }}
                  </h5>
                  <p class="card-text text-muted" v-html="vlog.description" />
                  <p class="client-review-stars">
                    <fa v-for="index in vlog.rate" :key="index" :icon="['fas', 'star']" />
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    <!-- <div class="mt-5 mx-auto col-md-3 mx-auto ">
      <div class="btn btn-danger w-100">
        <div class=" row no-gutters mx-auto justify-content-center">
          <div class="my-auto mr-2">Show More</div> <fa :icon="['fas', 'chevron-right']" class="my-auto" />
        </div>
      </div>
    </div> -->
    </section>

    <!-- Featured Reader -->
    <section id="reader" class="testimonials section-bg">
      <div v-if="readers !== null" class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Featured Reader</h2>
              <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>
          <div class="col-lg-12">
            <div id="carouselControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner testimonials-carousel">
                <div class="testimonial-item carousel-item active">
                  <img :src="testimonialImage1" class="slider-img" alt="">
                  <h3>{{ readers.data.data[0].user.firstName }} {{ readers.data.data[0].user.lastName }}</h3>
                  <h4 class="reader-title">
                    Client
                  </h4>
                </div>
                <div class="testimonial-item carousel-item">
                  <img :src="testimonialImage2" class="slider-img" alt="">
                  <h3>{{ readers.data.data[1].user.firstName }} {{ readers.data.data[1].user.lastName }}</h3>
                  <h4 class="reader-title">
                    Client
                  </h4>
                </div>

                <div class="testimonial-item carousel-item">
                  <img :src="testimonialImage3" class="slider-img" alt="">
                  <h3>{{ readers.data.data[2].user.firstName }} {{ readers.data.data[2].user.lastName }}</h3>
                  <h4 class="reader-title">
                    Client
                  </h4>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Featured Reader Section -->

    <!-- How To Section -->
    <HowTo />

    <!--FAQ Section-->
    <Faq />

    <!--News Letter Section -->
    <section class="subscribe-panel cta">
      <div class="container text-center text-white">
        <h1>Join Our Newsletter</h1>
        <p>Subscribe to our weekly Newsletter and stay tuned.</p>
        <form action="" method="post" @submit.prevent="subscribe">
          <div class="col-lg-4  mx-auto">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <fa id="basic-addon1" :icon="['fas', 'envelope']" class="input-group-text" style="font-size: 38px" />
              </div>
              <input v-model="form['email']" type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
            </div>
          </div>
          <v-button class="btn btn-danger btn-lg" :disabled="!form.email">
            Subscribe Now!
          </v-button>
        </form>
      </div>
    </section>
    <!-- General Info Section -->
    <General-info />

    <!-- Footer Section -->
    <Footer />
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '../components/Utilities/Footer.vue'
import Faq from '../components/Welcome/Faq.vue'
import GeneralInfo from '../components/Welcome/General-info.vue'
import HowTo from '../components/Welcome/How-to.vue'
import Form from 'vform'
import Swal from 'sweetalert2'
import axios from 'axios'
import StarRating from 'vue-star-rating'

export default {
  components: { Footer, HowTo, Faq, GeneralInfo, StarRating },
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName,
    testimonialImage1: window.config.assetURL + 'images/testimonials/testimonials-1.jpg',
    testimonialImage2: window.config.assetURL + 'images/testimonials/testimonials-2.jpg',
    testimonialImage3: window.config.assetURL + 'images/testimonials/testimonials-3.jpg',
    testimonialImage4: window.config.assetURL + 'images/testimonials/testimonials-4.jpg',
    testimonialImage5: window.config.assetURL + 'images/testimonials/testimonials-5.jpg',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    vlogs: [],
    testimonials: [],
    readers: null,
    sessions: [],
    form: new Form({
      email: null
    }),
    totalSession: null,
    totalVlogs: null,
    totalViewers: null,
    slide: 0,
    sliding: null
  }),

  computed: {
    ...mapGetters({ authenticated: 'auth/check' }),
    viewerCount: function () {
      return this.totalViewers?.data ? (this.totalViewers.data?.total).toString() : '0'
    },
    vlogCount: function () {
      return this.totalVlogs?.total ? this.totalVlogs.total : '0'
    },
    sessionCount: function () {
      return this.totalSession ? this.totalSession : '0'
    }
  },

  created () {
    this.fetchVlogs()
    this.fetchTestimonials()
    this.fetchReaders()
    // this.fetchSessions()
    this.fetchTotalSessions()
    this.fetchTotalViewers()
    this.fetchTotalVlogs()
  },

  methods: {
    async subscribe () {
      const { data } = await this.form.post('/api/mailchimp/subscribe')
      // console.log(data);
      if (!data.success) {
        Swal.fire({
          title: 'Subscribing Failed',
          text: 'An error has occurred. Please try again.',
          type: 'error'
        })
      } else {
        Swal.fire({
          title: 'Success',
          text: 'You have been successfully subscribed!',
          type: 'success'
        })
      }
    },

    async fetchVlogs () {
      var vlogs = await axios.get('/api/vlog/status/APPROVED/1')
      this.vlogs = vlogs.data[0]
    },

    async fetchSessions () {
      var sessions = await axios.get('/api/video/fetch/ongoing')
      this.sessions = sessions.data
      // console.log("session",this.sessions);
      // if (!this.sessions.success) {
      //   Swal.fire({
      //   title: 'Fetching Sessions Failed',
      //   text: "An error has occurred. Please try again.",
      //   type: 'error'
      // })
      // }
    },

    async fetchTestimonials () {
      let response = await axios.get('/api/testimonial')
      this.testimonials = response.data.data
    },

    async fetchReaders () {
      this.readers = await axios.get('/api/reader/fetch-featured-readers')
    },

    async fetchTotalSessions () {
      let response = await axios.get('/api/video/fetch/ON_GOING')
      this.totalSession = response.data.total
      this.sessions = response.data.data
    },

    async fetchTotalVlogs () {
      const response = await axios.get('/api/vlog/status/APPROVED')
      this.totalVlogs = response.data[0]
    },

    async fetchTotalViewers () {
      this.totalViewers = await axios.get('/api/homepage/current-viewers')
    },

    getDescription (desc) {
      if (desc.length > 40) {
        return desc.substr(0, 40)
      } else {
        return desc
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}
.reader {
  height: calc(28rem + 74px);
}

#client-testimonial-carousel {min-height: 200px;}

.title {
  font-size: 85px;
}

.rows-min-height {
  min-height: 20rem;
}

.cover-bg {
  padding-top: calc(28rem + 74px);
  padding-bottom: 6rem;
}

.jumbotron {
  background-image:radial-gradient(at top center, rgba(25,7,0,0) 28%, #000000 100%), url('/images/tarot2.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh !important;
}

.masthead {
  padding-top: 5.5rem;
  padding-bottom: 10.5rem;
  text-align: center;
  background-image: radial-gradient(at center, rgba(25,7,0,0) 28%, #000000 100%), url('/images/tarot2.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  position: relative;
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

.img-slide {
  height:600px;
  width:100%
}

.red-background{
  background-color:#DC3545;
  height: 120px;
  width: 120px;
  margin: 0 auto;
  border-radius: 50%;
}

.red-background:hover{
  background-color:#C82333;
}

.white-text{
  color:white;
  font-size: 3em;
  text-align: center;
}

.black-text{
  color:gray;
  font-size: 1.5em;
  font-weight:bolder;
  text-align: center;
}

</style>
