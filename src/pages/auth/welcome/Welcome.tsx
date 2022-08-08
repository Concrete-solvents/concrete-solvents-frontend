// Libraries
import React from 'react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Components
import { Button } from '@Components/Button/Button';
import { SelectLanguage } from '@Components/SelectLanguage/SelectLanguage';
import { SignInWith } from '@Components/SignInWith/SignInWith';

// Styles
import authStyles from '@Pages/auth/auth.module.css';
import styles from './welcome.module.css';

const Welcome: FC<ChildrenNever> = () => {
  const navigate = useNavigate();
  const { t: translate } = useTranslation('auth');

  function goToRegistrationPage() {
    navigate('/auth/registration');
  }

  function goToLoginPage() {
    navigate('/auth/login');
  }

  return (
    <div
      className={authStyles.pageContainer}
    >
      <SelectLanguage />
      <section className={styles.buttons}>
        <Button className={styles.button} onClick={goToLoginPage}>{translate('Sign in')}</Button>
        <Button className={styles.button} onClick={goToRegistrationPage}>{translate('Sign up')}</Button>
        <SignInWith />
      </section>
    </div>
  );
};

export { Welcome };
