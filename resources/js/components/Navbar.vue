<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white bs-none">
      <div class="container">
        <router-link :to="'/landing'" class="navbar-brand">
          <img :src="srcLogoOnly" style="mix-blend-mode: luminosity; width: 90px " srcset="">
        </router-link>

        <!-- <ul class="navbar-nav">
          <locale-dropdown />
        </ul> -->

        <ul class="navbar-nav ml-auto navbar-nav-auth">
          <!-- Authenticated -->
          <li v-if="user" class="nav-item">
            <router-link :to="{ name: 'client.notification' }" class="bell px-3">
              <fa icon="bell" />
              <span v-if="notif" class="badge badge-danger number-notif p-1">{{ notif }}</span>
            </router-link>
          </li>

          <li v-if="user" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark auth-links"
               href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            >
              <img :src="user.photo_url" class="rounded-circle profile-photo mr-1">
              <!-- {{ user.name }} -->
            </a>
            <div class="dropdown-menu">
              <router-link :to="{ name: 'settings.profile' }" class="dropdown-item pl-3">
                <fa icon="cog" fixed-width />
                Settings
              </router-link>

              <router-link v-if="user && roleId == 3" :to="{ name: 'client.history' }" class="dropdown-item pl-3">
                <fa icon="history" fixed-width />
                History
              </router-link>

              <router-link v-if="user && roleId == 3" :to="{ name: 'client.referrals' }" class="dropdown-item pl-3">
                <fa icon="user-plus" fixed-width />
                Referrals
              </router-link>

              <router-link v-if="user && roleId == 2" :to="{ name: 'reader.referrals' }" class="dropdown-item pl-3">
                <fa icon="user-plus" fixed-width />
                Referrals
              </router-link>

              <router-link v-if="user && roleId == 2" :to="{ name: 'reader.videos' }" class="dropdown-item pl-3">
                <fa icon="photo-video" fixed-width />
                Videos
              </router-link>

              <div class="dropdown-divider" />
              <a href="#" class="dropdown-item pl-3" @click.prevent="logout">
                <fa icon="sign-out-alt" fixed-width />
                Logout
              </a>
            </div>
          </li>
          <!-- Guest -->
          <template v-else>
            <li class="nav-item">
              <router-link :to="{ name: 'login' }" class="nav-link auth-links" active-class="active">
                Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'register' }" class="nav-link auth-links" active-class="active">
                Register
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <nav v-if="navIsHomePage()" class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <form class="form-inline col-8 col-md-4 px-0" action="" method="post" @submit.prevent="siteSearch">
          <input v-model="searchForm['key']" class="form-control mr-sm-2 w-50" type="text" name="reader" placeholder="Search Site" aria-label="Search">
          <v-button class="btn btn-danger" :disabled="!searchForm.key">
            Search
          </v-button>
        </form>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false">
          <span class="navbar-toggler-icon" />
        </button>

        <div id="navbarToggler" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item">
              <router-link :to="{ name: 'welcome' }" class="nav-link" active-class="active">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'prices' }" class="nav-link" active-class="active">
                Prices
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'readers' }" class="nav-link" active-class="active">
                Our Readers
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'sessions' }" class="nav-link" active-class="active">
                Active Sessions
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                 href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
              >
                Vlogs
              </a>
              <div class="dropdown-menu">
                <router-link :to="{ name: 'vlogs.list' }" class="dropdown-item pl-3">
                  All Vlogs
                </router-link>
                <!-- <router-link :to="{ name: 'vlogs.review' }" class="dropdown-item pl-3">
                    Vlog Review
                  </router-link> -->
              </div>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about.us' }" class="nav-link" active-class="active">
                About Us
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'contact.us' }" class="nav-link" active-class="active">
                Contact Us
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Dashboard Navigation -->
    <nav v-if="isLoggedIn && !navIsHomePage()" class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false">
          <span class="navbar-toggler-icon" />
        </button>

        <!-- Admin Navbar -->
        <div v-if="roleId == 1" id="navbarToggler" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item">
              <router-link :to="{ name: 'admin.readers' }" class="nav-link" active-class="active">
                Readers
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link :to="{ name: 'admin.psychics' }" class="nav-link" active-class="active">
                Psychics
              </router-link>
            </li> -->
            <li class="nav-item">
              <router-link :to="{ name: 'admin.upload-approvals' }" class="nav-link" active-class="active">
                Pending Uploads
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'admin.user-credits' }" class="nav-link" active-class="active">
                Credits
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'admin.freebie' }" class="nav-link" active-class="active">
                Freebie Manager
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Reader Navbar -->
        <div v-if="roleId == 2" id="navbarToggler" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item">
              <router-link :to="{ name: 'reader.videos' }" class="nav-link" active-class="active">
                My Videos
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'reader.pending' }" class="nav-link" active-class="active">
                Pending
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'reader.rejected' }" class="nav-link" active-class="active">
                Rejected
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'reader.suggestions' }" class="nav-link" active-class="active">
                Suggestions
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Form from 'vform'

export default {

  data: () => ({
    appName: window.config.appName,
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    searchForm: new Form({
      key: null
    }),
    results: [],
    isLoggedIn: false,
    roleId: null
  }),

  computed: {
    ...mapGetters({
      user: 'auth/user',
      notif: 'notifications/notification'
    })
  },

  mounted () {
    if (this.user) {
      this.$store.dispatch('notifications/getNotification')
      // check role of logged in user
      this.isLoggedIn = true
      this.roleId = this.user.role_id
    }
  },

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    },

    async siteSearch () {
      this.$router.push({ name: 'search', query: { key: this.searchForm.key } })
    },

    navIsHomePage () {
      switch (this.$route.path) {
        case '/landing':
        case '/prices':
        case '/readers':
        case '/search':
        case '/sessions':
        case '/vlogs/list':
        case '/vlogs/view/:id':
        case '/vlogs/review':
        case '/testimonials':
        case '/about-us':
        case '/contact-us':
        case '/login':
        case '/password':
        case '/email':
          return true
        default:
          return false
      }
    }

  }

}
</script>

<style lang="scss" scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
.bs-none {
  box-shadow: none;
}

.bell{
  font-size:30px;
}

.number-notif{
  font-size:13px;
  margin-left: -18px;

}

@media (max-width: 771px) {
  .navbar-nav-auth {
    flex-direction: row;
  }
  .navbar-nav-auth .auth-links {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    &:last-child {
      padding-right: 0px;
    }
  }
}
</style>
