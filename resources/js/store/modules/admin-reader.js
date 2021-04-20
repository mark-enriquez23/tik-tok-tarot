import axios from "axios";

import * as types from "../mutation-types";

import Form from "vform";

// state
export const state = {
  readers: null,
  readerForm: new Form({
    id: '',
    username: '',
    name: '',
    phone_number: '',
    email: ''
  }),
  is_banned: 0,
  visible: 1,
};

// getters
export const getters = {
  readers: state => state.readers,
  readerForm: state => state.readerForm,
  is_banned: state => state.is_banned,
  visible: state => state.visible,
};

// mutations
export const mutations = {
  [types.FETCH_READER](state, { readers }) {
    state.readers = readers;
  },

  [types.EDIT_READER](state, { reader }) {
    state.readerForm.fill(reader)
    state.readerForm.is_banned = reader.is_banned
    state.readerForm.visible = reader.visible
  },
};

// actions
export const actions = {

  async fetchReaders({ commit }) {
    try {
      const { data } = await axios.get("/api/reader/fetch-readers");
      commit(types.FETCH_READER, { readers: data.data });
    } catch (e) {
      return e;
    }
  },

  async viewReader({ commit }, id) {
    try {
      const { data } = await axios.get(`/api/auth-reader/fetch-reader-by-id/${id}`);

      commit(types.EDIT_READER, { reader: data.data });
    } catch (e) {
      return e;
    }
  },

  async editReader({ commit }, data) {
    try {
      commit(types.EDIT_READER, { reader: data });
    } catch (e) {
      return e;
    }
  },
  
  async removeReader({ commit }, id) {
    try {
      const { data } = await axios.delete(`/api/auth-reader/remove/${id}`);
      console.log(data)

      return data
    } catch (e) {
      return e;
    }
  },

  isBannedChange(val){
    if (val == 0){
      state.is_banned = 0
    }else{
      state.is_banned = 1 
    }
  },

  isVisibleChange(val){
    if (val == 0){
      state.visible = 0
    }else if (val == 1){
      state.visible = 1 
    }
    console.log(state.visible);
  }



};
