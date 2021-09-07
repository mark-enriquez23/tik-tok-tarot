<template>
  <card class="py-3 m-4">
    <div class="row">
      <div class="col-md-8">
        <h4 class="mb-3">
          Upload Credits
        </h4>
        <p class="mb-5">
          User details with current points.
        </p>
      </div>
      <div class="col-md-4 text-right">
        <router-link
          :to="{ name: 'admin.user-credits' }"
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
    <div>
      <!-- User name -->
      <!-- <div class="form-group col-md-7 mx-auto">
        <label>User Name</label>
        <input
          v-model="creditForm.name"
          class="form-control"
          type="text"
          :readonly="true"
        >
      </div> -->

      <!-- User email -->
      <div class="form-group col-md-7 mx-auto">
        <label>User Email</label>
        <input
          v-model="creditForm.email"
          class="form-control"
          type="text"
          :readonly="true"
        >
      </div>

      <!-- Earned Points -->
      <div class="form-group col-md-7 mx-auto">
        <label>Earned Points</label>
        <input
          v-model="creditForm.earned_points"
          class="form-control"
          type="number"
          :readonly="isUpdating"
        >
      </div>

      <!-- Goal Points -->
      <div class="form-group col-md-7 mx-auto">
        <label>Goal Points</label>
        <input
          v-model="creditForm.goal_points"
          class="form-control"
          type="number"
          :readonly="isUpdating"
        >
      </div>

      <!-- Approve Button -->
      <div class="form-group row col-md-7 mx-auto mt-3">
        <div v-if="isUpdating" class="col-md-6 px-0 pr-lg-1">
          <button
            class="btn btn-secondary w-100"
            @click="cancel"
          >
            Cancel
          </button>
        </div>
        <div v-if="isUpdating" class="col-md-6 px-0 pr-lg-1">
          <button
            class="btn btn-success w-100"
            @click="save"
          >
            Save
          </button>
        </div>
        <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
          <!-- Update Button -->
          <button
            v-if="!isUpdating"
            class="btn btn-primary w-100"
            @click="update"
          >
            Update
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

  metaInfo () {
    return { title: this.$t('settings') }
  },

  components: {},

  data: () => ({
    isUpdating: false
  }),

  computed: mapGetters({
    user: 'auth/user',
    credit: 'admin-credit/credit',
    creditForm: 'admin-credit/creditForm'
  }),

  async beforeMount () {
    console.log('form???', this.creditForm)
    let id = this.$route.params.id
    await this.$store.dispatch('admin-credit/viewUserCredit', id)
  },

  mounted () {},

  methods: {
    update () {
      this.isUpdating = !this.isUpdating
    },

    cancel () {
      this.isUpdating = false
    },

    async save () {
      let id = this.$route.params.id
      console.log(id)
      Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to update the points.',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Yes'
      }).then(result => {
        if (result) {
          this.$store
            .dispatch('admin-credit/updateUserCredit', id)
            .then(({ success, message }) => {
              if (success) {
                swalSuccess('Points have been updated.').then(() => {
                  this.$router.push({ name: 'admin.user-credits' })
                })
              }
            })
        }
      })
    }
  }
}
</script>
