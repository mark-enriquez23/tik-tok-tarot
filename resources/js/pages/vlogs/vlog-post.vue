<template>
   <section class="py-5">
      <div class="container text-center">
        <h1 class="text-danger font-weight-bold">Vlog one - Lorem Ipsum</h1>
        <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid</p>
        <ul class="list-inline small text-uppercase mb-0">
          <li class="list-inline-item align-middle"><img class="rounded-circle shadow-sm" src="img/person-1.jpg" alt="" width="40"/></li>
          <li class="list-inline-item mr-0 text-muted align-middle">By </li>
          <li class="list-inline-item align-middle mr-0"><a class="font-weight-bold reset-anchor text-danger" href="#">Jason Doe</a></li>
          <li class="list-inline-item text-muted align-middle mr-0">|</li>
          <li class="list-inline-item text-muted align-middle mr-0">June 15, 2021</li>
          <li class="list-inline-item text-muted align-middle mr-0">|</li>
          <li class="list-inline-item text-muted align-middle">10 Reviews</li>
        </ul>
      </div>
      <div class="player-container  py-5">
        <vue-core-video-player :autoplay="false" class="w-100" src="https://r2---sn-jvhja5g3-hoaee.googlevideo.com/videoplayback?expire=1617270103&ei=90BlYM7cBcu24wL63odQ&ip=111.125.110.227&id=o-ACc_E-nfCgbg-6IAUVdC05GnBPUcjWNUmcqZFegpBBpB&itag=22&source=youtube&requiressl=yes&mh=Px&mm=31%2C29&mn=sn-jvhja5g3-hoaee%2Csn-i3b7knlk&ms=au%2Crdu&mv=m&mvi=2&pl=22&initcwndbps=377500&vprv=1&mime=video%2Fmp4&ns=NIkIS0XjZp2mrqzu4lThi4cF&cnr=14&ratebypass=yes&dur=4701.994&lmt=1614049250163820&mt=1617248203&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=xr6PBs8JOsFyQFICYV&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgZep9VFZVGJFdI2j8OhinVB1a7MG8BBwLTFFGkDNDbbICIQDF7tmPkZBnlf1aiaoQg-OtnF_yDHOgITDRNV5gcmM1Bg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgHIA4jUrGrgHfP7qp95b5b7RuRQQw2oKnZxviIHoUOfACIQCGxWEyk74O_xIl-6ORTGVyYCm5wOJURH9nLYq4iFJmag%3D%3D"></vue-core-video-player>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mb-5 mb-lg-0">
           <div class="vlog-content">
              <h2>Heading level two</h2>
              <p class="text-muted mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p><img class="img-fluid mb-4" src="img/post-img-1.jpg" alt="">
              <p class="text-muted mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
              <h3 class="mb-4">Heading level three</h3>
              <ul class="list-check text-muted text-small mb-5">
                <li class="mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li class="mb-1">Inventore magni sed error dignissimos repudiandae.</li>
                <li class="mb-1">Aperiam cum, nisi sed aliquam soluta amet molestiae.</li>
                <li class="mb-1">Consequatur sequi dolore, doloribus officia Nihil fugit.</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p class="mb-5">Possimus animi modi praesentium quis delectus libero architecto ipsum sint iure amet rerum incidunt, harum facere voluptatibus eligendi. Velit sapiente omnis earum, facilis harum est debitis tenetur deserunt tempora explicabo!</p>
           </div>
            <h3 class="h4 mb-4 text-danger">Leave a review</h3>
            <form class="mb-5" action="#">
              <div class="row">
                <div class="form-group col-lg-6">
                  <input class="form-control" type="text" name="name" placeholder="Full Name e.g. Jason Doe">
                </div>
                <div class="form-group col-lg-6">
                  <input class="form-control" type="email" name="email" placeholder="Email Address e.g. Jason@email.com">
                </div>
                <div class="form-group col-lg-12">
                  <textarea class="form-control" name="message" rows="5" placeholder="Leave your review"></textarea>
                </div>
                <div class="form-group col-lg-12">
                  <button class="btn btn-danger" type="submit">Submit your review</button>
                </div>
              </div>
            </form>
            <h3 class="h4 mb-4 d-flex align-items-center"><span>Reviews</span></h3>
            <ul class="list-unstyled comments">
              <li>
                <div class="d-flex mb-4">
                  <div class="pr-2 flex-grow-1" style="width: 75px; min-width: 75px;"><img class="rounded-circle shadow-sm img-fluid img-thumbnail" :src="userImageeUrl + 'testimonials-1.jpg'" alt=""></div>
                  <div class="pl-2">
                    <p class="small mb-0 text-danger">15 Aug 2019</p>
                    <h5>John Doe</h5>
                    <p class="text-muted text-small mb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex mb-4">
                  <div class="pr-2 flex-grow-1" style="width: 75px; min-width: 75px;"><img class="rounded-circle shadow-sm img-fluid img-thumbnail" :src="userImageeUrl + 'testimonials-2.jpg'" alt=""></div>
                  <div class="pl-2">
                    <p class="small mb-0 text-danger">15 Aug 2019</p>
                    <h5>John Doe</h5>
                    <p class="text-muted text-small mb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex mb-4">
                  <div class="pr-2 flex-grow-1" style="width: 75px; min-width: 75px;"><img class="rounded-circle shadow-sm img-fluid img-thumbnail" :src="userImageeUrl + 'testimonials-3.jpg'" alt=""></div>
                  <div class="pl-2">
                    <p class="small mb-0 text-danger">15 Aug 2019</p>
                    <h5>John Doe</h5>
                    <p class="text-muted text-small mb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <!-- About me widget -->
            <div class="mb-5 text-center"><img class="mb-3 rounded-circle img-thumbnail shadow-sm" :src="userImageeUrl + 'testimonials-4.jpg'" alt="" width="110">
              <h3 class="h4">Reader</h3>
              <p class="text-small text-muted px-sm-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </div>
            <!-- Newsletter widget -->
            <div class="px-4 py-5 section-bg mb-5 text-center">
              <h3 class="h5"><i class="far fa-envelope mr-2"></i>Join the family</h3>
              <p class="text-small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
              <form action="#">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <fa :icon="['fas', 'envelope']" class="input-group-text" id="basic-addon1" style="font-size: 38px" />
                  </div>
                  <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
                </div>
                <div class="form-group mb-0">
                  <button class="btn btn-danger btn-block btn-md" type="submit">Subscribe Now!</button>
                </div>
              </form>
            </div>
            <div class="pb-5">
              <div class="container pb-4">
              <div class="section-title">
                <h2>Featured Vlogs</h2>
                <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
                <div class="row">
                  <div class="col-lg-4 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-1.jpg'" alt="">
                      <div class="instagram-item-overlay">
                      </div></a></div>
                  <div class="col-lg-4 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-2.jpg'"  alt="">
                      <div class="instagram-item-overlay">
                      </div></a></div>
                  <div class="col-lg-4 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-3.jpg'"  alt="">
                      <div class="instagram-item-overlay">
                      </div></a></div>
                  <div class="col-lg-4 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-4.jpg'"  alt="">
                      <div class="instagram-item-overlay">
                      </div></a></div>
                  <div class="col-lg-4 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-6.jpg'"  alt="">
                      <div class="instagram-item-overlay">
                      </div></a></div>
                  <div class="col-lg-4 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-5.jpg'"  alt="">
                      <div class="instagram-item-overlay">
                      </div></a></div>
                  <div class="col-lg-4 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-1.jpg'"  alt="">
                      <div class="instagram-item-overlay">
                      </div></a></div>
                  <div class="col-lg-4 col-md-6 px-md-1 py-1"><a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-2.jpg'" alt="">
                      <div class="instagram-item-overlay">
                      </div></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import VueCoreVideoPlayer from 'vue-core-video-player'

Vue.use(VueCoreVideoPlayer, {
  lang: 'en'
})

export default {
  components: {},
  layout: 'default',

  metaInfo () {
    return { title: 'View Vlog' }
  },
  beforeCreate() {
    this.$store.dispatch('about-us/fetchAboutUsData')
  },

  data: () => ({
    title: window.config.appName,
    imageUrl: window.config.assetURL + 'images/',
    userImageeUrl: window.config.assetURL + 'images/testimonials/',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
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
</style>
