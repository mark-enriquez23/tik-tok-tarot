import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
  notification_count: 0
}

// getters
export const getters = {
  notification: state => state.notification_count
}

// mutations
export const mutations = {
  [types.SAVE_NOTIF] (state, { count }) {
    state.notification_count = count
  },
  [types.EMPTY_NOTIF] (state) {
    state.notification_count = 0
  }
}

// actions
export const actions = {
  async getNotification ({ commit }) {
    try {
      const { data } = await axios.get('/api/user/notifications/unread')

      commit(types.SAVE_NOTIF, { count: data.unread_count })
    } catch (e) {
      console.log('DID NOT SAVE NOTIF', e)
    }
  },

  async readNotification ({ commit }) {
    try {
      await axios.get('/api/user/notifications/view').then(() => {
        commit(types.EMPTY_NOTIF)
      })
    } catch (e) {
      console.log('DID NOT SAVE VIEW NOTIF', e)
    }
  }

}
