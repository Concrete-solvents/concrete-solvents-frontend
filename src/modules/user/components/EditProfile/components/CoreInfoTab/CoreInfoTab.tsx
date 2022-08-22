// Libraries
import React, { FC, useState } from 'react';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// styles
import styles from './coreInfoTab.module.css';
import { DownloadAvatar } from '@User/components/EditProfile/components/DownloadAvatar/DownloadAvatar';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { updateUserInfo } from '@Features/user/redux/userSlice/user.slice';

const CoreInfoTab: FC<ChildrenNever> = () => {
  const user = useTypedSelector((state) => state.user.user);
  const dispatch = useTypedDispatch();
  const [img, setImg] = useState<any>(user?.avatarUrl || '');
  const [userName, setUserName] = useState<any>(user?.username || '');
  const [about, setAbout] = useState<any>(user?.description || '');

  const updateUser = () => {
    const payload = {
      username: userName,
      description: about,
      avatarUrl: img
    }
    dispatch(updateUserInfo(payload))
  }

  const setInfoToStart = () => {
    setUserName(user?.username);
    setImg(user?.avatarUrl);
    setAbout(user?.description);
  }

  return (
    <section className={styles.container}>
      <div className={styles.avatarTitle}>Аватар</div>
      <section className={styles.avatar}>
        <div className={styles.containerImg}>
          <img className={styles.img184} src={img} alt='' />
          <p className={styles.imgDescription}>184px</p>
        </div>
        <div className={styles.containerImg}>
          <img className={styles.img64} src={img} alt='' />
          <p className={styles.imgDescription}>64px</p>
        </div>
        <div className={styles.containerImg}>
          <img className={styles.img32} src={img} alt='' />
          <p className={styles.imgDescription}>32px</p>
        </div>
        <DownloadAvatar />
      </section>
      <div className={styles.avatarTitle}>Основное</div>
      <section className={styles.name}>
        <label style={{ marginBottom: '4px' }}>Имя профиля</label>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className={styles.inputName}
          type='text'
        />
      </section>
      <div className={styles.avatarTitle}>О себе</div>
      <section className={styles.about}>
        <textarea
          value={about}
          className={styles.inputAbout}
          placeholder='Информация отсутствует.'
          onChange={(e) => setAbout(e.target.value)}
        />
      </section>
      <section className={styles.buttonContainer}>
        <button onClick={setInfoToStart} className={styles.buttonCancel}>Отмена</button>
        <button onClick={updateUser} className={styles.buttonAccept}>Сохранить</button>
      </section>
    </section>
  );
};

export { CoreInfoTab };