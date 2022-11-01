// Libraries
import { faAngleDown, faYenSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Common
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './topBar.module.css';

const TopBar: FC<ChildrenNever> = () => {
  const user = useTypedSelector((state) => state.user.user);

  const navigation = useNavigate();

  const goToEditProfile = () => {
    navigation(`/users/${user?.id}/edit`);
  };

  return (
    <section className={styles.container}>
      <div>
        <p>Concrete-solvents</p>
      </div>
      <div className={styles.topRightContainer}>
        <p>
          777 <FontAwesomeIcon icon={faYenSign} />
        </p>
        <p className={styles.name} onClick={goToEditProfile}>
          {user?.login}
          <span className={styles.selectUserIcon}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </p>
      </div>
    </section>
  );
};

export { TopBar };
