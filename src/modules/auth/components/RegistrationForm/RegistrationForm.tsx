// Libraries
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { faAt, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

// Common
import { Button } from '@Common/components/Button/Button';
import { Input } from '@Common/components/Input/Input';
import { SignInWith } from '@Common/components/SignInWith/SignInWith';
import { ServerError } from '@Common/enums/serverError.enum';
import { useTranslateServerError } from '@Common/hooks/useTranslateServerError/useTranslateServerError';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Pages
import authStyles from '@Pages/auth/auth.module.css';
import styles from '@Pages/auth/registration/registration.module.css';

// Auth
import { useRegistrationForm } from '@Auth/hooks/useRegistrationForm/useRegistrationForm';

const RegistrationForm: FC<ChildrenNever> = () => {
  const registrationStatus = useTypedSelector((state) => state.user.registrationStatus);

  const { t: translate } = useTranslation('auth');

  const {
    onSubmit,
    errors,
    passwordConfirmationRef,
    passwordConfirmationProps,
    passwordRef,
    passwordInputProps,
    loginInputProps,
    loginRef,
    emailInputProps,
    emailRef,
  } = useRegistrationForm();

  const { translateServerError } = useTranslateServerError();

  return (
    <form onSubmit={onSubmit} className={authStyles.form}>
      {registrationStatus.error !== ServerError.EmptyError ? (
        <p className={authStyles.serverError}>{translateServerError(registrationStatus.error)}</p>
      ) : null}
      <Input
        placeholder={translate('Login')}
        aria-label={translate('Login')}
        aria-invalid={Boolean(errors.login)}
        icon={faUser}
        error={errors.login?.message}
        forwardedRef={loginRef}
        {...loginInputProps}
      />
      <Input
        type="email"
        placeholder={translate('Email')}
        aria-label={translate('Email')}
        aria-invalid={Boolean(errors.email)}
        icon={faAt}
        error={errors.email?.message}
        forwardedRef={emailRef}
        {...emailInputProps}
      />
      <Input
        type="password"
        placeholder={translate('Password')}
        aria-label={translate('Password')}
        aria-invalid={Boolean(errors.password)}
        icon={faLock}
        error={errors.password?.message}
        forwardedRef={passwordRef}
        {...passwordInputProps}
      />
      <Input
        type="password"
        placeholder={translate('Password confirmation')}
        aria-label={translate('Password confirmation')}
        aria-invalid={Boolean(errors.passwordConfirmation)}
        icon={faLock}
        error={errors.passwordConfirmation?.message}
        forwardedRef={passwordConfirmationRef}
        {...passwordConfirmationProps}
      />
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
  );
};

export { RegistrationForm };
