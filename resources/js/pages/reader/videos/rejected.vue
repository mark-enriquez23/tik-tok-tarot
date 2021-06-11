<template>
  <card class="p-6 m-4">
    <div class="row">
      <div class="col-lg-8">
        <h4 class="mb-3">My Videos</h4>
        <p class="mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
      </div>
       <div class="col-md-2 text-right">
        <button class="btn btn-danger btn-lg" @click="goLive"> <fa icon="podcast" fixed-width />Go Live</button>
      </div>
      <div class="col-md-2 text-right">
        <button class="btn btn-danger btn-lg" @click="uploadVideo"> <fa icon="plus-circle" fixed-width />Upload Video</button>
      </div>
    </div>

    <div class="mb-2">
      <div class="row">
        <div class="col-md-4 my-2" v-for="video in videos.data"  :key="video">
          <div v-if="videos.data.is_approved == 'REJECTED' ? true : false">
            <div>
            <img class="img-thumbnail p-0" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80">
            </div> 
            <img class="reader-img m-3" align="left" src="http://tik-tok-tarot-master.test/images/profile.jpg">
            <h6 class="mt-3"><b>{{video.title}}</b></h6>
            <p class="uploader-name mt-1">{{video.user.username}}</p>
          </div>
        </div>   
      </div> 

      <!-- <div class="col-lg-8" v-else>
        <div class="row">
          <div class="col-lg-12 mt-4 mt-lg-0">
            <div data-aos="zoom-in" data-aos-delay="100">
              <h5> You have no rejected videos.</h5>
            </div>
          </div>
        </div>
      </div>           -->
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

  created () {
    this.fetchVideos();
  },

  methods: {
    
    fetchVideos(){
        console.log(this.user.id);
        axios.get('/api/vlog/user/' + this.user.id ).then(res=>{
        this.videos = res.data;
        console.log(res);
        console.log(this.videos);
       
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
