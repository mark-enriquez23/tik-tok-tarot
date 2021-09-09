import axios from 'axios'

import * as types from '../mutation-types'

// state
export const state = {
  faq: null
}

// getters
export const getters = {
  faq: state => state.faq
}

// mutations
export const mutations = {
  [types.FETCH_FAQ] (state, { faqData }) {
    state.faq = faqData
  }
}

// actions
export const actions = {
  async fetchFaqData ({ commit }) {
    try {
      const { data } = await axios.get('/api/faq')
      commit(types.FETCH_FAQ, { faqData: data.data })
    } catch (e) {
      return e
    }
  }

}
