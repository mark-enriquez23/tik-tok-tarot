import axios from "axios";

import * as types from "../mutation-types";

import Form from "vform";

// state
export const state = {
  howTo: null,
};

// getters
export const getters = {
  howTo: state => state.howTo,
};

// mutations
export const mutations = {
  [types.FETCH_HOW_TO](state, { howToData }) {
    state.howTo = howToData;
  },
};

// actions
export const actions = {
  async fetchHowToData({ commit }) {
    try {
      const { data } = await axios.get("/api/how-to");
      console.log(data)
      commit(types.FETCH_HOW_TO, { howToData: data.data });
    } catch (e) {
      return e;
    }
  },

};
