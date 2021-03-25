import axios from "axios";

import * as types from "../mutation-types";

import Form from "vform";

// state
export const state = {
  faq: null,
};

// getters
export const getters = {
  faq: state => state.faq,
};

// mutations
export const mutations = {
  [types.FETCH_FAQ](state, { faqData }) {
    state.faq = faqData;
  },
};

// actions
export const actions = {
  async fetchFaqData({ commit }) {
    try {
      const { data } = await axios.get("/api/faq");
      console.log(data)
      commit(types.FETCH_FAQ, { faqData: data.data });
    } catch (e) {
      return e;
    }
  },

};
