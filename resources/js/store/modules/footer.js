import axios from 'axios'

import * as types from '../mutation-types'

// state
export const state = {
  footer: null
}

// getters
export const getters = {
  footer: state => state.footer
}

// mutations
export const mutations = {
  [types.FETCH_FOOTER] (state, { footerData }) {
    state.footer = footerData
  }
}

// actions
export const actions = {
  async fetchFooterData ({ commit }) {
    try {
      const { data } = await axios.get('/api/footer')
      commit(types.FETCH_FOOTER, { footerData: data.footer })
    } catch (e) {
      return e
    }
  }

}
