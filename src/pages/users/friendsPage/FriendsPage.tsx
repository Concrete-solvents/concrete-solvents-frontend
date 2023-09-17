import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { CoreLayout } from '@Common/layouts/CoreLayout/CoreLayout';
import { FC } from 'react';
import { UserRelations } from '../../../modules/relations/components/UserRelations/UserRelations';

const FriendsPage: FC<ChildrenNever> = () => (
  <CoreLayout>
    <UserRelations />
  </CoreLayout>
);

export { FriendsPage };
