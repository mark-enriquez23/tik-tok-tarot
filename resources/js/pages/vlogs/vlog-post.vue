<template>
   <section class="py-5">
      <div class="container text-center">
        <h1 class="text-danger font-weight-bold">{{ vlog.title }}</h1>
        <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid</p>
        <ul class="list-inline small text-uppercase mb-0">
          <li class="list-inline-item align-middle"><img class="rounded-circle shadow-sm" src="img/person-1.jpg" alt="" width="40"/></li>
          <li class="list-inline-item mr-0 text-muted align-middle">By </li>
          <li class="list-inline-item align-middle mr-0"><a class="font-weight-bold reset-anchor text-danger" href="#">{{ vlog.user.firstName + ' ' + vlog.user.lastName }}</a></li>
          <li class="list-inline-item text-muted align-middle mr-0">|</li>
          <li class="list-inline-item text-muted align-middle mr-0">{{ dateFormat( vlog.created_at, 'LL' ) }}</li>
          <li class="list-inline-item text-muted align-middle mr-0">|</li>
          <li class="list-inline-item text-muted align-middle">{{ reviews.length }} Reviews</li>
        </ul>
      </div>
      <div class="player-container  py-5">
        <vue-core-video-player :autoplay="false" class="w-100" :src="'/uploads/vlog/' + vlog.file_name"></vue-core-video-player>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mb-5 mb-lg-0">
            <!-- <div class="vlog-content">
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
            </div> -->
            <div class="vlog-content text-break pb-5" v-html="vlog.description"></div>
            <ul class="nav nav-pills mb-3 review-suggestions" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link active" id="pills-review-tab" data-toggle="pill" href="#pills-review" role="tab" aria-controls="pills-review" aria-selected="true">Review</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="pills-suggestions-tab" data-toggle="pill" href="#pills-suggestions" role="tab" aria-controls="pills-suggestions" aria-selected="false">Suggestions</a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                <h3 class="h4 mb-4 text-danger">Leave a review</h3>
                <form class="mb-5" @submit.prevent="reviewFormSubmit">
                  <div class="row">
                    <div class="form-group col-lg-12">
                      <star-rating :starSize="20" :showRating="false" v-model="reviewForm.stars" />
                      <has-error :form="reviewForm" field="stars" />
                    </div>
                    <template v-if="!authenticated">
                      <div class="form-group col-lg-6">
                        <input class="form-control" :class="{ 'is-invalid': reviewForm.errors.has('name') }" type="text" name="name" v-model="reviewForm.name" placeholder="Full Name e.g. Jason Doe">
                        <has-error :form="reviewForm" field="name" />
                      </div>
                      <div class="form-group col-lg-6">
                        <input class="form-control" :class="{ 'is-invalid': reviewForm.errors.has('email') }" type="email" name="email" v-model="reviewForm.email" placeholder="Email Address e.g. Jason@email.com">
                        <has-error :form="reviewForm" field="email" />
                      </div>
                    </template>
                    <div class="form-group col-lg-12">
                      <textarea class="form-control" :class="{ 'is-invalid': reviewForm.errors.has('message') }" name="message" rows="5" v-model="reviewForm.message" placeholder="Leave your review"></textarea>
                      <has-error :form="reviewForm" field="message" />
                    </div>
                    <div class="form-group col-lg-12">
                      <v-button
                        :type="'danger'"
                        :loading="reviewForm.busy">
                        Submit your review
                      </v-button>
                    </div>
                  </div>
                </form>
                <h3 class="h4 mb-4 d-flex align-items-center"><span>Reviews</span></h3>
                <ul class="list-unstyled comments">
                  <template v-if="reviews.length > 0">
                    <li v-for="( review, review_index ) in reviews" :key="'reviews-' + review_index">
                      <div class="d-flex mb-4">
                        <div class="pr-2 flex-grow-1" style="width: 75px; min-width: 75px;">
                          <img class="rounded-circle shadow-sm img-fluid img-thumbnail" :src="userImageeUrl + review.avatar" alt=""></div>
                        <div class="pl-2">
                          <p class="small mb-0 text-danger">{{ dateFormat( review.created_at ) }}</p>
                          <h5>{{ review.name }} <star-rating :starSize="20" :showRating="false" :readOnly="true" :rating="review.stars" /></h5>
                          <p class="text-muted text-small mb-2 text-break">{{ review.message }}</p>
                        </div>
                      </div>
                    </li>
                  </template>
                  <template v-else>
                    <li>
                      <div class="text-cent">No review(s) yet</div>
                    </li>
                  </template>
                </ul>
                <div class="col-md-12">
                  <ul class="pagination justify-content-center">
                    <li class="page-item" :class="{ 'disabled': ! reviewsPagination.prev_url }">
                      <a class="page-link cursor-pointer" @click="fetchReviews( reviewsPagination.prev_url )">Previous</a>
                    </li>
                    <li class="page-item disabled">
                      <a class="page-link cursor-pointer">Page {{ reviewsPagination.current_page }} of {{ reviewsPagination.last_page }}</a>
                    </li>
                    <li class="page-item" :class="{ 'disabled': ! reviewsPagination.next_url }">
                      <a class="page-link cursor-pointer" @click="fetchReviews( reviewsPagination.next_url )">Next</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-suggestions" role="tabpanel" aria-labelledby="pills-suggestions-tab">
                <h3 class="h4 mb-4 text-danger">Leave a suggestion</h3>
                <form class="mb-5" @submit.prevent="suggestionFormSubmit">
                  <div class="row">
                    <div class="form-group col-lg-12">
                      <textarea class="form-control" :class="{ 'is-invalid': suggestionForm.errors.has('message') }" name="message" rows="5" v-model="suggestionForm.message" placeholder="Leave your review"></textarea>
                      <has-error :form="suggestionForm" field="message" />
                    </div>
                    <div class="form-group col-lg-12">
                      <v-button
                        :type="'danger'"
                        :loading="suggestionForm.busy">
                        Submit your suggestion
                      </v-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <!-- About me widget -->
            <div class="mb-5 text-center"><img class="mb-3 rounded-circle img-thumbnail shadow-sm" :src="userImageeUrl + 'testimonials-4.jpg'" alt="" width="110">
              <h3 class="h4">Reader</h3>
              <p class="text-small text-muted px-sm-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </div>
            <!-- Newsletter widget -->
            <div class="px-4 py-5 section-bg mb-5 text-center">
              <!-- <h3 class="h5"><i class="far fa-envelope mr-2"></i>Join the family</h3>
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
              </form> -->
              <h5>Join Our Newsletter</h5>
              <p class="text-small text-muted">Subscribe to our weekly Newsletter and stay tuned.</p>
              <form @submit.prevent="subscribeFormSubmit">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <fa :icon="['fas', 'envelope']" class="input-group-text" id="basic-addon1" style="font-size: 38px" />
                  </div>
                  <input v-model="subscribeForm.email" type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
                </div>
                <v-button class="btn btn-danger btn-lg" :disabled="!subscribeForm.email">Subscribe Now!</v-button>
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
import StarRating from 'vue-star-rating'
import { swalSuccess, swalOops, momentFormat } from '~/helpers'

