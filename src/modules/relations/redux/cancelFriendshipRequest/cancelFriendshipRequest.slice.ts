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
  cancelRequestStatus: FetchStatus;
}

const initialState: InitialState = {
  cancelRequestStatus: BASE_FETCH_STATUS,
};

const cancelFriendshipRequest = createAsyncThunk<boolean, { toUserId: number }>(
  'cancelFriendshipRequest/cancelFriendshipRequest',
  async (payload, thunkAPI) => {
    try {
      const result = await api.post('/users/cancelFriendshipRequest', {
        toUserId: payload.toUserId,
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

const cancelFriendshipRequestSlice = createSlice({
  name: 'cancelFriendshipRequest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cancelFriendshipRequest.pending, (state) => {
      state.cancelRequestStatus = START_FETCH_STATUS;
    });
    builder.addCase(cancelFriendshipRequest.rejected, (state, { payload }) => {
      state.cancelRequestStatus.isLoading = false;
      state.cancelRequestStatus.error = payload as ServerError;
    });
    builder.addCase(cancelFriendshipRequest.fulfilled, (state) => {
      state.cancelRequestStatus = BASE_FETCH_STATUS;
    });
  },
});

export default cancelFriendshipRequestSlice.reducer;
export { cancelFriendshipRequest };
