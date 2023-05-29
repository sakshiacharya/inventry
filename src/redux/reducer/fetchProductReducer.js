const initialState = {
    products: []
}

const fetchProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                products: action.payload,
            }

        default:

            return state;
    }
}


export default fetchProductReducer;