<template>
  <card class="py-3 m-4">
    <div class="row">
      <div class="col-lg-8">
        <h4 class="mb-3">
          Watch History
        </h4>
      </div>
    </div>

    <div class="mb-2">
      <div class="row">
        <div class="col-lg-12 mb-2">
          <div v-if="!history">
            The list has no videos.
          </div>
          <table class="table">
            <tbody>
              <tr v-for="history in histories" :key="history.id" class="mb-2">
                <td>
                  <div>
                    <img class="img-thumbnail p-0 mr-5" align="left" :src="'/uploads/vlog/thumbnails/'+history.video.thumbnail">
                  </div>
                  <div>
                    <h4>{{ history.video.title }}</h4>
                    <div>
                      <img class="reader-img mx-2" align="left" src="/images/profile.jpg">
                      <p class="mt-3">
                        {{ history.user.username }}
                      </p>
                    </div>
                    <br/>
                    <p class="mt-4">
                      {{ history.video.description }}
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  scrollToTop: false,

  components: {
  },

  data: () => ({
    histories: []
  }),

  computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers'
  }),

  beforeMount () {
    this.fetchHistory()
    if (!this.user) {
      this.$router.push({ name: 'home' })
    }
  },

  methods: {
    fetchHistory () {
      axios.get('/api/user-history/me').then((res) => {
        this.histories = res.data.data
      })
    }
  }
}
</script>
<style>
.reader-img{
  border-radius: 50%;
  height:35px;
  width:35px;
}
.hired-tag{
  font-size: 12px;
  font-weight: bolder;
}
.img-thumbnail{
  width: 35%;
  height: 35%;
  object-fit:cover;
}
</style>
