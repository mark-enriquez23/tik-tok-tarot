<template>
  <card class="py-3 m-4">
    <h4 class="mb-3">Notifications</h4>
    <p class="mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
    <div class="mb-2">
      <div class="row">
        <div class="col-lg-8 mb-2">
          <table class="table">
            <tbody>
              <tr class="mb-2" v-for="history in 5">
                <td>
                   <h5>Reader uploaded a video!</h5>
                  <div>
                    <img class="img-thumbnail p-0 mr-5" align="left" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80">
                  </div>
                  <div>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
                    <h6 class="mt-1">Sample Uploader</h6>
                    <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices diam et nibh pellentesque, nec facilisis odio dapibus. Sed mi erat, pretium eget feugiat vel, </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
         <div class="col-lg-4">
           <!-- <card>Sample</card> -->
        </div>
      </div>
    </div> 
  </card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {
  },

  data: () => ({
  }),

  computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers',
  }),

  created () {
  },

  methods: {
      view(id){
        this.$router.push({
            name: "admin.reader-form",
            params: {
                id: id
            }
        });
      }
  },

  beforeMount(){
      this.$store.dispatch("admin-reader/fetchReaders");
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
</style>
