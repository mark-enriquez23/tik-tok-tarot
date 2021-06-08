<template>
  <card class="p-6 m-4">
    <div class="row">
    <div class="col-lg-7">
      <h4 class="mb-3">My Referrals</h4>
      <p class="mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
    </div>

    <div class="col-lg-5 mt-4 mt-lg-0">
      <div class="member red-background" data-aos="zoom-in" data-aos-delay="100">
        <div class="member-info">
          <h5 class="credits p-3 m-2" >My Points: 15</h5>
        </div>
      </div>
    </div>
    </div>

    <div class="mb-2">
      <div class="row">
        <div class="col-lg-5 mb-2">
          <input :value="'https://testsite.tiktok-tarot.live/register?referral_code=' + referral_code" class="form-control w-20" disabled id="referral-code">
        </div>
        <div class="col-lg-3 mb-2">
           <button class="btn btn-primary w-10" @click.prevent="copy()">Copy</button>
        </div>
      </div>
      <div>
        <a class="refresh" @click.prevent="refresh()">Refresh Referral Code</a>
      </div>
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
