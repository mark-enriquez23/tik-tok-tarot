<template>
  <div class="" v-if="aboutUs">
    <div class="bg-light">
      <div class="container py-5">
        <div class="row h-100 align-items-center py-5">
          <div class="col-lg-6">
            <div class="section-title">
              <h2>Why Vlog?</h2>
              <p>{{ aboutUs.sub_title }}</p>
            </div>
          </div>
          <div class="col-lg-6 mt-lg-0 mt-4 d-lg-block"><img :src="imageUrl + aboutUs.banner_image" alt="" class="banner img-fluid"></div>
        </div>
      </div>
    </div>


    <div class="container py-5">
      <header class="text-center mb-5">
          <h2>Our Vlogs</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </header>
      <div class="card-columns">
        <div class="card" v-for="vlog in vlogs" :key="vlog.id" >
          <div class="thumb-container">

            <img class="card-img-top" :src="vlogImage" :alt="vlog.thumbnail">
            <div class="overlay">
            </div>
          </div>
            <div class="card-body">
              <h4 class="card-title text-danger mb-0">{{ vlog.name }}</h4>
              <!-- <p class="text-muted">By {{ vlog.author }}</p> -->
              <p class="meta mb-2">
              <span class="mr-2"><fa class="" :icon="['fas', 'calendar-alt']" /> {{ vlog.created_at }}</span>
              <!-- <span><fa class="" :icon="['fas', 'comment']" /> {{vlog.comments}} Comments</span> -->
              </p>
              <p class="card-text text-muted">
                {{ vlog.content }}
              </p>
              <p class="client-review-stars">
                <fa :icon="['fas', 'star']" v-for="index in vlog.rate" :key="index" />
                    
              </p>
              <!-- <router-link :to="{ name: 'vlog.view' }">
              <a href="" class="text-danger">Continue Reading</a>
              </router-link> -->
          </div>
        </div>
      </div>
  </div>
  <CoolLightBox
      :items="vlogs"
      :index="index"
      @close="index = null"> </CoolLightBox>
  </div>
</template>

<script>
import Vue from 'vue';
import vmodal from 'vue-js-modal'
import { mapGetters } from 'vuex'
import moment from 'moment'
import CoolLightBox from 'vue-cool-lightbox';
import Swal from 'sweetalert2';
import axios from "axios"

Vue.use(vmodal)


export default {
  components: { CoolLightBox },
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },
  beforeCreate() {
    this.$store.dispatch('about-us/fetchAboutUsData')
  },

  data: () => ({
    title: window.config.appName,
    index: null,
    imageUrl: window.config.assetURL + 'images/',
    userImageeUrl: window.config.assetURL + 'images/testimonials/',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    vlogImage: window.config.assetURL + 'images/listing-tnumbnail-3.jpg',
    vlogs: []
  }),

  created(){
    this.fetchVlogs()
  },

  computed: mapGetters({
    authenticated: 'auth/check',
    aboutUs: 'about-us/aboutUs'
  }),

  methods: {
    async fetchVlogs() {
        var vlogs = await axios.get("/api/upload/all-vlogs");
        this.vlogs = vlogs.data.data;
        console.log(this.vlogs);
        if (!vlogs.data.success) {
          Swal.fire({
          title: 'Fetching Vlogs Failed',
          text: "An error has occurred. Please try again.",
          type: 'error'
        })
      }
    },

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

  .thumb-container {
    position: relative;
    overflow: hidden;
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      background: rgba(0, 0, 0, 0.534);
    }

    &:hover {
      cursor: pointer;
      .overlay {
          opacity: 0.7;
      }
    }
  }
</style>

<style lang="scss">
</style>
