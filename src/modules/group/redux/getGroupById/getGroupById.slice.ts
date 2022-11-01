import { ServerError } from '@Common/enums/serverError.enum';
import { Nullable } from '@Common/types/nullable.type';
import { api } from '@Features/axios/axios.init';
import { BASE_FETCH_STATUS } from '@Features/axios/constants/baseFetch.status';
import { START_FETCH_STATUS } from '@Features/axios/constants/startFetch.status';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';
import { GroupPublicCoreInfo } from '@Group/interfaces/groupPublicCoreInfo.interface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  group: Nullable<GroupPublicCoreInfo>;
  getGroupState: FetchStatus;
}

const initialState: InitialState = {
  group: null,
  getGroupState: BASE_FETCH_STATUS,
};

const getGroupById = createAsyncThunk<any, any>('getGroupById/getGroupById', async (payload, thunkAPI) => {
  try {
    const result = await api.get(`groups/${payload.groupId}`);
    return result.data;
  } catch (error: any) {
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue(ServerError.ServerError);
  }
});

const getGroupByIdSlice = createSlice({
  name: 'getGroupById',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGroupById.pending, (state) => {
      state.getGroupState = START_FETCH_STATUS;
    });
    builder.addCase(getGroupById.rejected, (state, { payload }) => {
      state.getGroupState.isLoading = false;
      state.getGroupState.error = payload as ServerError;
    });
    builder.addCase(getGroupById.fulfilled, (state, { payload }) => {
      state.getGroupState = BASE_FETCH_STATUS;
      state.group = payload.group;
    });
  },
});

export default getGroupByIdSlice.reducer;
export { getGroupById };
