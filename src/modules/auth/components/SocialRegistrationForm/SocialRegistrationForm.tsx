import { useSocialRegistrationForm } from '@Auth/hooks/useSocialRegistrationForm/useSocialRegistrationForm';
import { Button } from '@Common/components/Button/Button';
import { Input } from '@Common/components/Input/Input';
import { ServerError } from '@Common/enums/serverError.enum';
import { useTranslateServerError } from '@Common/hooks/useTranslateServerError/useTranslateServerError';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { faAt, faUser } from '@fortawesome/free-solid-svg-icons';
import authStyles from '@Pages/auth/auth.module.css';
import styles from '@Pages/auth/social/socialRegistration.module.css';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const SocialRegistrationForm: FC<ChildrenNever> = () => {
  const updateUserStatus = useTypedSelector((state) => state.user.updateUserStatus);
  const user = useTypedSelector((state) => state.user.user);

  const { t: translate } = useTranslation('auth');
  const { translateServerError } = useTranslateServerError();

  const { errors, onSubmit, loginInputProps, loginRef, emailInputProps, emailRef } = useSocialRegistrationForm();

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="loginInput" className={styles.label}>
        {!user?.email ? translate(translate('Enter your login and email')) : translate('Enter your login')}
      </label>
      {updateUserStatus.error !== ServerError.EmptyError ? (
        <p className={authStyles.serverError}>{translateServerError(updateUserStatus.error)}</p>
      ) : null}
      <section className={styles.inputsContainer}>
        {!user?.login ? (
          <Input
            type="text"
            id="loginInput"
            placeholder={translate('Login')}
            aria-label={translate('Login')}
            aria-invalid={Boolean(errors.login)}
            error={errors.login?.message}
            icon={faUser}
            forwardedRef={loginRef}
            {...loginInputProps}
          />
        ) : null}
        {!user?.email ? (
          <Input
            type="email"
            placeholder={translate('Email')}
            aria-label={translate('Email')}
            aria-invalid={Boolean(errors.email)}
            error={errors.email?.message}
            icon={faAt}
            forwardedRef={emailRef}
            {...emailInputProps}
          />
        ) : null}
      </section>
      <Button type="submit" className={styles.continueButton}>
        {translate('Continue')}
      </Button>
    </form>
  );
};

export { SocialRegistrationForm };
