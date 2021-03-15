<template>
  <div class="row h-100">
    <div class="col-lg-12 my-auto" v-if="!onSecurity">
      <div v-if="mustVerifyEmail">
        <div class="alert alert-success" role="alert">
          {{ $t('verify_email_address') }}
        </div>
      </div>
      <div v-else>
        <div class="w-100 text-center mt-2 mb-4">
          <img :src="srcLogoOnly" style="mix-blend-mode: luminosity;" srcset="" class="img-fluid col-12 col-lg-4">
          <hr class="mx-auto line-form-break">
          <h4 >Register</h4>
        </div>
        <form @submit.prevent="register" @keydown="form.onKeydown($event)">
          <!-- UserName -->
           <div class="form-group col-md-7 mx-auto">
            <label>{{ $t('username') }}</label>
            <input  v-model="form.username" :class="{ 'is-invalid': form.errors.has('username') }" class="form-control" type="text" name="username">
            <has-error :form="form" field="username" />
          </div>

          <!-- Name -->
           <div class="form-group col-md-7 mx-auto">
            <label>{{ $t('name') }}</label>
            <input  v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
            <has-error :form="form" field="name" />
          </div>

          <!-- Email -->
          <div class="form-group col-md-7 mx-auto">
            <label>{{ $t('email') }}</label>
            <input  v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="text" name="email">
            <has-error :form="form" field="email" />
          </div>

          <!-- Password -->
          <div class="form-group col-md-7 mx-auto">
            <label>{{ $t('password') }}</label>
            <input  v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="text" name="password">
            <has-error :form="form" field="password" />
          </div>

          <!-- Password Confirmation -->
          <div class="form-group col-md-7 mx-auto">
            <label>{{ $t('password_confirmation') }}</label>
            <input  v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="text" name="password_confirmation">
            <has-error :form="form" field="password_confirmation" />
          </div>

          <!-- HCaptcha -->
          <div class="form-group row col-md-7 mx-auto">
            <div class="col-md-12 px-0">
              <vue-hcaptcha class="w-100" sitekey="3f7f821f-05b7-486b-a3d9-21395609a73e" @verify="isVerified"></vue-hcaptcha>
            </div>
          </div>

          <div class="form-group row col-md-7 mx-auto mt-3">
            <div class="col-md-12 px-0">
              <!-- Submit Button -->
              <v-button class="btn btn-primary w-100" :loading="form.busy" >
              <!-- <v-button :loading="form.busy"> -->
                {{ $t('register') }}
              </v-button>

              <!-- GitHub Register Button -->
              <login-with-github />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-7 m-auto" v-if="onSecurity">
      <div title="Security Questions">
        <SecurityQuestion
          :submit = "register"
        />
      </div>
    </div>

  </div>
</template>

<script>
import Form from 'vform'
import LoginWithGithub from '~/components/LoginWithGithub'
import SecurityQuestion from '~/components/Register/SecurityQuestion'
import Vue from 'vue'
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';
import axios from "axios";

const initializeData = () => ({
    form: new Form({
      username: '',
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      validate: null
    }),
    mustVerifyEmail: false,
    onSecurity: false,
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    token: null
  })

export default {
  layout: 'auth',
  middleware: 'guest',

  components: {
    LoginWithGithub,
    SecurityQuestion,
    VueHcaptcha,
  },
  mounted() {
    this.$store.dispatch('user-security-question/fetchUserSecurityQuestions')
  },
  metaInfo () {
    return { title: this.$t('register') }
  },

  data:() => {
    return initializeData();
  },

  methods: {
    async register () {
      // Register the user.
        const { data } = await this.form.post('/api/register').catch((err) => {

          const size = Object.keys(err.response.data.errors).length

          if (size == 1) {

            this.onSecurity = true

            this.form.validate = true
            // console.log(err.response.data.errors.validate)

          }

        })

        // Must verify email fist.
        if (data.status) {

          this.mustVerifyEmail = true

        } else {



          // Save Security Questions
          this.$store.dispatch('user-security-question/saveUserSecurityQuestion', data.id)

          // Send email to admin
          const emailData = {
            email: this.form.email,
            data: {
                fullName: this.form.name,
                userName: this.form.username,
                email: this.form.email
            }
          }

          const { emailRes } = axios.post('api/email/send-email', emailData )

          console.log(emailRes)

          // Log in the user.
          const { data: { token } } = await this.form.post('/api/login')

          // Save the token.
          this.$store.dispatch('auth/saveToken', { token })

          // Update the user.
          this.$store.dispatch('auth/updateUser', { user: data })

          // Redirect home.
          this.$router.push({ name: 'home' })

        }

    },

    isVerified(e) {

      this.token = e;

    }

  }

}
</script>
