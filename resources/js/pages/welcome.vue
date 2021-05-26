<template>
  <div class="">
  <header class="masthead">
    <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
                <img :src="srcLogoOnly" style="mix-blend-mode: luminosity; width: 20rem" srcset="" >
                <h1 class="text-uppercase font-weight-bold text-white mt-2">Welcome to TikTok Tarot</h1>
                <hr class="divider my-2 col-2" style="background: #ffff" />
            </div>
            <div class="col-lg-8 align-self-baseline">
                <h4 class="font-weight-light mb-5 text-white">24/7 live psychics at your services</h4>
                <div class="row no-gutters text-center" >
                  <div class="col-lg-6 mx-auto">
                    <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
                      <a class="btn btn-danger btn-xl w-lg-50 w-75 text-white">Register</a>
                    </router-link>
                  </div>
                </div>
            </div>
        </div>
    </div>
</header>

<section id="team" class="team" >
      <div class="container">

        <div class="row">
          <div class="col-lg-4">
          </div>
          <div class="col-lg-8">
            <div class="row">

              <div class="col-lg-4 mt-4 mt-lg-0" v-if="totalViewers !== null">
                <router-link :to="{ name: 'readers' }" class="nav-link" active-class="active">
                <div class="member red-background" data-aos="zoom-in" data-aos-delay="100">
                  <div class="member-info">

                      <h5 class="white-text">Viewers: {{totalViewers.data.total}} </h5>

                  </div>
                </div>
                </router-link>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0" v-if="totalVlogs !== null">
                 <router-link :to="{ name: 'vlogs.list' }" class="nav-link" active-class="active">
                <div class="member red-background" data-aos="zoom-in" data-aos-delay="100">
                  <div class="member-info">

                        <h5 class="white-text">Vlogs: {{totalVlogs.data.total}} </h5>

                  </div>
                </div>
                </router-link>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0" v-if="totalSession !== null">
                <router-link :to="{ name: 'sessions' }" class="nav-link" active-class="active">
                <div class="member red-background" data-aos="zoom-in" data-aos-delay="100">
                  <div class="member-info">

                         <h5 class="white-text">Sessions: {{totalSession.data.total}} </h5>

                  </div>
                </div>
                </router-link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

 <!-- ======= Testimonials Section ======= -->
<section id="testimonials" class="testimonials section-bg">
  <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="section-title">
              <h2>Testimonials</h2>
              <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>
          <div class="col-lg-8">
           <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner testimonials-carousel">

                <div class="testimonial-item carousel-item active">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      {{ testimonials.data.data[0].body }}
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage1" class="testimonial-img" alt="">
                    <h3>{{ testimonials.data.data[0].user.name }}</h3>
                    <h4 class="testimonial-title">Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" v-for="index in testimonials.data.data[0].rate" :key="index" />
                    </p>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      {{ testimonials.data.data[1].body }}
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage2" class="testimonial-img" alt="">
                    <h3>{{ testimonials.data.data[1].user.name }}</h3>
                    <h4 class="testimonial-title">Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" v-for="index in testimonials.data.data[1].rate" :key="index" />
                    </p>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      {{ testimonials.data.data[2].body }}
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage3" class="testimonial-img" alt="">
                    <h3>{{ testimonials.data.data[2].user.name }}</h3>
                    <h4 class="testimonial-title">Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" v-for="index in testimonials.data.data[2].rate" :key="index" />
                    </p>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      {{ testimonials.data.data[3].body }}
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage4" class="testimonial-img" alt="">
                    <h3>{{ testimonials.data.data[3].user.name }}</h3>
                    <h4 class="testimonial-title">Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" v-for="index in testimonials.data.data[3].rate" :key="index" />
                    </p>
                  </div>

              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>
          </div>
        </div>

      </div>
    </section>
    <!-- End Testimonials Section -->

    <!-- ======= Live Session Section ======= -->
    <section id="team" class="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="section-title" data-aos="fade-right">
              <h2>Active Live Sessions</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-6 col-lg-6 my-5 mt-lg-0" v-for="session in sessions.data" v-bind:key="session.id">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic"><img :src="testimonialImage5" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>{{ session.name }}</h4>
                    <p class="text-success mb-0">{{ session.status == 'streaming' ? 'Streaming' : 'Offline' }}</p>
                    <p>{{ getDescription(session.content) }}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section><!-- End Live Session Section -->

    <!-- ======= Cta Section ======= -->
    <section id="cta" class="cta">
      <div class="container">

        <div class="text-center" data-aos="zoom-in">
          <h3>Join us Now!</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div class="row col-md-6 mx-auto">
            <div class="col-md-6 ">
              <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
                <button class="w-100 btn btn-secondary">Login</button>
              </router-link>
            </div>
            <div class="col-md-6  mt-md-0 mt-4">
              <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
                <button class="w-100 btn btn-danger">Register</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Cta Section -->

<section class="container my-5">
  <div class="">
    <div class="section-title">
      <h2>Featured Vlogs</h2>
      <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
  </div>

  <div class="mb-2">
    <div class="row">

      <div class="col-md-4 mb-4" v-for="vlog in vlogs.data" v-bind:key="vlog.id">
        <div class="card ">
          <a href="#">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{vlog.name}}</h5>
            <p class="card-text text-muted">
              {{vlog.content}}
            </p>
            <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" v-for="index in vlog.rate" :key="index" />
                    
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
  <div class="container" v-if="readers !== null">
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
                    <h3>{{ readers.data.data[0].user.name }}</h3>
                    <h4 class="reader-title">Client</h4>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <img :src="testimonialImage2" class="slider-img" alt="">
                    <h3>John Doe</h3>
                    <h4 class="reader-title">Client</h4>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <img :src="testimonialImage3" class="slider-img" alt="">
                    <h3>John Doe</h3>
                    <h4 class="reader-title">Client</h4>
                  </div>
              </div>
              <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
        <div class="col-lg-5  mx-auto">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <fa :icon="['fas', 'envelope']" class="input-group-text" id="basic-addon1" style="font-size: 38px" />
            </div>
            <input v-model="form['email']" type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
          </div>
        </div>
        <v-button class="btn btn-danger btn-lg" :disabled="!form.email">Subscribe Now!</v-button>
    </form>
  </div>
  </section>
    <!-- General Info Section -->
    <General-info />

    <!-- Footer Section -->
    <Footer />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '../components/Utilities/Footer.vue'
