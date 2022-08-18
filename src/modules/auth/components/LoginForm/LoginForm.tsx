// Libraries
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { faAt, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
import styles from '@Pages/auth/login/login.module.css';

// Auth
import { useLoginForm } from '@Auth/hooks/useLoginForm/useLoginForm';

const LoginForm: FC<ChildrenNever> = () => {
  const loginStatus = useTypedSelector((state) => state.user.loginStatus);

  const { t: translate } = useTranslation('auth');
  const { loginInputProps, loginRef, passwordInputProps, passwordRef, onSubmit, errors } = useLoginForm();
  const { translateServerError } = useTranslateServerError();

  return (
    <form onSubmit={onSubmit} className={authStyles.form}>
      {loginStatus.error !== ServerError.EmptyError ? (
        <p className={authStyles.serverError}>{translateServerError(loginStatus.error)}</p>
      ) : null}
      <Input
        forwardedRef={loginRef}
        placeholder={translate('Login')}
        aria-label={translate('Login')}
        aria-invalid={Boolean(errors.login)}
        {...loginInputProps}
        error={errors.login?.message}
        icon={faAt}
      />
      <Input
        forwardedRef={passwordRef}
        type="password"
        placeholder={translate('Password')}
        aria-label={translate('Password')}
        aria-invalid={Boolean(errors.password)}
        {...passwordInputProps}
        error={errors.password?.message}
        icon={faLock}
      />
      <Button
        className={authStyles.submitBtn}
        type="submit"
        disabled={loginStatus.isLoading}
        isLoading={loginStatus.isLoading}
      >
        {translate('Sign in')}
      </Button>
      <SignInWith />
      <p className={`${styles.resetPassword} ${authStyles.link}`}>
        <Link to={'/auth/reset'}>{translate('Forgot your password?')}</Link>
      </p>
      <p className={`${styles.noAccountYet} ${authStyles.link}`}>
        <Link to={'/auth/registration'}>{translate("Don't have an account yet?")}</Link>
      </p>
    </form>
  );
};

export { LoginForm };
