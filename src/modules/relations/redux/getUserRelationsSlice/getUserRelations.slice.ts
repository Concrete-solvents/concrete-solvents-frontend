import { ServerError } from '@Common/enums/serverError.enum';
import { api } from '@Features/axios/axios.init';
import { BASE_FETCH_STATUS } from '@Features/axios/constants/baseFetch.status';
import { START_FETCH_STATUS } from '@Features/axios/constants/startFetch.status';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserRelations } from '../../interfaces/userRelations.interface';

interface InitialState {
  getUserRelationsFetchStatus: FetchStatus;
  relations: UserRelations;
}

const initialState: InitialState = {
  getUserRelationsFetchStatus: BASE_FETCH_STATUS,
  relations: {
    friends: [],
    sentFriendRequests: [],
    blockedUsers: [],
    receivedFriendRequests: [],
  },
};

const getUserRelations = createAsyncThunk<UserRelations, number>(
  'relations/getUserRelations',
  async (userId: number) => {
    const result = await api.get(`users/${userId}/relations`);
    return result.data;
  },
);

const getUserRelationsSlice = createSlice({
  name: 'getUserRelationsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserRelations.pending, (state) => {
      state.getUserRelationsFetchStatus = START_FETCH_STATUS;
    });
    builder.addCase(getUserRelations.rejected, (state) => {
      state.getUserRelationsFetchStatus.isLoading = false;
      state.getUserRelationsFetchStatus.error = ServerError.ServerError;
    });
    builder.addCase(getUserRelations.fulfilled, (state, { payload }) => {
      state.getUserRelationsFetchStatus = BASE_FETCH_STATUS;
      state.relations = payload;
    });
  },
});

export default getUserRelationsSlice.reducer;
export { getUserRelations };
