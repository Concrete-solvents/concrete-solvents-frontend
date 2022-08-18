import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserRelations } from '../../redux/getUserRelationsSlice/getUserRelations.slice';
import { UserRelationCard } from '../UserRelationCard/UserRelationCard';
import styles from './userRelations.module.css';

const UserRelations: FC<ChildrenNever> = () => {
  const getUserRelationStatus = useTypedSelector((state) => state.getUserRelationsSlice.getUserRelationsFetchStatus);
  const relations = useTypedSelector((state) => state.getUserRelationsSlice.relations);

  const { id: userId } = useParams();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getUserRelations(Number(userId)));
  }, []);

  if (getUserRelationStatus.isLoading) {
    return <p>Loading</p>;
  }

  if (getUserRelationStatus.error) {
    return <p>Error</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Друзья</h1>
      <div className={styles.relation}>
        {relations.friends.map((user) => (
          <>
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
            <UserRelationCard user={user} />
          </>
        ))}
      </div>
    </div>
  );
};

export { UserRelations };
