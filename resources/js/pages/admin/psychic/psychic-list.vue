<template>
  <div class="">
 
    <!-- ======= Readers Section ======= -->
    <section id="team" class="team">
      <div class="container">

        <div class="row">
          <div class="col-lg-12">
            <div class="section-title" data-aos="fade-right">
              <h2>Our Psychics</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>             
            </div>
          </div>

          <div class="col-lg-12" v-if="readers.length != 0">
            <div class="row">
              <div class="col-lg-4 mt-4 mt-lg-0" v-for="reader in readers" :key="reader.id">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic">
                    <img :src="reader.photo_url" class="img-fluid" alt="">
                  </div>
                  
                    <h4>{{reader.name}} <fa class="hired-icon" :icon="['fas', 'check-circle']"/></h4>
                  <div class="member-info">
                    <p class="text-success mb-0">{{ reader.is_active == 1 ? 'Online' : 'Offline' }}</p>
                    <p>{{reader.description}}</p>
                    <span class="mt-3" >Health</span>
                    </br>
                    <div class="cursor-pointer link view">View Profile</div></td>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-8" v-else>
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
    </section><!-- Readers Section -->
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {
  },

  data: () => ({
  }),

  computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers',
  }),

  created () {
  },

  methods: {
      view(id){
        this.$router.push({
            name: "admin.reader-form",
            params: {
                id: id
            }
        });
      }
  },

  beforeMount(){
      this.$store.dispatch("admin-reader/fetchReaders");
      this.$store.dispatch('auth/fetchUser');

      if (!this.user){
        this.$router.push({ name: 'home' })
      }
  }
}
</script>
<style>
.hired-icon{
  font-size: 15px;
  color:green;
}

.view{
  color:green;
}

.view:hover{
  text-decoration:underline;
}
</style>
