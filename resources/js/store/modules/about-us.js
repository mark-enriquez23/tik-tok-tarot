import axios from 'axios'

import * as types from '../mutation-types'

// state
export const state = {
  aboutUs: null
}

// getters
export const getters = {
  aboutUs: state => state.aboutUs
}

// mutations
export const mutations = {
  [types.FETCH_ABOUT_US] (state, { aboutUsData }) {
    state.aboutUs = aboutUsData
  }
}

// actions
export const actions = {
  async fetchAboutUsData ({ commit }) {
    try {
      const { data } = await axios.get('/api/about-us')
      commit(types.FETCH_ABOUT_US, { aboutUsData: data.data })
    } catch (e) {
      return e
    }
  }

}
