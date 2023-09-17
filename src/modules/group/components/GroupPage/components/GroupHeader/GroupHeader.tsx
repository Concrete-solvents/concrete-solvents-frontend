import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { GroupPublicCoreInfo } from '@Group/interfaces/groupPublicCoreInfo.interface';
import { FC } from 'react';
import styles from './groupHeader.module.css';

interface Props extends ChildrenNever {
  group: GroupPublicCoreInfo;
}

const GroupHeader: FC<Props> = ({ group }) => {
  return (
    <article className={styles.container}>
      <div className={styles.row}>
        <img src={group.avatarUrl} alt="Group avatar" />
        <div>
          <p>{group.name}</p>
          <p>{group.type}</p>
          <p>{group.countOfUsers}</p>
        </div>
      </div>
      <div className={styles.row}>
        <p>{group.description}</p>
      </div>
    </article>
  );
};

export { GroupHeader };
