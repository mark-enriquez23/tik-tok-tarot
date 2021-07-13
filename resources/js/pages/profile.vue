<template>
  <b-container>
    <b-row class="mt-5">
      <b-col>
        <h1 class="font-weight-light">
          Reader's Profile
        </h1>
        <hr>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="4">
        <b-img :src="`/images/${userData.user_details.profile_photo}`" fluid-grow />
        <h4 class="text-uppercase text-center mt-3">
          {{ userData.username }}
        </h4>
        <p class="small text-center">
          Joined since {{ userData.created_at | moment("MMMM Do YYYY") }}
        </p>
      </b-col>
      <b-col cols="8">
        <b-row>
          <b-col>
            <span>
              Biography:
            </span>
          </b-col>
          <b-col>
            <span>
              {{ userData.user_details.reader_bio }}
            </span>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>
            Expertise:
          </b-col>
          <b-col>
            <b-badge variant="danger">
              {{ userData.user_details.expertise }}
            </b-badge>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>
            Rating:
          </b-col>
          <b-col>
            <star-rating :rating="5" :max-rating="5" :star-size="20" :show-rating="false" rounded-corners read-only />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <hr>
    <b-row>
      <b-col>
        <div class="vlogs-list">
          <h3 class="my-3 text-center text-uppercase">
            Vlogs
          </h3>
        </div>
      </b-col>
    </b-row>
    <b-row v-if="userData.vlogs">
      <b-col v-for="vlog in userData.vlogs" id="all-vlogs" :key="vlog.id" col sm="12" lg="4" class="video text-center">
        <!-- <div class="video-time">15.13</div> -->
        <router-link :to="'/vlogs/view/'+vlog.id">
          <video :src="`/uploads/vlog/${vlog.file_name}`" class="w-100" />
          <!-- <img class="w-100" :src="`/uploads/vlog/thumbnails/${vlog.thumbnail}`" alt=""> -->
        </router-link>
        <!-- <div class="video-content"></div> -->
        <b-media>
          <h6 class="mt-0 mb-0">
            {{ vlog.title }}
          </h6>
          <p class="mb-0 vlog-description" v-html="vlog.description" />
        </b-media>
      </b-col>
    </b-row>
    <b-row v-if="!userData.vlogs">
      <div class="vlogs-list">
        <h3 class="mt-5">
          Vlogs
        </h3>
      </div>
      <div>
        <p> No videos to show </p>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating
  },

  data () {
    return {
      userData: {
        user_details: {
          profile_photo: ''
        }
      }
    }
  },

  created () {
    this.getReader()
  },
  methods: {
    async getReader () {
      console.log(this.$route.params.reader)

      await axios.get(`/api/reader/${this.$route.params.reader}`)
        .then((response) => {
          console.log('RESPONSE::', response)
          this.userData = response.data.data
        })
        .catch((err) => {
          console.warn('warning', err)
        })
    }
  }
}
</script>
