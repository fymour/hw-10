import * as actions from './actionTypes';

const initialState = {
    questions: [],
    questionLoading: false,
    productsFetching: false,
    products: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.QUESTION_ADD:
            return {
                ...state,
                questions: [...state.questions, action.payload]
            };
        case actions.QUESTION_REMOVE:
            return {
                ...state,
                questions: state.questions.filter(q => action.payload.id !== q.id)
            };

        case actions.FETCH_PRODUCTS:
            return {
                ...state,
                productsFetching: true
            };

        case actions.RECEIVE_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                productsFetching: false
            };

        case actions.CREATE_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };


        default:
            return state;
    }
}
