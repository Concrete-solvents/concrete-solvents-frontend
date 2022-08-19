import {FC, useState} from 'react';
import {ChildrenNever} from '@Common/interfaces/childrenNever.interface';

//components
import {CoreInfoTab} from '@User/components/EditProfile/components/CoreInfoTab/CoreInfoTab';
import {CoreLayout} from "@Common/layouts/CoreLayout/CoreLayout";

const UserEdit: FC<ChildrenNever> = () => {
  const [tab, setTab] = useState<string>('1');
  return (
    <CoreLayout>
      <section>
        {
          tab === '1' && <CoreInfoTab />
        }
      </section>
    </CoreLayout>
  );
};

export {UserEdit};