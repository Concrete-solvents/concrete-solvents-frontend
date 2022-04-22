// Libraries
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Constants
import { BASE_FETCH_STATUS } from '@Features/axios/constants/baseFetch.status';
import { START_FETCH_STATUS } from '@Features/axios/constants/startFetch.status';

// Interfaces
import { User } from '@Features/user/interfaces/user.interface';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';
import { RegisterUserRequest } from '@Features/user/interfaces/registerUserRequest.dto';
import { LoginUserRequestDto } from '@Features/user/interfaces/loginUserRequest.dto';

// Features
import { api } from '@Features/axios/axios.init';

interface InitialState {
  user: User | null;
  loginState: FetchStatus;
  registrationState: FetchStatus;
  getMeState: FetchStatus;
}

const initialState: InitialState = {
  user: null,
  loginState: BASE_FETCH_STATUS,
  registrationState: BASE_FETCH_STATUS,
  getMeState: BASE_FETCH_STATUS,
};

const registerUser = createAsyncThunk('user/registerUser', async (payload: RegisterUserRequest) => {
  const result = await api.post('auth/register', payload);
  return result.data.user;
});

const loginUser = createAsyncThunk('user/loginUser', async (payload: LoginUserRequestDto) => {
  const result = await api.post('auth/login', payload);
  return result.data.user;
});

const getMe = createAsyncThunk('user/getMe', async () => {
  const result = await api.get('user/me');
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
    builder.addCase(getMe.pending, (state) => {
      state.getMeState = START_FETCH_STATUS;
    });
    builder.addCase(getMe.rejected, (state) => {
      state.getMeState.isLoading = false;
      state.getMeState.error = 'Server error'; // ToDo: доделать обработку ошибок
    });
    builder.addCase(getMe.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.getMeState = BASE_FETCH_STATUS;
      state.user = {
        id: payload.id,
        username: payload.username,
        email: 'example@gmail.com',
        avatarUrl: 'none',
      };
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loginState = START_FETCH_STATUS;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loginState.isLoading = false;
      state.loginState.error = 'Login error'; // ToDo: доделать обработку ошибок
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.loginState = BASE_FETCH_STATUS;
      state.user = {
        id: payload.id,
        username: payload.username,
        email: 'example@gmail.com',
        avatarUrl: 'none',
      };
    });
  },
});

export default userSlice.reducer;
export { registerUser, getMe, loginUser };
