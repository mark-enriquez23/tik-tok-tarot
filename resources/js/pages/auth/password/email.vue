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
          <alert-success :form="form" :message="status" />

          <!-- Email -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
            <div class="col-md-7">
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
              <has-error :form="form" field="email" />
            </div>
          </div>

          <!-- Option -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">Option</label>
            <div class="col-md-7">
              <select class="form-control" v-model="form.option" required>
                  <option value="">Select Option</option>
                  <option value="send-email">Send Email</option>
                  <option value="security-question">Security Question</option>
              </select>
              <has-error :form="form" field="option" />
            </div>
          </div>

          <!-- ReCaptcha -->
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

      </div>
    </div>
    <div class="col-lg-8 m-auto" v-if="statusAction == 'security-question'">
      <card title="Security Question">
        <SecurityQuestion
          :status = status
        />
      </card>
    </div>

  </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from "vuex";
import SecurityQuestion from '~/components/ForgotPassword/SecurityQuestion'
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';

const initializeData = () => ({
    status: '',
    form: new Form({
      email: '',
      option: ''
    }),
    token: null,
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
    statusAction: 'enter-email'
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
    async send () {

      // check the selected option
      if (this.form.option === "send-email") {

        const { data } = await this.form.post('/api/password/email')

        this.status = data.status

        this.form.reset()

        this.token = null

      }else{ // security question

        this.forgotPassSecurityQuestionForm.email = this.form.email

        this.statusAction = 'security-question'

        this.$store.dispatch('forgot-pass-security-question/fetchUserSecurityQuestions')

      }

    },
    isVerified(e) {

      this.token = e;

    }
  }
}
</script>
