<template>
  <card class="py-3 m-4">
    <h4 class="mb-3">
      Credits
    </h4>
    <p class="mb-5">
      Necessitatibus eius consequatur ex aliquid fuga eum quidem.
    </p>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            ID
          </th>
          <th scope="col">
            User Name
          </th>
          <th scope="col">
            User Email
          </th>
          <th scope="col">
            Earned Points
          </th>
          <th scope="col">
            Goal Points
          </th>
          <th scope="col">
            Date Updated
          </th>
          <th scope="col">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="credit in credits" :key="credit.id">
          <th scope="row">
            {{ credit.id }}
          </th>
          <td>{{ credit.username }}</td>
          <td>{{ credit.email }}</td>
          <td>{{ credit.credit.earned_points }}</td>
          <td>{{ credit.credit.goal_points }}</td>
          <td>{{ credit.credit.updated_at }}</td>
          <td>
            <div class="cursor-pointer link" @click="view(credit.id)">
              Manage
            </div>
          </td>
        </tr>
        <tr>
          <td v-if="credits ? credits.length <= 0 : false" colspan="7" class="text-center">
            No Credits Found
          </td>
        </tr>
      </tbody>
    </table>
  </card>
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
    credits: 'admin-credit/credits'
  }),

  created () {
  },

  beforeMount () {
    this.$store.dispatch('admin-credit/fetchUserCredits')
  },

  methods: {
    view (id) {
      this.$router.push({
        name: 'admin.user-credit',
        params: {
          id: id
        }
      })
    }
  }
}
</script>
