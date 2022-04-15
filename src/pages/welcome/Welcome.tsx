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
import styles from './welcome.module.css';

const Welcome: FC<ChildrenNever> = () => {
  const navigate = useNavigate();
  const { t: translate } = useTranslation('welcome');

  function goToRegistrationPage() {
    navigate('/registration');
  }

  function goToLoginPage() {
    navigate('/login');
  }

  return (
    <div
      className={styles.container}
    >
      <SelectLanguage />
      <section className={styles.buttons}>
        <Button className={styles.login} onClick={goToLoginPage}>{translate('signIn')}</Button>
        <Button className={styles.registration} onClick={goToRegistrationPage}>{translate('signUp')}</Button>
        <SignInWith />
      </section>
    </div>
  );
};

export { Welcome };
