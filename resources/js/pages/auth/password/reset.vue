<template>
  <div class="row h-100">
    <div class="col-lg-12 my-auto">
      <div>
        <div class="w-100 text-center mt-2 mb-4">
          <img :src="srcLogoOnly" style="mix-blend-mode: luminosity;" srcset="" class="img-fluid col-12 col-lg-4">
          <hr class="mx-auto line-form-break">
          <h4>Password Reset</h4>
        </div>
        <form @submit.prevent="reset" @keydown="form.onKeydown($event)">
          <alert-success :form="form" :message="status" />

          <!-- Email -->
          <div class="form-group col-md-7 mx-auto">
            <label>{{ $t('email') }}</label>
            <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email" readonly>
            <has-error :form="form" field="email" />
          </div>

          <!-- Password -->
          <div class="form-group col-md-7 mx-auto">
            <label>{{ $t('password') }}</label>
            <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
            <has-error :form="form" field="password" />
          </div>

          <!-- Password Confirmation -->
          <div class="form-group col-md-7 mx-auto">
            <label>{{ $t('confirm_password') }}</label>
            <input v-model="form.confirm_password" :class="{ 'is-invalid': form.errors.has('confirm_password') }" class="form-control" type="password" name="confirm_password">
            <has-error :form="form" field="confirm_password" />
          </div>

          <!-- Submit Button -->
          <div class="form-group row col-md-7 mx-auto mt-3">
            <div class="col-md-12 px-0">
              <v-button class="w-100" :loading="form.busy">
                {{ $t('reset_password') }}
              </v-button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'

const initializeData = () => ({
  status: '',
  form: new Form({
    token: '',
    email: '',
    password: '',
    password_confirmation: ''
  }),
  custom: false,
  srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
  token: null
})
export default {
  layout: 'auth',
  middleware: 'guest',

  data: () => {
    return initializeData()
  },

  created () {
    this.form.email = this.$route.query.email
    this.form.token = this.$route.params.token
    this.custom = this.$route.query.custom
  },

  methods: {
    async reset () {
      if (!this.custom) {
        const { data } = await this.form.post('/api/password/reset')

        this.status = data.status

        this.form.reset()
      } else {
        await this.form.post('/api/password/custom-reset')
      }
    }
  }
}
</script>
