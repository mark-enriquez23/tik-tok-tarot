<template>
  <div class="row h-100">
    <div class="col-lg-12 m-auto" v-if="statusAction == 'enter-email'">
      <div>
        <div class="w-100 text-center mt-2 mb-4">
          <img :src="srcLogoOnly" style="mix-blend-mode: luminosity;" srcset="" class="img-fluid col-12 col-lg-4">
          <hr class="mx-auto line-form-break">
          <h4 >Forgot Password</h4>
        </div>
        <form @submit.prevent="send" @keydown="form.onKeydown($event)">
          <div class=" col-md-7 mx-auto" v-if="status">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              {{status}}.
              <button type="button" class="close" @click="status=''" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div class=" col-md-7 mx-auto" v-if="successStatus">
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              {{successStatus}}.
              <button type="button" class="close" @click="successStatus=''" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>

          <div v-if="step===0">
            <!-- Email -->
           <div class="form-group col-md-7 mx-auto">
              <label>{{ $t('email') }}</label>
              <input  v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="text" name="email">
              <has-error :form="form" field="email" />
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
                  <button type="button"  class="btn btn-primary w-100" @click.prevent="next()" :disabled="form.email === ''">
                  <!-- <v-button :loading="form.busy"> -->
                    Next
                  </button>
                </div>
             </div>
          </div>
          <div v-if="step===1">
            <div class="form-group row col-md-7 mx-auto mt-3">
              <label>Please Choose a Security Challenge Method</label>
              <div class="col-md-12 px-0 mb-2" >
                  <!-- Submit Button -->
                  <button type="button" @click.prevent="setMethod('scq')"  class="btn btn-secondary w-100" >
                    Security Questions
                  </button>
                </div>
                <div class="col-md-12 px-0" >
                  <!-- Submit Button -->
                  <button type="button"  class="btn btn-primary w-100" @click.prevent="setMethod('usc')" :disabled="form.email === ''">
                    Username Confirmation
                  </button>
                </div>
             </div>
          </div>

          <div v-if="step===2">
            <div v-if="securityType === 'scq'">
                <SecurityQuestion
                  :status = successStatus
                  :sendEmail = sendEmail
                  :form = form
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
                  <div class="col-md-12 px-0" >
                    <!-- Submit Button -->
                    <v-button type="button"  class="btn btn-primary w-100" :loading="form.busy" :disabled="form.username === ''">
                      Submit
                    </v-button>
                  </div>
              </div>
            </div>
          </div>


          <!-- Option -->
          <!-- <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">Option</label>
            <div class="col-md-7">
              <select class="form-control" v-model="form.option" required>
                  <option value="">Select Option</option>
                  <option value="send-email">Send Email</option>
                  <option value="security-question">Security Question</option>
              </select>
              <has-error :form="form" field="option" />
            </div>
          </div> -->

          <!-- ReCaptcha -->
          <!-- <div class="form-group row col-md-7 mx-auto" v-if="!captchaDisabled">
            <div class="col-md-12 px-0">
              <vue-hcaptcha sitekey="3f7f821f-05b7-486b-a3d9-21395609a73e" @verify="isVerified"></vue-hcaptcha>
            </div>
          </div> -->

          <!-- Submit Button -->
          <!-- <div class="form-group row col-md-7 mx-auto mt-3">
            <div class="col-md-12 px-0">
              <v-button class="btn btn-primary w-100" :disabled="token" :loading="form.busy">
                {{ $t('send_password_reset_link') }}
              </v-button>
            </div>
          </div> -->
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from "vuex";
import SecurityQuestion from '~/components/ForgotPassword/SecurityQuestion'
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';
import Swal from 'sweetalert2';

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
    securityType: '',
  })
export default {
  layout: 'auth',
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('reset_password') }
  },

  components: {
    VueHcaptcha,
    SecurityQuestion
  },

  computed: mapGetters({
    forgotPassSecurityQuestionForm: "forgot-pass-security-question/forgotPassSecurityQuestionForm",
  }),

  data: () => {
    return initializeData();
  },

  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    setMethod(method) {
      if (method ==='scq') {
        this.forgotPassSecurityQuestionForm.email = this.form.email
        this.$store.dispatch('forgot-pass-security-question/fetchUserSecurityQuestions')
      }
      this.securityType = method;
      this.step++
    },
    async send () {
      // check the selected option
      if (this.step === 2) {
        this.form.post('/api/user/validate-username').then(res => {
          if (res.data.data!==null) {
            this.sendEmail()
          }
          else {
            this.status = res.data.message;
          }
        })
      }
    },
    async sendEmail(){
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
    isVerified(e) {
      this.token = e;
    }
  }
}
</script>
