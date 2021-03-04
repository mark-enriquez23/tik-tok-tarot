<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <card :title="$t('reset_password')">
        <form @submit.prevent="send" @keydown="form.onKeydown($event)">
          <alert-success :form="form" :message="status" />

          <!-- Email -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
            <div class="col-md-7">
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
              <has-error :form="form" field="email" />
            </div>
          </div>


          <div class="form-group row">
            <div class="col-md-7 offset-md-3 d-flex">
              <vue-hcaptcha sitekey="3f7f821f-05b7-486b-a3d9-21395609a73e" @verify="isVerified"></vue-hcaptcha>
            </div>
          </div>
          <!-- Submit Button -->
          <div class="form-group row">
            <div class="col-md-9 ml-md-auto">
              <v-button :loading="form.busy" :disabled="!token">
                {{ $t('send_password_reset_link') }}
              </v-button>
            </div>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';

const initializeData = () => ({
    status: '',
    form: new Form({
      email: ''
    }),
    token: null
  })
export default {
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('reset_password') }
  },

  components: {
    VueHcaptcha
  },

  data: () => {
    return initializeData();
  },

  methods: {
    async send () {
      const { data } = await this.form.post('/api/password/email')

      this.status = data.status

      this.form.reset()
    },
    isVerified(e) {
      this.token = e;
    }
  }
}
</script>
