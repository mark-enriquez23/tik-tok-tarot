import axios from 'axios'

import * as types from '../mutation-types'

// state
export const state = {
  contactUs: null
}

// getters
export const getters = {
  contactUs: state => state.contactUs
}

// mutations
export const mutations = {
  [types.FETCH_CONTACT_US] (state, { contactUsData }) {
    state.contactUs = contactUsData
  }
}

// actions
export const actions = {
  async fetchContactUsData ({ commit }) {
    try {
      const { data } = await axios.get('/api/contact-us')
      commit(types.FETCH_CONTACT_US, { contactUsData: data.data })
    } catch (e) {
      return e
    }
  }

}
