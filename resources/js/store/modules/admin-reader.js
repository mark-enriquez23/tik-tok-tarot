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
};

// getters
export const getters = {
  readers: state => state.readers,
  readerForm: state => state.readerForm,
};

// mutations
export const mutations = {
  [types.FETCH_READER](state, { readers }) {
    state.readers = readers;
  },

  [types.EDIT_READER](state, { reader }) {
    state.readerForm.fill(reader)
  },
};

// actions
export const actions = {

  async fetchReaders({ commit }) {
    try {
      const { data } = await axios.get("/api/reader/fetch-readers");
      console.log(data)
      commit(types.FETCH_READER, { readers: data.data });
    } catch (e) {
      return e;
    }
  },

  async viewReader({ commit }, id) {

    console.log(id)
    try {
      const { data } = await axios.get(`/api/auth-reader/feth-reader-by-id/${id}`);
      console.log(data)
      commit(types.EDIT_READER, { reader: data.data });
    } catch (e) {
      return e;
    }
  },

};
