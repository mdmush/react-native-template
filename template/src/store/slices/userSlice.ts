import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  user: {
    fname: string;
    lname: string;
    website: string;
  };
}

const initialState: UserState = {
  user: {
    fname: 'Mohd',
    lname: 'Mushfique',
    website: 'https://mdmush.com',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
