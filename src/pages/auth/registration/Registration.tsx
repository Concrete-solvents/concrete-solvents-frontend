// Libraries
import { faAt, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Enums
import { FormErrors } from '@Enums/formErrors.enum';
import { ServerError } from '@Enums/serverError.enum';
import { Language } from '@Enums/language.enum';

// Hooks
import { useTriggerValidateOnChangeLanguage } from '@Hooks/useTriggerValidateOnChangeLanguage/useTriggerValidateOnChangeLanguage';
import { useTypedDispatch } from '@Hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Hooks/useTypedSelector/useTypedSelector';
import { useTranslateServerError } from '@Hooks/useTranslateServerError/useTranslateServerError';

// Redux
import { clearRegistrationErrors, registerUser } from '@Features/user/redux/userSlice/user.slice';

// Validations
import { emailValidation } from '@Validations/email.validation';
import { passwordValidation } from '@Validations/password.validation';
import { loginValidation } from '@Validations/login.validation';

// Components
import { Button } from '@Components/Button/Button';
import { SelectLanguage } from '@Components/SelectLanguage/SelectLanguage';
import { InputError } from '@Components/InputError/InputError';
import { SignInWith } from '@Components/SignInWith/SignInWith';

// Styles
import authStyles from '@Pages/auth/auth.module.css';
import styles from './registration.module.css';

const Registration: FC<ChildrenNever> = () => {
  const registrationStatus = useTypedSelector((state) => state.user.registrationStatus);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] = useState(false);

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
  } = useForm({ mode: 'onChange' });
  const { t: translate } = useTranslation('auth');
  const dispatch = useTypedDispatch();
  const { translateServerError } = useTranslateServerError();

  const password = watch('password');
  const email = watch('email');
  const username = watch('username');
  const passwordConfirmation = watch('passwordConfirmation');

  useTriggerValidateOnChangeLanguage(i18n.language, errors, trigger);

  function handleFormSubmit() {
    dispatch(
      registerUser({
        login: getValues('login'),
        language: i18n.language as Language,
        email: getValues('email'),
        password: getValues('password'),
      }),
    );
  }

  function handleTogglePasswordVisible() {
    setIsPasswordVisible((value) => !value);
  }

  function handleTogglePasswordConfirmationVisible() {
    setIsPasswordConfirmationVisible((value) => !value);
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

  return (
    <div className={authStyles.pageContainer}>
      <SelectLanguage />
      <form onSubmit={handleSubmit(handleFormSubmit)} className={authStyles.form}>
        {registrationStatus.error !== ServerError.EmptyError ? (
          <p className={authStyles.serverError}>{translateServerError(registrationStatus.error)}</p>
        ) : null}
        <InputError error={errors.login} />
        <section className={authStyles.inputWithIconContainer}>
          <div className={authStyles.icon}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            type="text"
            className={`${
              errors.login || registrationStatus.error === ServerError.LoginIsAlreadyBusy
                ? authStyles.invalidInput
                : ''
            } ${authStyles.input}`}
            placeholder={translate('Login')}
            aria-label={translate('Login')}
            aria-invalid={Boolean(errors.login)}
            {...register('login', loginValidation)}
          />
        </section>
        <InputError error={errors.email} />
        <section className={authStyles.inputWithIconContainer}>
          <div className={authStyles.icon}>
            <FontAwesomeIcon icon={faAt} />
          </div>
          <input
            type="email"
            className={`${errors.email ? authStyles.invalidInput : ''} ${authStyles.input}`}
            placeholder={translate('Email')}
            aria-label={translate('Email')}
            aria-invalid={Boolean(errors.email)}
            {...register('email', emailValidation)}
          />
        </section>
        <InputError error={errors.password} />
        <section className={authStyles.inputWithIconContainer}>
          <div className={authStyles.icon}>
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            className={`${errors.password ? authStyles.invalidInput : ''} ${authStyles.input}`}
            placeholder={translate('Password')}
            aria-label={translate('Password')}
            aria-invalid={Boolean(errors.password)}
            {...register('password', passwordValidation)}
          />
          <Button className={authStyles.changePasswordVisibility} onClick={handleTogglePasswordVisible}>
            {isPasswordVisible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </Button>
        </section>
        <InputError error={errors.passwordConfirmation} />
        <section className={authStyles.inputWithIconContainer}>
          <div className={authStyles.icon}>
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            type={isPasswordConfirmationVisible ? 'text' : 'password'}
            className={`${errors.passwordConfirmation ? authStyles.invalidInput : ''} ${authStyles.input}`}
            placeholder={translate('Password confirmation')}
            aria-label={translate('Password confirmation')}
            aria-invalid={Boolean(errors.passwordConfirmation)}
            {...register('passwordConfirmation', {
              validate: (value) => value === getValues('password') || translate('Password should be equals'),
              required: {
                value: true,
                message: translate(FormErrors.MustFill),
              },
            })}
          />
          <Button className={authStyles.changePasswordVisibility} onClick={handleTogglePasswordConfirmationVisible}>
            {isPasswordConfirmationVisible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </Button>
        </section>
        <Button
          className={authStyles.submitBtn}
          type="submit"
          disabled={registrationStatus.isLoading}
          isLoading={registrationStatus.isLoading}
        >
          {translate('Sign up')}
        </Button>
        <SignInWith />
        <p className={`${authStyles.link} ${styles.alreadyHaveAccount}`}>
          <Link to={'/auth/login'}>{translate('Already have an account?')}</Link>
        </p>
      </form>
    </div>
  );
};

export { Registration };
