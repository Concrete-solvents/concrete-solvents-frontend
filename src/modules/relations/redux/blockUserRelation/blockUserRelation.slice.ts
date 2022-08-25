// Libraries
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Common
import { ServerError } from '@Common/enums/serverError.enum';

// Features
import { api } from '@Features/axios/axios.init';
import { BASE_FETCH_STATUS } from '@Features/axios/constants/baseFetch.status';
import { START_FETCH_STATUS } from '@Features/axios/constants/startFetch.status';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';

interface InitialState {
  blockUserStatus: FetchStatus;
}

const initialState: InitialState = {
  blockUserStatus: BASE_FETCH_STATUS,
};

const blockUserRelation = createAsyncThunk<boolean, { userToBlockId: number }>(
  'blockUserRelation/blockUserRelation',
  async (payload, thunkAPI) => {
    try {
      const result = await api.post('users/blockUser', {
        userToBlockId: payload.userToBlockId,
      });
      return result.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(ServerError.ServerError);
    }
  },
);

const blockUserRelationSlice = createSlice({
  name: 'blockUserRelation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(blockUserRelation.pending, (state) => {
      state.blockUserStatus = START_FETCH_STATUS;
    });
    builder.addCase(blockUserRelation.rejected, (state, { payload }) => {
      state.blockUserStatus.isLoading = false;
      state.blockUserStatus.error = payload as ServerError;
    });
    builder.addCase(blockUserRelation.fulfilled, (state) => {
      state.blockUserStatus = BASE_FETCH_STATUS;
    });
  },
});

export default blockUserRelationSlice.reducer;
export { blockUserRelation };
