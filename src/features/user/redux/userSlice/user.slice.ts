// Libraries
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Constants
import { BASE_FETCH_STATUS } from '@Features/axios/constants/baseFetch.status';
import { START_FETCH_STATUS } from '@Features/axios/constants/startFetch.status';

// Enums
import { ServerError } from '@Common/enums/serverError.enum';

// Interfaces
import { User } from '@Features/user/interfaces/user.interface';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';
import { RegisterUserRequest } from '@Features/user/interfaces/registerUserRequest.dto';
import { LoginUserRequestDto } from '@Features/user/interfaces/loginUserRequest.dto';
import { UpdateUserDto } from '@Features/user/interfaces/updateUser.dto';

// Features
import { api } from '@Features/axios/axios.init';
import { UpdateUserInfoDto } from '@Features/user/interfaces/updateUserInfo.dto';

interface InitialState {
  user: User | null;
  loginStatus: FetchStatus;
  registrationStatus: FetchStatus;
  updateUserStatus: FetchStatus;
  getMeStatus: FetchStatus;
  settings: {
    isSideBarCollapsed: boolean;
  };
}

const initialState: InitialState = {
  user: null,
  loginStatus: BASE_FETCH_STATUS,
  registrationStatus: BASE_FETCH_STATUS,
  getMeStatus: BASE_FETCH_STATUS,
  updateUserStatus: BASE_FETCH_STATUS,
  settings: {
    isSideBarCollapsed: JSON.parse(localStorage.getItem('isSidebarCollapsed') || 'false'),
  },
};

const registerUser = createAsyncThunk('user/registerUser', async (payload: RegisterUserRequest, thunkApi) => {
  try {
    const result = await api.post('auth/registration', payload);
    return result.data.user;
  } catch (error: any) {
    if (error.response) {
      return thunkApi.rejectWithValue(error.response.data.error);
    }
    return thunkApi.rejectWithValue('Server error');
  }
});

const loginUser = createAsyncThunk('user/loginUser', async (payload: LoginUserRequestDto, thunkApi) => {
  try {
    const result = await api.post('auth/login', payload);
    return result.data.user;
  } catch (error: any) {
    console.log(error);
    if (error.response) {
      return thunkApi.rejectWithValue(error.response.data.error);
    }
    return thunkApi.rejectWithValue('Server error');
  }
});

const updateUser = createAsyncThunk('user/updateUser', async (payload: UpdateUserDto, thunkApi) => {
  try {
    const result = await api.put('user/update', payload);
    return result.data.user;
  } catch (error: any) {
    if (error.response) {
      return thunkApi.rejectWithValue(error.response.data.error);
    }
    return thunkApi.rejectWithValue('Server error');
  }
});

const getMe = createAsyncThunk('user/getMe', async (payload: void, thunkApi) => {
  try {
    const result = await api.get('user/me');
    return result.data;
  } catch (error: any) {
    if (error.response) {
      return thunkApi.rejectWithValue(error.response.data.error);
    }
    return thunkApi.rejectWithValue('Server error');
  }
});

const updateUserInfo = createAsyncThunk('user/updateUserInfo', async (payload: UpdateUserInfoDto, thunkApi) => {
  try {
    const result = await api.put('user/updateUserInfo', payload)
    return result.data
  } catch (error: any) {
    if (error.response) {
      return thunkApi.rejectWithValue(error.response.data.error);
    }
    return thunkApi.rejectWithValue('Server error');
  }
})

const logout = createAsyncThunk('user/logout', async () => {
  await api.post('auth/logout');
  window.location.replace('/auth/welcome');
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearRegistrationErrors(state) {
      state.registrationStatus.error = ServerError.EmptyError;
    },
    clearLoginErrors(state) {
      state.loginStatus.error = ServerError.EmptyError;
    },
    clearGetMeErrors(state) {
      state.getMeStatus.error = ServerError.EmptyError;
    },
    clearUpdateUserErrors(state) {
      state.updateUserStatus.error = ServerError.EmptyError;
    },
    toggleCollapseSidebar(state) {
      state.settings.isSideBarCollapsed = !state.settings.isSideBarCollapsed;
      localStorage.setItem('isSidebarCollapsed', JSON.stringify(state.settings.isSideBarCollapsed));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.registrationStatus = START_FETCH_STATUS;
    });
    builder.addCase(registerUser.rejected, (state, { payload }: PayloadAction<unknown>) => {
      state.registrationStatus.isLoading = false;
      if (Object.values(ServerError).includes(payload as ServerError)) {
        state.registrationStatus.error = payload as ServerError;
      } else {
        state.registrationStatus.error = ServerError.ServerError;
      }
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.registrationStatus = BASE_FETCH_STATUS;
      state.user = payload;
      window.location.replace('/');
    });
    builder.addCase(getMe.pending, (state) => {
      state.getMeStatus = START_FETCH_STATUS;
    });
    builder.addCase(getMe.rejected, (state, { payload }: PayloadAction<unknown>) => {
      state.getMeStatus.isLoading = false;
      if (Object.values(ServerError).includes(payload as ServerError)) {
        state.getMeStatus.error = payload as ServerError;
      } else {
        state.getMeStatus.error = ServerError.ServerError;
      }
    });
    builder.addCase(getMe.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.getMeStatus = BASE_FETCH_STATUS;
      state.user = payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loginStatus = START_FETCH_STATUS;
    });
    builder.addCase(loginUser.rejected, (state, { payload }: PayloadAction<unknown>) => {
      state.loginStatus.isLoading = false;
      if (Object.values(ServerError).includes(payload as ServerError)) {
        state.loginStatus.error = payload as ServerError;
      } else {
        state.loginStatus.error = ServerError.ServerError;
      }
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.loginStatus = BASE_FETCH_STATUS;
      state.user = payload;
      window.location.replace('/');
    });
    builder.addCase(updateUser.pending, (state) => {
      state.updateUserStatus = START_FETCH_STATUS;
    });
    builder.addCase(updateUser.rejected, (state, { payload }: PayloadAction<unknown>) => {
      state.updateUserStatus.isLoading = false;
      if (Object.values(ServerError).includes(payload as ServerError)) {
        state.updateUserStatus.error = payload as ServerError;
      } else {
        state.updateUserStatus.error = ServerError.ServerError;
      }
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.updateUserStatus = BASE_FETCH_STATUS;
      state.user = payload;
      window.location.replace('/');
    });
    builder.addCase(updateUserInfo.pending, (state) => {
      state.updateUserStatus = START_FETCH_STATUS;
    });
    builder.addCase(updateUserInfo.fulfilled, (state, {payload}: PayloadAction<User>) => {
      state.updateUserStatus = BASE_FETCH_STATUS;
      state.user = payload;
    })
    builder.addCase(updateUserInfo.rejected, (state, {payload}: PayloadAction<unknown>) => {
      state.updateUserStatus.isLoading = false;
      if (Object.values(ServerError).includes(payload as ServerError)) {
        state.updateUserStatus.error = payload as ServerError;
      } else {
        state.updateUserStatus.error = ServerError.ServerError;
      }
    })
  },
});

export default userSlice.reducer;
export const {
  clearRegistrationErrors,
  clearLoginErrors,
  clearUpdateUserErrors,
  clearGetMeErrors,
  toggleCollapseSidebar,
} = userSlice.actions;
export { registerUser, getMe, loginUser, updateUser, logout, updateUserInfo };
