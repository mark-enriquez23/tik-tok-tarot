<template>
  <div class="">
  <header class="masthead">
    <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
                <img :src="srcLogoOnly" style="mix-blend-mode: luminosity; width: 350px" srcset="" >
                <h1 class="text-uppercase font-weight-bold text-white mt-2">Welcome to TikTok Tarot</h1>
                <hr class="divider my-2 col-2" style="background: #ffff" />
            </div>
            <div class="col-lg-8 align-self-baseline">
                <h4 class="font-weight-light mb-5 text-white">Where you Own the Power to Click.</h4>
                <div class="row no-gutters text-center" >
                  <div class="col-lg-6 mx-auto">
                    <a class="btn btn-danger btn-xl w-lg-50 w-75 text-white">Become a Reader</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</header>
<section class="container my-5">
  <div class="">
    <div class="section-title">
      <h2>Featured Vlogs</h2>
      <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
  </div>
  <div class="mb-2">
    <div class="row">
      <div class="col-md-4">
        <div class="card ">
          <a href="#">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
            <p class="card-text text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum illo impedit incidunt laborum laudantium...
            </p>
        </div>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card ">
          <a href="#">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
            <p class="card-text text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum illo impedit incidunt laborum laudantium...
            </p>
        </div>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card ">
          <a href="#">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
            <p class="card-text text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum illo impedit incidunt laborum laudantium...
            </p>
        </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5 mx-auto col-md-3 mx-auto ">
    <div class="btn btn-danger w-100">
      <div class=" row no-gutters mx-auto justify-content-center">
        <div class="my-auto mr-2">Show More</div> <fa :icon="['fas', 'chevron-right']" class="my-auto" />
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
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage1" class="testimonial-img" alt="">
                    <h3>John Doe</h3>
                    <h4>Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star-half']" />
                    </p>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage2" class="testimonial-img" alt="">
                    <h3>John Doe</h3>
                    <h4>Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star-half']" />
                    </p>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage3" class="testimonial-img" alt="">
                    <h3>John Doe</h3>
                    <h4>Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star-half']" />
                    </p>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage4" class="testimonial-img" alt="">
                    <h3>John Doe</h3>
                    <h4>Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star-half']" />
                    </p>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage5" class="testimonial-img" alt="">
                    <h3>John Doe</h3>
                    <h4>Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star-half']" />
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
    </section><!-- End Testimonials Section -->

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
              <div class="col-lg-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic"><img :src="testimonialImage5" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 1</span>
                    <p class="text-success mb-0">online</p>
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
                    <p class="text-success mb-0">online</p>
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
                    <p class="text-success mb-0">online</p>
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
                    <p class="text-success mb-0">online</p>
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
                    <p class="text-success mb-0">online</p>
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
                    <p class="text-success mb-0">online</p>
                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
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
              <button class="w-100 btn btn-secondary">Login</button>
            </div>
            <div class="col-md-6  mt-md-0 mt-4">
              <button class="w-100 btn btn-danger">Register</button>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Cta Section -->
    <HowTo />

    <!--FAQ Section-->
    <Faq />

<!--News Letter Section -->
<section class="subscribe-panel cta">
    <div class="container text-center text-white">
    <h1>Join Our Newsletter</h1>
    <p>Subscribe to our weekly Newsletter and stay tuned.</p>
    <form action="" method="post">
        <!-- <div class="col-5 mx-auto">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <fa :icon="['fas', 'envelope']" class="input-group-text" id="basic-addon1" style="font-size: 38px" />
            </div>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
          </div>
        </div> -->
          <button class="btn btn-danger btn-lg">Subscribe Now!</button>
    </form>
  </div>
  </section>
  <!-- ======= About Section ======= -->
  <section id="about" class="about">
      <div class="container">

        <div class="row content">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <h2>Lorem ipsum dolor sit amet</h2>
            <h3>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <p>
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <ul>
              <li><fa class="text-danger" :icon="['fas', 'check-double']" id="basic-addon1" /> Consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
              <li><fa class="text-danger" :icon="['fas', 'check-double']" id="basic-addon1" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><fa class="text-danger" :icon="['fas', 'check-double']" id="basic-addon1" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
            <p class="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->
    <Footer />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '../components/Utilities/Footer.vue'
import Faq from '../components/Welcome/Faq.vue'
import HowTo from '../components/Welcome/How-to.vue'

export default {
  components: { Footer, HowTo, Faq },
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
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
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

</style>

<style lang="scss">
  .btn {
    cursor: pointer;
  }
</style>
