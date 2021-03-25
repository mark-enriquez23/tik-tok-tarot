<template>
  <!-- ======= Footer ======= -->
  <footer id="footer" v-if="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>TikTok-Tarot</h3>
            <p>
              {{footer.additional_footer_detail.address}} <br><br>
              <strong>Phone:</strong> {{footer.additional_footer_detail.phone_number}}<br>
              <strong>Web Accredited</strong><br>
              <span class="row no-gutters" >
                <fa v-for="accIcons in footer.accredited_icons" :key="accIcons" :icon="['fas', accIcons ]" class="text-danger mr-2" />
              </span>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>General Services</h4>
            <ul>
              <li> <a href="#">Copyright</a></li>
              <li> <a href="#">Purchase Readings</a></li>
              <li> <a href="#">Terms of Conditions</a></li>
              <li> <a href="#">Refund policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Payment Options</h4>
            <ul>
              <li> <a href="#">Cash</a></li>
              <li> <a href="#">Cards</a></li>
              <li> <a href="#">Mobile payments</a></li>
              <li> <a href="#">Electronic bank transfers</a></li>
              <li> <a href="#">Checks</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Contact Support</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <p>
              <strong>Email: </strong> {{footer.contact_support}}
            </p>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="mr-md-auto text-center text-md-left">
        <div class="copyright">
          &copy; Copyright <strong><span>TikTok-Tarot</span></strong>. All Rights Reserved
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a :href="item.url" v-for="(item, index) in footer.social_media_links" :key="index"><fa :icon="['fab', item.type ]" class="" /></a>
      </div>
    </div>
  </footer><!-- End Footer -->
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from '../LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName,
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
  }),

  computed: mapGetters({
    user: 'auth/user',
    footer: 'footer/footer'
  }),
  mounted() {
  },
  beforeCreate() {
    this.$store.dispatch('footer/fetchFooterData')
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
