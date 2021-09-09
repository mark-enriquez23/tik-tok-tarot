<template>
  <card>
    <h4 class="mb-0">
      User Password
    </h4>
    <p class="mb-0">
      Change your password here.
    </p>
    <hr>
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <alert-success :form="form" :message="$t('password_updated')" />

      <!-- Password -->
      <div class="form-group col-md-7 mx-auto">
        <label>New Password</label>
        <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
        <has-error :form="form" field="password" />
      </div>

      <!-- Password Confirmation -->
      <div class="form-group col-md-7 mx-auto">
        <label>Confirm Password</label>
        <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
        <has-error :form="form" field="password_confirmation" />
      </div>

      <!-- Submit Button -->
      <div class="form-group row col-md-7 mx-auto mt-3">
        <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
          <!-- Update Button -->
          <v-button class="btn btn-primary w-100" :loading="form.busy">
            Confirm
          </v-button>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
import Form from 'vform'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    async update () {
      await this.form.patch('/api/settings/password')

      this.form.reset()
    }
  }
}
</script>
