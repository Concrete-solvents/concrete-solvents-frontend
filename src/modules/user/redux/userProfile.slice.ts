import { Nullable } from '@Common/types/nullable.type';
import { createSlice } from '@reduxjs/toolkit';
import { UserProfileInfo } from '@User/interfaces/userProfileInfo.interface';

interface InitialState {
  userData: Nullable<UserProfileInfo>;
}

const initialState: InitialState = {
  userData: null,
};

const userProfileSlice = createSlice({
  name: 'userProfileSlice',
  initialState,
  reducers: {},
});

export default userProfileSlice.reducer;
