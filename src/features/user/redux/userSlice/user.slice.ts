// Libraries
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Constants
import { BASE_FETCH_STATUS } from '@Features/axios/constants/baseFetch.status';
import { START_FETCH_STATUS } from '@Features/axios/constants/startFetch.status';

// Interfaces
import { User } from '@Features/user/interfaces/user.interface';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';
import { RegisterUserRequest } from '@Features/user/interfaces/registerUserRequest.dto';

// Features
import { api } from '@Features/axios/axios.init';

interface InitialState {
  user: User | null;
  loginState: FetchStatus;
  registrationState: FetchStatus;
}

const initialState: InitialState = {
  user: null,
  loginState: BASE_FETCH_STATUS,
  registrationState: BASE_FETCH_STATUS,
};

const registerUser = createAsyncThunk('user/registerUser', async (payload: RegisterUserRequest) => {
  const result = await api.post('auth/register', payload);
  return result.data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.registrationState = START_FETCH_STATUS;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.registrationState.isLoading = false;
      state.registrationState.error = 'Server error'; // ToDo: доделать обработку ошибок
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.registrationState = BASE_FETCH_STATUS;
      state.user = payload;
    });
  },
});

export default userSlice.reducer;
export { registerUser };
