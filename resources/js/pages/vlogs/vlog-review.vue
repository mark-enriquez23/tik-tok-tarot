<template>
  <div v-if="aboutUs" class="">
    <div class="container">
      <div class="row py-5">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="section-title">
            <h2>Why Vlog?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div class="card py-5">
            <div v-for="(review, index) in vlog_reviews.data" id="my-table" :key="index" class="px-5">
              <div class="blog-entry ftco-animate d-md-flex fadeInUp ftco-animated text-md-left text-center">
                <img class="rounded-circle img-thumbnail shadow-sm" :src="`/images/testimonials/${review.avatar}`" alt="" width="200">
                <div class="text text-2 pl-md-4 review-content">
                  <h2 class="mb-2 text-danger review-data">
                    {{ review.vlog.title }}
                  </h2>
                  <div class="meta-wrap">
                    <p class="meta mb-2">
                      <span class="mr-2"><fa class="" :icon="['fas', 'calendar-alt']" /> {{ review.created_at | moment("dddd, MMMM Do YYYY") }}</span>
                      <span><fa class="" :icon="['fas', 'comment']" />{{ review.vlog.review ? review.vlog.review.length : 0 }} Reviews</span>
                    </p>
                  </div>
                  <p class="mb-2 review-data">
                    {{ review.message }}
                  </p>
                  <p class="mb-2 review-data blockquote-footer">
                    {{ review.name }}
                  </p>
                  <div class="btn btn-danger rounded-pill" @click="viewVlog(review.vlog.id)">
                    <div class=" row no-gutters mx-auto justify-content-center">
                      <div class="my-auto mr-2">
                        Show Vlog
                      </div> <fa :icon="['fas', 'chevron-right']" class="my-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <hr style="height: 10px">
            </div>
            <b-pagination
              v-if="vlog_reviews.total > vlog_review.per_page"
              v-model="vlog_reviews.current_page"
              :total-rows="vlog_reviews.total"
              :per-page="vlog_reviews.per_page"
              align="center"
              size="sm"
              aria-controls="my-table"
              @change="changeData"
            />
          </div>
        </div>
        <div class="col-lg-4 ">
          <!-- Newsletter widget -->
          <div class="px-4 py-5 section-bg mb-5 text-center">
            <h3 class="h5">
              <i class="far fa-envelope mr-2" />Join the family
            </h3>
            <p class="text-small text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
            </p>
            <form action="#">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <fa id="basic-addon1" :icon="['fas', 'envelope']" class="input-group-text" style="font-size: 38px" />
                </div>
                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
              </div>
              <div class="form-group mb-0">
                <button class="btn btn-danger btn-block btn-md" type="submit">
                  Subscribe Now!
                </button>
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
                <div class="col-lg-4 col-md-6 px-md-1 py-1">
                  <a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-1.jpg'" alt="">
                    <div class="instagram-item-overlay" /></a>
                </div>
                <div class="col-lg-4 col-md-6 px-md-1 py-1">
                  <a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-2.jpg'" alt="">
                    <div class="instagram-item-overlay" /></a>
                </div>
                <div class="col-lg-4 col-md-6 px-md-1 py-1">
                  <a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-3.jpg'" alt="">
                    <div class="instagram-item-overlay" /></a>
                </div>
                <div class="col-lg-4 col-md-6 px-md-1 py-1">
                  <a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-4.jpg'" alt="">
                    <div class="instagram-item-overlay" /></a>
                </div>
                <div class="col-lg-4 col-md-6 px-md-1 py-1">
                  <a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-6.jpg'" alt="">
                    <div class="instagram-item-overlay" /></a>
                </div>
                <div class="col-lg-4 col-md-6 px-md-1 py-1">
                  <a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-5.jpg'" alt="">
                    <div class="instagram-item-overlay" /></a>
                </div>
                <div class="col-lg-4 col-md-6 px-md-1 py-1">
                  <a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-1.jpg'" alt="">
                    <div class="instagram-item-overlay" /></a>
                </div>
                <div class="col-lg-4 col-md-6 px-md-1 py-1">
                  <a class="instagram-item d-block w-100 reset-anchor text-white" href="#"><img class="img-fluid" :src="imageUrl + 'listing-tnumbnail-2.jpg'" alt="">
                    <div class="instagram-item-overlay" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  components: { },
  layout: 'default',

  filters: {
    truncate: function (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    }
  },

  data: () => ({
    title: window.config.appName,
    imageUrl: window.config.assetURL + 'images/',
    userImageeUrl: window.config.assetURL + 'images/testimonials/',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    vlog_reviews: []
  }),

  computed: mapGetters({
    authenticated: 'auth/check',
    aboutUs: 'about-us/aboutUs'
  }),

  beforeMount () {
    this.$store.dispatch('about-us/fetchAboutUsData')
    this.getReviews()
  },

  methods: {
    getReviews () {
      axios.get(`/api/reviews/all?page=1`).then((response) => {
        this.vlog_reviews = response.data[0]
      })
    },

    viewVlog (id) {
      this.$router.push(`/vlogs/view/${id}`)
    },
    changeData (id) {
      axios.get(`/api/reviews/all?page=${id}`).then((response) => {
        this.vlog_reviews = response.data[0]
      })
    }
  }

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

  .review-content {
    white-space: nowrap;
    overflow: hidden;
    .review-data {
      text-overflow: ellipsis;
      overflow: hidden;
    }
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

<style lang="scss">
</style>
