<template>
  <div class="row h-100">
    <div v-if="statusAction == 'enter-email'" class="col-lg-12 m-auto">
      <div>
        <div class="w-100 text-center mt-2 mb-4">
          <img :src="srcLogoOnly" style="mix-blend-mode: luminosity;" srcset="" class="img-fluid col-12 col-lg-4">
          <hr class="mx-auto line-form-break">
          <h4>Forgot Password</h4>
        </div>
        <form @submit.prevent="send" @keydown="form.onKeydown($event)">
          <div v-if="status" class=" col-md-7 mx-auto">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              {{ status }}.
              <button type="button" class="close" aria-label="Close" @click="status=''">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div v-if="successStatus" class=" col-md-7 mx-auto">
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              {{ successStatus }}.
              <button type="button" class="close" aria-label="Close" @click="successStatus=''">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>

          <div v-if="step===0">
            <!-- Email -->
            <div class="form-group col-md-7 mx-auto">
              <label>{{ $t('email') }}</label>
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="text" name="email">
              <has-error :form="form" field="email" />
            </div>

            <div class="form-group row col-md-7 mx-auto mt-3">
              <div class="col-md-6 px-0 pr-lg-1">
                <!-- Submit Button -->
                <router-link to="/login">
                  <button type="button" class="btn btn-secondary w-100 my-1">
                    <!-- <v-button :loading="form.busy"> -->
                    Cancel
                  </button>
                </router-link>
              </div>
              <div class="col-md-6 px-0 pl-lg-1">
                <!-- Submit Button -->
                <button type="button" class="btn btn-primary w-100 my-1" :disabled="validateEmail()" @click.prevent="next()">
                  <!-- <v-button :loading="form.busy"> -->
                  Next
                </button>
              </div>
            </div>
          </div>
          <div v-if="step===1">
            <div class="form-group row col-md-7 mx-auto mt-3">
              <label>Please Choose a Security Challenge Method</label>
              <div class="col-md-12 px-0 mb-2">
                <!-- Submit Button -->
                <button type="button" class="btn btn-secondary w-100" @click.prevent="setMethod('scq')">
                  Security Questions
                </button>
              </div>
              <div class="col-md-12 px-0">
                <!-- Submit Button -->
                <button type="button" class="btn btn-primary w-100" :disabled="form.email === ''" @click.prevent="setMethod('usc')">
                  Username Confirmation
                </button>
              </div>
            </div>
          </div>

          <div v-if="step===2">
            <div v-if="securityType === 'scq'">
              <SecurityQuestion
                :status="successStatus"
                :send-email="sendEmail"
                :form="form"
              />
            </div>
            <div v-else>
              <!-- Email -->
              <div class="form-group col-md-7 mx-auto">
                <label>Username</label>
                <input v-model="form.username" :class="{ 'is-invalid': form.errors.has('username') }" class="form-control" type="text" name="username">
                <has-error :form="form" field="username" />
              </div>
              <div class="form-group row col-md-7 mx-auto mt-3">
                <div class="col-md-12 px-0">
                  <!-- Submit Button -->
                  <v-button type="button" class="btn btn-primary w-100" :loading="form.busy" :disabled="form.username === ''">
                    Submit
                  </v-button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import SecurityQuestion from '~/components/ForgotPassword/SecurityQuestion'
import Swal from 'sweetalert2'

const initializeData = () => ({
  status: '',
  successStatus: '',
  form: new Form({
    email: '',
    username: ''
  }),
  token: null,
  srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
  step: 0,
  statusAction: 'enter-email',
  securityType: ''
})
export default {
  layout: 'auth',
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('reset_password') }
  },

  components: {
    SecurityQuestion
  },

  data: () => {
    return initializeData()
  },

  computed: mapGetters({
    forgotPassSecurityQuestionForm: 'forgot-pass-security-question/forgotPassSecurityQuestionForm'
  }),

  methods: {
    prev () {
      this.step--
    },
    next () {
      this.form.post('/api/user/validate-email').then(res => {
        if (res.data.data !== null) {
          this.step++
          this.status = ''
        } else {
          this.status = `Email doesn't exist`
        }
      })
    },
    validateEmail () {
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.form.email)) {
        return true
      } else {
        return false
      }
    },
    setMethod (method) {
      if (method === 'scq') {
        this.forgotPassSecurityQuestionForm.email = this.form.email
        this.$store.dispatch('forgot-pass-security-question/fetchUserSecurityQuestions')
      }
      this.securityType = method
      this.step++
    },
    async send () {
      // check the selected option
      if (this.step === 2) {
        this.form.post('/api/user/validate-username').then(res => {
          if (res.data.data !== null) {
            this.status = ''
            this.sendEmail()
          } else {
            this.status = res.data.message
          }
        })
      }
    },
    async sendEmail () {
      const { data } = await this.form.post('/api/password/email')
      this.form.reset()
      this.token = null

      Swal.fire({
        title: 'Success',
        text: data.status,
        type: 'success'
      }).then(() => {
        // Redirect home.
        this.$router.push({ name: 'login' })
      })
    },
    isVerified (e) {
      this.token = e
    }
  }
}
</script>
