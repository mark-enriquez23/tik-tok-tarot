<template>
  <div class="">
 
    <!-- ======= Sessions Section ======= -->
    <section id="team" class="team">
      <div class="container">

        <div class="row">
          <div class="col-lg-4">
            <div class="section-title" data-aos="fade-right">
              <h2>Active Sessions</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0" v-for="session in sessions.data">
            <div class="row">
              <div class="col-lg-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic"><img :src="testimonialImage4" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>{{session.name}}</h4>
                    <p class="text-success mb-0">{{ session.is_active == 1 ? 'Online' : 'Offline' }}</p>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
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
import Swal from 'sweetalert2';
import axios from "axios"

export default {
  components: { Footer },
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },

  created(){
    this.fetchSessions()
  },

  data: () => ({
    title: window.config.appName,
    testimonialImage1: window.config.assetURL + 'images/testimonials/testimonials-1.jpg',
    testimonialImage2: window.config.assetURL + 'images/testimonials/testimonials-2.jpg',
    testimonialImage3: window.config.assetURL + 'images/testimonials/testimonials-3.jpg',
    testimonialImage4: window.config.assetURL + 'images/testimonials/testimonials-4.jpg',
    testimonialImage5: window.config.assetURL + 'images/testimonials/testimonials-5.jpg',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    sessions:[],
    form: new Form({
      email: null
    }),
  }),

  computed: mapGetters({authenticated: 'auth/check'}),
  
  methods: {
    async fetchSessions() {
        var sessions = await axios.get("/api/homepage/live-sessions");
        this.sessions = sessions.data;
        console.log(this.sessions);
        if (!this.sessions.success) {
          Swal.fire({
          title: 'Fetching Sessions Failed',
          text: "An error has occurred. Please try again.",
          type: 'error'
        })
      }
    },
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
