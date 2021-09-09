<template>
  <card class="py-3 m-4">
    <div class="row">
      <div class="col-md-8">
        <h4 class="mb-3">
          Reader Profile
        </h4>
        <p class="mb-5">
          Reader Detail and list of uploaded vlogs.
        </p>
      </div>
      <div class="col-md-4 text-right">
        <router-link
          :to="{ name: 'admin.psychics' }"
          class="nav-link"
          active-class="active"
        >
          <v-button class="btn btn-danger btn-lg">
            Back
          </v-button>
        </router-link>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <div class="cursor-pointer link text-underline view" @click="manage()">
              Manage
            </div>
            <table id="psychic-table">
              <tr>
                <td>Username:</td>
                <th class="text-left">
                  {{ readerForm.username }}
                </th>
              </tr>
              <tr>
                <td>Name:</td>
                <th class="text-left">
                  {{ readerForm.name }}
                </th>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <th class="text-left">
                  {{ readerForm.phone_number }}
                </th>
              </tr>
              <tr>
                <td>Email:</td>
                <th class="text-left">
                  {{ readerForm.email }}
                </th>
              </tr>
              <tr>
                <td>Banned:</td>
                <th class="text-left">
                  {{ readerForm.is_banned == '1' ? 'Yes' : 'No' }}
                </th>
              </tr>
              <tr>
                <td>Active:</td>
                <th class="text-left">
                  {{ readerForm.is_active == '1' ? 'Yes' : 'No' }}
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <table id="psychic-uploads" class="table table-striped">
              <tr>
                <th class="text-center">
                  Thumbnail
                </th>
                <th class="text-center">
                  Name
                </th>
                <th class="text-center">
                  Category
                </th>
                <th class="text-center">
                  Status
                </th>
                <th class="text-center">
                  Is Featured?
                </th>
              </tr>
              <tr v-for="upload in uploads" :key="upload.id">
                <td class="text-center">
                  <img :src="'/images/'+upload.thumbnail" :alt="upload.name" class="uploads-thumbnail">
                </td>
                <td>{{ upload.name }}</td>
                <td>{{ upload.category }}</td>
                <td class="text-center">
                  {{ upload.upload_type ? upload.upload_type.name : '' }}
                </td>
                <td class="text-center">
                  {{ upload.is_featured ? 'Yes' : 'No' }}
                </td>
              </tr>
              <tr v-if="uploads.length <= 0">
                <td colspan="5" class="text-center">
                  No Uploads Found.
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,

  components: {},

  data: () => ({
    routeID: null
  }),

  computed: mapGetters({
    user: 'auth/user',
    readerForm: 'admin-reader/readerForm',
    uploads: 'admin-reader/uploads'
  }),

  beforeMount () {
    let id = this.$route.params.id
    this.routeID = id

    this.$store.dispatch('admin-reader/viewReader', id)
  },

  methods: {
    manage () {
      this.$router.push({
        name: 'admin.reader-form',
        params: {
          id: this.routeID
        }
      })
    }
  }
}
</script>
