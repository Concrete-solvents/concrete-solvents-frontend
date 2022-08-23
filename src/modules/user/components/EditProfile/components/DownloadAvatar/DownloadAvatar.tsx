// Libraries
import { FC } from 'react';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './downloadItem.module.css';

const DownloadAvatar: FC<ChildrenNever> = () => {
  return (
    <section className={styles.container}>
      <input className={styles.inputfile} type='file' name='image' id='image' />
      <label htmlFor="image" className={styles.button}>
        <p>Загрузите свой аватар</p>
      </label>
      <p className={styles.downloadHint}>- Размер аватара не должен превышать 5Мб</p>
      <p className={styles.downloadHint}>- Желательно загружать квадратное фото</p>
    </section>
  );
};

export { DownloadAvatar };
