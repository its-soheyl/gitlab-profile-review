import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from './userSlice';

import axios from 'axios';

export const fetchUser = async (token, dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const respond = await axios.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(fetchUserSuccess(respond.data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};
