import axios from "axios";

import * as types from "../mutation-types";

import Form from "vform";

// state
export const state = {

  userSecurityQuestions: [],

  userSecurityQuestionForm: new Form({

    id: "",

    user_id: "",

    question_1: "",

    question_2: "",

    question_3: "",
    
    answer_1: "",
    
    answer_2: "",
    
    answer_3: "",

  }),

  loading: false

};

// getters
export const getters = {

  userSecurityQuestions: state => state.userSecurityQuestions,

  userSecurityQuestionForm: state => state.userSecurityQuestionForm

};

// mutations
export const mutations = {

  [types.FETCH_USER_SECURITY_QUESTION](state, { userSecurityQuestions }) {

    state.userSecurityQuestions = userSecurityQuestions ? userSecurityQuestions : [];

  },

  [types.SAVE_USER_SECURITY_QUESTION](state) {

    state.userSecurityQuestionForm.reset();

  },

  [types.SET_LOADING](state, status) {

    state.loading = status;

  }

};

// actions
export const actions = {

  async fetchUserSecurityQuestions({ commit }) {

    try {

      const { data } = await axios.get("/api/security-question");
      
      commit(types.FETCH_USER_SECURITY_QUESTION, { userSecurityQuestions: data.data });

    } catch (e) {

      return e;

    }

  },

  async saveUserSecurityQuestion({ commit }, user_id) {

    try {

      state.loading = true;

      state.userSecurityQuestionForm.user_id = user_id;

      const questionData = [
        {
          user_id: user_id,
          question_id: state.userSecurityQuestionForm.question_1,
          answer: state.userSecurityQuestionForm.answer_1,
        },
        {
          user_id: user_id,
          question_id: state.userSecurityQuestionForm.question_2,
          answer: state.userSecurityQuestionForm.answer_2,
        },
        {
          user_id: user_id,
          question_id: state.userSecurityQuestionForm.question_3,
          answer: state.userSecurityQuestionForm.answer_3,
        }
      ]

      const { data } = await axios.post("/api/user-security-question/save", { questionData });

      commit(types.SAVE_USER_SECURITY_QUESTION, { securityQuestion: data.data });

      return data;

    } catch (e) {

      return e;

    } finally {

      commit(types.SET_LOADING, false);

    }

  },
  
};
