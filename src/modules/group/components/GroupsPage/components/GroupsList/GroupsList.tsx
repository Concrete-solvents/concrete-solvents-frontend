import { Loading } from '@Common/components/Loading/Loading';
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { GroupCard } from '@Group/components/GroupsPage/components/GroupCard/GroupCard';
import { getGroups } from '@Group/redux/getGroups/getGroups.slice';
import { FC, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './groupsList.module.css';

interface Props extends ChildrenNever {
  filter: string;
}

const GroupsList: FC<Props> = ({ filter }) => {
  const { userId } = useParams();
  const location = useLocation();
  const groups = useTypedSelector((state) => state.getGroupsSlice.groups);
  const getGroupsStatus = useTypedSelector((state) => state.getGroupsSlice.getGroupsStatus);
  const groupsTotalPages = useTypedSelector((state) => state.getGroupsSlice.totalPages);

  const dispatch = useTypedDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    dispatch(getGroups({ userId: +(userId || 0), page: +(params.get('page') || 0), filter }));
  }, [location.search, filter]);

  return (
    <div className={styles.container}>
      <h2>Groups:</h2>
      {getGroupsStatus.isLoading ? (
        <Loading />
      ) : getGroupsStatus.error ? (
        <p>Error</p>
      ) : (
        <div className={styles.content}>
          <div className={styles.groupCards}>
            {groups.map((group) => (
              <GroupCard group={group} />
            ))}
            {groups.length === 0 ? <p>По вашему запросу не нашлось групп</p> : null}
          </div>
          <div className={styles.pagination}>
            <Link to={`/users/${userId}/groups?page=${1}`} className={styles.paginationItem}>
              {'|<'}
            </Link>
            <Link to={`/users/${userId}/groups?page=${1}`} className={styles.paginationItem}>
              {'<'}
            </Link>
            {[...new Array(groupsTotalPages)].map((_, index) => (
              <Link to={`/users/${userId}/groups?page=${index + 1}`} className={styles.paginationItem}>
                {index + 1}
              </Link>
            ))}
            <Link to={`/users/${userId}/groups?page=${1}`} className={styles.paginationItem}>
              {'>'}
            </Link>
            <Link to={`/users/${userId}/groups?page=${groupsTotalPages}`} className={styles.paginationItem}>
              {'>|'}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export { GroupsList };
