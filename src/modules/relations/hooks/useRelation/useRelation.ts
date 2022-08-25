import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { getUserProfile } from '@User/redux/getUserProfile/getUserProfile.slice';
import { blockUserRelation } from '../../redux/blockUserRelation/blockUserRelation.slice';
import { cancelFriendshipRequest } from '../../redux/cancelFriendshipRequest/cancelFriendshipRequest.slice';
import { sendFriendshipRequest } from '../../redux/sendFriendshipRequest/sendFriendshipRequest.slice';
import { unblockUserRelation } from '../../redux/unblockUserRelation/unblockUserRelation.slice';

function useRelation() {
  const dispatch = useTypedDispatch();

  function sendFriendshipReq(toUserId: number) {
    dispatch(sendFriendshipRequest({ toUserId }));
    setTimeout(() => {
      dispatch(getUserProfile({ userId: toUserId }));
    }, 500);
  }

  function cancelFriendshipReq(toUserId: number) {
    dispatch(cancelFriendshipRequest({ toUserId }));
    setTimeout(() => {
      dispatch(getUserProfile({ userId: toUserId }));
    }, 500);
  }

  function blockUser(userId: number) {
    dispatch(blockUserRelation({ userToBlockId: userId }));
    setTimeout(() => {
      dispatch(getUserProfile({ userId }));
    }, 500);
  }

  function unblockUser(userId: number) {
    dispatch(unblockUserRelation({ userToUnblockId: userId }));
    setTimeout(() => {
      dispatch(getUserProfile({ userId }));
    }, 500);
  }

  return { sendFriendshipReq, cancelFriendshipReq, blockUser, unblockUser };
}

export { useRelation };
