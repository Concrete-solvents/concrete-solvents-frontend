// Group
import { GroupPublicCoreInfo } from '@Group/interfaces/groupPublicCoreInfo.interface';

interface GetGroupsResponse {
  groups: GroupPublicCoreInfo[];
  totalPages: number;
}

export type { GetGroupsResponse };
