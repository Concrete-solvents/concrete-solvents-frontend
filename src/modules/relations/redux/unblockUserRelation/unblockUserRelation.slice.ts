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
  unblockUserStatus: FetchStatus;
}

const initialState: InitialState = {
  unblockUserStatus: BASE_FETCH_STATUS,
};

const unblockUserRelation = createAsyncThunk<boolean, { userToUnblockId: number }>(
  'unblockUserRelation/unblockUserRelation',
  async (payload, thunkAPI) => {
    try {
      const result = await api.post('users/unblockUser', {
        userToUnblockId: payload.userToUnblockId,
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

const unblockUserRelationSlice = createSlice({
  name: 'unblockUserRelation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(unblockUserRelation.pending, (state) => {
      state.unblockUserStatus = START_FETCH_STATUS;
    });
    builder.addCase(unblockUserRelation.rejected, (state, { payload }) => {
      state.unblockUserStatus.isLoading = false;
      state.unblockUserStatus.error = payload as ServerError;
    });
    builder.addCase(unblockUserRelation.fulfilled, (state) => {
      state.unblockUserStatus = BASE_FETCH_STATUS;
    });
  },
});

export default unblockUserRelationSlice.reducer;
export { unblockUserRelation };
