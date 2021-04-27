import axios from "axios";
import * as types from "../mutation-types";
import Form from "vform";

// state
export const state = {
    credits: null,
    credit: {},
    creditForm: new Form({
        id: '',
        user_id: '',
        name: '',
        email: '',
        goal_points: '',
        earned_points: '',
    }),
};

// getters
export const getters = {
    credits: state => state.credits,
    creditForm: state => state.creditForm,
    credit: state => state.credit,
};

// mutations
export const mutations = {
    [types.FETCH_USER_CREDIT](state, { credits }) {
        state.credits = credits;
    },

    [types.VIEW_USER_CREDIT](state, { credit }) {
        state.creditForm.user_id = credit.user.id
        state.creditForm.name = credit.user.name
        state.creditForm.email = credit.user.email
        state.creditForm.goal_points = credit.goal_points
        state.creditForm.earned_points = credit.earned_points
    },
};

// actions
export const actions = {

    async fetchUserCredits({ commit }) {
        try {
            const { data } = await axios.get("/api/credit/list");
            commit(types.FETCH_USER_CREDIT, { credits: data.data });
        } catch (e) {
            return e;
        }
    },

    async viewUserCredit({ commit }, id) {
        try {
            const { data } = await axios.get(`/api/credit/list-by-id/${id}`);
            commit(types.VIEW_USER_CREDIT, { credit: data.data });
        } catch (e) {
            return e;
        }
    },

    async updateUserCredit({ commit }, id) {
        try {

            state.creditForm.id = id
            const { data } = await state.creditForm.post(`/api/credit/save`);
            // commit(types.EDIT_READER, { reader: data });

            return data
        } catch (e) {
            return e;
        }
    },

};
