// Libraries
import { configureStore } from '@reduxjs/toolkit';

// Slices
import userSlice from '@Features/user/redux/userSlice/user.slice';
import getUserInFilterSidebarSlice from '@User/redux/getUserInFilterSidebarSlice/getUserInFilterSidebar.slice';
import getUserProfileSlice from '@User/redux/getUserProfile/getUserProfile.slice';
import cancelFriendshipRequestSlice from '../../modules/relations/redux/cancelFriendshipRequest/cancelFriendshipRequest.slice';
import getUserRelationsSlice from '../../modules/relations/redux/getUserRelationsSlice/getUserRelations.slice';
import createGroupSlice from '@Group/redux/createGroup.slice';
import getGroupsSlice from '@Group/redux/getGroups/getGroups.slice';
import getGroupByIdSlice from '@Group/redux/getGroupById/getGroupById.slice';
import sendFriendshipRequestSlice from '../../modules/relations/redux/sendFriendshipRequest/sendFriendshipRequest.slice';

const store = configureStore({
  reducer: {
    user: userSlice,
    getUserRelationsSlice: getUserRelationsSlice,
    createGroupSlice: createGroupSlice,
    getGroupsSlice: getGroupsSlice,
    getUserInFilterSidebar: getUserInFilterSidebarSlice,
    getGroupById: getGroupByIdSlice,
    getUserProfile: getUserProfileSlice,
    sendFriendshipRequest: sendFriendshipRequestSlice,
    cancelFriendshipRequest: cancelFriendshipRequestSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
