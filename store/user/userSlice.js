import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user   ',
  initialState: {
    token: '',
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchUserToken: (state, action) => {
      state.token = action.payload;
    },

    fetchUserRequest: (state) => {
      state.loading = true;
    },

    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    },

    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserToken,
} = userSlice.actions;

export default userSlice.reducer;
