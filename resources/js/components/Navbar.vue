<template>
<div>

  <nav class="navbar navbar-expand-lg navbar-light bg-white bs-none">
    <div class="container">

      <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">
          <img :src="srcLogoOnly" style="mix-blend-mode: luminosity; width: 90px " srcset="" >
      </router-link>

        <!-- <ul class="navbar-nav">
          <locale-dropdown />
        </ul> -->

        <ul class="navbar-nav ml-auto navbar-nav-auth">
          <!-- Authenticated -->
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
                {{ $t('settings') }}
              </router-link>

              <div class="dropdown-divider" />
              <a href="#" class="dropdown-item pl-3" @click.prevent="logout">
                <fa icon="sign-out-alt" fixed-width />
                {{ $t('logout') }}
              </a>
            </div>
          </li>
          <!-- Guest -->
          <template v-else>
            <li class="nav-item">
              <router-link :to="{ name: 'login' }" class="nav-link auth-links" active-class="active">
                {{ $t('login') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'register' }" class="nav-link auth-links" active-class="active">
                {{ $t('register') }}
              </router-link>
            </li>
          </template>
        </ul>
    </div>

  </nav>

  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
    <form class="form-inline col-8 col-md-4 px-0">
      <input class="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search">
    </form>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false">
        <span class="navbar-toggler-icon" />
      </button>

      <div id="navbarToggler" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto ">
            <li class="nav-item">
              <router-link :to="{ name: 'welcome' }" class="nav-link" active-class="active">
                {{ $t('home') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'prices' }" class="nav-link" active-class="active">
                Prices
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
                  <router-link :to="{ name: 'vlogs.review' }" class="dropdown-item pl-3">
                    Vlog Review
                  </router-link>
                </div>

            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'testimonials' }" class="nav-link" active-class="active">
                Testimonials
              </router-link>
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
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName,
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  mounted() {
  },

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
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
