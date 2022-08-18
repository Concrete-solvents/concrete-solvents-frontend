// Libraries
import { FC } from 'react';
import backgroundImage from '@Assets/images/profileBackground.jpg';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { CoreLayout } from '@Common/layouts/CoreLayout/CoreLayout';

// User
import { UserProfile } from '@User/components/UserProfile/UserProfile';

const UserProfilePage: FC<ChildrenNever> = () => (
  <CoreLayout backgroundImage={backgroundImage}>
    <UserProfile />
  </CoreLayout>
);

export { UserProfilePage };
