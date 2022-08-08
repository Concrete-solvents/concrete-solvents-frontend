// Libraries
import { faDiscord, faGithub, faGoogle, faSteam } from '@fortawesome/free-brands-svg-icons';
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

  function handleSignWith(social: string) {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/social/${social}`,
      '_self',
    );
  }

  return (
    <section className={styles.container}>
      <p className={styles.loginWith}>{translate('signInWith')}</p>
      <section className={styles.loginWithContainer}>
        <Button className={styles.loginWithButton} aria-label={translate('signInWithGoogle')} onClick={() => handleSignWith('google')}>
          <FontAwesomeIcon icon={faGoogle} />
        </Button>
        <Button className={styles.loginWithButton} aria-label={translate('signInWithGithub')} onClick={() => handleSignWith('github')}>
          <FontAwesomeIcon icon={faGithub} />
        </Button>
        <Button className={styles.loginWithButton} aria-label={translate('signInWithSteam')} onClick={() => handleSignWith('steam')}>
          <FontAwesomeIcon icon={faSteam} />
        </Button>
        <Button className={styles.loginWithButton} aria-label={translate('signInWithDiscord')} onClick={() => handleSignWith('discord')}>
          <FontAwesomeIcon icon={faDiscord} />
        </Button>
      </section>
    </section>
  );
};

export { SignInWith };
