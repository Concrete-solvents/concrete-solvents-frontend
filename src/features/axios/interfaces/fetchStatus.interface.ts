// Enums
import { ServerError } from '@Common/enums/serverError.enum';

interface FetchStatus {
  isLoading: boolean;
  error: ServerError;
}

export type { FetchStatus };
