// Libraries
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

// Common
import { SignInWithItem } from '@Common/components/SignInWith/components/SignInWithItem/SignInWithItem';
import { signInWithConfig } from '@Common/components/SignInWith/configs/signInWith.config';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './signInWith.module.css';

const SignInWith: FC<ChildrenNever> = () => {
  const { t: translate } = useTranslation('signInWith');

  function handleSignWith(social: string) {
    window.open(`${process.env.REACT_APP_API_URL}/auth/social/${social}`, '_self');
  }

  return (
    <section className={styles.container}>
      <p className={styles.loginWith}>{translate('signInWith')}</p>
      <section className={styles.loginWithContainer}>
        {signInWithConfig.cases.map((el) => (
          <SignInWithItem handleClick={handleSignWith} signInWithCase={el} />
        ))}
      </section>
    </section>
  );
};

export { SignInWith };
