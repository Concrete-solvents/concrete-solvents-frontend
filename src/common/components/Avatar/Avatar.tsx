// Libraries
import { FC } from 'react';

// Common
import { AvatarSize } from '@Common/enums/avatarSize.enum';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// User
import styles from './avatar.module.css';

interface Props extends ChildrenNever {
  avatarUrl?: string;
  size: AvatarSize;
}

const Avatar: FC<Props> = ({ avatarUrl, size }) => {
  return (
    <img
      src={avatarUrl || `https://picsum.photos/${size}`}
      alt="Avatar"
      className={styles.avatar}
      width={size}
      height={size}
    />
  );
};

export { Avatar };
