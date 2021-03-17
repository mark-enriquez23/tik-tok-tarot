<template>
    <div>
        <form @submit.prevent="submit" @keydown="forgotPassSecurityQuestionForm.onKeydown($event)">
            <!-- <alert-error :form="forgotPassSecurityQuestionForm" :message="status" /> -->
            <!-- Question -->
           <div class="form-group col-md-7 mx-auto">
              <label>Question</label>
                <select class="form-control" type="text" name="question" v-model="forgotPassSecurityQuestionForm.question_id" required>
                  <option value="">Select Question</option>
                  <option
                    :value="forgotPassSecurityQuestion.id"
                    v-for="forgotPassSecurityQuestion in forgotPassSecurityQuestions"
                    :key="forgotPassSecurityQuestion.id">
                    {{ forgotPassSecurityQuestion.security_question.question }}
                  </option>
                </select>
            </div>

            <!-- First Answer -->
           <div class="form-group col-md-7 mx-auto">
              <input  v-model="forgotPassSecurityQuestionForm.answer" class="form-control" type="text" name="answer_1">
              <has-error :form="form" field="answer_1" />
            </div>


            <div class="form-group row col-md-7 mx-auto mt-3">
              <div class="col-md-12 px-0" >
                <!-- Submit Button -->
                <v-button class="btn btn-primary w-100" :loading="form.busy">
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
import Swal from 'sweetalert2';

export default {
  name: 'Card',
  middleware: 'guest',

  props: {
    status: { type: String, default: null },
    sendEmail: { type: Function },
    form: { type: FormData },
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
                   this.sendEmail().then((response)=>{
                    Swal.fire({
                        title: 'Success',
                        text: response.status,
                        type: 'success'
                      }).then(() => {
                          // Redirect home.
                          this.$router.push({ name: 'login' })
                      })
                   })
                }else{
                    swalOops(message)
                }
            }).catch((e) => swalOops(e));
        },

  }

}
</script>
