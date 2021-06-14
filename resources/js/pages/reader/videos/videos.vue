<template>
  <card class="p-6 m-4">
    <div class="row">
      <div class="col-lg-8">
        <h4 class="mb-3">My Videos</h4>
      </div>
       <div class="col-md-2 text-right">
        <button class="btn btn-danger btn-lg" @click="goLive"> <fa icon="podcast" fixed-width />Go Live</button>
      </div>
      <div class="col-md-2 text-right">
        <button class="btn btn-danger btn-lg" @click="uploadVideo"> <fa icon="plus-circle" fixed-width />Upload Video</button>
      </div>
    </div>

    <div class="mb-2">
      <!-- if video exist here -->
      <div class="row" v-if="videos">
        <div class="col-md-4 my-2" v-for="video in videos"  :key="video.id">
          <div>
            <div>
            <img class="img-thumbnail p-0" :src="`/uploads/vlog/thumbnails/${video.thumbnail}`">
            </div>
            <img class="reader-img m-3" align="left" :src="`/images/${video.user.user_details.profile_photo}`">
            <h6 class="mt-3"><b>{{video.title}}</b></h6>
            <p class="uploader-name mt-1">{{video.user.username}}</p>
          </div>
        </div>
      </div>
      <!-- if not, show this message -->
      <div class="row" v-else>
        <div class="col-lg-12 mt-4 mt-lg-0">
          <div data-aos="zoom-in" data-aos-delay="100">
            <h5> You have no videos.</h5>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import axios from 'axios'
import { swalOops, swalSuccess } from "~/helpers"

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {  },

   computed: mapGetters({
    user: 'auth/user',
  }),

  data: () => ({
    videos:[]
  }),

  methods: {

    fetchVideos(){
        console.log(this.user.id);
        axios.get('/api/vlog/user/' + this.user.id + '/APPROVED').then(res=>{
        this.videos = res.data.data;

      }).catch((e)=>{
        swalOops('A problem occurred');
      })
    },

    uploadVideo(){
      this.$router.push({
        name: "reader.upload-video",
      });
    },

    goLive(){
      this.$router.push({
        name: "reader.go-live",
        params: {
          roomName:this.user.username
        }
      });
    },
  },

  beforeMount(){
      this.$store.dispatch('auth/fetchUser');
      if (!this.user){
        this.$router.push({ name: 'home' })
      }
      this.fetchVideos();
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
