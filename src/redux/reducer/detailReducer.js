const initialState = {
    details: []
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DETAIL_SUCCESS':
            return {
                ...state,
                details: action.payload,
            }

        default:

            return state;
    }
}


export default detailReducer;