Vue.use(VueCoreVideoPlayer, {
  lang: 'en'
})

export default {
  components: { StarRating },
  layout: 'default',

  metaInfo () {
    return { title: 'View Vlog' }
  },

  beforeCreate() {
    this.$store.dispatch( 'about-us/fetchAboutUsData' )
    this.$store.dispatch( 'reviews/reviews', { pagUrl: null, id: this.$route.params.id } )
    this.$store.dispatch( 'vlogs/getVlog', this.$route.params.id )
  },

  data: () => ({
    title: window.config.appName,
    imageUrl: window.config.assetURL + 'images/',
    userImageeUrl: window.config.assetURL + 'images/testimonials/',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
  }),

  computed: mapGetters({
    authenticated: 'auth/check',
    aboutUs: 'about-us/aboutUs',
    vlog: 'vlogs/vlog',
    reviews: 'reviews/reviews',
    reviewsPagination: 'reviews/reviewsPagination',
    reviewForm: 'reviews/reviewForm',
    subscribeForm: 'subscriptions/subscribeForm',
    suggestionForm: 'suggestions/suggestionForm',
  }),

  methods: {
    async subscribeFormSubmit() {
      return false
      const { data } = await this.subscribeForm.post( '/api/' )
    },

    async suggestionFormSubmit() {
      this.suggestionForm.video_id = this.$route.params.id
      const { data } = await this.suggestionForm.post( '/api/suggestions/create' )

      if ( data.success ) {
        this.suggestionForm.reset()
        swalSuccess( 'Suggested has been posted!' )
      } else {
        swalOops( 'Failed to add suggestion!' )
      }
    },
    
    async reviewFormSubmit() {
      this.reviewForm.user = this.authenticated
      this.reviewForm.vlog_id = this.$route.params.id
      const { data } = await this.reviewForm.post( '/api/reviews/add' )

      if ( data.success ) {
        this.reviewForm.reset()
        swalSuccess( 'Review has been posted!' ).then( _ => this.fetchReviews() )
      } else {
        swalOops( 'Failed to add review!' )
      }
    },

    fetchReviews( page_url ) {
      this.$store.dispatch( 'reviews/reviews', { page_url: page_url, id: this.$route.params.id } )
    },

    dateFormat( date, format = null ) {
      return momentFormat( date, format )
    }
  }
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

  .review-suggestions {
    & .nav-link.active {
      color: #fff !important;
      background-color: #dc3545 !important;
      border-color: #dc3545 !important;
    }

    & .nav-link {
      color: #111 !important;
    }
  }
</style>
