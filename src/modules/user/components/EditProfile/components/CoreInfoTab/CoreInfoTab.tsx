// Libraries
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Common
import { Avatar } from '@Common/components/Avatar/Avatar';
import { Button } from '@Common/components/Button/Button';
import { DownloadAvatar } from '@Common/components/DownloadAvatar/DownloadAvatar';
import { Input } from '@Common/components/Input/Input';
import { Loading } from '@Common/components/Loading/Loading';
import { AvatarSize } from '@Common/enums/avatarSize.enum';
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';

// Features
import { updateUserInfo } from '@Features/user/redux/userSlice/user.slice';

// Styles
import styles from './coreInfoTab.module.css';

const CoreInfoTab: FC<ChildrenNever> = () => {
  const user = useTypedSelector((state) => state.user.user);

  const [img, setImage] = useState(user?.avatarUrl || '');
  const [userName, setUserName] = useState(user?.login || '');
  const [about, setAbout] = useState(user?.description || '');

  const dispatch = useTypedDispatch();
  const { t: commonTranslate } = useTranslation('common');
  const { t: translate } = useTranslation('user');

  if (!user) {
    return <Loading />;
  }

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
        <h2 className={styles.avatarTitle}>{translate('General')}</h2>
        <section className={styles.inputContainer}>
          <label>{commonTranslate('Username')}</label>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className={styles.inputName}
          />
        </section>
      </section>
      <section className={styles.formSection}>
        {commonTranslate('Avatar')}
        <section className={styles.avatar}>
          {[AvatarSize.l, AvatarSize.m, AvatarSize.xs].map((size) => (
            <div className={styles.containerImg}>
              <Avatar size={size} avatarUrl={img} />
              <p className={styles.imgDescription}>
                {size} x {size}
              </p>
            </div>
          ))}
          <DownloadAvatar setImage={setImage} title={translate('Upload your avatar')} />
        </section>
      </section>
      <section className={styles.formSection}>
        {translate('About you')}
        <section className={styles.about}>
          <textarea
            value={about}
            className={styles.inputAbout}
            placeholder={translate('How are you doing?')}
            onChange={(e) => setAbout(e.target.value)}
          />
        </section>
      </section>
      <section className={styles.buttonContainer}>
        <Button className={styles.buttonCancel}>{commonTranslate('Cancel')}</Button>
        <Button onClick={updateUser} className={styles.buttonAccept}>
          {commonTranslate('Save')}
        </Button>
      </section>
    </section>
  );
};

export { CoreInfoTab };
