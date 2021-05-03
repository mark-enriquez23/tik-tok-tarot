<template>
  <card class="py-3 m-4">
    <h4 class="mb-3">My Referrals</h4>
    <p class="mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
    <div class="mb-2">
      <div class="row">
        <div class="col-lg-5 mb-2">
          <input :value="'http://tik-tok-tarot-master.test/register?&referral_code='+referral.referral_code" class="form-control w-20" disabled>
        </div>
        <div class="col-lg-3 mb-2">
           <v-button class="btn btn-primary w-10">Copy</v-button>
        </div>
      </div>
      <div>
        <p class="refresh">Refresh Referral Code</p>
      </div>
    </div> 
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {
  },

  data: () => ({
    referral:""
  }),

  computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers',
  }),

  created () {
    this.fetchReferral();
  },

  methods: {
      async fetchReferral() {
        var referral = await axios.get("/api/user/refresh-code/"+this.user.id);
        this.referral = referral.data.data;
        console.log(this.referral)
        // console.log(this.vlogs);
        // if (!this.vlogs.success) {
        //   Swal.fire({
        //   title: 'Fetching Vlogs Failed',
        //   text: "An error has occurred. Please try again.",
        //   type: 'error'
        // })
      //}
    },

    getValue(){
      return 'http://tik-tok-tarot-master.test/register'+ this.referral.referral_code;
    }
  },

  beforeMount(){
      this.$store.dispatch('auth/fetchUser');
      console.log(this.user.id);
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
</style>
