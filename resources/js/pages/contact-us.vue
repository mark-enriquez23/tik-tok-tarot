<template>
    <div id="contact" class="contact" v-if="contactUs">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-5" data-aos="fade-right">
            <div class="section-title">
              <h2>Contact Us</h2>
              <p>{{ contactUs.sub_title }}</p>
            </div>
          </div>

          <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <iframe style="border:0; width: 100%; height: 270px;" :src="contactUs.location.embeded_maps" frameborder="0" allowfullscreen></iframe>
            <div class="info mt-4">
              <div class="icon">
                <fa :icon="['fas', 'map-pin' ]" />
              </div>
              <h4>Location:</h4>
              <p>{{ contactUs.location.address.street }}, {{ contactUs.location.address.city }} {{ contactUs.location.address.state }} {{ contactUs.location.address.zip_code }}</p>
            </div>
            <div class="row">
              <div class="col-lg-6 mt-4">
                <div class="info">
                  <div class="icon">
                    <fa :icon="['fas', 'envelope' ]" />
                  </div>
                  <h4>Email:</h4>
                  <p>{{ contactUs.email }}</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="info w-100 mt-4">
                  <div class="icon">
                    <fa :icon="['fas', 'phone' ]" />
                  </div>
                  <h4>Call:</h4>
                  <p>{{ contactUs.phone_number }}</p>
                </div>
              </div>
            </div>

            <form  method="post" role="form" class="php-email-form mt-4">
              <div class="form-row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="col-md-6 form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-right"><button class="btn btn-danger">Send Message</button></div>
            </form>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: { },
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },
  beforeCreate() {
    this.$store.dispatch('contact-us/fetchContactUsData')
  },

  data: () => ({
    title: window.config.appName,
    imageUrl: window.config.assetURL + 'images/',
    userImageeUrl: window.config.assetURL + 'images/testimonials/',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
  }),

  computed: mapGetters({
    authenticated: 'auth/check',
    contactUs: 'contact-us/contactUs'
  })
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
