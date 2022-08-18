// Libraries
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

// Common
import { useTriggerValidateOnChangeLanguage } from '@Common/hooks/useTriggerValidateOnChangeLanguage/useTriggerValidateOnChangeLanguage';
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';

// Features
import { clearLoginErrors, loginUser } from '@Features/user/redux/userSlice/user.slice';

// Auth
import { requiredValidation } from '../../validations/required.validation';

interface LoginFormProps {
  login: string;
  password: string;
}

function useLoginForm() {
  const {
    register,
    formState: { errors },
    trigger,
    handleSubmit,
    watch,
  } = useForm<LoginFormProps>({ mode: 'onChange' });
  const { i18n } = useTranslation('auth');

  const login = watch('login');
  const password = watch('password');

  const dispatch = useTypedDispatch();

  const { ref: loginRef, ...loginInputProps } = register('login', requiredValidation);
  const { ref: passwordRef, ...passwordInputProps } = register('password', requiredValidation);

  useTriggerValidateOnChangeLanguage(i18n.language, errors, trigger);

  function handleFormSubmit(data: LoginFormProps) {
    dispatch(loginUser({ login: data.login, password: data.password }));
  }

  useEffect(() => {
    dispatch(clearLoginErrors());
  }, [login, password]);

  const onSubmit = handleSubmit(handleFormSubmit);

  return {
    onSubmit,
    loginRef,
    loginInputProps,
    passwordRef,
    passwordInputProps,
    errors,
  };
}

export { useLoginForm };
