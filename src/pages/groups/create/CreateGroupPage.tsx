import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { CoreLayout } from '@Common/layouts/CoreLayout/CoreLayout';
import { CreateGroupForm } from '@Group/components/CreateGroupForm/CreateGroupForm';
import { FC } from 'react';

const CreateGroupPage: FC<ChildrenNever> = () => (
  <CoreLayout>
    <CreateGroupForm />
  </CoreLayout>
);

export { CreateGroupPage };
