// Libraries
import { useEffect } from 'react';
import { FieldErrors } from 'react-hook-form';

function useTriggerValidateOnChangeLanguage(
  language: string,
  errors: FieldErrors,
  trigger: any,
) {
  useEffect(() => {
    for (const error in errors) {
      trigger(error);
    }
  }, [language]);
}

export { useTriggerValidateOnChangeLanguage };
