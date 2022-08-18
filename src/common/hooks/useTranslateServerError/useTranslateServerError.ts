// Libraries
import { useTranslation } from 'react-i18next';

// Enums
import { ServerError } from '@Common/enums/serverError.enum';

function useTranslateServerError() {
  const { t: translate } = useTranslation('error');

  function translateServerError(error: ServerError) {
    return translate(error);
  }

  return { translateServerError };
}

export { useTranslateServerError };
