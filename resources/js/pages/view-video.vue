<template>
  <div class="row m-4">
    <div class="col-lg-8">
      <div class="row">
        <div class="col-12 p-0">
          <img class="img-thumbnail p-0" align="left" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80">
        </div>
      </div>
      <div class="row p-2 pt-4 video-info">
        <div class="col-12">
          <img class="reader-img mr-4" align="left" src="http://tik-tok-tarot-master.test/images/profile.jpg">
          <div class="ml-2">
            <h5><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </b></h5>
            <p class="mt-1">
              Sample Uploader
            </p>
          </div>
        </div>
        <hr class="m-0 mt-4">
        <p class="mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices diam et nibh pellentesque, nec facilisis odio dapibus. Sed mi erat, pretium eget feugiat vel,
        </p>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="row gray">
        <div class="p-2">
          <p>chat goes here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,

  components: {
  },

  data: () => ({
  }),

  computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers'
  }),

  created () {
  },

  beforeMount () {
    this.$store.dispatch('admin-reader/fetchReaders')
    this.$store.dispatch('auth/fetchUser')

    if (!this.user) {
      this.$router.push({ name: 'home' })
    }
  },

  methods: {
    view (id) {
      this.$router.push({
        name: 'admin.reader-form',
        params: {
          id: id
        }
      })
    }
  }
}
</script>
<style>
.reader-img{
  width:75px;
  height:75px;
  border-radius: 50%;
}
.hired-tag{
  font-size: 12px;
  font-weight: bolder;
}
.img-thumbnail{
  width: 100%;
  height: auto;
}

hr{
  width: 100%;
  color: #FFFF00;
  height: 1px;
}

.video-info{
  background-color: white;
}

.gray{
  background-color: grey;
}

</style>
