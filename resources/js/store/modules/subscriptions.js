import axios from 'axios'
import * as types from '../mutation-types'
import Form from 'vform'

// state
export const state = {
    subscribeForm: new Form({
        name: '',
        email: '',
        message: ''
    })
}

// getters
export const getters = {
    subscribeForm: state => state.subscribeForm
}

// mutations
export const mutations = {

}

// action
export const actions = {
    async subscribe({ commit }) {
        
    }
}