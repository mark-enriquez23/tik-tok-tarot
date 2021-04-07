<template>
  <card :title="$t('home')">
    {{ $t('you_are_logged_in') }}
    <video id="video" src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls></video><br/>
    <button @click="capture()">Capture</button> <br/><br/>
    <canvas id="canvas"></canvas> <br/><br/>
    <button @click="save()">Save</button>
  </card>
</template>

<script>
export default {
  middleware: 'auth',
  metaInfo () {
    return { title: this.$t('home') }
  },
  methods: {
    capture(){
      var canvas = document.getElementById('canvas');
      var video = document.getElementById('video');
      canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    },
    save(){
      var src = "http://vjs.zencdn.net/v/oceans.mp4"; ///video url not youtube or vimeo,just video on server
      this.display(src)
    },
    createObjectURL(object) {
      return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
    },
    async display(videoStream){
      let blob = await fetch(videoStream).then(r => r.blob());
      var videoUrl=this.createObjectURL(blob);
      console.log(blob)
      console.log(videoUrl)
    }
  }
}
</script>
