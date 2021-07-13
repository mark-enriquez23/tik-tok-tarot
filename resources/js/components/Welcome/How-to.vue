<template>
  <section v-if="howTo" id="why-us" class="why-us section-bg">
    <div class="container">
      <div class="row">
        <div class="col d-flex align-items-stretch" data-aos="fade-right">
          <div class="content">
            <h3>{{ howTo.title }}</h3>
            <p>
              {{ howTo.content }}
            </p>
            <!-- <div class="text-center">
              <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right" /></a>
            </div> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="mt-5">
            <div class="row">
              <div v-for="(item, index) in howTo.additional_data" :key="index" class="col-4 d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                <b-button pill size="lg" variant="danger" @click="showModal(item)">
                  {{ item.title }}
                </b-button>
              </div>
            </div>
          </div><!-- End .content-->
        </div>
      </div>
    </div>
    <b-modal id="steps-modal" centered hide-footer>
      <template #modal-title>
        {{ dataItem.title }}
      </template>
      <div class="d-block text-center p-5">
        <b-icon :icon="dataItem.icon" scale="4" variant="danger" class="mb-4" />
        <h4> {{ dataItem.content }} </h4>
      </div>
      <b-button class="mt-3" block variant="light" @click="$bvModal.hide('steps-modal')">
        Got it!
      </b-button>
    </b-modal>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
// import LocaleDropdown from '../LocaleDropdown'

export default {
  components: {
    // LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName,
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    dataItem: {
      title: '',
      content: '',
      icon: 'x-circle'
    }
  }),

  computed: mapGetters({
    user: 'auth/user',
    howTo: 'how-to/howTo'
  }),
  mounted () {
  },
  beforeCreate () {
    this.$store.dispatch('how-to/fetchHowToData')
  },
  methods: {
    showModal (item) {
      console.log('ITEM REGISTER HERE:::', item)
      this.dataItem = item
      this.$bvModal.show('steps-modal')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
