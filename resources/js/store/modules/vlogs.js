import axios from 'axios'
import * as types from '../mutation-types'
import Form from 'vform'

// state
export const state = {
    vlog: {}
}

// getters
export const getters = {
    vlog: state => state.vlog,
}

// mutations
export const mutations = {
    [types.FETCH_SINGLE_VLOG]( state, { data } ) {
        state.vlog = data
    }
}

// action
export const actions = {
    async getVlog({ commit }, id) {
        const { data } = await axios.get( `/api/vlog/${id}` )
        commit( types.FETCH_SINGLE_VLOG, data )

        return data
    }
}