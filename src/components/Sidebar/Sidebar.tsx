// Libraries
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { faBars, faUser, faUsers, faGamepad, faBagShopping, faGears, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Features
import { logout, toggleCollapseSidebar } from '@Features/user/redux/userSlice/user.slice';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Hooks
import { useTypedDispatch } from '@Hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Hooks/useTypedSelector/useTypedSelector';

// Components
import { Button } from '@Components/Button/Button';
import { SelectLanguage } from '@Components/SelectLanguage/SelectLanguage';

// Styles
import styles from './sidebar.module.css';

const Sidebar: FC<ChildrenNever> = () => {
  const isSidebarCollapsed = useTypedSelector((state) => state.user.settings.isSideBarCollapsed);
  const user = useTypedSelector((state) => state.user.user);

  const dispatch = useTypedDispatch();
  const location = useLocation();
  const { t: translate } = useTranslation('sidebar');

  function handleToggleCollapseSidebar() {
    dispatch(toggleCollapseSidebar());
  }

  function handleLogout() {
    dispatch(logout());
  }

  if (isSidebarCollapsed) {
    return (
      <section className={styles.collapsedSidebar}>
        <Button className={styles.collapseButtonInCollapsedSidebar} onClick={handleToggleCollapseSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        {location.pathname === `/profile/${user?.id || -1}` ? null : (
          <Link to={`/profile/${user?.id || -1}`} className={styles.navItem}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        )}
        {location.pathname === '/' ? null : (
          <Link to="/" className={styles.navItem}>
            <FontAwesomeIcon icon={faGamepad} />
          </Link>
        )}
        {location.pathname === '/friends' ? null : (
          <Link to="friends" className={styles.navItem}>
            <FontAwesomeIcon icon={faUsers} />
          </Link>
        )}
        {location.pathname === '/settings' ? null : (
          <Link to="settings" className={styles.navItem}>
            <FontAwesomeIcon icon={faGears} />
          </Link>
        )}
        {location.pathname === '/store' ? null : (
          <Link to="store" className={styles.navItem}>
            <FontAwesomeIcon icon={faBagShopping} />
          </Link>
        )}
        <Button className={`${styles.navItem} ${styles.logoutBtn}`} onClick={handleLogout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </Button>
      </section>
    );
  }

  return (
    <section className={styles.sidebar}>
      <Button className={styles.collapseButton} onClick={handleToggleCollapseSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <div>
        <img
          src={user?.avatarUrl || 'https://cdn-images-1.listennotes.com/podcasts/chad-podcast-marley-davis-stout-P_I74vGjZqi-206hNHTzp7o.300x300.jpg'}
          alt=""
          height="128px"
          width="128px"
          className={styles.avatar}
        />
      </div>
      <p className={styles.username}>{user?.username || ''}</p>
      <nav className={styles.nav}>
        {location.pathname === `/profile/${user?.id || -1}` ? null : (
          <Link to={`/profile/${user?.id || -1}`} className={styles.navItem}>
            {translate('Profile')}
          </Link>
        )}
        {location.pathname === '/' ? null : (
          <Link to="/store" className={styles.navItem}>
            {translate('Games')}
          </Link>
        )}
        {location.pathname === '/friends' ? null : (
          <Link to="/friends" className={styles.navItem}>
            {translate('Friends')}
          </Link>
        )}
        {location.pathname === '/settings' ? null : (
          <Link to="/settings" className={styles.navItem}>
            {translate('Settings')}
          </Link>
        )}
        {location.pathname === '/store' ? null : (
          <Link to="/store" className={styles.navItem}>
            {translate('Store')}
          </Link>
        )}
      </nav>
      <div className={styles.language}>
        <SelectLanguage isAbsolute={false} isTop />
      </div>
    </section>
  );
};

export { Sidebar };
