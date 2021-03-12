<template>
    <div>
        <div class="w-100 text-center mt-2 mb-4">
          <h4 >Security Questions</h4>
          <hr class="mx-auto line-form-break">
        </div>
        <form @submit.prevent="submit" @keydown="userSecurityQuestionForm.onKeydown($event)">
            <!-- First Question -->
            <div class="form-group col-md-12 px-0">
              <label for="firstQuestion">First Question</label>
              <select @change="onChange($event, 0)" id="firstQuestion" class="form-control"  v-model="userSecurityQuestionForm.question_1" required>
                 <option  :value="userSecurityQuestion.id"
                        v-for="(userSecurityQuestion) in secQs[0]"
                        :key="userSecurityQuestion.id">
                      {{ userSecurityQuestion.question }}
                </option>
              </select>
            </div>
            <!-- First Answer -->
            <div class="form-group col-md-12 px-0">
              <input placeholder="Answer" class="form-control" type="text" name="answer_1" v-model="userSecurityQuestionForm.answer_1">
            </div>
            <!-- Second Question -->
            <div class="form-group col-md-12 px-0">
              <label for="firstQuestion">Second Question</label>
              <select @change="onChange($event, 1)" id="firstQuestion" class="form-control"  v-model="userSecurityQuestionForm.question_2" required>
                 <option  :value="userSecurityQuestion.id"
                        v-for="(userSecurityQuestion) in secQs[1]"
                        :key="userSecurityQuestion.id">
                      {{ userSecurityQuestion.question }}
                </option>
              </select>
            </div>
            <!-- Second Answer -->
            <div class="form-group col-md-12 px-0">
              <input placeholder="Answer" class="form-control" type="text" name="answer_2" v-model="userSecurityQuestionForm.answer_2">
            </div>
            <!-- Third Question -->
            <div class="form-group col-md-12 px-0">
              <label for="firstQuestion">Third Question</label>
              <select @change="onChange($event, 2)" id="firstQuestion" class="form-control"  v-model="userSecurityQuestionForm.question_3" required>
                 <option  :value="userSecurityQuestion.id"
                        v-for="(userSecurityQuestion) in secQs[2]"
                        :key="userSecurityQuestion.id">
                      {{ userSecurityQuestion.question }}
                </option>
              </select>
            </div>
            <!-- Third Answer -->
            <div class="form-group col-md-12 px-0">
              <input placeholder="Answer" class="form-control" type="text" name="answer_3" v-model="userSecurityQuestionForm.answer_3">
            </div>
            <div class="form-group col-md-12 px-0 mt-3">
              <div class="col-md-12 px-0">
                <!-- Submit Button -->
                <v-button class="btn btn-primary w-100" :loading="userSecurityQuestionForm.busy">
                    Next
                </v-button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

const initializeData = () => ({
  secQs: [[],[],[]]
})
export default {
  name: 'Card',
  middleware: 'guest',

  props: {
    title: { type: String, default: null },
    submit: { type: Function }
  },

  data:() => {
    return initializeData();
  },

  components: {
  },

  computed: mapGetters({
    userSecurityQuestions: "user-security-question/userSecurityQuestions",
    userSecurityQuestionForm: "user-security-question/userSecurityQuestionForm",
  }),

  methods: {
      onChange(event, i) {
        const selectedItem = parseInt(event.target.value);
        for (let index = 0; index < this.secQs.length; index++) {
          if (index !== i ) {
            this.secQs[index] = this.userSecurityQuestions
            this.secQs[index] = this.secQs[index].filter(x => {
              return x.id !== selectedItem
            })
          }
        }
      }
  },
  beforeMount() {
    console.log(this.userSecurityQuestions)
    for (let index = 0; index < this.secQs.length; index++) {
      this.secQs[index] = this.userSecurityQuestions
    }
  }
}
</script>
