import axios from 'axios'
import * as types from '../mutation-types'
import Form from 'vform'
import { setPagination } from '~/helpers'

// state
export const state = {
    suggestionForm: new Form({
        video_id: '',
        message: ''
    }),
    suggestionsData: null,

}

// getters
export const getters = {
    suggestionForm: state => state.suggestionForm,
    suggestionsData: state => state.suggestionsData
}

// mutations
export const mutations = {
    [types.FETCH_ALL_SUGGESTIONS](state, { suggestionData }) {
      state.suggestionsData = suggestionData;
    },
    [types.FETCH_VIDEO_SUGGESTIONS](state, { suggestionData }) {
      state.suggestionsData = suggestionData;
    },
    [types.FETCH_USER_SUGGESTIONS](state, { suggestionData }) {
      state.suggestionsData = suggestionData;
    },
}

// action
export const actions = {
  async fetchAllSuggestions({ commit }) {
    const { data } = await axios.get("/api/suggestions");
    commit(types.FETCH_ALL_SUGGESTIONS, { suggestionData: data.data });
  },

  async fetchVideoSuggestions({ commit }, {id}) {
    const { data } = await axios.get(`/api/suggestions/video/${id}`);
    commit(types.FETCH_VIDEO_SUGGESTIONS, { suggestionData: data.data });
  },

  async fetchUserSuggestions({ commit }, {id}) {
    console.log(id);
    const { data } = await axios.get(`/api/suggestions/user/${id}`);
    commit(types.FETCH_USER_SUGGESTIONS, { suggestionData: data.data });
  },
}
