<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <card class="pb-2">
        <div class="w-100 text-center mt-2 mb-4">
          <h4>Verify Account</h4>
          <hr class="mx-auto line-form-break">
        </div>
        <form @submit.prevent="verifyCode" @keydown="form.onKeydown($event)">
          <div class="row">
            <div class="col-xs-12 mx-auto">
              <CodeInput style="width: 100% !important" :type="'text'" :loading="false" class="input" @change="onChange" @complete="onComplete" />
            </div>
          </div>
          <p class="col-md-12 mb-0 mt-3">
            Please enter the code we've sent to your email for your account verification.
          </p>
          <div class="col-md-12 mt-3">
            <v-button class="btn btn-primary w-100" :disabled="!form.code">
              Verify Code
            </v-button>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import CodeInput from 'vue-verification-code-input'
import Swal from 'sweetalert2'

export default {

  components: {
    CodeInput
  },

  data: () => ({
    error: '',
    success: '',
    code: '',
    form: new Form({
      code: '',
      email: ''
    })
  }),

  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  mounted () {
    this.form.email = this.user.email
  },

  methods: {
    onChange (v) {
    },
    onComplete (v) {
      this.form.code = v
    },
    async verifyCode () {
      const { data } = await this.form.post('/api/verification/verify-user')

      if (!data.success) {
        Swal.fire({
          title: 'Incorrect Code',
          text: 'Code is not correct!',
          type: 'error'
        })
      } else {
        Swal.fire({
          title: 'Success',
          text: 'Congratulations your account has been verified!',
          type: 'success'
        }).then(() => {
          if (this.user.role_id === 2) {
            this.$router.push({ name: 'reader.videos' })
          } else {
            this.$router.push({ name: 'welcome' })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep {
    .react-code-input>input:focus {
      caret-color: #2485EC !important;
      border-color: #2485EC !important;
    }
    .react-code-input {
      width: fit-content !important;
      margin: auto !important;
    }
    .react-code-input-container {
      width: 100% !important;
    }
  }
</style>
