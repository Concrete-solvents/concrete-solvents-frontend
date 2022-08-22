// Libraries
import { FC } from 'react';

// Common
import { CoreLayout } from '@Common/layouts/CoreLayout/CoreLayout';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Edit page
import { UserEdit } from '@User/components/EditProfile/UserEdit';


const UserEditPage: FC<ChildrenNever> = () => {
  return (
    <CoreLayout>
      <UserEdit />
    </CoreLayout>
  );
};

export { UserEditPage };
