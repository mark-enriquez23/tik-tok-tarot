<template>
  <div>
    <div class="w-100 text-center mt-2 mb-4">
      <h4>Phone Verification</h4>
      <hr class="mx-auto line-form-break">
    </div>
    <form v-if="!isCodeSent" @submit.prevent="sendCode" @keydown="phoneForm.onKeydown($event)">
      <!-- Phone Number -->
      <div class="form-group col-md-12 px-0">
        <input v-model="phoneForm.recipient" placeholder="Phone Number" class="form-control" type="text" name="answer_1">
      </div>
      <div class="form-group col-md-12 px-0 mt-3">
        <div class="col-md-12 px-0">
          <!-- Submit Button -->
          <v-button class="btn btn-primary w-100" :loading="phoneForm.busy">
            Send Code
          </v-button>
        </div>
      </div>
    </form>
    <form v-else @keydown="phoneCode.onKeydown($event)">
      <!-- Phone Number -->
      <div class="form-group col-md-12 px-0">
        <input v-model="phoneCode.code" placeholder="Phone Number" class="form-control" type="text" name="answer_1">
      </div>
      <div class="form-group col-md-12 px-0 mt-3">
        <div class="col-md-12 px-0">
          <!-- Submit Button -->
          <v-button class="btn btn-primary w-100" :loading="phoneCode.busy">
            Confirm
          </v-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

const initializeData = () => ({
  phoneForm: new Form({
    recipient: ''
  }),
  phoneCode: new Form({
    code: ''
  }),
  isCodeSent: false
})
export default {
  name: 'PhoneVerification',
  middleware: 'guest',

  components: {
  },

  props: {
    title: { type: String, default: null },
    submit: { type: Function }
  },

  data: () => {
    return initializeData()
  },

  computed: mapGetters({
  }),
  beforeMount () {
  },

  methods: {
    onChange (event) {
    },
    async sendCode () {
      this.isCodeSent = true

      await this.phoneForm.post('api/verification/send-message')
    }
  }
}
</script>
