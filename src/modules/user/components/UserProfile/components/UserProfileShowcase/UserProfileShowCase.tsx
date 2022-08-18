// Libraries
import { FC, ReactNode } from 'react';

// Styles
import styles from './userProfileShowcase.module.css';

interface Props {
  children: ReactNode;
}

const UserProfileShowcase: FC<Props> = ({ children }: Props) => <section className={styles.container}>{children}</section>;

export { UserProfileShowcase };
