// Features
import { FetchErrors } from '@Features/axios/enums/fetchErrors.enum';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';

const BASE_FETCH_STATUS: FetchStatus = {
  isLoading: false,
  error: FetchErrors.EMPTY_ERROR,
};

export { BASE_FETCH_STATUS };
