// Libraries
import React, { FC, ReactNode, useEffect } from 'react';

// Redux
import { getMe } from '@Features/user/redux/userSlice/user.slice';

// Hooks
import { useTypedDispatch } from '@Hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Hooks/useTypedSelector/useTypedSelector';
import { Navigate } from 'react-router-dom';

// Components
import { Loading } from '@Components/Loading/Loading';

// Styles
import styles from './withAuth.module.css';

interface Props {
  children: ReactNode;
}

const WithAuth: FC<Props> = ({ children }: Props) => {
  const getMeState = useTypedSelector((state) => state.user.getMeState);

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  if (getMeState.isLoading) {
    return (
      <div className={styles.container}>
        <Loading />
      </div>
    );
  }

  if (getMeState.error) {
    return <Navigate to="/welcome" />;
  }

  return (
    <>
      {children}
    </>
  );
};

export { WithAuth };