import { ServerError } from '@Common/enums/serverError.enum';
import { Nullable } from '@Common/types/nullable.type';
import { api } from '@Features/axios/axios.init';
import { BASE_FETCH_STATUS } from '@Features/axios/constants/baseFetch.status';
import { START_FETCH_STATUS } from '@Features/axios/constants/startFetch.status';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserPublicCoreInfo } from '@User/interfaces/userPublicCoreInfo.interface';

interface InitialState {
  user: Nullable<UserPublicCoreInfo>;
  getUserStatus: FetchStatus;
}

const initialState: InitialState = {
  user: null,
  getUserStatus: BASE_FETCH_STATUS,
};

const getUserInFilterSidebar = createAsyncThunk<any, any>(
  'getUserInFilterSidebarSlice/getUserInFilterSidebar',
  async (payload, thunkAPI) => {
    try {
      const result = await api.get(`users/${payload.userId}`);
      return result.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(ServerError.ServerError);
    }
  },
);

const getUserInFilterSidebarSlice = createSlice({
  name: 'getUserInFilterSidebar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInFilterSidebar.pending, (state) => {
      state.getUserStatus = START_FETCH_STATUS;
    });
    builder.addCase(getUserInFilterSidebar.rejected, (state, { payload }) => {
      state.getUserStatus.isLoading = false;
      state.getUserStatus.error = payload as ServerError;
    });
    builder.addCase(getUserInFilterSidebar.fulfilled, (state, { payload }) => {
      state.getUserStatus = BASE_FETCH_STATUS;
      state.user = payload.user;
    });
  },
});

export default getUserInFilterSidebarSlice.reducer;
export { getUserInFilterSidebar };
