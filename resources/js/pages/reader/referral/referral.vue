<template>
  <card class="p-6 m-4">
    <div class="row">
      <div class="col-lg-7">
        <h4 class="mb-3">
          My Referrals
        </h4>
        <p class="mb-5">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        </p>
      </div>

      <div class="col-lg-5 mt-4 mt-lg-0">
        <div class="member red-background" data-aos="zoom-in" data-aos-delay="100">
          <div class="member-info">
            <h5 class="credits p-3 m-2">
              My Points: 15
            </h5>
          </div>
        </div>
      </div>
    </div>

     <div v-if="referral_code" class="mb-2" >
      <div class="row">
        <div class="col-lg-5 mb-2">
          <input id="referral-code" :value="'https://testsite.tiktok-tarot.live/register?referral_code=' + referral_code" class="form-control w-20" disabled>
        </div>
        <div class="col-lg-3 mb-2">
          <button class="btn btn-primary w-10" @click.prevent="copy()">
            Copy
          </button>
        </div>
      </div>
      <div>
        <a class="refresh" @click.prevent="refresh()">Refresh Referral Code</a>
      </div>
    </div>

    <div v-else class="mb-2">
      <div class="row">
        <div class="col-lg-12 mb-2">
          <h6>This is an account used for testing purposes. Please create a new account to get a referral code.</h6>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import { swalSuccess } from '../../../helpers'
import axios from 'axios'

export default {
  scrollToTop: false,

  components: {
  },

  data: () => ({
    referral_code: String
  }),

  computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers'
  }),

  created () {

  },

  beforeMount () {
    this.referral_code = this.user.referral_code
    if (!this.user) {
      this.$router.push({ name: 'home' })
    }
  },

  methods: {
    async refresh () {
      var referral = await axios.get('/api/user/refresh-code/' + this.user.id)
      this.referral_code = referral.data.data.referral_code
    },

    getValue () {
      return 'http://tik-tok-tarot-master.test/register' + this.referral_code
    },

    copy () {
      swalSuccess('Copied!')
      let value = 'https://testsite.tiktok-tarot.live/register?referral_code=' + this.referral_code
      this.$clipboard(value)
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
