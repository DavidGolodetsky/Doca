export const state = () => ({
    home: null,
})

export const mutations = {
    SET_HOME(state, payload) {
        state.home = payload
    }
}

export const actions = {
}

export const getters = {
    home(state) {
        return state.home
    },
    project(state) {
        return state.home.body[0]
    }
}