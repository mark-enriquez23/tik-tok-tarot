import axios from 'axios'
import Form from 'vform'
import * as types from '../mutation-types'

// state
export const state = {
    suggestionForm: new Form({
        video_id: '',
        message: ''
    }),
    userSuggetions: null,
    videoSuggestions: null,
    allSuggestions: null,

}

// getters
export const getters = {
    suggestionForm: state => state.suggestionForm,
    userSuggetions: state => state.userSuggetions,
    videoSuggestions: state => state.videoSuggestions,
    allSuggestions: state => state.allSuggestions
}

// mutations
export const mutations = {
    [types.FETCH_ALL_SUGGESTIONS](state, { allSuggestions }) {
      state.allSuggestions = allSuggestions;
    },
    [types.FETCH_VIDEO_SUGGESTIONS](state, { videoSuggestions }) {
      state.videoSuggestions = videoSuggestions;
    },
    [types.FETCH_USER_SUGGESTIONS](state, { userSuggetions }) {
      state.userSuggetions = userSuggetions;
    },
}

// action
export const actions = {
  async fetchAllSuggestions({ commit }) {
    const { data } = await axios.get("/api/suggestions");
    commit(types.FETCH_ALL_SUGGESTIONS, { allSuggestions: data.data });
  },

  async fetchVideoSuggestions({ commit }, {id}) {
    const { data } = await axios.get(`/api/suggestions/video/${id}`);
    commit(types.FETCH_VIDEO_SUGGESTIONS, { videoSuggestions: data.data });
  },

  async fetchUserSuggestions({ commit }, {id}) {
    const { data } = await axios.get(`/api/suggestions/user/${id}`);
    commit(types.FETCH_USER_SUGGESTIONS, { userSuggetions: data.data });
  },
}
