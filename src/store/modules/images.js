import api from '../../api/imgur.js';
import { router } from '../../main';
const state = {
    images: [],
};

const getters = {
    allImages() {
        return state.images
    }
};

const actions = {
    async fetchImages({ commit, rootState }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
        console.log(response.data.data);
    },
    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;
        await api.upload(token, images);
        router.push('/');
    },
    setImages() {

    }
};

const mutations = {
    setImages(state, images) {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}