// Libraries
import { CreateGroup } from '@Group/interfaces/createGroup.interface';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Common
import { ServerError } from '@Common/enums/serverError.enum';

// Axios
import { api } from '@Features/axios/axios.init';
import { BASE_FETCH_STATUS } from '@Features/axios/constants/baseFetch.status';
import { START_FETCH_STATUS } from '@Features/axios/constants/startFetch.status';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';

interface InitialState {
  createGroupStatus: FetchStatus;
}

const initialState: InitialState = {
  createGroupStatus: BASE_FETCH_STATUS,
};

const createGroup = createAsyncThunk('createGroup/createGroup', async (payload: CreateGroup, thunkAPI) => {
  try {
    const result = await api.post('groups/create', {
      ...payload,
    });
    return result.data;
  } catch (error: any) {
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue(ServerError.ServerError);
  }
});

const createGroupSlice = createSlice({
  name: 'createGroup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createGroup.pending, (state) => {
      state.createGroupStatus = START_FETCH_STATUS;
    });
    builder.addCase(createGroup.rejected, (state, { payload }: PayloadAction<unknown>) => {
      state.createGroupStatus.isLoading = false;
      state.createGroupStatus.error = payload as ServerError;
    });
    builder.addCase(createGroup.fulfilled, (state) => {
      state.createGroupStatus = BASE_FETCH_STATUS;
    });
  },
});

export default createGroupSlice.reducer;
export { createGroup };
