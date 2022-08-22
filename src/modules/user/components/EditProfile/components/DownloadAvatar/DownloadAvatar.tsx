// Libraries
import { FC } from 'react';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './downloadItem.module.css';

const DownloadAvatar: FC<ChildrenNever> = () => {
  return (
    <section className={styles.container}>
      <button className={styles.button}>Загрузите свой аватар</button>
    </section>
  );
};

export { DownloadAvatar };
