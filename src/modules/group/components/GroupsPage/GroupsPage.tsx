import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { CoreLayout } from '@Common/layouts/CoreLayout/CoreLayout';
import { GroupsList } from '@Group/components/GroupsPage/components/GroupsList/GroupsList';
import { GroupsSidebar } from '@Group/components/GroupsPage/components/GroupsSidebar/GroupsSidebar';
import { FC, useState } from 'react';
import styles from './groupsPage.module.css';

const GroupsPage: FC<ChildrenNever> = () => {
  const [filter, setFilter] = useState('');
  
  return (
    <CoreLayout>
      <div className={styles.content}>
        <GroupsList filter={filter} />
        <GroupsSidebar setFilter={setFilter} />
      </div>
    </CoreLayout>
  );
};

export { GroupsPage };
