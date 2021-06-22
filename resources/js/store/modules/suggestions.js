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
    reviews: [],
    reviewsPagination: {}
}

// getters
export const getters = {
    suggestionForm: state => state.suggestionForm,
}

// mutations
export const mutations = {
    // 
}

// action
export const actions = {
    // 
}