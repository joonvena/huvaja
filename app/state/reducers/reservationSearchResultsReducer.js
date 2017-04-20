import { handleActions } from 'redux-actions';

import actionTypes from 'api/actionTypes';

const initialState = [];

export default handleActions({
  [actionTypes.RESERVATIONS_GET_SUCCESS]: (state, action) => {
    const reservationIds = Object.keys(action.payload.entities.reservations || {});
    return reservationIds;
  },
}, initialState);
