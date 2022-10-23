import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { CoreLayout } from '@Common/layouts/CoreLayout/CoreLayout';
import { FC } from 'react';
import { Sidebar } from '@Chat/components/Sidebar/Sidebar';
import { ListMessages } from '@Chat/components/ListMessages/ListMessages';

const ChatPage: FC<ChildrenNever> = () => {
  return (
    <CoreLayout css={{ display: 'flex' }}>
      <Sidebar />
      <ListMessages />
    </CoreLayout>
  );
};

export { ChatPage };
