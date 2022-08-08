import { Sidebar } from '@Components/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChildrenNever } from '@Interfaces/childrenNever.interface';
import { faAngleLeft, faAngleRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import styles from './main.module.css';

const Main: FC<ChildrenNever> = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <section className={styles.main}>
        <section className={styles.popular}>
          <section className={styles.carousel}>
            <FontAwesomeIcon icon={faAngleLeft} />
            <section className={styles.popularGamesInCarousel}>
              <section className={styles.popularGame} />
              <section className={styles.popularGame} />
              <section className={styles.popularGame} />
            </section>
            <FontAwesomeIcon icon={faAngleRight} />
          </section>
          <div className={styles.dots}>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </section>
        <section className={styles.gameItems}>
          <section className={styles.gameItem}/>
          <section className={styles.gameItem}/>
          <section className={styles.gameItem}/>
          <section className={styles.gameItem}/>
          <section className={styles.gameItem}/>
          <section className={styles.gameItem}/>
          <section className={styles.gameItem}/>
          <section className={styles.gameItem}/>
          <section className={styles.gameItem}/>
          <section className={styles.gameItem}/>
        </section>
      </section>
    </div>
  );
};

export { Main };
