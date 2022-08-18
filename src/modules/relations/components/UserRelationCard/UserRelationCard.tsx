// Libraries
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserPublicCoreInfo } from '@User/interfaces/userPublicCoreInfo.interface';
import { FC } from 'react';
import { Link } from 'react-router-dom';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './userRelationCard.module.css';

interface Props extends ChildrenNever {
  user: UserPublicCoreInfo;
}

const UserRelationCard: FC<Props> = ({ user }: Props) => (
  <Link to={`users/${user.id}`} className={styles.container}>
    <img
      src={user.avatarUrl || 'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'}
      alt="avatar"
      className={styles.avatar}
    />
    <div className={styles.aboutUser}>
      <p className={styles.username}>{user.username}</p>
      <p className={styles.level}>Level: {user.level}</p>
    </div>
    <FontAwesomeIcon icon={faEllipsisVertical} />
  </Link>
);

export { UserRelationCard };
