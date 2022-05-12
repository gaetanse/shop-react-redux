const INITIAL_STATE = {
    listeArticles : []
}

function ArticleReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD-ARTICLE': {
            return{
                ...state,
                listeArticles: [...state.listeArticles, action.payload]
            }
        }
        default: return state
    }
}

export default ArticleReducer