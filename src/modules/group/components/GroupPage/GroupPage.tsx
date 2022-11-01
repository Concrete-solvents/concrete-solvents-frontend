// Libraries
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Common
import { Loading } from '@Common/components/Loading/Loading';
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { CoreLayout } from '@Common/layouts/CoreLayout/CoreLayout';

// Group
import { GroupHeader } from '@Group/components/GroupPage/components/GroupHeader/GroupHeader';
import { getGroupById } from '@Group/redux/getGroupById/getGroupById.slice';

const GroupPage: FC<ChildrenNever> = () => {
  const getGroupStatus = useTypedSelector((state) => state.getGroupsSlice.getGroupsStatus);
  const group = useTypedSelector((state) => state.getGroupById.group);

  const { groupId } = useParams();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getGroupById({ groupId: +(groupId || 0) }));
  }, []);

  if (getGroupStatus.isLoading) {
    return (
      <CoreLayout>
        <Loading />
      </CoreLayout>
    );
  }

  return (
    <CoreLayout>
      <div>{group ? <GroupHeader group={group} /> : null}</div>
    </CoreLayout>
  );
};

export { GroupPage };
