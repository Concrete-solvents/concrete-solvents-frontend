// User
import { UserPublicCoreInfo } from '@User/interfaces/userPublicCoreInfo.interface';

interface UserRelations {
  friends: UserPublicCoreInfo[];
  receivedFriendRequests: UserPublicCoreInfo[];
  sentFriendRequests: UserPublicCoreInfo[];
  blockedUsers: UserPublicCoreInfo[];
}

export type { UserRelations };
