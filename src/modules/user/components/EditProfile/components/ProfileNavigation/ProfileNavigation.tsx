// Libraries
import { Button } from '@Common/components/Button/Button';
import { FC } from 'react';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './profileNavigation.module.css';

interface Props extends ChildrenNever {
  active: number;
  changeTab: (tab: number) => void;
}

const ProfileNavigation: FC<Props> = ({ active, changeTab }) => {
  return (
    <section className={styles.main}>
      <section className={`${styles.container} ${active === 1 ? styles.activeTab : ''}`}>
        <Button className={styles.tab} onClick={() => changeTab(1)}>Основное</Button>
      </section>
      <section className={`${styles.container} ${active === 2 ? styles.activeTab : ''}`}>
        <Button className={styles.tab} onClick={() => changeTab(2)}>Основное</Button>
      </section>
      <section className={`${styles.container} ${active === 3 ? styles.activeTab : ''}`}>
        <Button className={styles.tab} onClick={() => changeTab(3)}>Основное</Button>
      </section>
      <section className={`${styles.container} ${active === 4 ? styles.activeTab : ''}`}>
        <Button className={styles.tab} onClick={() => changeTab(4)}>Основное</Button>
      </section>
    </section>
  );
};

export { ProfileNavigation };
