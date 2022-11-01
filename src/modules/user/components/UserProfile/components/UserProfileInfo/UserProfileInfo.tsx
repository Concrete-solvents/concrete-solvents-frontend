// Styles
import { Avatar } from '@Common/components/Avatar/Avatar';
import { Button } from '@Common/components/Button/Button';
import { Loading } from '@Common/components/Loading/Loading';
import { AvatarSize } from '@Common/enums/avatarSize.enum';
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { getUserProfile } from '@User/redux/getUserProfile/getUserProfile.slice';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { UserRelationType } from '../../../../../relations/enums/userRelationType.enum';
import { useRelation } from '../../../../../relations/hooks/useRelation/useRelation';
import styles from './userProfileInfo.module.css';

const UserProfileInfo = () => {
  const user = useTypedSelector((state) => state.user.user);
  const userProfile = useTypedSelector((state) => state.getUserProfile.profile);
  const getUserProfileState = useTypedSelector((state) => state.getUserProfile.getUserStatus);

  const { userId } = useParams();
  const dispatch = useTypedDispatch();
  const { sendFriendshipReq, cancelFriendshipReq, blockUser, unblockUser } = useRelation();
  const { t: commonTranslate } = useTranslation('common');

  useEffect(() => {
    dispatch(getUserProfile({ userId: +(userId || 0) }));
  }, [userId]);

  if (getUserProfileState.isLoading) {
    return <Loading />;
  }

  if (getUserProfileState.error) {
    return <p>{getUserProfileState.error}</p>;
  }

  if (!userProfile) {
    return <p>Error</p>;
  }

  return (
    <section className={styles.container}>
      <img src={userProfile.userPublicInfo.avatarUrl} alt="" className={styles.avatar} />
      <p className={styles.username}>{userProfile.userPublicInfo.username}</p>
      <div className={styles.level}>
        <p>
          {commonTranslate('Level')}: {userProfile.userPublicInfo.level}
        </p>
        <div className={styles.levelBar}>
          <div className={styles.levelProgress}></div>
        </div>
      </div>
      {userProfile.currentUserRelationWithRequestedUser === UserRelationType.Friends && <p>Удалить друга</p>}
      {userProfile.currentUserRelationWithRequestedUser === UserRelationType.Block && (
        <Button onClick={() => unblockUser(+(userId || 0))}>Разблокировать</Button>
      )}
      {userProfile.currentUserRelationWithRequestedUser === UserRelationType.FiendsPending && (
        <Button onClick={() => cancelFriendshipReq(+(userId || 0))}>Отменить заявку</Button>
      )}
      {userProfile.relationWithCurrentUser === UserRelationType.FiendsPending && <p>Принять заявку</p>}
      {userProfile.relationWithCurrentUser === UserRelationType.Block && <p>Пользователь блокирует вас</p>}
      {!userProfile.currentUserRelationWithRequestedUser && userProfile.userPublicInfo.id !== user?.id && (
        <Button onClick={() => sendFriendshipReq(+(userId || 0))}>Отправить заявку</Button>
      )}
      {userProfile.currentUserRelationWithRequestedUser !== UserRelationType.Block && (
        <Button onClick={() => blockUser(+(userId || 0))}>Заблокировать пользователя</Button>
      )}
      <div className={styles.infoItem}>
        <Link to={`users/${userId}/badges`} className={styles.infoItemHeading}>
          {commonTranslate('Badges')} 5
        </Link>
        <div className={styles.images}>
          {[...new Array(3)].map(() => (
            <Avatar size={AvatarSize.m} key={uuidv4()} />
          ))}
        </div>
      </div>
      <div className={styles.infoItem}>
        <Link to={`/users/${userProfile.userPublicInfo.id}/friends`} className={styles.infoItemHeading}>
          {commonTranslate('Friends')} {userProfile.friendsPreview.countOfFriends}
        </Link>
        <div className={styles.images}>
          {userProfile.friendsPreview.friends.map((friend) => (
            <Avatar size={AvatarSize.m} avatarUrl={friend.avatarUrl} key={uuidv4()} />
          ))}
        </div>
      </div>
      <div className={styles.infoItem}>
        <Link to={`/users/${userProfile.userPublicInfo.id}/groups`} className={styles.infoItemHeading}>
          {commonTranslate('Groups')} {userProfile.groupsPreview.countOfGroups}
        </Link>
        <div className={styles.images}>
          {userProfile.groupsPreview.groups.map((group) => (
            <Avatar size={AvatarSize.m} avatarUrl={group.avatarUrl} key={uuidv4()} />
          ))}
        </div>
      </div>
      <div className={styles.infoItem}>
        <Link to={`users/${userId}/games`} className={styles.infoItemHeading}>
          {commonTranslate('Games')} 24
        </Link>
        <div className={styles.images}>
          {[...new Array(3)].map(() => (
            <Avatar size={AvatarSize.m} key={uuidv4()} />
          ))}
        </div>
      </div>
      <Link to={`users/${userId}/inventory`} className={styles.infoItemHeading}>
        {commonTranslate('Inventory')} 235
      </Link>
      <Link to={`users/${userId}/reviews`} className={styles.infoItemHeading}>
        {commonTranslate('Reviews')} 5
      </Link>
    </section>
  );
};

export { UserProfileInfo };
