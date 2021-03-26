<template>
    <!-- ======= Why Us Section ======= -->
    <section id="why-us" class="why-us section-bg" v-if="howTo">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
            <div class="content">
              <h3>{{ howTo.title }}</h3>
              <p>
                {{ howTo.content }}
              </p>
              <div class="text-center">
                <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div v-for="(item, index) in howTo.additional_data" :key="index" class="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  <div class="icon-box mt-4 mt-xl-0">
                      <fa :icon="['fas', item.icon]" />
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.content }}</p>
                  </div>
                </div>
              </div>
            </div><!-- End .content-->
          </div>
        </div>

      </div>
    </section><!-- End Why Us Section -->
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
    howTo: 'how-to/howTo'
  }),
  mounted() {
  },
  beforeCreate() {
    this.$store.dispatch('how-to/fetchHowToData')
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
