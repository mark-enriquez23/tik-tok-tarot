<template>
  <card class="py-3 m-4">
    <div class="row">
      <div class="col-md-8">
        <h4 class="mb-3">
          Upload Details
        </h4>
        <p class="mb-5">
          Pedning upload details.
        </p>
      </div>
      <div class="col-md-4 text-right">
        <router-link :to="{ name: 'admin.upload-approvals' }" class="nav-link" active-class="active">
          <v-button class="btn btn-danger btn-lg">
            Back
          </v-button>
        </router-link>
      </div>
    </div>
    <hr>
    <div>
      <!-- User name -->
      <div class="form-group col-md-7 mx-auto">
        <label>User Name</label>
        <input v-model="uploadData.user.name" class="form-control" type="text" :readonly="true">
      </div>

      <!-- User email -->
      <div class="form-group col-md-7 mx-auto">
        <label>User Email</label>
        <input v-model="uploadData.user.email" class="form-control" type="text" :readonly="true">
      </div>

      <!-- Upload Name -->
      <div class="form-group col-md-7 mx-auto">
        <label>Upload Name</label>
        <input v-model="uploadData.upload.name" class="form-control" type="text" :readonly="true">
      </div>

      <!-- Upload Content -->
      <div class="form-group col-md-7 mx-auto">
        <label>Upload Content</label>
        <textarea v-model="uploadData.upload.content" class="form-control" cols="30" rows="3" :readonly="true" />
      </div>

      <!-- Upload Created -->
      <div class="form-group col-md-7 mx-auto">
        <label>Upload Created</label>
        <input v-model="uploadData.created_at" class="form-control" type="text" :readonly="true">
      </div>

      <!-- Status -->
      <div class="form-group col-md-7 mx-auto">
        <label>Status</label><br>
        <label v-if="uploadData.is_pending == 0" class="text-danger">Pending</label>
        <label v-else :class="uploadData.is_approved ? 'text-success' : 'text-danger'">{{ uploadData.is_approved ? 'Approved' : 'Rejected' }}</label>
      </div>

      <!-- Update Button -->
      <div v-if="uploadData.is_pending == 0" class="form-group row col-md-7 mx-auto mt-3">
        <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
          <button class="btn w-100 btn-danger" @click="reject">
            Reject
          </button>
        </div>
        <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
          <button class="btn w-100 btn-primary" @click="approve">
            Approve
          </button>
        </div>
      </div>

      <div v-else class="form-group row col-md-7 mx-auto mt-3">
        <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
          <button class="btn w-100" :class="uploadData.is_approved ? 'btn-danger' : 'btn-primary'" @click="update">
            {{ uploadData.is_approved ? 'Reject' : 'Approve' }}
          </button>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import { swalSuccess } from '~/helpers'
import Swal from 'sweetalert2'

export default {
  scrollToTop: false,

  components: {
  },

  data: () => ({
  }),

  computed: mapGetters({
    user: 'auth/user',
    uploadData: 'admin-upload-approval/uploadData'
  }),

  async beforeMount () {
    let id = this.$route.params.id
    await this.$store.dispatch('admin-upload-approval/viewUploadApproval', id)
  },

  mounted () {
  },

  methods: {
    async update () {
      if (this.uploadData.is_approved) {
        this.reject()
      } else {
        this.approve()
      }
    },

    async reject () {
      let id = this.$route.params.id
      Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to reject this video.',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Yes'
      })
        .then((result) => {
          if (result) {
            this.$store.dispatch('admin-upload-approval/updateUploadReject', id).then(({ success, message }) => {
              if (success) {
                swalSuccess('Video has been rejected.').then(() => {
                  this.$router.push({ name: 'admin.upload-approvals' })
                })
              }
            })
          }
        })
    },

    async approve () {
      let id = this.$route.params.id
      Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to approve this video.',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Yes'
      })
        .then((result) => {
          if (result) {
            this.$store.dispatch('admin-upload-approval/updateUploadApproval', id).then(({ success, message }) => {
              if (success) {
                swalSuccess('Video has been approved.').then(() => {
                  this.$router.push({ name: 'admin.upload-approvals' })
                })
              }
            })
          }
        })
    }
  }
}
</script>
