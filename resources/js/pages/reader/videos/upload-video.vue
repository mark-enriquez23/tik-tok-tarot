<template>
  <card class="p-6 m-4">
    <div class="row">
      <div class="col-lg-8">
        <h4 class="mb-3">Upload Video</h4>
        <p class="mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
      </div>
       <div class="col-md-4 text-right">
        <button class="btn btn-danger btn-lg" @click="goBack">Back</button>
      </div>
    </div>

    <div class="mb-2">
      <form @submit.prevent="uploadVideo" @keydown="videoForm.onKeydown($event)">
        <div class="row">

          <div class="col-md-6">   
            <div class="form-group col-md-12 mx-auto mx-auto  ">
              <label>Title</label>
              <input  v-model="videoForm.title" :class="{ 'is-invalid': videoForm.errors.has('title') }" class="form-control" type="text" name="title" required>
              <has-error :form="videoForm" field="title" />
            </div>

            <div class="form-group col-md-12 mt-3 mx-auto">
              <label>Description</label>
              <vue-editor v-model="videoForm.description" :class="{ 'is-invalid': videoForm.errors.has('description') }"></vue-editor>
              <has-error :form="videoForm" field="description" />
            </div>
          </div>
        
          <div class="col-md-6">
            <div class="form-group col-md-8 mx-auto mx-auto" hidden>
              <input type="file" name="file" @change="previewFile" ref="file" accept="video/*">
                <has-error :form="videoForm" field="file" />
            </div>

            <div class="form-group col-md-6">
              <label>Video File</label>
              <button type="button" class="btn btn-primary w-100" @click.prevent="clickFileInput">
                <fa icon="plus-circle" fixed-width />Select Video File
              </button>
            </div>

            <div class="form-group col-md-12 mt-3">
              <label>File Name</label>
              <input v-model="filename" class="form-control" type="text" disabled>
            </div>
          </div>
        </div>    
       
        <div class="form-group row col-md-2 mx-auto mt-3">
          <v-button class="btn btn-primary w-100">
            Upload
          </v-button>
        </div>

      </form>
    </div> 
  </card>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import axios from 'axios'
import { swalOops, swalSuccess } from "~/helpers"
import { VueEditor } from "vue2-editor"

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: { VueEditor },

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

    uploadVideo() {
      if ( ! this.videoForm.file ) {
        swalOops( "Please select a video file." )

      } else {
        var formData = new FormData
        formData.append( "file", this.videoForm.file )
        formData.append( "user_id", this.user.id )
        formData.append( "description", this.videoForm.description )
        formData.append( "title", this.videoForm.title )
        const { data } = axios.post( '/api/vlog/upload', formData ).then( res => {
          
          if ( res.data.success ){
            swalSuccess( "Video successfully updated" ).then( () => {
              this.$router.push({ name: 'vlogs.list' })
            } )
          }
        } ).catch( ( e ) => {
          swalOops( 'A problem occurred' )
        } )
      }
    },

    goBack(){
       this.$router.push({
        name: "reader.videos",
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
}
.hired-tag{
  font-size: 12px;
  font-weight: bolder;
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
