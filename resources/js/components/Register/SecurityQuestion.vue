<template>
    <div>
        <form @submit.prevent="submit" @keydown="userSecurityQuestionForm.onKeydown($event)">
            <!-- First Question -->
            <div class="form-group row">
                <div class="col-md-12">
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
                <div class="col-md-12">
                    <input class="form-control" type="text" name="answer_1" v-model="userSecurityQuestionForm.answer_1">
                </div>
            </div>
            <!-- Second Question -->
            <div class="form-group row">
                <div class="col-md-12">
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
                <div class="col-md-12">
                <input class="form-control" type="text" name="answer_2" v-model="userSecurityQuestionForm.answer_2">
                </div>
            </div>
            <!-- Third Question -->
            <div class="form-group row">
                <div class="col-md-12">
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
                <div class="col-md-12">
                <input class="form-control" type="text" name="answer_3" v-model="userSecurityQuestionForm.answer_3">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-12 offset-md-12 d-flex justify-content-end">
                <!-- Submit Button -->
                <v-button :loading="userSecurityQuestionForm.busy">
                    Submit
                </v-button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Card',
  middleware: 'guest',

  props: {
    title: { type: String, default: null },
    submit: { type: Function }
  },

  components: {
  },

  computed: mapGetters({
    userSecurityQuestions: "user-security-question/userSecurityQuestions",
    userSecurityQuestionForm: "user-security-question/userSecurityQuestionForm",
  }),

  methods: {
  },

  beforeMount(){
    this.$store.dispatch('user-security-question/fetchUserSecurityQuestions')
  }
}
</script>
