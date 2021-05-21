<template>
  <card class="py-3 m-4">
    <h4 class="mb-3">My History</h4>
    <p class="mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
    <div class="mb-2">
      <div class="row">
        <div class="col-lg-12 mb-2">
          <table class="table">
            <tbody>
              <tr class="mb-2" v-for="history in 5">
                <td>
                  <div>
                    <img class="img-thumbnail p-0 mr-5" align="left" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80">
                  </div>
                  <div>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                    <div>
                      <img class="reader-img mx-2" align="left" src="http://tik-tok-tarot-master.test/images/profile.jpg">
                      <p class="mt-3">Sample Uploader</p>
                    </div>
                    </br>
                    <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices diam et nibh pellentesque, nec facilisis odio dapibus. Sed mi erat, pretium eget feugiat vel, </p>
                  </div>
                </td>
                <td><fa icon="times-circle" fixed-width /></td>
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
import Form from 'vform'
import { mapGetters } from 'vuex'
import axios from 'axios'
import { swalOops, swalSuccess } from "~/helpers"

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {
  },

  data: () => ({
    videos:[]
  }),

  computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers',
  }),

  created () {
    this.fetchHistory();
  },

  methods: {
      fetchHistory(){
        axios.get('/api/user-history/'+ this.user.id).then(res=>{
        this.videos = res.data;
        console.log(res);
        console.log(this.videos);
       
      }).catch((e)=>{
        swalOops('A problem occurred');
      })
    },
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
