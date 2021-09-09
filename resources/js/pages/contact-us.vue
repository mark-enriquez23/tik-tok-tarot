<template>
  <div v-if="contactUs" id="contact" class="contact">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-5" data-aos="fade-right">
          <div class="section-title">
            <h2>Contact Us</h2>
            <p>{{ contactUs.sub_title }}</p>
          </div>
        </div>

        <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
          <iframe style="border:0; width: 100%; height: 270px;" :src="contactUs.location.embeded_maps" frameborder="0" allowfullscreen />
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

          <form class="php-email-form mt-4" @submit.prevent="saveMessage">
            <div class="form-row">
              <div class="col-md-6 form-group">
                <input id="name" v-model="form['name']" type="text" name="name" class="form-control" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                <div class="validate" />
              </div>
              <div class="col-md-6 form-group">
                <input id="email" v-model="form['email']" type="email" class="form-control" name="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email">
                <div class="validate" />
              </div>
            </div>
            <div class="form-group">
              <input id="subject" v-model="form['subject']" type="text" class="form-control" name="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject">
              <div class="validate" />
            </div>
            <div class="form-group">
              <textarea v-model="form['message']" class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message" />
              <div class="validate" />
            </div>
            <div class="mb-3">
              <div class="loading">
                Loading
              </div>
              <div class="error-message" />
              <div class="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div class="text-right">
              <v-button class="btn btn-danger" :disabled="!form.email || !form.name || !form.subject || !form.message">
                Send Message
              </v-button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Form from 'vform'
import Swal from 'sweetalert2'
import Footer from '../components/Utilities/Footer.vue'

export default {
  components: { Footer },
  layout: 'default',

  data: () => ({
    title: window.config.appName,
    imageUrl: window.config.assetURL + 'images/',
    userImageeUrl: window.config.assetURL + 'images/testimonials/',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    form: new Form({
      name: null,
      email: null,
      subject: null,
      message: null
    })
  }),
  beforeCreate () {
    this.$store.dispatch('contact-us/fetchContactUsData')
  },

  computed: mapGetters({
    authenticated: 'auth/check',
    contactUs: 'contact-us/contactUs'
  }),

  methods: {
    async saveMessage () {
      const { data } = await this.form.post('/api/contact-us/save')
      if (!data.success) {
        Swal.fire({
          title: 'Sending Message Failed',
          text: 'An error has occurred. Please try again.',
          type: 'error'
        })
      } else {
        Swal.fire({
          title: 'Success',
          text: 'Thank you for contacting us!',
          type: 'success'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
