export const INC = 'INC';
export const ADD = 'ADD';
export const STORE_RESULT = 'STORE_RESULT';

export const increment = () => {
    return {
        type: INC
    };
};

export const addition = (payload) => {
    return {
        ...payload,
        type: ADD
    };
};

export const saveResult = (payload) => {
    return {
        ...payload,
        type: STORE_RESULT
    };
}

export const storeResult = (payload) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(payload));
        }, 2000);
    };
};

