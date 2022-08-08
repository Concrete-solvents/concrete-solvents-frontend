// Enums
import { ServerError } from '@Enums/serverError.enum';

interface FetchStatus {
  isLoading: boolean;
  error: ServerError;
}

export type { FetchStatus };
