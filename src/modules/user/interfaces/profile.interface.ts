import { GroupPublicCoreInfo } from '@Group/interfaces/groupPublicCoreInfo.interface';
import { UserPublicCoreInfo } from '@User/interfaces/userPublicCoreInfo.interface';
import { UserRelationType } from '../../relations/enums/userRelationType.enum';

interface GroupsPreviewInProfile {
  groups: GroupPublicCoreInfo[];
  countOfGroups: number;
}

interface FriendsPreviewInProfile {
  friends: UserPublicCoreInfo[];
  countOfFriends: number;
}

interface Profile {
  groupsPreview: GroupsPreviewInProfile;
  friendsPreview: FriendsPreviewInProfile;
  userPublicInfo: UserPublicCoreInfo;
  relationWithCurrentUser?: UserRelationType;
  currentUserRelationWithRequestedUser?: UserRelationType;
}

export type { Profile };
