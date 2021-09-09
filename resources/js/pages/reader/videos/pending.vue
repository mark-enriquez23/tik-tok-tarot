<template>
  <card class="p-6 m-4">
    <div class="row">
      <div class="col-lg-8">
        <h4 class="mb-3">
          Pending Videos
        </h4>
        <p>Please patiently wait for the admin to approve your videos</p>
      </div>
      <div class="col-md-2 text-right">
        <button class="btn btn-danger btn-lg" @click="goLive">
          <fa icon="podcast" fixed-width />Go Live
        </button>
      </div>
      <div class="col-md-2 text-right">
        <button class="btn btn-danger btn-lg" @click="uploadVideo">
          <fa icon="plus-circle" fixed-width />Upload Video
        </button>
      </div>
    </div>

    <div v-if="loading" class="mb-2 text-center">
      <b-spinner label="Loading..." />
    </div>

    <div v-else class="mb-2">
      <!-- if video exist here -->
      <div v-if="videos.length != 0" class="row">
        <div v-for="video in videos" :key="video.id" class="col-md-4 my-2">
          <div>
            <div>
              <img class="img-thumbnail p-0" :src="`/uploads/vlog/thumbnails/${video.thumbnail}`">
            </div>
            <img class="reader-img m-3" align="left" :src="`/images/${video.user.user_details.profile_photo}`">
            <h6 class="mt-3">
              <b>{{ video.title }}</b>
            </h6>
            <p class="uploader-name mt-1">
              {{ video.user.username }}
            </p>
          </div>
        </div>
      </div>
      <!-- if not, show this message -->
      <div v-else class="row">
        <div class="col-lg-12 mt-4 mt-lg-0">
          <div data-aos="zoom-in" data-aos-delay="100">
            <h6> You have no pending videos.</h6>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import { swalOops } from '~/helpers'

export default {
  scrollToTop: false,

  components: { },

  data: () => ({
    videos: [],
    loading: true
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  beforeMount () {
    // this.$store.dispatch('auth/fetchUser');
    if (!this.user) {
      this.$router.push({ name: 'home' })
    }
    this.fetchVideos()
  },

  methods: {

    fetchVideos () {
      this.loading = true
      axios.get('/api/vlog/user/' + this.user.id + '/PENDING').then(res => {
        this.videos = res.data.data
        this.loading = false
      }).catch((e) => {
        this.loading = false
        swalOops('A problem occurred')
      })
    },

    uploadVideo () {
      this.$router.push({
        name: 'reader.upload-video'
      })
    },

    goLive () {
      this.$router.push({
        name: 'reader.go-live',
        params: {
          roomName: this.user.username
        }
      })
    }
  }
}
</script>
<style>
.reader-img{
  border-radius: 50%;
  height:45px;
  width:45px;
}

.uploader-name{
  font-size:15px;
}
.hired-tag{
  font-size: 12px;
  font-weight: bolder;
}
.img-thumbnail{
  width: 100%;
  height: 100%;
  object-fit:cover;
}
.refresh{
  color:#007BFF;
}
.refresh:hover{
  text-decoration:underline;
  cursor:pointer;
}

.credits{
  background-color: #C82333;
  color:white;
  float:right;
  border-radius:10px;
}
</style>
