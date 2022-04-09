import { ChildrenNever } from '@Interfaces/childrenNever.interface';
import React from 'react';
import { FC } from 'react';
import BackgroundImage from '@Assets/images/welcomeBackground.jpg';
import styles from './welcome.module.css';
import { Button } from '@Components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Welcome: FC<ChildrenNever> = () => {
  return (
    <div
      className={styles.container}
      style={{
        background: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
      }}
    >
      <section className={styles.buttons}>
        <Button className={styles.login}>Войти</Button>
        <Button className={styles.registration}>Регистрация</Button>
        <p className={styles.loginWith}>Войти с помошью</p>
        <section className={styles.loginWithContainer}>
          <Button className={styles.loginWithButton}><FontAwesomeIcon icon={faGoogle} /></Button>
          <Button className={styles.loginWithButton}><FontAwesomeIcon icon={faGithub} /></Button>
        </section>
      </section>
    </div>
  );
};

export { Welcome };
