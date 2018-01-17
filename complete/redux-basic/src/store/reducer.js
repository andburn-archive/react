const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INC':
            return { ...state, counter: state.counter + 1 };
        case 'DEC':
            return { ...state, counter: state.counter - 1 };
        case 'ADD':
            return { ...state, counter: state.counter + action.value }
        case 'SUB':
            return { ...state, counter: state.counter - action.value }
        case 'STORE_RESULT':
            return { ...state, results: state.results.concat({ 
                id: new Date(), value: state.counter
            })};
        case 'DELETE_RESULT':
            return { ...state, results: state.results.filter(e => e.id !== action.resultId) };
        default:
            return state;
    }    
};

export default reducer;