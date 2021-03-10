import axios from "axios";

import * as types from "../mutation-types";

import Form from "vform";

// state
export const state = {

    forgotPassSecurityQuestions: [],

    forgotPassSecurityQuestionForm: new Form({

        email: "",

        question_id: "",

        answer: ""

    }),

    loading: false

};

// getters
export const getters = {

  forgotPassSecurityQuestions: state => state.forgotPassSecurityQuestions,

  forgotPassSecurityQuestionForm: state => state.forgotPassSecurityQuestionForm

};

// mutations
export const mutations = {

  [types.FETCH_USER_SECURITY_QUESTION](state, { userSecurityQuestions }) {
    console.log(userSecurityQuestions)
    state.forgotPassSecurityQuestions = userSecurityQuestions ? userSecurityQuestions : [];

  },

  [types.SAVE_USER_SECURITY_QUESTION](state) {

    state.forgotPassSecurityQuestionForm.reset();

  },

  [types.SET_LOADING](state, status) {

    state.loading = status;

  }

};

// actions
export const actions = {

  async fetchUserSecurityQuestions({ commit }) {

    try {

        const request = {

            email: state.forgotPassSecurityQuestionForm.email

        }

        const { data } = await axios.post("/api/forgot-password/user-security-questions", request );

        commit(types.FETCH_USER_SECURITY_QUESTION, { userSecurityQuestions: data.data.security_questions });

    } catch (e) {

      return e;

    }

  },

  async checkUserSecurityQuestion({ commit }) {

    try {

        const questionData = {

            email: state.forgotPassSecurityQuestionForm.email,

            question_id: state.forgotPassSecurityQuestionForm.question_id,

            answer: state.forgotPassSecurityQuestionForm.answer

        }

        state.loading = true;

        const { data } = await axios.post("/api/forgot-password/check-security-question", questionData );

        return data;

    } catch (e) {

      return e;

    } finally {

      commit(types.SET_LOADING, false);

    }

  }
  
};
