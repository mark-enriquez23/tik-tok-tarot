<template>
  <div class="row h-100">
    <div v-if="!onSecurity" class="col-lg-12 my-auto">
      <div v-if="mustVerifyEmail">
        <div class="alert alert-success" role="alert">
          {{ $t('verify_email_address') }}
        </div>
      </div>
      <div v-if="!mustVerifyEmail">
        <div class="w-100 text-center mt-2 mb-4">
          <img :src="srcLogoOnly" style="mix-blend-mode: luminosity;" srcset="" class="img-fluid col-12 col-lg-4">
          <hr class="mx-auto line-form-break">
          <h4>
            Register
          </h4>
        </div>
        <form @submit.prevent="register" @keydown="form.onKeydown($event)">
          <div v-if="step===0">
            <!-- Name -->
            <div class="form-group col-md-7 mx-auto">
              <label>{{ $t('First Name') }}</label>
              <input v-model="form.firstName" :class="{ 'is-invalid': form.errors.has('firstName') }" class="form-control" type="text" name="firstName">
              <has-error :form="form" field="firstName" />
            </div>

            <div class="form-group col-md-7 mx-auto">
              <label>{{ $t('Last Name') }}</label>
              <input v-model="form.lastName" :class="{ 'is-invalid': form.errors.has('lastName') }" class="form-control" type="text" name="lastName">
              <has-error :form="form" field="lastName" />
            </div>
            <!-- UserName -->
            <div class="form-group col-md-7 mx-auto">
              <label>{{ $t('username') }}</label>
              <input v-model="form.username" :class="{ 'is-invalid': form.errors.has('username') }" class="form-control" type="text" name="username">
              <has-error :form="form" field="username" />
            </div>

            <div class="form-group col-md-7 mx-auto">
              <label>Gender</label>
              <select id="gender" v-model="form.gender" class="form-control" required>
                <option v-for="(gender) in gender"
                        :key="gender.id"
                        :value="gender.id"
                >
                  {{ gender.name }}
                </option>
              </select>
              <has-error :form="form" field="gender" />
            </div>

            <!-- Role -->
            <div class="form-group col-md-7 mx-auto">
              <label>Select Role</label>
              <select id="firstQuestion" v-model="form.role_id" class="form-control" required>
                <option v-for="(role) in roles"
                        :key="role.id"
                        :value="role.id"
                >
                  {{ role.name }}
                </option>
              </select>
              <has-error :form="form" field="name" />
            </div>

            <div class="form-group row col-md-7 mx-auto mt-3">
              <div class="col-md-6 px-0 pr-lg-1 my-1">
                <!-- Submit Button -->
                <router-link to="/login">
                  <button type="button" class="btn btn-secondary w-100">
                    Cancel
                  </button>
                </router-link>
              </div>
              <div class="col-md-6 px-0 pl-lg-1 my-1">
                <!-- Submit Button -->
                <button type="button" class="btn btn-primary w-100" :disabled="form.name === '' || form.username === ''" @click.prevent="next()">
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
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="text" name="email">
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
              <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
              <has-error :form="form" field="password_confirmation" />
            </div>
            <div class="form-group row col-md-7 mx-auto mt-3">
              <div class="col-md-6 px-0 pr-lg-1">
                <!-- Submit Button -->
                <button type="button" class="btn btn-secondary w-100 my-1" @click.prevent="prev()">
                  <!-- <v-button :loading="form.busy"> -->
                  Back
                </button>
              </div>
              <div class="col-md-6 px-0 pl-lg-1">
                <!-- Submit Button -->
                <button type="button" class="btn btn-primary w-100 my-1" :disabled="form.email === '' || form.password === '' || form.password_confirmation === ''" @click.prevent="next()">
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
              <VuePhoneNumberInput v-model="phone_number" no-flags :class="{ 'is-invalid': form.errors.has('phone_number') }" name="phone_number" @update="updatePhoneNumber" />
              <!-- <input  v-model="form.phone_number" :class="{ 'is-invalid': form.errors.has('phone_number') }" class="form-control" type="text" name="phone_number"> -->
              <has-error :form="form" field="phone_number" />
            </div>
            <!-- HCaptcha -->
            <div class="form-group row col-md-7 mx-auto">
              <div class="col-md-12 px-0">
                <vue-hcaptcha class="w-100" sitekey="3f7f821f-05b7-486b-a3d9-21395609a73e" @verify="isVerified" />
              </div>
            </div>
            <div class="form-group row col-md-7 mx-auto mt-3">
              <div class="col-md-6 px-0 pr-lg-1">
                <!-- Submit Button -->
                <button type="button" class="btn btn-secondary w-100 my-1" @click.prevent="prev()">
                  <!-- <v-button :loading="form.busy"> -->
                  Back
                </button>
              </div>
              <div class="col-md-6 px-0 pl-lg-1">
                <!-- Submit Button -->
                <v-button class="btn btn-primary w-100 my-1" :loading="form.busy" :disabled="!validPhoneNumber">
                  <!-- <v-button :loading="form.busy"> -->
                  Next
                </v-button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div v-if="onSecurity" class="col-md-7 m-auto">
      <div title="Security Questions">
        <SecurityQuestion
          :submit="register"
          :form="form"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import VueHcaptcha from '@hcaptcha/vue-hcaptcha'
