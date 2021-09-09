import axios from 'axios'

import * as types from '../mutation-types'

// state
export const state = {
  roles: []
}

// getters
export const getters = {
  roles: state => state.roles
}

// mutations
export const mutations = {
  [types.FETCH_ROLE] (state, { roleData }) {
    state.roles = roleData
  }
}

// actions
export const actions = {
  async fetchRoles ({ commit }) {
    try {
      const { data } = await axios.get('/api/role')
      commit(types.FETCH_ROLE, { roleData: data.data })
    } catch (e) {
      return e
    }
  }

}
