// Libraries
import { FC } from 'react';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './profileNavigation.module.css';

interface Props extends ChildrenNever {
  active?: string;
}

const ProfileNavigation: FC<Props> = ({ active }) => {
  return (
    <section className={styles.main}>
      <section className={`${styles.container} ${active === '1' ? styles.activeTab : ''}`}>
        <a className={styles.tab}>Основное</a>
      </section>
      <section className={`${styles.container} ${active === '2' ? styles.activeTab : ''}`}>
        <a className={styles.tab}>Основное</a>
      </section>
      <section className={`${styles.container} ${active === '3' ? styles.activeTab : ''}`}>
        <a className={styles.tab}>Основное</a>
      </section>
      <section className={`${styles.container} ${active === '4' ? styles.activeTab : ''}`}>
        <a className={styles.tab}>Основное</a>
      </section>
    </section>
  );
};

export { ProfileNavigation };
