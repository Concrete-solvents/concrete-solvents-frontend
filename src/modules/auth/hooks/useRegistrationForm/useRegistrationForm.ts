// Libraries
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

// Common
import { FormErrors } from '@Common/enums/formErrors.enum';
import { Language } from '@Common/enums/language.enum';
import { ServerError } from '@Common/enums/serverError.enum';
import { useTriggerValidateOnChangeLanguage } from '@Common/hooks/useTriggerValidateOnChangeLanguage/useTriggerValidateOnChangeLanguage';
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';

// Features
import { clearRegistrationErrors, registerUser } from '@Features/user/redux/userSlice/user.slice';

// Auth
import { emailValidation } from '@Auth/validations/email.validation';
import { loginValidation } from '@Auth/validations/login.validation';
import { passwordValidation } from '@Auth/validations/password.validation';

interface RegistrationProps {
  login: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

function useRegistrationForm() {
  const registrationStatus = useTypedSelector((state) => state.user.registrationStatus);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
    watch,
    setError,
    clearErrors,
    setFocus,
  } = useForm<RegistrationProps>({ mode: 'onChange' });

  const dispatch = useTypedDispatch();
  const { t: translate, i18n } = useTranslation('auth');

  const { ref: passwordConfirmationRef, ...passwordConfirmationProps } = register('passwordConfirmation', {
    validate: (value) => value === getValues('password') || translate('Password should be equals'),
    required: {
      value: true,
      message: translate(FormErrors.MustFill),
    },
  });
  const { ref: loginRef, ...loginInputProps } = register('login', loginValidation);
  const { ref: emailRef, ...emailInputProps } = register('email', emailValidation);
  const { ref: passwordRef, ...passwordInputProps } = register('password', passwordValidation);

  const password = watch('password');
  const email = watch('email');
  const username = watch('login');
  const passwordConfirmation = watch('passwordConfirmation');

  useTriggerValidateOnChangeLanguage(i18n.language, errors, trigger);

  function handleFormSubmit() {
    dispatch(
      registerUser({
        login: getValues('login'),
        language: 'ru' as Language,
        email: getValues('email'),
        password: getValues('password'),
      }),
    );
  }

  /**
   * @description: Set an error if the password and password confirmation are not equal, or clear the equality
   * confirmation error if they equal
   */
  useEffect(() => {
    if (!password) return;
    if (errors.passwordConfirmation?.message === translate(FormErrors.MustFill)) return;
    if (password !== getValues('passwordConfirmation')) {
      setError('passwordConfirmation', {
        message: translate('Passwords should be equals'),
      });
    } else {
      clearErrors('passwordConfirmation');
    }
  }, [password]);

  useEffect(() => {
    if (registrationStatus.error === ServerError.EmptyError) {
      return;
    }
    if (registrationStatus.error === ServerError.LoginIsAlreadyBusy) {
      setFocus('login');
    }
    if (registrationStatus.error === ServerError.EmailIsAlreadyBusy) {
      setFocus('email');
    }
  }, [registrationStatus.error]);

  useEffect(() => {
    dispatch(clearRegistrationErrors());
  }, [username, password, email, passwordConfirmation]);

  const onSubmit = handleSubmit(handleFormSubmit);

  return {
    onSubmit,
    errors,
    passwordConfirmationRef,
    passwordConfirmationProps,
    loginRef,
    loginInputProps,
    emailInputProps,
    emailRef,
    passwordInputProps,
    passwordRef,
  };
}

export { useRegistrationForm };
