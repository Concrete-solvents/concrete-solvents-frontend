import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { getUserInFilterSidebar } from '@User/redux/getUserInFilterSidebarSlice/getUserInFilterSidebar.slice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './userInFilterSidebar.module.css';

const UserInFilterSidebar = () => {
  const user = useTypedSelector((state) => state.getUserInFilterSidebar.user);

  const { userId } = useParams();

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getUserInFilterSidebar({ userId }));
  }, []);

  return (
    <p>
      {!user ? (
        userId
      ) : (
        <div className={styles.user}>
          <p>{user.username}</p>
          <img src={user.avatarUrl} alt="avatar" className={styles.avatar} />
          <p className={styles.level}>Уровень: {user.level}</p>
        </div>
      )}
    </p>
  );
};

export { UserInFilterSidebar };
