// Libraries
import React, { FC } from 'react';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { downloadImgItem } from '@Features/user/redux/userSlice/user.slice';


// Styles
import styles from './downloadItem.module.css';

const DownloadAvatar: FC<ChildrenNever> = () => {
  const dispatch = useTypedDispatch();
  const updateAndGetFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    await dispatch(downloadImgItem(formData));
  };
  return (
    <section className={styles.container}>
      <input className={styles.inputfile} onChange={updateAndGetFile} type='file' name='image' id='image' />
      <label htmlFor="image" className={styles.button}>
        <p>Загрузите свой аватар</p>
      </label>
      <p className={styles.downloadHint}>- Размер аватара не должен превышать 5Мб</p>
      <p className={styles.downloadHint}>- Желательно загружать квадратное фото</p>
    </section>
  );
};

export { DownloadAvatar };
