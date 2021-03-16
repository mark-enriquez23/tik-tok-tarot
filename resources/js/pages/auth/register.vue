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
          <div v-if="step===0">
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
             <div class="form-group row col-md-7 mx-auto mt-3">
            <div class="col-md-6 px-0 pr-lg-1" >
                <!-- Submit Button -->
                <router-link to="/login" >
                <button type="button" class="btn btn-secondary w-100" >
                <!-- <v-button :loading="form.busy"> -->
                  Cancel
                </button></router-link>
              </div>
              <div class="col-md-6 px-0 pl-lg-1" >
                <!-- Submit Button -->
                <button type="button"  class="btn btn-primary w-100" @click.prevent="next()" :disabled="form.name === '' || form.username === ''">
                <!-- <v-button :loading="form.busy"> -->
                  Next
                </button>
              </div>
             </div>
          </div>
          <div v-if="step===1">

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
              <label>{{ $t('confirm_password') }}</label>
              <input  v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="text" name="password_confirmation">
              <has-error :form="form" field="password_confirmation" />
            </div>
            <div class="form-group row col-md-7 mx-auto mt-3">
              <div class="col-md-6 px-0 pr-lg-1" >
                  <!-- Submit Button -->
                  <button type="button" class="btn btn-secondary w-100" @click.prevent="prev()"  >
                  <!-- <v-button :loading="form.busy"> -->
                    Back
                  </button>
                </div>
                <div class="col-md-6 px-0 pl-lg-1" >
                  <!-- Submit Button -->
                  <button type="button"  class="btn btn-primary w-100" @click.prevent="next()" :disabled="form.email === '' || form.password === '' || form.password_confirmation === ''">
                  <!-- <v-button :loading="form.busy"> -->
                    Next
                  </button>
                </div>
              </div>
          </div>
          <div v-if="step===2">
              <!-- Phone number -->
              <div class="form-group col-md-7 mx-auto">
                <label>Phone Number</label>
                <VuePhoneNumberInput v-model="form.phone_number" no-flags  :class="{ 'is-invalid': form.errors.has('phone_number') }" name="phone_number"/>
                <!-- <input  v-model="form.phone_number" :class="{ 'is-invalid': form.errors.has('phone_number') }" class="form-control" type="text" name="phone_number"> -->
                <has-error :form="form" field="phone_number" />
              </div>
              <!-- HCaptcha -->
              <div class="form-group row col-md-7 mx-auto" >
                <div class="col-md-12 px-0">
                  <vue-hcaptcha class="w-100" sitekey="3f7f821f-05b7-486b-a3d9-21395609a73e" @verify="isVerified"></vue-hcaptcha>
                </div>
              </div>
            <div class="form-group row col-md-7 mx-auto mt-3">
              <div class="col-md-6 px-0 pr-lg-1" >
                <!-- Submit Button -->
                <button type="button" class="btn btn-secondary w-100" @click.prevent="prev()"  >
                <!-- <v-button :loading="form.busy"> -->
                  Back
                </button>
              </div>
              <div class="col-md-6 px-0 pl-lg-1">
                <!-- Submit Button -->
                <v-button class="btn btn-primary w-100" :loading="form.busy" >
                <!-- <v-button :loading="form.busy"> -->
                  {{ $t('register') }}
                </v-button>
              </div>
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
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import Swal from 'sweetalert2';


Vue.component('vue-phone-number-input', VuePhoneNumberInput);

const initializeData = () => ({
    form: new Form({
      username: '',
      name: '',
      phone_number: '',
      email: '',
      password: '',
      password_confirmation: '',
      validate: null
    }),
    mustVerifyEmail: false,
    onSecurity: false,
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    token: null,
    step: 0,
    userData: null
  })

export default {
  layout: 'auth',
  middleware: 'guest',

  components: {
    LoginWithGithub,
    SecurityQuestion,
    VuePhoneNumberInput,
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
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    async register () {
      // Register the user.
        const { data } = await this.form.post('/api/register').catch((err) => {
          const size = Object.keys(err.response.data.errors).length
          switch (Object.keys(err.response.data.errors)[0]) {
            case 'name':
            case 'username':
              this.step = 0
              break;
            case 'email':
            case 'password':
              this.step = 1
              break;

            case 'phone':
              this.step = 1
              break;
          }
          if (size == 1) {

            this.onSecurity = true

            this.form.validate = true
            // console.log(err.response.data.errors.validate)

          }

        })

        this.userData = data;
        // Must verify email fist.
        if (data) {

          // Save Security Questions
          this.$store.dispatch('user-security-question/saveUserSecurityQuestion', this.userData.id)

          // Send email to admin
          const emailData = {
            email: this.form.email,
            data: {
                fullName: this.form.name,
                userName: this.form.username,
                email: this.form.email
            }
          }

          // const { emailRes } = axios.post('api/email/send-email', emailData )

          // console.log(emailRes)

          // Log in the user.
          const { data: { token } } = await this.form.post('/api/login')

          // Save the token.
          this.$store.dispatch('auth/saveToken', { token })

          // Update the user.
          this.$store.dispatch('auth/updateUser', { user: data })

          const phoneData = {
            recipient: this.form.phone_number
          }
          await axios.post('api/verification/send-message', phoneData ).finally((res) => {
            console.log(res)
          })

          Swal.fire({
              title: 'Success',
              text: "A verification code has been sent to your phone number!",
              type: 'success'
            }).then(() => {
                // Redirect home.
                this.$router.push({ name: 'login' })
            })

        }

    },

    isVerified(e) {

      this.token = e;

    }

  }

}
</script>
