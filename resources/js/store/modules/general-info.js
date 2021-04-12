import axios from "axios";

import * as types from "../mutation-types";

import Form from "vform";

// state
export const state = {
  generalInfo: null,
};

// getters
export const getters = {
  generalInfo: state => state.generalInfo,
};

// mutations
export const mutations = {
  [types.FETCH_GENERAL_INFO](state, { generalInfoData }) {
    state.generalInfo = generalInfoData;
  },
};

// actions
export const actions = {
  async fetchGeneralInfoData({ commit }) {
    try {
      const { data } = await axios.get("/api/general-info");
      console.log(data)
      commit(types.FETCH_GENERAL_INFO, { generalInfoData: data.data });
    } catch (e) {
      return e;
    }
  },

};