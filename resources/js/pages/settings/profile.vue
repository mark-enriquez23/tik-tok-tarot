<template>
  <card class="py-3">
    <h4 class="mb-0">
      User Profile
    </h4>
    <p class="mb-0">
      Change your personal information here.
    </p>
    <hr>
    <div v-if="isLoading" class="text-center">
      <b-spinner label="Loading..." />
    </div>
    <form v-if="!isLoading" @submit.prevent="update" @keydown="form.onKeydown($event)">
      <alert-success :form="form" :message="$t('info_updated')" />

      <!-- Username -->
      <div class="form-group col-md-7 mx-auto">
        <label>Username</label>
        <input v-model="form.username" :class="{ 'is-invalid': form.errors.has('username') }" class="form-control" type="text" name="username" :readonly="isUpdating">
        <has-error :form="form" field="username" />
      </div>

      <!-- First Name -->
      <div class="form-group col-md-7 mx-auto">
        <label>First Name</label>
        <input v-model="form.firstName" :class="{ 'is-invalid': form.errors.has('firstName') }" class="form-control" type="text" name="firstName" :readonly="isUpdating">
        <has-error :form="form" field="firstName" />
      </div>

      <!-- Last Name -->
      <div class="form-group col-md-7 mx-auto">
        <label>Last Name</label>
        <input v-model="form.lastName" :class="{ 'is-invalid': form.errors.has('lastName') }" class="form-control" type="text" name="lastName" :readonly="isUpdating">
        <has-error :form="form" field="lastName" />
      </div>

      <!-- Phone Number -->
      <div class="form-group col-md-7 mx-auto">
        <label>Phone Number</label>
        <input v-model="form.phone_number" :class="{ 'is-invalid': form.errors.has('phone_number') }" class="form-control" type="text" name="phone_number" :readonly="isUpdating">
        <has-error :form="form" field="phone_number" />
      </div>

      <!-- Email -->
      <div class="form-group col-md-7 mx-auto">
        <label>Email</label>
        <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="text" name="email" :readonly="isUpdating">
        <has-error :form="form" field="email" />
      </div>

      <!-- Submit Button -->
      <div class="form-group row col-md-7 mx-auto mt-3">
        <div v-if="isUpdating" class="col-md-6 px-0 pr-lg-1">
          <!-- Bac Button -->
          <button type="button" class="btn btn-secondary w-100" @click.prevent="cancelUpdate()">
            <!-- <v-button :loading="form.busy"> -->
            Cancel
          </button>
        </div>
        <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
          <!-- Update Button -->
          <button v-if="!isUpdating" class="btn btn-primary w-100" @click.prevent="isUpdating = true">
            Update
          </button>
          <v-button v-else class="btn btn-primary w-100">
            Confirm
          </v-button>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,

  data: () => ({
    form: new Form({
      username: '',
      firstName: '',
      lastName: '',
      phone_number: '',
      email: ''
    }),
    isUpdating: false,
    isLoading: false
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  created () {
    this.isLoading = true
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
    this.isLoading = false
  },

  methods: {
    async update () {
      this.isUpdating = true
      const { data } = await this.form.patch('/api/settings/profile')

      this.$store.dispatch('auth/updateUser', { user: data })
      this.isUpdating = false
    },
    cancelUpdate () {
      this.form.keys().forEach(key => {
        this.form[key] = this.user[key]
      })
      this.isUpdating = false
    }
  }
}
</script>
