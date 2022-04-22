// Features
import { FetchErrors } from '@Features/axios/enums/fetchErrors.enum';
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';

const START_FETCH_STATUS: FetchStatus = {
  isLoading: true,
  error: FetchErrors.EMPTY_ERROR,
};

export { START_FETCH_STATUS };
