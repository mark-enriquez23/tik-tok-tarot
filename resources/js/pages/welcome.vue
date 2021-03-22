<template>
  <div class="">
  <header class="masthead">
    <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
                <h1 class="text-uppercase font-weight-bold text-white">Welcome to Test a Psychic</h1>
                <hr class="divider my-2 col-2" style="background: #ffff" />
            </div>
            <div class="col-lg-8 align-self-baseline">
                <h4 class="font-weight-light mb-5 text-white">Where you Own the Power to Click.</h4>
                <div class="row no-gutters text-center" >
                  <div class="col-lg-6 mx-auto">
                    <a class="btn btn-primary btn-xl w-lg-50 w-75 text-white">Check Pricing</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="container">

  <div class="col-lg-12 px-0 pt-5 pb-5 bg-dark text-light my-5 ">
    <div id="client-testimonial-carousel" class="carousel slide" data-ride="carousel" style="height:200px;">
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active text-center p-4">
        <div class="blockquote text-center">
          <fa :icon="['fas', 'user']" class="h1"/>
          <p class="mb-0 col-lg-10 mx-auto"><i class="fa fa-quote-left"></i> Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <footer class="blockquote-footer">Jhon Doe 2</footer>
          <!-- Client review stars -->
          <!-- "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. -->
          <p class="client-review-stars">
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star-half']" />
          </p>
        </div>
      </div>
      <div class="carousel-item text-center p-4">
        <div class="blockquote text-center">

            <fa :icon="['fas', 'user']" class="h1"/>
         <p class="mb-0 col-lg-10 mx-auto"><i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <footer class="blockquote-footer">Jhon Doe 3</footer>
          <!-- Client review stars -->
          <!-- "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. -->
          <p class="client-review-stars">
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star-half']" />
          </p>
        </div>
      </div>
      <div class="carousel-item text-center p-4">
        <div class="blockquote text-center">

            <fa :icon="['fas', 'user']" class="h1"/>
        <p class="mb-0 col-lg-10 mx-auto"><i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <footer class="blockquote-footer">Jhon Doe</footer>
          <!-- Client review stars -->
          <!-- "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. -->
          <p class="client-review-stars">
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star']" />
            <fa :icon="['fas', 'star-half']" />
          </p>
        </div>
      </div>
    </div>
     <a class="carousel-control-prev" href="#client-testimonial-carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#client-testimonial-carousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}
.reader {
  height: calc(28rem + 74px);
}

#client-testimonial-carousel {min-height: 200px;}

.title {
  font-size: 85px;
}

.cover-bg {
  padding-top: calc(28rem + 74px);
  padding-bottom: 6rem;
}

.masthead {
  padding-top: 10.5rem;
  padding-bottom: 10.5rem;
  text-align: center;
  background-image: linear-gradient(
    rgba(235, 229, 229, 0.1),
    rgba(235, 229, 229, 0.1)
  ), url('/images/tarot2.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
}

.img-fluid {
  height: 400px !important;
  width: 100% !important;
}

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .img-fluid {
    height: 300px !important;
  }
}

</style>

<style lang="scss">
  .btn {
    cursor: pointer;
  }
</style>
