import axios from 'axios'
import * as types from '../mutation-types'
import Form from 'vform'
import { setPagination } from '~/helpers'

// state
export const state = {
    reviewForm: new Form({
        user: '',
        stars: 0,
        name: '',
        email: '',
        message: ''
    }),
    reviews: [],
    reviewsPagination: {}
}

// getters
export const getters = {
    reviewForm: state => state.reviewForm,
    reviews: state => state.reviews.data,
    reviewsPagination: state => state.reviewsPagination,
}

// mutations
export const mutations = {
    [types.FETCH_REVIEWS]( state, { reviews } ) {
        state.reviews = reviews
        state.reviewsPagination = setPagination( reviews )
    }
}

// action
export const actions = {
    async addReview({ commit }, form) {
        const { data } = await axios.post( '/api/reviews/add', form )

        return data
    },

    async reviews({ commit }, page_url) {
        page_url = page_url || '/api/reviews'
        const { data } = await axios.get( page_url )
        commit( types.FETCH_REVIEWS, data )

        return data
    }
}