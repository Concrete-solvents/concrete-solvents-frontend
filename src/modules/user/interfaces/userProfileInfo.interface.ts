import { Achievement } from '@Achievement/interfaces/achievement.interface';
import { Badge } from '@Badge/interfaces/badge.interface';
import { Nullable } from '@Common/types/nullable.type';
import { GroupPublicCoreInfo } from '@Group/interfaces/groupPublicCoreInfo.interface';
import { UserRelation } from '@User/enums/userRelation.enum';
import { UserPublicCoreInfo } from '@User/interfaces/userPublicCoreInfo.interface';

interface UserProfileInfo {
  id: number;
  username: string;
  avatarUrl: Nullable<string>;
  relation: Nullable<UserRelation>;
  achievements: Achievement[];
  friends: UserPublicCoreInfo[];
  groups: GroupPublicCoreInfo[];
  badges: Badge[];
}

export type { UserProfileInfo };
