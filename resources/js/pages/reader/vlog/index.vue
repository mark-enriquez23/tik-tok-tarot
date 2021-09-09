<template>
  <div class="">
    <h5>Test</h5>
    <p>Generate Thumbnail from video url</p>
    <p>Sample video url: http://vjs.zencdn.net/v/oceans.mp4</p>
    <p>Note: Needed to upload video first then generate thumbnail from received uploaded video path</p>
    <button @click="save()">
      Generate
    </button>
    <img :src="imgSrc" alt="sample generated thumbnail">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { createObjectURL, videoToBlob, blobVideoToBlobThumbnail } from '../../../helpers/index'

export default {
  components: { },
  layout: 'default',

  data: () => ({
    imgSrc: ''
  }),

  computed: mapGetters({
    // authenticated: 'auth/check',
  }),

  beforeCreate () {
    this.$store.dispatch('about-us/fetchAboutUsData')
  },

  methods: {
    async save () {
      var src = 'http://vjs.zencdn.net/v/oceans.mp4' /// video url not youtube or vimeo,just video on server
      let blob = await videoToBlob(src) // convert video to blob
      // save this blob to database thumbnail column
      var thumbnail = await blobVideoToBlobThumbnail(blob)
      var imageUrl = createObjectURL(thumbnail) // convert blob to ObjectUrl
      this.imgSrc = imageUrl // store
    }
  }
}
</script>
