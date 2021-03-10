<template>
  <div class="row">
    <div class="col-lg-8 m-auto" v-if="!onSecurity">
      <card v-if="mustVerifyEmail" :title="$t('register')">
        <div class="alert alert-success" role="alert">
          {{ $t('verify_email_address') }}
        </div>
      </card>
      <card v-else :title="$t('register')">
        <form @submit.prevent="register" @keydown="form.onKeydown($event)">
          <!-- UserName -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('username') }}</label>
            <div class="col-md-7">
              <input v-model="form.username" :class="{ 'is-invalid': form.errors.has('username') }" class="form-control" type="text" name="username">
              <has-error :form="form" field="username" />
            </div>
          </div>

          <!-- Name -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('name') }}</label>
            <div class="col-md-7">
              <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
              <has-error :form="form" field="name" />
            </div>
          </div>

          <!-- Email -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
            <div class="col-md-7">
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
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

          <!-- Password Confirmation -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('confirm_password') }}</label>
            <div class="col-md-7">
              <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
              <has-error :form="form" field="password_confirmation" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-7 offset-md-3 d-flex">
              <vue-hcaptcha sitekey="3f7f821f-05b7-486b-a3d9-21395609a73e" @verify="isVerified"></vue-hcaptcha>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-7 offset-md-3 d-flex">
              <!-- Submit Button -->
              <v-button :loading="form.busy" :disabled="!token">
              <!-- <v-button :loading="form.busy"> -->
                {{ $t('register') }}
              </v-button>

              <!-- GitHub Register Button -->
              <login-with-github />
            </div>
          </div>
        </form>
      </card>
    </div>
    <div class="col-lg-6 m-auto" v-if="onSecurity">
      <card title="Security Questions">
        <SecurityQuestion
          :submit = "register"
        />
      </card>
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
    token: null
  })

export default {
  middleware: 'guest',

  components: {
    LoginWithGithub,
    SecurityQuestion,
    VueHcaptcha,
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
