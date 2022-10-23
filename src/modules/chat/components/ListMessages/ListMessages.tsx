// Libraries
import { FC } from 'react';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { MessageItem } from '@Chat/components/MessageItem/MessageItem';

const ListMessages: FC<ChildrenNever> = () => {
  const arr = [1, 2, 3];
  return (
    <section>
      {arr.map(() => <MessageItem />)}
    </section>
  );
};

export { ListMessages };