<template>
  <div class="row">
    <div class="col-md-4">
      <card class="py-4">
        <div class="col-12 text-center">
          <img data-v-6dde423b="" src="https://www.gravatar.com/avatar/c220906e6e486ed4cd82625e3b80c14b.jpg?s=200&amp;d=mm" class="rounded-circle profile-photo mr-1">
          <h5 class="mt-2">
            {{ user.name }}
          </h5>
        </div>
        <hr>
        <div class="col-12">
          <ul class="nav flex-column nav-pills mt-3 text-center">
            <li v-for="tab in tabs" :key="tab.route" class="nav-item">
              <router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
                <!-- <fa :icon="tab.icon" fixed-width /> -->
                {{ tab.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </card>
    </div>

    <div class="col-md-8">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: 'auth',

  computed: mapGetters({
    user: 'auth/user'
  }),

  data: () => ({
    tabs: [
      {
        icon: 'user',
        name: 'Profile',
        route: 'settings.profile'
      },
      {
        icon: 'lock',
        name: 'Security Question',
        route: 'settings.security'
      },
      {
        icon: 'lock',
        name: 'Password',
        route: 'settings.password'
      }
    ]
  }),
  beforeMount () {
    this.$store.dispatch('user-security-question/fetchDefaultAuthenticatedSecurityQuestions')
    this.$store.dispatch('user-security-question/fetchAuthenticatedUserSecurityQuestions')
  }
}
</script>

<style scoped>
.settings-card .card-body {
  padding: 0;
}
.profile-photo {
  height: 5rem;
  width: 5rem;
}
.nav-link {
  color: rgba(41, 41, 41, 0.658);
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  background: none;
  color: #007bff;
  font-weight: bold;
}
</style>
