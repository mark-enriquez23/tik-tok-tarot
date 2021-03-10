<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <card :title="$t('login')">
        <div class="w-100 text-center mt-2 mb-4">
          <img :src="srcLogoOnly" alt="" srcset="" class="img-fluid col-4">
        </div>
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <!-- Email -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">Username or Email</label>
            <div class="col-md-7">
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="text" name="email">
              <has-error :form="form" field="email" />
            </div>
          </div>

          <!-- Password -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('password') }}</label>
            <div class="col-md-7">
              <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
              <has-error :form="form" field="password" />
            </div>
          </div>

          <!-- Remember Me -->
          <div class="form-group row">
            <div class="col-md-3" />
            <div class="col-md-7 d-flex">
              <checkbox v-model="remember" name="remember">
                {{ $t('remember_me') }}
              </checkbox>

              <router-link :to="{ name: 'password.request' }" class="small ml-auto my-auto">
                {{ $t('forgot_password') }}
              </router-link>
            </div>
          </div>
          <!-- HCaptcha -->
          <div class="form-group row" v-if="!captchaDisabled">
            <div class="col-md-7 offset-md-3 d-flex">
              <vue-hcaptcha sitekey="3f7f821f-05b7-486b-a3d9-21395609a73e" @verify="isVerified"></vue-hcaptcha>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-md-7 offset-md-3 d-flex">
              <!-- Submit Button -->
              <v-button :disabled="!captchaDisabled && !token" :loading="form.busy">
                {{ $t('login') }}
              </v-button>

              <!-- GitHub Login Button -->
              <login-with-github />
            </div>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import LoginWithGithub from '~/components/LoginWithGithub'
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';

const initializeData = () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    token: '',
    captchaDisabled: true,
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    remember: false
  })

export default {
  middleware: 'guest',

  components: {
    LoginWithGithub,
    VueHcaptcha
  },

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => { return initializeData() },

  methods: {
    async login () {
      console.log('test')
      // Submit the form.
      await this.form.post('/api/login').then(res => {
        console.log(res)
      }).catch((e) => {
        console.log()
        switch (e.response.status) {
          case 429:
            this.captchaDisabled = false;
            break;

          default:
            this.token = ''
            this.captchaDisabled = true;
            break;
        }
      })


      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'home' })
    },
    isVerified(e) {
      this.token = e;
    }
  }
}
</script>