import Faq from '../components/Welcome/Faq.vue'
import GeneralInfo from '../components/Welcome/General-info.vue'
import HowTo from '../components/Welcome/How-to.vue'
import Form from 'vform'
import Swal from 'sweetalert2';
import axios from "axios"

export default {
  components: { Footer, HowTo, Faq, GeneralInfo },
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },

  created(){
    this.fetchVlogs(),
    this.fetchTestimonials(),
    this.fetchReaders(),
    this.fetchSessions(),
    this.fetchTotalSessions(),
    this.fetchTotalViewers(),
    this.fetchTotalVlogs()
  },

  data: () => ({
    title: window.config.appName,
    testimonialImage1: window.config.assetURL + 'images/testimonials/testimonials-1.jpg',
    testimonialImage2: window.config.assetURL + 'images/testimonials/testimonials-2.jpg',
    testimonialImage3: window.config.assetURL + 'images/testimonials/testimonials-3.jpg',
    testimonialImage4: window.config.assetURL + 'images/testimonials/testimonials-4.jpg',
    testimonialImage5: window.config.assetURL + 'images/testimonials/testimonials-5.jpg',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    vlogs:[],
    testimonials:[],
    readers: null,
    sessions:[],
    form: new Form({
      email: null
    }),
    totalSession: null,
    totalVlogs: null,
    totalViewers: null
  }),

  computed: mapGetters({authenticated: 'auth/check'}),

  methods: {
      async subscribe() {
        const { data } = await this.form.post("/api/mailchimp/subscribe");
        // console.log(data);
        if (!data.success) {
          Swal.fire({
          title: 'Subscribing Failed',
          text: "An error has occurred. Please try again.",
          type: 'error'
        })
        } else {
          Swal.fire({
          title: 'Success',
          text: "You have been successfully subscribed!",
          type: 'success'
        })
      }
    },

    async fetchVlogs() {
        var vlogs = await axios.get("/api/vlog/approved");
        this.vlogs = vlogs.data;
        // console.log(this.vlogs);
        // if (!this.vlogs.success) {
        //   Swal.fire({
        //   title: 'Fetching Vlogs Failed',
        //   text: "An error has occurred. Please try again.",
        //   type: 'error'
        // })
      //}
    },

    async fetchSessions() {
        var sessions = await axios.get("/api/homepage/live-sessions");
        this.sessions = sessions.data;
        // console.log("session",this.sessions);
        // if (!this.sessions.success) {
        //   Swal.fire({
        //   title: 'Fetching Sessions Failed',
        //   text: "An error has occurred. Please try again.",
        //   type: 'error'
        // })
      //}
    },

    async fetchTestimonials() {
        this.testimonials = await axios.get("/api/testimonial");
        // console.log(this.testimonials)
        // console.log(this.testimonials.data.data[0].user);
        // if (!this.testimonials.data.success) {
        //   Swal.fire({
        //   title: 'Fetching Testimonials Failed',
        //   text: "An error has occurred. Please try again.",
        //   type: 'error'
        // })
      //}
    },

    async fetchReaders() {
        this.readers = await axios.get("/api/reader/fetch-featured-readers");
        // console.log(this.readers);
        // if (!this.readers.data.success) {
        //   Swal.fire({
        //   title: 'Fetching Readers Failed',
        //   text: "An error has occurred. Please try again.",
        //   type: 'error'
        // })
      //}
    },

    async fetchTotalSessions() {
        this.totalSession = await axios.get("/api/video/fetch/ongoing");
        // if (!this.totalSession.data.success) {
        //   Swal.fire({
        //   title: 'Fetching Total Session Failed',
        //   text: "An error has occurred. Please try again.",
        //   type: 'error'
        // })
      //}
    },

    async fetchTotalVlogs() {
        this.totalVlogs = await axios.get("/api/vlog/status/approved/1");
        // if (!this.totalVlogs.data.success) {
        //   Swal.fire({
        //   title: 'Fetching Total Vlogs Failed',
        //   text: "An error has occurred. Please try again.",
        //   type: 'error'
        // })
      //}
    },

    async fetchTotalViewers() {
        this.totalViewers = await axios.get("/api/homepage/current-viewers");
        // if (!this.totalViewers.data.success) {
        //   Swal.fire({
        //   title: 'Fetching Total Viewers Failed',
        //   text: "An error has occurred. Please try again.",
        //   type: 'error'
        // })
      //}
     },

    getDescription(desc){
      if (desc.length > 40){
        return desc.substr(0,40);
      }else{
        return desc;
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

.cover-bg {
  padding-top: calc(28rem + 74px);
  padding-bottom: 6rem;
}

.masthead {
  padding-top: 10.5rem;
  padding-bottom: 10.5rem;
  text-align: center;
  background-image: radial-gradient(at top center, rgba(25,7,0,0) 28%, #000000 100%), url('/images/tarot2.jpg');
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
}

.red-background:hover{
  background-color:#C82333;
}

.white-text{
  color:white;
  font-weight: bolder;
}

</style>

<style lang="scss">
  .btn {
    cursor: pointer;
  }
</style>
