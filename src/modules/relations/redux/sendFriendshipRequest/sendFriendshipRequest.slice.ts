import { ServerError } from '@Common/enums/serverError.enum';
import { api } from '@Features/axios/axios.init';
import { BASE_FETCH_STATUS } from '@Features/axios/constants/baseFetch.status';
import { START_FETCH_STATUS } from '@Features/axios/constants/startFetch.status';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  sendRequestStatus: FetchStatus;
}

const initialState: InitialState = {
  sendRequestStatus: BASE_FETCH_STATUS,
};

const sendFriendshipRequest = createAsyncThunk<boolean, { toUserId: number }>(
  'sendFriendshipRequest/sendFriendshipRequest',
  async (payload, thunkAPI) => {
    try {
      const result = await api.post('/users/sendFriendshipRequest', {
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

const sendFriendshipRequestSlice = createSlice({
  name: 'sendFriendshipRequest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendFriendshipRequest.pending, (state) => {
      state.sendRequestStatus = START_FETCH_STATUS;
    });
    builder.addCase(sendFriendshipRequest.rejected, (state, { payload }) => {
      state.sendRequestStatus.isLoading = false;
      state.sendRequestStatus.error = payload as ServerError;
    });
    builder.addCase(sendFriendshipRequest.fulfilled, (state) => {
      state.sendRequestStatus = BASE_FETCH_STATUS;
    });
  },
});

export default sendFriendshipRequestSlice.reducer;
export { sendFriendshipRequest };
