import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { CoreLayout } from '@Common/layouts/CoreLayout/CoreLayout';
import { FC } from 'react';

const Main: FC<ChildrenNever> = () => (
  <CoreLayout>
    Content
  </CoreLayout>
);

export { Main };
