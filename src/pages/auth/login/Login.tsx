// Libraries
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { faAt, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Redux
import { clearLoginErrors, loginUser } from '@Features/user/redux/userSlice/user.slice';

// Hooks
import { useTriggerValidateOnChangeLanguage } from '@Hooks/useTriggerValidateOnChangeLanguage/useTriggerValidateOnChangeLanguage';
import { useTypedDispatch } from '@Hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Hooks/useTypedSelector/useTypedSelector';
import { useTranslateServerError } from '@Hooks/useTranslateServerError/useTranslateServerError';

// Enums
import { FormErrors } from '@Enums/formErrors.enum';
import { ServerError } from '@Enums/serverError.enum';

// Components
import { Button } from '@Components/Button/Button';
import { SelectLanguage } from '@Components/SelectLanguage/SelectLanguage';
import { SignInWith } from '@Components/SignInWith/SignInWith';
import { InputError } from '@Components/InputError/InputError';

// Styles
import authStyles from '@Pages/auth/auth.module.css';
import styles from './login.module.css';

const Login: FC<ChildrenNever> = () => {
  const loginStatus = useTypedSelector((state) => state.user.loginStatus);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const dispatch = useTypedDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    watch,
  } = useForm({ mode: 'onChange' });
  const { t: translate, i18n } = useTranslation('auth');
  const { translateServerError } = useTranslateServerError();

  const login = watch('loginOrEmail');
  const password = watch('password');

  useTriggerValidateOnChangeLanguage(i18n.language, errors, trigger);

  function handleFormSubmit() {
    if (getValues('emailOrLogin').includes('@')) {
      dispatch(loginUser({ email: getValues('emailOrLogin'), password: getValues('password') }));
    } else {
      dispatch(loginUser({ login: getValues('emailOrLogin'), password: getValues('password') }));
    }
  }

  function handleTogglePasswordVisible() {
    setIsPasswordVisible((value) => !value);
  }

  useEffect(() => {
    dispatch(clearLoginErrors());
  }, [login, password]);

  return (
    <div className={authStyles.pageContainer}>
      <SelectLanguage />
      <form onSubmit={handleSubmit(handleFormSubmit)} className={authStyles.form}>
        {loginStatus.error !== ServerError.EmptyError ? (
          <p className={authStyles.serverError}>{translateServerError(loginStatus.error)}</p>
        ) : null}
        <InputError error={errors.emailOrLogin} />
        <section className={authStyles.inputWithIconContainer}>
          <div className={authStyles.icon}>
            <FontAwesomeIcon icon={faAt} />
          </div>
          <input
            type="text"
            className={`${errors.emailOrLogin ? authStyles.invalidInput : ''} ${authStyles.input}`}
            placeholder={translate('Email or login')}
            aria-label={translate('Email or login')}
            aria-invalid={Boolean(errors.emailOrLogin)}
            {...register('emailOrLogin', {
              required: {
                value: true,
                message: translate(FormErrors.MustFill),
              },
            })}
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
            {...register('password', {
              required: {
                value: true,
                message: translate(FormErrors.MustFill),
              },
            })}
          />
          <Button className={authStyles.changePasswordVisibility} onClick={handleTogglePasswordVisible}>
            {isPasswordVisible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </Button>
        </section>
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
    </div>
  );
};

export { Login };
