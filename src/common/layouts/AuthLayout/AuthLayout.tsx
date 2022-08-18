// Libraries
import { FC, ReactNode } from 'react';

// Common
import { SelectLanguage } from '@Common/components/SelectLanguage/SelectLanguage';

// Styles
import styles from './authLayout.module.css';

interface Props {
  children: ReactNode;
}

const AuthLayout: FC<Props> = ({ children }: Props) => (
  <section className={styles.container}>
    <SelectLanguage />
    {children}
  </section>
);

export { AuthLayout };
