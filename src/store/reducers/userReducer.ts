import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userKey: string | null;
}

const initialState: UserState = {
  userKey: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      console.log('action.payload', action.payload);
      state.userKey = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;