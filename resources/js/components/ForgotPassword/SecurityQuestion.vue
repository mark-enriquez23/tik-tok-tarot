<template>
    <div>
        <form @submit.prevent="submit" @keydown="forgotPassSecurityQuestionForm.onKeydown($event)">
            <!-- <alert-error :form="forgotPassSecurityQuestionForm" :message="status" /> -->
            <!-- Question -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">Question</label>
                <div class="col-md-7">
                    <select class="form-control" v-model="forgotPassSecurityQuestionForm.question_id" required>
                        <option value="">Choose Question</option>
                        <option 
                            :value="forgotPassSecurityQuestion.id"
                            v-for="forgotPassSecurityQuestion in forgotPassSecurityQuestions" 
                            :key="forgotPassSecurityQuestion.id"
                        >
                            {{ forgotPassSecurityQuestion.security_question.question }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- First Answer -->
            <div class="form-group row">
                <label class="col-md-3 col-form-label text-md-right">Answer</label>
                <div class="col-md-7">
                    <input class="form-control" type="text" name="answer_1" v-model="forgotPassSecurityQuestionForm.answer">
                </div>
            </div>

            <div class="form-group row">
                <div class="col-md-12 offset-md-12 d-flex justify-content-end">
                <!-- Submit Button -->
                <v-button :loading="forgotPassSecurityQuestionForm.busy">
                    Submit
                </v-button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import { mapGetters } from "vuex";
import { swalOops, swalSuccess } from "~/helpers";

export default {
  name: 'Card',
  middleware: 'guest',

  props: {
    status: { type: String, default: null },
    sendEmail: { type: Function }
  },

  components: {
  },

  computed: mapGetters({
    forgotPassSecurityQuestions: "forgot-pass-security-question/forgotPassSecurityQuestions",
    forgotPassSecurityQuestionForm: "forgot-pass-security-question/forgotPassSecurityQuestionForm",
  }),

  methods: {
        submit(){
            this.$store.dispatch('forgot-pass-security-question/checkUserSecurityQuestion')
            .then(({ success, message }) => {

                if (success) {
                   this.sendEmail()
                    // swalSuccess(message).then(() => {

                    //     this.$router.push({ name: "password.reset", 
                    //         params: { token: data.token }, 
                    //         query: { email: data.email, custom: true } 
                    //     });

                    // });

                }else{
                    swalOops(message)
                }

            }).catch((e) => swalOops(e));
        },
        
  }

}
</script>
