// Libraries
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

// Common
import { Button } from '@Common/components/Button/Button';
import { Input } from '@Common/components/Input/Input';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { DownloadAvatar } from '@Common/components/DownloadAvatar/DownloadAvatar';
import { TextArea } from '@Common/components/TextArea/TextArea';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';

// Group
import { useCreateGroupForm } from '@Group/hooks/useCreateGroupForm/useCreateGroupForm';

// Styles
import styles from './creategroupForm.modules.css';

const CreateGroupForm: FC<ChildrenNever> = () => {
  const createGroupState = useTypedSelector((state) => state.createGroupSlice.createGroupStatus);

  const {
    nameProps,
    descriptionProps,
    descriptionRef,
    nameRef,
    onSubmit,
    avatar,
    setAvatar,
    name,
    description,
    errors,
  } = useCreateGroupForm();

  const { t: translateCommon } = useTranslation('common');
  const { t: translate } = useTranslation('group');

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>{translate('Creating a group')}</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.previewAndAvatarLoader}>
          <article className={styles.previewAvatar}>
            <img src={avatar} alt="" className={styles.avatar} />
            <div className={styles.downloadAvatar}>
              <DownloadAvatar setImage={setAvatar} title={translate('Upload your group avatar')} />
            </div>
          </article>
          <div className={styles.previewNameAndDescription}>
            <p className={styles.previewName}>{name || translate('Here will be the name of the group')}</p>
            <p className={styles.description}>{description || translate('Here will be a description of the group')}</p>
          </div>
        </div>
        <section className={styles.formItem}>
          <label htmlFor="groupName">{translate('Group name')}</label>
          <Input
            id="groupName"
            forwardedRef={nameRef}
            className={styles.input}
            placeholder={translate('Think of a name for your group')}
            error={errors.name?.message}
            {...nameProps}
          />
        </section>
        <section className={styles.formItem}>
          <p>{translate('Type of group')}</p>
          <div className={styles.groupTypes}>
            <label className={styles.groupType}>
              <input type="radio" name="groupType" />
              {translate('Open')}
            </label>
            <label className={styles.groupType}>
              <input type="radio" name="groupType" defaultChecked />
              {translate('Closed')}
            </label>
          </div>
        </section>
        <section className={styles.formItem}>
          <label htmlFor="groupDescription">{translate('Group description')}</label>
          <TextArea
            id="groupDescription"
            forwardedRef={descriptionRef}
            placeholder={translate('Give a few words about your group')}
            error={errors.description?.message}
            {...descriptionProps}
          />
        </section>
        <section className={styles.buttons}>
          <Button className={styles.button}>{translateCommon('Cancel')}</Button>
          <Button className={`${styles.button} ${styles.create}`} type="submit" isLoading={createGroupState.isLoading}>
            {translateCommon('Create')}
          </Button>
        </section>
      </form>
    </section>
  );
};

export { CreateGroupForm };
