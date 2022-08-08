// Libraries
import { useTranslateServerError } from '@Hooks/useTranslateServerError/useTranslateServerError';
import {
  useTriggerValidateOnChangeLanguage
} from '@Hooks/useTriggerValidateOnChangeLanguage/useTriggerValidateOnChangeLanguage';
import authStyles from '@Pages/auth/auth.module.css';
import i18n from 'i18next';
import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { faAt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Enums
import { ServerError } from '@Enums/serverError.enum';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Hooks
import { useTypedSelector } from '@Hooks/useTypedSelector/useTypedSelector';
import { useTypedDispatch } from '@Hooks/useTypedDispatch/useTypedDispatch';

// Validations
import { emailValidation } from '@Validations/email.validation';
import { loginValidation } from '@Validations/login.validation';

// Components
import { Button } from '@Components/Button/Button';
import { SelectLanguage } from '@Components/SelectLanguage/SelectLanguage';
import { InputError } from '@Components/InputError/InputError';
import { useNavigate } from 'react-router-dom';

// Styles
import styles from './socialRegistration.module.css';
import { getMe, updateUser } from '@Features/user/redux/userSlice/user.slice';

const SocialRegistration: FC<ChildrenNever> = () => {
  const updateUserStatus = useTypedSelector((state) => state.user.updateUserStatus);
  const user = useTypedSelector((state) => state.user.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    trigger,
  } = useForm({ mode: 'onChange' });
  const { t: translate } = useTranslation('auth');
  const dispatch = useTypedDispatch();
  const { translateServerError } = useTranslateServerError();
  const navigate = useNavigate();

  useTriggerValidateOnChangeLanguage(i18n.language, errors, trigger);

  if (user?.email && user?.login) {
    navigate('/');
  }

  function handleContinue() {
    if (!user?.email) {
      dispatch(updateUser({
        login: getValues('login'),
        email: getValues('email'),
      }));
    } else {
      dispatch(updateUser({
        login: getValues('login'),
      }));
    }
  }

  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <div className={styles.pageContainer}>
      <SelectLanguage />
      <form className={styles.form} onSubmit={handleSubmit(handleContinue)}>
        <label htmlFor="loginInput" className={styles.label}>
          {!user?.email ? translate(translate('Enter your login and email')) : translate('Enter your login')}
        </label>
        {updateUserStatus.error !== ServerError.EmptyError ? (
          <p className={authStyles.serverError}>{translateServerError(updateUserStatus.error)}</p>
        ) : null}
        <section className={styles.inputsContainer}>
          {!user?.login ? (
            <>
              <InputError error={errors.username} />
              <section className={styles.inputWithIconContainer}>
                <label className={styles.icon} htmlFor="loginInput">
                  <FontAwesomeIcon icon={faUser} />
                </label>
                <input
                  type="text"
                  id="loginInput"
                  className={`${
                    errors.login || updateUserStatus.error === ServerError.LoginIsAlreadyBusy
                      ? styles.invalidInput
                      : ''
                  } ${styles.input}`}
                  placeholder={translate('Login')}
                  aria-label={translate('Login')}
                  aria-invalid={Boolean(errors.login)}
                  {...register('login', loginValidation)}
                />
              </section>
            </>
          ) : null}
          {!user?.email ? (
            <>
              <InputError error={errors.email} />
              <section className={styles.inputWithIconContainer}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faAt} />
                </div>
                <input
                  type="email"
                  className={`${errors.email ? styles.invalidInput : ''} ${styles.input}`}
                  placeholder={translate('Email')}
                  aria-label={translate('Email')}
                  aria-invalid={Boolean(errors.email)}
                  {...register('email', emailValidation)}
                />
              </section>
            </>
          ) : null}
        </section>
        <Button type="submit" className={styles.continueButton}>
          {translate('Continue')}
        </Button>
      </form>
    </div>
  );
};

export { SocialRegistration };
