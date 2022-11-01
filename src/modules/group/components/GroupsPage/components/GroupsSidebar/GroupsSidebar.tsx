// Libraries
import { FC } from 'react';

// Common
import { Input } from '@Common/components/Input/Input';
import { UserInFilterSidebar } from '@Common/components/UserInFilterSidebar/UserInFilterSidebar';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './groupSidebar.module.css';

interface Props extends ChildrenNever {
  setFilter: (filter: string) => void;
}

const GroupsSidebar: FC<Props> = ({ setFilter }) => {
  return (
    <div className={styles.sidebar}>
      <UserInFilterSidebar />
      <div className={styles.filter}>
        <p>Filter:</p>
        <Input onChange={(event) => setFilter(event.target.value)} className={styles.input} />
      </div>
    </div>
  );
};

export { GroupsSidebar };
