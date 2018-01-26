import reducer from './auth';
import * as actionTypes from '../actions/actionsTypes';

describe('auth reducer', () => {
    let defaultState;

    beforeEach(() => {
        defaultState = {
            token: null,
            userId: null,
            error: null,
            loading: false,
            redirectPath: '/',
        };
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });

    it('should store the token upon login', () => {
        expect(reducer(defaultState, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id',
        })).toEqual({
            ...defaultState,
            token: 'some-token',
            userId: 'some-user-id',
        });
    })
});