<template>
  <section id="about" class="about" v-if="generalInfo">
      <div class="container">
        <div class="row content">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <h2>{{ generalInfo.title }}</h2>
            <h3>{{ generalInfo.sub_title }}</h3>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <p>
               {{ generalInfo.content.description }}
            </p>
            <ul>
              <li v-for="(feature, index) in generalInfo.content.features" :key="index"><fa class="text-danger" :icon="['fas', 'check-double']" id="basic-addon1" /> {{feature}}</li>
            </ul>
            <p class="font-italic">
               {{ generalInfo.content.additional_data }}
            </p>
          </div>
        </div>

      </div>
  </section>
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
    generalInfo: 'general-info/generalInfo'
  }),
  mounted() {
  },
  beforeCreate() {
    this.$store.dispatch('general-info/fetchGeneralInfoData')
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
