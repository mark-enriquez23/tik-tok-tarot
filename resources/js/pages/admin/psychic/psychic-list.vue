<template>
  <card class="py-3 m-4">
    <h4 class="mb-3">
      Psychics List
    </h4>
    <p class="mb-5">
      Necessitatibus eius consequatur ex aliquid fuga eum quidem.
    </p>
    <div class="">
      <!-- ======= Readers Section ======= -->
      <section id="team" class="team">
        <div class="container">
          <div class="row">
            <div v-if="readers ? readers.length != 0 : false" class="col-lg-12">
              <div class="row">
                <div
                  v-for="reader in readers"
                  :key="reader.id"
                  class="col-lg-4 mt-4 mt-lg-0"
                >
                  <div class="member" data-aos="zoom-in" data-aos-delay="100">
                    <div class="pic">
                      <img :src="reader.photo_url" class="img-fluid" alt="">
                    </div>

                    <h4>
                      {{ reader.name }}
                      <fa v-if="reader.is_hired == 1" class="hired-icon" :icon="['fas', 'check-circle']" />
                    </h4>
                    <div class="member-info">
                      <p class="mb-0" :class="reader.is_active == 1 ? 'text-success': 'text-danger'">
                        {{ reader.is_active == 1 ? "Online" : "Offline" }}
                      </p>
                      <p>{{ reader.description }}</p>
                      <span class="mt-3">Health</span>
                      <br>
                      <div
                        class="cursor-pointer link view"
                        @click="view(reader.id)"
                      >
                        View Profile
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="col-lg-8">
              <div class="row">
                <div class="col-lg-12 mt-4 mt-lg-0">
                  <div class="member" data-aos="zoom-in" data-aos-delay="100">
                    <h3>No Readers found</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <!-- Readers Section -->
    </div>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {},

  data: () => ({}),

  computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers'
  }),

  created () {},

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
        name: 'admin.psychic-profile',
        params: {
          id: id
        }
      })
    }
  }
}
</script>
<style>
.hired-icon {
  font-size: 15px;
  color: green;
}

.view {
  color: green;
}

.view:hover {
  text-decoration: underline;
}
</style>
