<template>
  <card class="py-3">
    <h4 class="mb-0">
      Security Questions
    </h4>
    <p class="mb-0">
      Change your security questions here.
    </p>
    <hr>
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <alert-success :form="form" :message="$t('info_updated')" />

      <!-- First Question -->
      <div class="form-group col-md-7 mx-auto">
        <label>Question #1</label>
        <select v-model="userSecurityQuestionForm.question_1" class="form-control" required :disabled="!isUpdating" @change="onChange($event, 0)">
          <option value="">
            First Question
          </option>
          <option
            v-for="userSecurityQuestion in secQs[0]"
            :key="userSecurityQuestion.id"
            :value="userSecurityQuestion.id"
          >
            {{ userSecurityQuestion.question }}
          </option>
        </select>
      </div>
      <!-- First Answer -->
      <div class="form-group col-md-7 mx-auto">
        <input v-model="userSecurityQuestionForm.answer_1" class="form-control" type="text" name="answer_1" :readonly="isUpdating">
      </div>
      <!-- Second Question -->
      <div class="form-group col-md-7 mx-auto">
        <label>Question #2</label>
        <select v-model="userSecurityQuestionForm.question_2" class="form-control" required :disabled="!isUpdating" @change="onChange($event, 1)">
          <option value="">
            Second Question
          </option>
          <option
            v-for="userSecurityQuestion in secQs[1]"
            :key="userSecurityQuestion.id"
            :value="userSecurityQuestion.id"
          >
            {{ userSecurityQuestion.question }}
          </option>
        </select>
      </div>
      <!-- Second Answer -->
      <div class="form-group col-md-7 mx-auto">
        <input v-model="userSecurityQuestionForm.answer_2" class="form-control" type="text" name="answer_2" :readonly="isUpdating">
      </div>
      <!-- Third Question -->
      <div class="form-group col-md-7 mx-auto">
        <label>Question #3</label>
        <select v-model="userSecurityQuestionForm.question_3" class="form-control" required :disabled="!isUpdating" @change="onChange($event, 2)">
          <option value="">
            Third Question
          </option>
          <option
            v-for="userSecurityQuestion in secQs[2]"
            :key="userSecurityQuestion.id"
            :value="userSecurityQuestion.id"
          >
            {{ userSecurityQuestion.question }}
          </option>
        </select>
      </div>
      <!-- Third Answer -->
      <div class="form-group col-md-7 mx-auto">
        <input v-model="userSecurityQuestionForm.answer_3" class="form-control" type="text" name="answer_3" :readonly="isUpdating">
      </div>

      <!-- Submit Button -->
      <div class="form-group row col-md-7 mx-auto mt-3">
        <div v-if="isUpdating" class="col-md-6 px-0 pr-lg-1">
          <!-- Bac Button -->
          <button type="button" class="btn btn-secondary w-100" @click.prevent="cancelUpdate()">
            <!-- <v-button :loading="form.busy"> -->
            Cancel
          </button>
        </div>
        <div class="col-md-6 px-0 pl-lg-1 ml-md-auto">
          <!-- Update Button -->
          <button v-if="!isUpdating" class="btn btn-primary w-100" @click.prevent="isUpdating = true">
            {{ $t('update') }}
          </button>
          <v-button v-else class="btn btn-primary w-100">
            Confirm
          </v-button>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import { swalOops, swalSuccess } from '~/helpers'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      username: '',
      name: '',
      email: ''
    }),
    isUpdating: false,
    secQs: [[], [], []]
  }),

  computed: mapGetters({
    user: 'auth/user',
    userSecurityQuestions: 'user-security-question/userSecurityQuestions',
    userSecurityQuestionForm: 'user-security-question/userSecurityQuestionForm'
  }),

  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
    console.log(this.form)
  },
  beforeMount () {
    for (let index = 0; index < this.secQs.length; index++) {
      this.secQs[index] = this.userSecurityQuestions
    }
  },
  methods: {
    async update () {
      this.$store.dispatch('user-security-question/saveAuthenticatedUserSecurityQuestion')
        .then(({ success, message }) => {
          if (success) {
            swalSuccess('Security Questions Updated')
            this.cancelUpdate()
          }
        })
    },
    onChange (event, i) {
      const selectedItem = parseInt(event.target.value)
      for (let index = 0; index < this.secQs.length; index++) {
        if (index !== i) {
          this.secQs[index] = this.userSecurityQuestions
          this.secQs[index] = this.secQs[index].filter(x => {
            return x.id !== selectedItem
          })
        }
      }
    },
    cancelUpdate () {
      this.$store.dispatch('user-security-question/fetchDefaultAuthenticatedSecurityQuestions')
      this.$store.dispatch('user-security-question/fetchAuthenticatedUserSecurityQuestions')
      for (let index = 0; index < this.secQs.length; index++) {
        this.secQs[index] = this.userSecurityQuestions
      }
      this.isUpdating = false
    }
  }
}
</script>
