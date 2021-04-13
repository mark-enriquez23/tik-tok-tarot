<template>
  <div class="">
 
    <!-- ======= Readers Section ======= -->
    <section id="team" class="team">
      <div class="container">

        <div class="row">
          <div class="col-lg-4">
            <div class="section-title" data-aos="fade-right">
              <h2>Our Readers</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
              <form class="form-inline col-12 col-md-12 px-0 my-2">
                <input class="form-control mr-sm-2 w-100" type="search" name="reader" placeholder="Search Readers" aria-label="Search">
              </form>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic"><img :src="testimonialImage5" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 1</span>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-lg-6 mt-4 mt-lg-0">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic"><img :src="testimonialImage1" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 2</span>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic"><img :src="testimonialImage3" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 3</span>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member" data-aos="zoom-in" data-aos-delay="200">
                  <div class="pic"><img :src="testimonialImage2" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 4</span>
                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member" data-aos="zoom-in" data-aos-delay="300">
                  <div class="pic"><img :src="testimonialImage1" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 4</span>
                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member" data-aos="zoom-in">
                  <div class="pic"><img :src="testimonialImage4" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 5</span>
                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
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
    this.fetchReaders()
  },

  data: () => ({
    title: window.config.appName,
    testimonialImage1: window.config.assetURL + 'images/testimonials/testimonials-1.jpg',
    testimonialImage2: window.config.assetURL + 'images/testimonials/testimonials-2.jpg',
    testimonialImage3: window.config.assetURL + 'images/testimonials/testimonials-3.jpg',
    testimonialImage4: window.config.assetURL + 'images/testimonials/testimonials-4.jpg',
    testimonialImage5: window.config.assetURL + 'images/testimonials/testimonials-5.jpg',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    readers:[],
    form: new Form({
      email: null
    }),
  }),

  computed: mapGetters({authenticated: 'auth/check'}),
  
  methods: {
    async fetchReaders() {
        this.readers = await axios.get("/api/user/fetch-readers");
        console.log(this.readers);
        if (!this.readers.data.success) {
          Swal.fire({
          title: 'Fetching Readers Failed',
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
