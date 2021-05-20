<template>
  <card class="p-6 m-4">
    <div class="row">
      <div class="col-lg-8">
        <h4 class="mb-3">My Videos</h4>
        <p class="mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
      </div>
       <div class="col-md-4 text-right">
        <button class="btn btn-primary btn-lg" @click="goBack"> <fa icon="plus-circle" fixed-width />Upload Video</button>
      </div>
    </div>

    <div class="mb-2">
      <div class="row">
        <div class="col-md-4 my-2" v-for="video in 8">
          <div>
            <img class="img-thumbnail p-0 mr-5" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80">
            <img class="reader-img m-3" align="left" src="http://tik-tok-tarot-master.test/images/profile.jpg">
            <h6 class="mt-3"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </b></h6>
            <p class="uploader-name mt-1">Sample Uploader</p>
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
    videoForm: new Form ({
      user_id:'',
      title:'',
      description:'',
      file:''
    }),
    filename:''
  }), 

  created () {},

  methods: {
    clickFileInput(){
      this.isProfileUpdating = true
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },

    previewFile(event){
      this.videoForm.file = event.target.files[0];
      this.filename = this.videoForm.file.name;
      console.log(event.target.files[0])
      console.log(event.target.files[0].name)
      //this.profile_photo = URL.createObjectURL( this.additionalForm.profile_photo);
    },

    uploadVideo(){
      if (!this.videoForm.file)
        swalOops("Please select a video file.")
      else
      {
      var formData = new FormData;
      formData.append("file", this.videoForm.file)
      formData.append("user_id", this.user.user_details[0].user_id)
      formData.append("description", this.videoForm.description)
      formData.append("title", this.videoForm.title)
      const { data } = axios.post('/api/vlog/upload',formData).then(res=>{
        console.log(res)
        if (res.data.success){
          swalSuccess("Video successfully updated").then(() =>{
               console.log("back")
            })
        }
      }).catch((e)=>{
        swalOops('A problem occurred')
      })
      }
    },

    goBack(){
      console.log("Back")
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
