<template>
  <div class="" v-if="aboutUs">
    <div class="col-md-12">
      <div class="blog-entry ftco-animate d-md-flex fadeInUp ftco-animated">
        <a href="single.html" class="img img-2" :style="{'background-image': 'url(' + userImageeUrl + 'testimonials-1.jpg )'}"></a>
        <div class="text text-2 pl-md-4">
        <h2 class="mb-2 text-danger ">A Loving Heart is the Truest Wisdom</h2>
        <div class="meta-wrap">
        <p class="meta mb-2">
        <span class="mr-2"><fa class="" :icon="['fas', 'calendar-alt']" /> June 28, 2019</span>
        <span><fa class="" :icon="['fas', 'comment']" /> 5 Comment</span>
        </p>
        </div>
        <p class="mb-2">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

          <div class="btn btn-danger rounded-pill">
            <div class=" row no-gutters mx-auto justify-content-center">
              <div class="my-auto mr-2">Show More</div> <fa :icon="['fas', 'chevron-right']" class="my-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: { },
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
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
  .img {
    display: block;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-size: contain;
  }
</style>

<style lang="scss">
</style>
