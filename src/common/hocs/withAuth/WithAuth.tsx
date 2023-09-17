// Libraries
import { FC, ReactNode, useEffect } from 'react';

// Redux
import { getMe } from '@Features/user/redux/userSlice/user.slice';

// Hooks
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { Navigate } from 'react-router-dom';

// Components
import { Loading } from '@Common/components/Loading/Loading';

// Styles
import styles from './withAuth.module.css';

interface Props {
  children: ReactNode;
}

const WithAuth: FC<Props> = ({ children }: Props) => {
  const getMeStatus = useTypedSelector((state) => state.user.getMeStatus);
  const user = useTypedSelector((state) => state.user.user);

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  if (getMeStatus.error) {
    return <Navigate to="/auth/welcome" />;
  }

  if (getMeStatus.isLoading || !user) {
    return (
      <div className={styles.container}>
        <Loading />
      </div>
    );
  }

  if (!user!.email || !user!.login) {
    return <Navigate to="/auth/social" />;
  }

  return <>{children}</>;
};

export { WithAuth };
