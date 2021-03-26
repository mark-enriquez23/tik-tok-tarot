<template>
  <div class="" v-if="aboutUs">
    <div class="bg-light">
      <div class="container py-5">
        <div class="row h-100 align-items-center py-5">
          <div class="col-lg-6">
            <h1 class="display-4 text-bold text-danger">{{ aboutUs.title }}</h1>
            <p class="lead text-muted mb-0">{{ aboutUs.sub_title }}</p>
          </div>
          <div class="col-lg-6 d-none d-lg-block"><img :src="imageUrl + aboutUs.banner_image" alt="" class="banner img-fluid"></div>
        </div>
      </div>
    </div>

    <div class="bg-white py-5">
      <div class="container py-5">
        <div class="row align-items-center mb-5" v-for="(item, index) in aboutUs.content.additional_data" :key="index">
          <div class="col-lg-6" :class="'order-'+ ((index+3)%2 || 2) + ' order-lg-' + ((index+2)%2 || 2) ">
            <fa :icon="['fas', item.icon ]" class="text-danger h3" />
            <h2 class="font-weight-light">{{ item.title }}</h2>
            <p class="font-italic text-muted mb-4">{{item.description}}</p><a href="#" class="btn btn-danger px-5 rounded-pill shadow-sm">Learn More</a>
          </div>
          <div class="col-lg-5 px-5 mx-auto " :class="'order-'+ ((index+2)%2 || 2) + ' order-lg-' + ((index+3)%2 || 2) "><img style="max-height: 30rem; width: 100%;" :src="imageUrl + item.image" alt="" class="banner img-fluid mb-4 mb-lg-0"></div>
        </div>
      </div>
    </div>

    <div class="bg-light py-5" v-if="aboutUs.content.team">
      <div class="container py-5">
        <div class="row mb-4">
          <div class="col-lg-5">
            <h2 class="display-4 font-weight-light mb-0">{{ aboutUs.content.team.title }}</h2>
            <p class="font-italic text-muted">{{ aboutUs.content.team.subtitle }}</p>
          </div>
        </div>

        <div v-for="(team, index) in aboutUs.content.team.items" :key="index">
          <h4 class="display-5 font-weight-light text-uppercase text-danger">{{team.type}}</h4>
          <div class="row text-center mt-3"  >
            <!-- Team item-->
            <div class="col-xl-3 col-sm-6 mb-5"  v-for="(member, i) in team.data" :key="i">
              <div class="bg-white rounded shadow-sm py-5 px-4"><img :src="userImageeUrl + member.image" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">{{member.name}}</h5><span class="small text-uppercase text-muted">{{member.position}}</span>
              </div>
            </div>
            <!-- End-->

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
</style>

<style lang="scss">
</style>
