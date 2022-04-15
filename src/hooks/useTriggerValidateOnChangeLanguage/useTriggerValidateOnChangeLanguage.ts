// Libraries
import { useEffect } from 'react';
import { FieldErrors, FieldPath, FieldValues, TriggerConfig } from 'react-hook-form';

function useTriggerValidateOnChangeLanguage(
  language: string,
  errors: FieldErrors,
  trigger: (name?: FieldPath<FieldValues> | FieldPath<FieldValues>[], options?: TriggerConfig) => Promise<boolean>,
) {
  useEffect(() => {
    for (const error in errors) {
      trigger(error);
    }
  }, [language]);
}

export { useTriggerValidateOnChangeLanguage };
