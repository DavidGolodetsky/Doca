
export const state = () => ({
    error: null,
    loading: false,
});

export const mutations = {
    SET_LOADING(state, payload) {
        state.loading = payload
    },
    SET_ERROR(state, payload) {
        state.error = payload
    },
    CLEAR_ERROR(state) {
        state.error = null
    },
    SET_HOME(state, payload) {
        state.home = payload
    }
}


export const actions = {
    async nuxtServerInit({ commit }) {
        await this.$storyapi.get("cdn/stories/home", {
            // TODO:change to 'published' for prod mode
            version: "draft"
        })
            .then(res => commit('home/SET_HOME', res.data.story.content))
            .catch(err => {
                console.log(err)
                commit('SET_ERROR', err)
            })
        await this.$storyapi.get("cdn/stories", {
            version: "draft",
            starts_with: "articles/"
        })
            .then(res => commit('articles/SET_ARTICLES', res.data.stories))
            .catch(err => {
                console.log(err)
                commit('SET_ERROR', err)
            })
    },
    clearError({ commit }) {
        commit('CLEAR_ERROR')
    },
}

export const getters = {
    loading(state) {
        return state.loading
    },
    error(state) {
        return state.error
    },
}