import SecurityQuestion from '~/components/Register/SecurityQuestion'
import VuePhoneNumberInput from 'vue-phone-number-input'
import { swalOops } from '../../helpers/index'
import axios from 'axios'
import Swal from 'sweetalert2'

const initializeData = () => ({
  form: new Form({
    username: '',
    firstName: '',
    lastName: '',
    phone_number: '',
    email: '',
    password: '',
    password_confirmation: '',
    role_id: null,
    validate: null,
    referral_code: ''
  }),
  phone_number: '',
  validPhoneNumber: false,
  mustVerifyEmail: false,
  onSecurity: false,
  srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
  token: null,
  step: 0,
  userData: null,
  referral_code: '',
  roles: [
    {
      id: 2,
      name: 'Reader'
    },
    {
      id: 3,
      name: 'Viewer'
    }
  ],
  gender: [
    {
      id: 0,
      name: 'Male'
    },
    {
      id: 1,
      name: 'Female'
    },
    {
      id: 2,
      name: 'Other'
    }
  ]
})

export default {
  layout: 'auth',
  middleware: 'guest',

  components: {
    VueHcaptcha,
    SecurityQuestion,
    VuePhoneNumberInput
  },

  metaInfo () {
    return { title: 'Register' }
  },

  data: () => {
    return initializeData()
  },

  created () {
    this.getCode()
  },

  mounted () {
    this.$store.dispatch('user-security-question/fetchUserSecurityQuestions')
    this.$store.dispatch('role/fetchRoles')
  },

  methods: {
    getCode () {
      this.referral_code = this.$route.params.referral_code
      console.log(this.referral_code)
    },

    updatePhoneNumber (e) {
      console.log(e)
      this.form.phone_number = e.e164
      if (e.isValid) { this.validPhoneNumber = true }
    },
    prev () {
      this.step--
    },
    next () {
      if (this.step === 0) {
        // check username first
        this.$store.dispatch('auth/validateUsername', this.form.username).then(({ success, message }) => {
          if (success) {
            swalOops(message)
          } else {
            this.step++
          }
        })
      } else if (this.step === 1) {
        // check email first
        this.$store.dispatch('auth/validateEmail', this.form.email).then(({ success, message }) => {
          if (success) {
            swalOops(message)
          } else {
            // check password
            if (this.form.password !== this.form.password_confirmation) {
              swalOops('Password not match')
            } else {
              this.$store.dispatch('auth/validatePassword', this.form).then(({ success, message }) => {
                if (success) {
                  this.step++
                }
              })
            }
          }
        })
      }
    },
    async register () {
      this.form.referral_code = this.referral_code
      console.log(this.form)
      // Register the user.
      const { data } = await this.form.post('/api/register').catch((err) => {
        const size = Object.keys(err.response.data.errors).length
        switch (Object.keys(err.response.data.errors)[0]) {
          case 'name':
          case 'username':
            this.step = 0
            break
          case 'email':
          case 'password':
            this.step = 1
            break

          case 'phone':
            this.step = 1
            break
        }
        if (size === 1) {
          this.onSecurity = true

          this.form.validate = true
          // console.log(err.response.data.errors.validate)
        }
      })

      this.userData = data
      // Must verify email fist.
      if (data) {
        // Save Security Questions
        this.$store.dispatch('user-security-question/saveUserSecurityQuestion', this.userData.id)

        // Send email to admin
        const emailData = {
          data: {
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            userName: this.form.username,
            email: this.form.email

          },
          phone_number: this.form.phone_number,
          referral_code: this.referral_code
        }

        // uncomment this if going to push on production
        axios.post('api/email/send-email', emailData)
        // console.log(emailRes)

        // Log in the user.
        const { data: { token } } = await this.form.post('/api/login')

        // Save the token.
        this.$store.dispatch('auth/saveToken', { token })

        // Update the user.
        this.$store.dispatch('auth/updateUser', { user: data })

        Swal.fire({
          title: 'Success',
          text: 'A verification code has been sent to your email!',
          type: 'success'
        }).then(() => {
          // Redirect home.
          this.$router.push({ name: 'user.verify' })
        })
      }
    },

    isVerified (e) {
      this.token = e
    }

  }
}
</script>
