// Libraries
import React from 'react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Components
import { Button } from '@Components/Button/Button';
import { SelectLanguage } from '@Components/SelectLanguage/SelectLanguage';

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
        <p className={styles.loginWith}>{translate('signInWith')}</p>
        <section className={styles.loginWithContainer}>
          <Button className={styles.loginWithButton} aria-label={translate('signInWithGoogle')}>
            <FontAwesomeIcon icon={faGoogle} />
          </Button>
          <Button className={styles.loginWithButton} aria-label={translate('signInWithGithub')}>
            <FontAwesomeIcon icon={faGithub} />
          </Button>
        </section>
      </section>
    </div>
  );
};

export { Welcome };
