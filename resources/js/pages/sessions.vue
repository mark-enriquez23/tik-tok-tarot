<template>
  <div class="">
    <!-- ======= Sessions Section ======= -->
    <section id="team" class="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="section-title" data-aos="fade-right">
              <h2>Active Sessions</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga um quidem.</p>
            </div>
          </div>

          <div v-if="loading" class="text-center col-lg-8">
            <b-spinner label="Loading..." />
          </div>

          <div v-else class="col-lg-8">
            <div v-if="sessions.data ? sessions.data.length != 0 : false">
              <div class="row">
                <div v-for="session in sessions.data" :key="session.id" class="col-lg-6">
                  <router-link :to="`/reader/go-live/${session.room_name}`" class="nav-link" active-class="active">
                    <div class="member" data-aos="zoom-in" data-aos-delay="100">
                      <div class="pic">
                        <img :src="`/images/${session.user.user_details.profile_photo}`" class="img-fluid" alt="">
                      </div>
                      <div class="member-info">
                        <h4 class="text-uppercase">
                          {{ session.room_name }}
                        </h4>
                      <!-- <h5>{{ session.room_status === 'ON_GOING' ? 'ON GOING' : '' }}</h5> -->
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>

            <div v-else>
              <div class="row">
                <div class="col-lg-12 mt-4 mt-lg-0">
                  <div class="member" data-aos="zoom-in" data-aos-delay="100">
                    <h3>No Sessions found</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- Sessions Section -->

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '../components/Utilities/Footer.vue'
import Form from 'vform'
import axios from 'axios'

export default {
  components: { Footer },
  layout: 'default',

  data: () => ({
    title: window.config.appName,
    testimonialImage1: window.config.assetURL + 'images/testimonials/testimonials-1.jpg',
    testimonialImage2: window.config.assetURL + 'images/testimonials/testimonials-2.jpg',
    testimonialImage3: window.config.assetURL + 'images/testimonials/testimonials-3.jpg',
    testimonialImage4: window.config.assetURL + 'images/testimonials/testimonials-4.jpg',
    testimonialImage5: window.config.assetURL + 'images/testimonials/testimonials-5.jpg',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    sessions: [],
    form: new Form({
      email: null
    }),
    loading: true
  }),

  computed: mapGetters({ authenticated: 'auth/check' }),

  created () {
    this.fetchSessions()
  },

  methods: {
    async fetchSessions () {
      this.loading = true
      await axios.get('/api/video/fetch/ON_GOING').then((response) => {
        this.sessions = response.data
        this.loading = false
      })
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
  .btn {
    cursor: pointer;
  }
</style>
