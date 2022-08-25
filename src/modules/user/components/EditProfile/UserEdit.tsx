// Libraries
import { FC, useState } from 'react';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// User
import { CoreInfoTab } from '@User/components/EditProfile/components/CoreInfoTab/CoreInfoTab';
import { ProfileNavigation } from '@User/components/EditProfile/components/ProfileNavigation/ProfileNavigation';

// Styles
import styles from './userEdit.module.css';

const UserEdit: FC<ChildrenNever> = () => {
  const [tab, setTab] = useState(1);
  
  return (
    <section className={styles.container}>
      <ProfileNavigation active={tab} changeTab={setTab} />
      {tab === 1 && <CoreInfoTab />}
    </section>
  );
};

export { UserEdit };
