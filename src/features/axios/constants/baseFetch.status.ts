// Interfaces
import { FetchStatus } from '@Features/axios/interfaces/fetchStatus.interface';

// Enums
import { ServerError } from '@Common/enums/serverError.enum';

const BASE_FETCH_STATUS: FetchStatus = {
  isLoading: false,
  error: ServerError.EmptyError,
};

export { BASE_FETCH_STATUS };
