<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <card class="pb-2">
         <div class="w-100 text-center mt-2 mb-4">
          <h4 >Verify Account</h4>
          <hr class="mx-auto line-form-break">
        </div>
        <div class="col-md-7 mx-auto">
          <div class="mx-auto">
            <CodeInput style="width: 100% !important" :loading="false" class="input" v-on:change="onChange" v-on:complete="onComplete" />
          </div>
          <p class="col-md-12 mb-0 mt-3">Please enter the code we've sent to your phone number for your account verification.</p>
          <div class="col-md-12 mt-3">
            <v-button class="btn btn-primary w-100">Verify Code</v-button>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CodeInput from "vue-verification-code-input";
import Swal from 'sweetalert2';


const qs = (params) => Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

export default {


  components: {
    CodeInput
  },
  metaInfo () {
    return { title: this.$t('verify_email') }
  },

  data: () => ({
    error: '',
    success: '',
    code: '',
  }),
   methods: {
    onChange(v) {
      console.log("onChange ", v);
    },
    onComplete(v) {
      console.log("onComplete ", v);
      this.code = v;
    },
    async verifyCode() {
      const verificationData = {
        email: this.user.email,
        code: this.code
      }
      const { data } = await axios.post("/api/verification/verify-user", verificationData );
      console.log(data);
      Swal.fire({
        title: 'Success',
        text: "Congratulations your account has been verified!",
        type: 'success'
      }).then(() => {
        // Redirect home.
        this.$router.push({ name: 'home' })
      })
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
