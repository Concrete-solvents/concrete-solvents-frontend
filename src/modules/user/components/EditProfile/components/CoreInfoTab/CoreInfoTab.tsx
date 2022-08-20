// Libraries
import React, { FC, useState } from 'react';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// styles
import styles from './coreInfoTab.module.css';
import { DownloadAvatar } from '@User/components/EditProfile/components/DownloadAvatar/DownloadAvatar';

const CoreInfoTab: FC<ChildrenNever> = () => {
  const img = 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1558&q=80';
  const [userName, setUserName] = useState<string>('');
  const [about, setAbout] = useState<string>('');

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
        <button className={styles.buttonCancel}>Отмена</button>
        <button className={styles.buttonAccept}>Сохранить</button>
      </section>
    </section>
  );
};

export { CoreInfoTab };