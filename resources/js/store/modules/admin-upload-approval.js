import axios from 'axios'

import * as types from '../mutation-types'

import Form from 'vform'

// state
export const state = {
  uploads: null,
  uploadData: {},
  uploadApprovalForm: new Form({
    id: '',
    username: '',
    name: '',
    phone_number: '',
    email: ''
  })
}

// getters
export const getters = {
  uploads: state => state.uploads,
  uploadApprovalForm: state => state.uploadApprovalForm,
  uploadData: state => state.uploadData
}

// mutations
export const mutations = {
  [types.FETCH_APPROVAL_UPLOAD] (state, { uploads }) {
    state.uploads = uploads
  },

  [types.VIEW_UPLOAD_APPROVAL] (state, { uploadData }) {
    state.uploadData = uploadData
  }
}

// actions
export const actions = {

  async fetchApprovalUploads ({ commit }) {
    try {
      const { data } = await axios.get('/api/vlog/status/PENDING')
      commit(types.FETCH_APPROVAL_UPLOAD, { uploads: data.data })
    } catch (e) {
      return e
    }
  },

  async viewUploadApproval ({ commit }, id) {
    try {
      const { data } = await axios.get(`/api/upload/approval-by-id/${id}`)

      commit(types.VIEW_UPLOAD_APPROVAL, { uploadData: data.data })
    } catch (e) {
      return e
    }
  },

  async updateUploadApproval ({ commit }, id) {
    try {
      const { data } = await axios.get(`/api/upload/approve/${id}`)
      // commit(types.EDIT_READER, { reader: data });

      return data
    } catch (e) {
      return e
    }
  },

  async updateUploadReject ({ commit }, id) {
    try {
      const { data } = await axios.get(`/api/upload/disapprove/${id}`)
      // commit(types.EDIT_READER, { reader: data });

      return data
    } catch (e) {
      return e
    }
  }

}
