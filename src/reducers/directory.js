import { handleActions } from 'redux-actions';

import actions from '@magento/venia-concept/esm/actions/directory';

export const name = 'directory';

const initialState = {};

const reducerMap = {
    [actions.getCountries]: (state, { payload, error }) => {
        if (error) {
            return state;
        }

        return {
            ...state,
            countries: payload
        };
    }
};

export default handleActions(reducerMap, initialState);
