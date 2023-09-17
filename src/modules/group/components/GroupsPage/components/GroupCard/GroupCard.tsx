import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GroupPublicCoreInfo } from '@Group/interfaces/groupPublicCoreInfo.interface';
import { FC } from 'react';
import styles from './groupCard.module.css';

interface Props extends ChildrenNever {
  group: GroupPublicCoreInfo;
}

const GroupCard: FC<Props> = ({ group }) => (
  <article className={styles.card}>
    <img src={group.avatarUrl} alt="" className={styles.groupAvatar} />
    <div className={styles.nameAndDescription}>
      <p>{group.name.slice(0, 20) + (group.name.length > 20 ? '...' : '')}</p>
      <p className={styles.description}>
        {group.description.slice(0, 70) + (group.description.length > 70 ? '...' : '')}
      </p>
    </div>
    <FontAwesomeIcon icon={faEllipsisVertical} />
  </article>
);

export { GroupCard };
