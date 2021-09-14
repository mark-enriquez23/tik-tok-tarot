<template>
  <div class="">
    <!-- ======= Readers Section ======= -->
    <section id="team" class="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="section-title" data-aos="fade-right">
              <h2>Search</h2>
              <p>Showing results related to "{{ key }}".</p>
            </div>
          </div>

          <div v-if="loading" class="text-center col-lg-8">
            <b-spinner label="Loading..." />
          </div>

          <div v-else class="col-lg-8">
            <div v-if="results.data ? results.data.length != 0 : false" class="row">
              <div v-for="result in results.data" :key="result.id" class="col-lg-6 mt-4 mt-lg-0">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic">
                    <img :src="testimonialImage5" class="img-fluid" alt="">
                  </div>
                  <div class="member-info">
                    <h4>{{ result.username }}</h4>
                    <p class="text-success mb-0">
                      {{ result.is_active == 1 ? 'Online' : 'Offline' }}
                    </p>
                    <!-- <p>{{reader.description}}</p>
                    <span class="mt-3" >Health</span> -->
                  </div>
                </div>
              </div>
            </div>

            <div v-else>
              <div class="row">
                <div class="col-lg-12 mt-4 mt-lg-0">
                  <div class="member" data-aos="zoom-in" data-aos-delay="100">
                    <h3>No Results found</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- Readers Section -->

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '../components/Utilities/Footer.vue'
import Swal from 'sweetalert2'
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
    key: String,
    results: [],
    loading:true
  }),

  computed: mapGetters({ authenticated: 'auth/check' }),

  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  },

  created () {
    this.getKey()
  },

  methods: {
    getKey () {
      this.loading = true
      this.key = this.$route.query.key
      axios.post('/api/reader/search', { 'search': this.key }).then(res => {
        this.results = res.data
        if (!this.results.success) {
          Swal.fire({
            title: 'Search Failed',
            text: 'An error has occurred. Please try again.',
            type: 'error'
          })
        }
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
