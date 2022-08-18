import { FC, useState } from 'react';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { CoreInfoTab } from '@User/components/EditProfile/components/CoreInfoTab/CoreInfoTab';

const UserEdit: FC<ChildrenNever> = () => {
  const [tab, setTab] = useState<string>('');
  return (
    <section>
      <div>

      </div>
      {
        tab === '1' && <CoreInfoTab />
      }
    </section>
  );
};

export { UserEdit };