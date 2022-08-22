import { FC, useState } from 'react';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

//components
import { CoreInfoTab } from '@User/components/EditProfile/components/CoreInfoTab/CoreInfoTab';
import { ProfileNavigation } from '@User/components/EditProfile/components/ProfileNavigation/ProfileNavigation';

//styles
import styles from './userEdit.module.css';

const UserEdit: FC<ChildrenNever> = () => {
  const [tab, setTab] = useState<string>('1');
  return (
    <section className={styles.container}>
      {
        tab === '1' && <CoreInfoTab />
      }
      <ProfileNavigation active={tab} />
    </section>
  );
};

export { UserEdit };