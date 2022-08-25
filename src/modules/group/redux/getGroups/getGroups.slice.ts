import { ServerError } from '@Common/enums/serverError.enum';
import { api } from '@Features/axios/axios.init';
import { BASE_FETCH_STATUS } from '@Features/axios/constants/baseFetch.status';
import { START_FETCH_STATUS } from '@Features/axios/constants/startFetch.status';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';
import { GetGroupsRequest } from '@Group/interfaces/getGroups.request.interface';
import { GetGroupsResponse } from '@Group/interfaces/getGroups.response.interface';
import { GroupPublicCoreInfo } from '@Group/interfaces/groupPublicCoreInfo.interface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  groups: GroupPublicCoreInfo[];
  getGroupsStatus: FetchStatus;
  totalPages: number;
}

const initialState: InitialState = {
  groups: [],
  getGroupsStatus: BASE_FETCH_STATUS,
  totalPages: 0,
};

const getGroups = createAsyncThunk<GetGroupsResponse, GetGroupsRequest>('getGroups/getGroups', async (payload, thunkAPI) => {
  try {
    const result = await api.get(`/users/${payload.userId}/groups`, {
      params: {
        limit: 32,
        page: payload.page || 1,
        filter: payload.filter,
      },
    });
    
    return result.data;
  } catch (error: any) {
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue(ServerError.ServerError);
  }
});

const getGroupsSlice = createSlice({
  name: 'getGroups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGroups.pending, (state) => {
      state.getGroupsStatus = START_FETCH_STATUS;
    });
    builder.addCase(getGroups.rejected, (state, { payload }) => {
      state.getGroupsStatus.isLoading = false;
      state.getGroupsStatus.error = payload as ServerError;
    });
    builder.addCase(getGroups.fulfilled, (state, { payload }) => {
      state.getGroupsStatus = BASE_FETCH_STATUS;
      state.groups = payload.groups;
      state.totalPages = payload.totalPages;
    });
  },
});

export default getGroupsSlice.reducer;
export { getGroups };
