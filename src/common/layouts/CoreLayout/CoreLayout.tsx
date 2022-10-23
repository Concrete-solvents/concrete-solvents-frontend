// Libraries
import { ReactNode } from 'react';

// Common
import { TopBar } from '@Common/components/TopBar/TopBar';
import { Sidebar } from '@Common/components/Sidebar/Sidebar';

// Styles
import styles from './coreLayout.module.css';

interface Props {
  children: ReactNode;
  backgroundImage?: string;
  css?: {
    display?: string;
  };
}

const CoreLayout = ({ children, backgroundImage, css }: Props) => (
  <section style={{
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : '',
  }} className={styles.container}>
    <TopBar />
    <section className={styles.sidebarAndContent}>
      <Sidebar />
      <section style={css} className={styles.content}>{children}</section>
    </section>
  </section>
);

export { CoreLayout };
