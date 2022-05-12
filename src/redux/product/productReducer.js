const INITIAL_STATE = {
    listeProducts : []
}

function ProductReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD-PRODUCT': {
            return{
                ...state,
                listeProducts: [...state.listeProducts, action.payload]
            }
        }
        default: return state
    }
}

export default ProductReducer