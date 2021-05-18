<template>
  <card class="p-6 m-4">
    <div class="row">
      <div class="col-lg-7">
        <h4 class="mb-3">Upload Video</h4>
        <p class="mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
      </div>
    </div>

    <div class="mb-2">
      <form @submit.prevent="updateProfile" @keydown="videoForm.onKeydown($event)">
        <div class="row">

          <div class="col-md-6">   
            <div class="form-group col-md-12 mx-auto mx-auto  ">
              <label>{{ $t('Title') }}</label>
              <input  v-model="title" :class="{ 'is-invalid': videoForm.errors.has('title') }" class="form-control" type="text" name="title">
              <has-error :form="videoForm" field="title" />
            </div>

            <div class="form-group col-md-12 mt-3 mx-auto">
              <label>{{ $t('Description') }}</label>
              <textarea  v-model="description" :class="{ 'is-invalid': videoForm.errors.has('description') }" class="form-control" type="text" name="description"></textarea>
              <has-error :form="videoForm" field="description" />
            </div>
          </div>
        
          <div class="col-md-6">
            <div class="form-group col-md-8 mx-auto mx-auto  " hidden>
              <input type="file" name="file" @change="previewFile" ref="file" accept="video/*">
                <has-error :form="videoForm" field="file" />
            </div>

            <div class="form-group col-md-6">
              <label>{{ $t('Video File') }}</label>
              <button type="button" class="btn btn-primary w-100" @click.prevent="clickFileInput">
                <fa icon="plus-circle" fixed-width />Select Video File
              </button>
            </div>

            <div class="form-group col-md-12 mt-3">
              <label>{{ $t('File Name') }}</label>
              <input v-model="filename" class="form-control" type="text" name="filename" :disabled="true">
            </div>
          </div>
        </div>    
       
        <div class="form-group row col-md-2 mx-auto mt-3">
         
            <v-button class="btn btn-primary w-100" >
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
.img-thumbnail{
  width: 50%;
  height: 50%;
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
