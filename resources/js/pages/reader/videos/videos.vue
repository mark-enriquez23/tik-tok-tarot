<template>
  <card class="p-6 m-4">
    <div class="row">
      <div class="col-lg-7">
        <h4 class="mb-3">Upload Video</h4>
        <p class="mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
      </div>
    </div>

    <div class="mb-2">
      <form @submit.prevent="updateProfile" @keydown="additionalForm.onKeydown($event)">
        <div class="row">      
          <div class="col-md-12">
            <!-- Username -->
            <div class="form-group col-md-10 mx-auto mx-auto  " hidden>
              <input type="file" name="profile_photo" @change="previewFile"  ref="file" accept="video/*">
              <has-error :form="additionalForm" field="profile_photo" />
            </div>
          </div>

          <!-- Submit Button -->
      
        
          <div class="form-group row  col-md-4 mt-3">
            <div class="col-md-8 px-0 pr-lg-1 mx-auto"  >
              <!-- Bac Button -->
              <button type="button" class="btn btn-primary w-100" @click.prevent="clickFileInput">
              <!-- <v-button :loading="form.busy"> -->
              <fa icon="plus-circle" fixed-width /> Select Video File
              </button>
            </div>
          </div>
        </div>
         
        <div class="row">
          <div class="col-md-6">   
          
            <!-- Password -->
            <div class="form-group col-md-10 mx-auto mx-auto  ">
              <label>{{ $t('password') }}</label>
              <input  v-model="password" :class="{ 'is-invalid': additionalForm.errors.has('password') }" class="form-control" type="password" name="password" :readonly="!isPasswordUpdating">
              <has-error :form="additionalForm" field="password" />
            </div>

          </div>
        
          <div class="col-md-6">

            <!-- Confirm Password -->
            <div class="form-group col-md-10 mx-auto mx-auto  ">
              <label>{{ $t('Confirm Password') }}</label>
              <input  v-model="confirmPassword" :class="{ 'is-invalid': additionalForm.errors.has('confirm-password') }" class="form-control" type="password" name="confirmPassword" :readonly="!isPasswordUpdating">
              <has-error :form="additionalForm" field="confirmPassword" />
            </div>
        
          </div>

       
          <!-- Submit Button -->
          <div class="form-group row  col-md-4 mx-auto mt-3" v-if="isPasswordUpdating">
            <div class="col-md-6 px-0 pr-lg-1"  >
              <!-- Bac Button -->
              <button type="button" class="btn btn-danger w-100" @click.prevent="cancelPasswordUpdate()"  >
              <!-- <v-button :loading="form.busy"> -->
              Cancel
              </button>
            </div>

            <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
              <v-button class="btn btn-primary w-100" >
                Confirm
              </v-button>
            </div>
          </div>
        
      </div>
    </form>
    </div> 
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Clipboard from 'v-clipboard'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {
    Clipboard
  },

   computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers',
  }),

  data: () => ({
    referral_code:String
  }),

 

  created () {
     
  },

  methods: {
      async refresh() {
        console.log("button-called")
        var referral = await axios.get("/api/user/refresh-code/"+this.user.id);
        console.log(referral)
        this.referral_code = referral.data.data.referral_code;
        console.log(this.referral_code)
    },

    getValue(){
      return 'http://tik-tok-tarot-master.test/register'+ this.referral_code;
    },

    copy(){
      console.log("copied-text")
      let value = 'https://testsite.tiktok-tarot.live/register?referral_code=' + this.referral_code;
      this.$clipboard(value)
    }
  },

  beforeMount(){
      this.$store.dispatch('auth/fetchUser');
      console.log(this.user);
      console.log(this.user.id);
      this.referral_code = this.user.referral_code;
      console.log(this.user.referral_code)
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
