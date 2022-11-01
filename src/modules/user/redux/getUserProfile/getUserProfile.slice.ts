// Libraries
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Common
import { ServerError } from '@Common/enums/serverError.enum';
import { Nullable } from '@Common/types/nullable.type';

// Features
import { api } from '@Features/axios/axios.init';
import { BASE_FETCH_STATUS } from '@Features/axios/constants/baseFetch.status';
import { START_FETCH_STATUS } from '@Features/axios/constants/startFetch.status';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';

// User
import { Profile } from '@User/interfaces/profile.interface';
import { GetUserProfileRequest } from '@User/interfaces/requests/getUserProfileRequest.interface';
import { GetUserProfileResponse } from '@User/interfaces/responses/getUserProfileResponse.interface';

interface InitialState {
  profile: Nullable<Profile>;
  getUserStatus: FetchStatus;
}

const initialState: InitialState = {
  profile: null,
  getUserStatus: BASE_FETCH_STATUS,
};

const getUserProfile = createAsyncThunk<GetUserProfileResponse, GetUserProfileRequest>(
  'getUserProfile/getUserProfile',
  async (payload, thunkAPI) => {
    try {
      const result = await api.get(`users/${payload.userId}/profile`);
      return result.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(ServerError.ServerError);
    }
  },
);

const getUserProfileSlice = createSlice({
  name: 'getUserProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.pending, (state) => {
      state.getUserStatus = START_FETCH_STATUS;
    });
    builder.addCase(getUserProfile.rejected, (state, { payload }) => {
      state.getUserStatus.isLoading = false;
      state.getUserStatus.error = payload as ServerError;
    });
    builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
      state.getUserStatus = BASE_FETCH_STATUS;
      state.profile = payload.profile;
    });
  },
});

export default getUserProfileSlice.reducer;
export { getUserProfile };
