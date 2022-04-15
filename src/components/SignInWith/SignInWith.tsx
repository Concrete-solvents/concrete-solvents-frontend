// Libraries
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Components
import { Button } from '@Components/Button/Button';

// Styles
import styles from './signInWith.module.css';

const SignInWith: FC<ChildrenNever> = () => {
  const { t: translate } = useTranslation('signInWith');

  return (
    <section className={styles.container}>
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
  );
};

export { SignInWith };
