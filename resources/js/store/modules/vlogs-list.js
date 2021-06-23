import axios from "axios";

import * as types from "../mutation-types";

// state
export const state = {
  vlogList: null,
  vlogListFeaturedDataList: null,
};

// getters
export const getters = {
    vlogList: state => state.vlogList,
    vlogListFeaturedDataList: state => state.vlogList,
};

// mutations
export const mutations = {
  [types.FETCH_VLOGS](state, { vlogListData }) {
    state.vlogList = vlogListData;
  },
  [types.FETCH_VLOGS_FEATURED](state, { vlogListFeaturedDataList }) {
    state.vlogListFeaturedDataList = vlogListFeaturedDataList;
  },
};

// actions
export const actions = {
  async fetchVlogData({ commit }) {
      const { data } = await axios.get("/api/vlog/status/approved/0");
      commit(types.FETCH_VLOGS, { vlogListData: data.data });
  },
  async fetchVlogfeaturedData({ commit }) {
    const { data } = await axios.get("/api/vlog/status/approved/1");
    // console.log(data)
    // debugger
    commit(types.FETCH_VLOGS_FEATURED, { vlogListFeaturedDataList: data.data });
},
};
