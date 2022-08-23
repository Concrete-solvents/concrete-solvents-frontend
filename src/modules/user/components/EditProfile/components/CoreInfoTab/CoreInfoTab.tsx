// Libraries
import { Button } from '@Common/components/Button/Button';
import React, { FC, useState } from 'react';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// User
import { DownloadAvatar } from '@User/components/EditProfile/components/DownloadAvatar/DownloadAvatar';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { updateUserInfo } from '@Features/user/redux/userSlice/user.slice';

// Styles
import styles from './coreInfoTab.module.css';
import { Input } from '@Common/components/Input/Input';

const CoreInfoTab: FC<ChildrenNever> = () => {
  const user = useTypedSelector((state) => state.user.user);
  const dispatch = useTypedDispatch();
  const [img] = useState(user?.avatarUrl || '');
  const [userName, setUserName] = useState(user?.login || '');
  const [about, setAbout] = useState(user?.description || '');

  const updateUser = () => {
    const payload = {
      username: userName,
      description: about,
      avatarUrl: img,
    };
    dispatch(updateUserInfo(payload));
  };

  return (
    <section className={styles.container}>
      <section className={styles.formSection}>
        <h2 className={styles.avatarTitle}>Основное</h2>
        <section className={styles.inputContainer}>
          <label>Имя профиля</label>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className={styles.inputName}
          />
        </section>  
      </section>
      <section className={styles.formSection}>
        Аватар
        <section className={styles.avatar}>
          <div className={styles.containerImg}>
            <img className={styles.img128} src={img} alt="" />
            <p className={styles.imgDescription}>128px</p>
          </div>
          <div className={styles.containerImg}>
            <img className={styles.img64} src={img} alt="" />
            <p className={styles.imgDescription}>64px</p>
          </div>
          <div className={styles.containerImg}>
            <img className={styles.img32} src={img} alt="" />
            <p className={styles.imgDescription}>32px</p>
          </div>
          <DownloadAvatar />
        </section>
      </section>
      <section className={styles.formSection}>
        О себе
        <section className={styles.about}>
          <textarea
            value={about}
            className={styles.inputAbout}
            placeholder="Информация отсутствует."
            onChange={(e) => setAbout(e.target.value)}
          />
        </section>
      </section>
      <section className={styles.buttonContainer}>
        <Button className={styles.buttonCancel}>
          Отмена
        </Button>
        <Button onClick={updateUser} className={styles.buttonAccept}>
          Сохранить
        </Button>
      </section>
    </section>
  );
};

export { CoreInfoTab };
