import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { FC, useState } from 'react';

//styles
import styles from './downloadItem.module.css';

const DownloadAvatar: FC<ChildrenNever> = () => {
  const [img, setImg] = useState('');

  const downloadImg = () => {

  };

  return (
    <section className={styles.container}>
      <input className={styles.inputfile} type='file' name='image' id='image' />
      <label htmlFor="image" className={styles.button}>
        <p>Загрузите свой аватар</p>
      </label>
    </section>
  );
};

export { DownloadAvatar };