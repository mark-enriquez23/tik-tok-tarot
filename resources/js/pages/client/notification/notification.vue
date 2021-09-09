<template>
  <card class="py-3 m-4">
    <h4 class="mb-3">
      Notifications
    </h4>
    <div class="mb-2">
      <div class="row">
        <div class="mb-2">
          <div v-if="!notifications.length" class="pl-3">
            <p> No notifications for now </p>
          </div>
          <table class="table table-responsive">
            <tbody>
              <tr v-for="notification in notifications" :key="notification.id" class="mb-2">
                <td v-if="notification.data.type === 'VLOG'">
                  <div>
                    <img class="img-thumbnail p-0 mr-5" align="left" :src="`/uploads/vlog/thumbnails/${notification.data.video.thumbnail}`">
                  </div>
                  <div>
                    <h3>{{ capitalizeFirstLetter(notification.data.user.username) }} uploaded: {{ notification.data.video.title }}</h3>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  scrollToTop: false,

  components: {
  },

  data: () => ({
    notifications: []
  }),

  computed: mapGetters({
    user: 'auth/user',
    readers: 'admin-reader/readers'
  }),

  beforeMount () {
    axios.get('/api/user/notifications/unread').then((response) => {
      this.notifications = response?.data?.notifications
    })

    this.$store.dispatch('notifications/readNotification')

    if (!this.user) {
      this.$router.push({ name: 'home' })
    }
  },

  methods: {
    view (id) {
      this.$router.push({
        name: 'admin.reader-form',
        params: {
          id: id
        }
      })
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
<style>
.reader-img{
  border-radius: 50%;
}
.hired-tag{
  font-size: 12px;
  font-weight: bolder;
}
.img-thumbnail{
  width: 50%;
  height: 50%;
}
</style>
