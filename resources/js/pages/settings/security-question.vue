<template>
    <card title="Your Security Question">
        <form @submit.prevent="update" @keydown="form.onKeydown($event)">
            <alert-success :form="form" :message="$t('info_updated')" />

            <!-- First Question -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">Question #1</label>
                <div class="col-md-7">
                    <select class="form-control" v-model="userSecurityQuestionForm.question_1" required>
                        <option value="">First Question</option>
                        <option 
                            :value="userSecurityQuestion.id" 
                            v-for="userSecurityQuestion in userSecurityQuestions" 
                            :key="userSecurityQuestion.id"
                        >
                            {{ userSecurityQuestion.question }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- First Answer -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">Answer #1</label>
                <div class="col-md-7">
                    <input class="form-control" type="text" name="answer_1" v-model="userSecurityQuestionForm.answer_1">
                </div>
            </div>
            <!-- Second Question -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">Question #2</label>
                <div class="col-md-7">
                    <select class="form-control" v-model="userSecurityQuestionForm.question_2">
                        <option value="">Second Question</option>
                        <option 
                            :value="userSecurityQuestion.id" 
                            v-for="userSecurityQuestion in userSecurityQuestions" 
                            :key="userSecurityQuestion.id"
                        >
                            {{ userSecurityQuestion.question }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- Second Answer -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">Answer #1</label>
                <div class="col-md-7">
                <input class="form-control" type="text" name="answer_2" v-model="userSecurityQuestionForm.answer_2">
                </div>
            </div>
            <!-- Third Question -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">Question #2</label>
                <div class="col-md-7">
                    <select class="form-control" v-model="userSecurityQuestionForm.question_3">
                        <option value="">Third Question</option>
                        <option 
                            :value="userSecurityQuestion.id" 
                            v-for="userSecurityQuestion in userSecurityQuestions" 
                            :key="userSecurityQuestion.id"
                        >
                            {{ userSecurityQuestion.question }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- Third Answer -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">Answer #1</label>
                <div class="col-md-7">
                <input class="form-control" type="text" name="answer_3" v-model="userSecurityQuestionForm.answer_3">
                </div>
            </div>

            <!-- Submit Button -->
            <div class="form-group row">
                <div class="col-md-9 ml-md-auto">
                <v-button :loading="form.busy" type="success">
                    {{ $t('update') }}
                </v-button>
                </div>
            </div>
        </form>
    </card>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import { swalOops, swalSuccess } from "~/helpers"

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
    })
  }),

  computed: mapGetters({
    user: 'auth/user',
    userSecurityQuestions: "user-security-question/userSecurityQuestions",
    userSecurityQuestionForm: "user-security-question/userSecurityQuestionForm",
  }),

  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },

  methods: {
    async update () {
      this.$store.dispatch('user-security-question/saveAuthenticatedUserSecurityQuestion')
        .then(({success, message})=>{
            if (success) {
                swalSuccess(message)
            }
        })
    }
  },
  beforeMount(){
    this.$store.dispatch('user-security-question/fetchDefaultAuthenticatedSecurityQuestions')
    this.$store.dispatch('user-security-question/fetchAuthenticatedUserSecurityQuestions')
  }
}
</script>
