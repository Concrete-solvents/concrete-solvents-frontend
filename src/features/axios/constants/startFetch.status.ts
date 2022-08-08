// Features
import { ServerError } from '@Enums/serverError.enum';

// Interfaces
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';

const START_FETCH_STATUS: FetchStatus = {
  isLoading: true,
  error: ServerError.EmptyError,
};

export { START_FETCH_STATUS };
