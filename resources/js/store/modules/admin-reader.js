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
    email: '',
    is_banned: 0,
    visible: 0,
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

      console.log(data.data);
      commit(types.EDIT_READER, { reader: data.data });
    } catch (e) {
      return e;
    }
  },

  async editReader({ commit }, reader) {
    try {
      const { data } = await axios.post('/api/auth-reader/update-reader',reader)

      commit(types.EDIT_READER, { reader: data.data });
      return data;
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

  isBannedChange(){
    state.is_banned = !state.is_banned 
    console.log(state.is_banned);
  },

  isVisibleChange(){
    state.visible = !state.visible
    console.log(state.visible);
  }



};
