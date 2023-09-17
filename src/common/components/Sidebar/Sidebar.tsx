// Libraries
import { FC } from 'react';
import {
  faUser,
  faUsers,
  faBagShopping,
  faGears,
  faBox,
  faCircleDollarToSlot,
  faEnvelope,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

// Common
import { Button } from '@Common/components/Button/Button';
import { SidebarItem } from '@Common/components/Sidebar/components/SidebarItem/SidebarItem';
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Features
import { logout } from '@Features/user/redux/userSlice/user.slice';

// Styles
import styles from './sidebar.module.css';

const Sidebar: FC<ChildrenNever> = () => {
  const user = useTypedSelector((state) => state.user.user);

  const dispatch = useTypedDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <section className={styles.sidebar}>
      <SidebarItem icon={faUser} link={`/users/${user?.id || -1}`} />
      <SidebarItem icon={faBagShopping} link="/store" />
      <SidebarItem icon={faUserGroup} link={`/users/${user?.id || -1}/groups`} />
      <SidebarItem icon={faUsers} link={`/users/${user?.id || -1}/friends`} />
      <SidebarItem icon={faBox} link="/inventory" />
      <SidebarItem icon={faEnvelope} link="/inventory" />
      <SidebarItem icon={faCircleDollarToSlot} link="/market" />
      <SidebarItem icon={faGears} link="/settings" />
      <Button className={styles.logoutBtn} onClick={handleLogout}>
        <p className={styles.icon}>RU</p>
      </Button>
    </section>
  );
};

export { Sidebar };
