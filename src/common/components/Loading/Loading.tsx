// Libraries
import { FC, memo } from 'react';

// Interfaces
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './loading.module.css';

const Loading: FC<ChildrenNever> = memo(() => (
  <div className={styles.loadingRing}>
    <div />
    <div />
    <div />
    <div />
  </div>
));

export { Loading };
