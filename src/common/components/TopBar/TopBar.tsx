// Libraries
import { faAngleDown, faYenSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

// Common
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './topBar.module.css';

const TopBar: FC<ChildrenNever> = () => {
  const user = useTypedSelector((state) => state.user.user);
  
  return (
    <section className={styles.container}>
      <div>
        <p>Concrete-solvents</p>
      </div>
      <div className={styles.topRightContainer}>
        <p>
          777 <FontAwesomeIcon icon={faYenSign} />
        </p>
        <p>
          {user?.username || user?.login}
          <span className={styles.selectUserIcon}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </p>
      </div>
    </section>
  );
};

export { TopBar };
