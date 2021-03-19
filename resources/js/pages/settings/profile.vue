<template>
  <card class="py-3">
    <h4 class="mb-0">User Profile</h4>
    <p class="mb-0">Change your personal information here.</p>
    <hr>
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <alert-success :form="form" :message="$t('info_updated')" />

      <!-- Username -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('username') }}</label>
        <input  v-model="form.username" :class="{ 'is-invalid': form.errors.has('username') }" class="form-control" type="text" name="username" :readonly="!isUpdating">
        <has-error :form="form" field="username" />
      </div>

      <!-- Name -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('name') }}</label>
        <input  v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name" :readonly="!isUpdating">
        <has-error :form="form" field="name" />
      </div>

      <!-- Phone Number -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('phone_number') }}</label>
        <input  v-model="form.phone_number" :class="{ 'is-invalid': form.errors.has('phone_number') }" class="form-control" type="text" name="phone_number" :readonly="!isUpdating">
        <has-error :form="form" field="phone_number" />
      </div>

      <!-- Email -->
      <div class="form-group col-md-7 mx-auto">
        <label>{{ $t('email') }}</label>
        <input  v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="text" name="email" :readonly="!isUpdating">
        <has-error :form="form" field="email" />
      </div>

      <!-- Submit Button -->
       <div class="form-group row col-md-7 mx-auto mt-3">
        <div class="col-md-6 px-0 pr-lg-1"  v-if="isUpdating">
          <!-- Bac Button -->
          <button type="button" class="btn btn-secondary w-100" @click.prevent="cancelUpdate()"  >
          <!-- <v-button :loading="form.busy"> -->
          Cancel
          </button>
        </div>
        <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
          <!-- Update Button -->
          <button class="btn btn-primary w-100" @click.prevent="isUpdating = true"  v-if="!isUpdating">
            {{ $t('update') }}
          </button>
          <v-button class="btn btn-primary w-100"  v-else>
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

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      username: '',
      name: '',
      phone_number: '',
      email: ''
    }),
    isUpdating: false
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },

  methods: {
    async update () {
      const { data } = await this.form.patch('/api/settings/profile')

      this.$store.dispatch('auth/updateUser', { user: data })
      this.isUpdating = false;
    },
    cancelUpdate() {
      this.form.keys().forEach(key => {
        this.form[key] = this.user[key]
      })
      this.isUpdating = false;
    }
  }
}
</script>
