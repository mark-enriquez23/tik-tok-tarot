<template>
  <div class="">
    <!-- <card :title="$t('home')">
    {{ $t('you_are_logged_in') }}
  </card> -->

    <section id="points" class="team points">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title" data-aos="fade-right">
              <h2>Earn Points!</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="row">
              <div class="col-lg-12 mt-2 mt-lg-0">
                <router-link :to="{ name: 'readers' }" class="nav-link" active-class="active">
                  <div class="member red-background" data-aos="zoom-in" data-aos-delay="100">
                    <div class="member-info">
                      <h5 class="white-text">
                        My Points: 5
                      </h5>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="team" class="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title" data-aos="fade-right">
              <h2>Rate them!</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="row">
              <div v-for="session in sessions.data" :key="session.id" class="col-lg-4 col-lg-4 mt-4 mt-lg-0">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic">
                    <img :src="testimonialImage5" class="img-fluid" alt="">
                  </div>
                  <div class="member-info">
                    <h4>{{ session.name }}</h4>
                    <p>{{ getContent(session.content) }}</p>
                  </div>
                  <div class="col-lg-3" />
                  <div class=" col-lg-8 stars">
                    <star-rating :star-style="starStyle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import StarRating from 'vue-dynamic-star-rating'

export default {
  middleware: 'auth',

  components: {
    StarRating
  },

  data: () => ({
    testimonialImage5: window.config.assetURL + 'images/testimonials/testimonials-5.jpg',
    sessions: [],
    listPsychicsOnline: [{
      username: 'Test',
      status: 'offline',
      id: 1
    }, {
      username: 'Test',
      status: 'online',
      id: 2
    }],
    starStyle: {
      fullStarColor: '#ed8a19',
      emptyStarColor: '#737373',
      starWidth: 30,
      starHeight: 30
    }
  }),

  created () {
    this.fetchSessions()
  },

  methods: {
    getPsychics () {
    },

    async fetchSessions () {
      var sessions = await axios.get('/api/homepage/live-sessions')
      this.sessions = sessions.data
    },

    getContent (data) {
      if (data.length > 70) {
        return data.substring(0, 70) + '...'
      } else {
        return data
      }
    }
  }
}
</script>

<style>

.points{
  padding:0;
  padding-top:40px;
}

  .red-background{
  background-color:#DC3545;
}

.red-background:hover{
  background-color:#C82333;
}

.white-text{
  color:white;
  font-weight: bolder;
}

.stars{
  width:100%;
  margin-top:35px;
}
</style>
