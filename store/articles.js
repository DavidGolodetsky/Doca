export const state = () => ({
    articles: null,
})

export const mutations = {
    SET_ARTICLES(state, payload) {
        state.articles = payload
    },
}

export const actions = {
}

export const getters = {
    articles(state) {
        return state.articles
    },
    article(state) {
        return (articleSlug) => state.articles.find(article => article.slug === articleSlug)
    },
}