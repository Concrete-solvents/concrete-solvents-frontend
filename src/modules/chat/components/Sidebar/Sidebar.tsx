// Libraries
import { FC } from 'react';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Style
import style from './sidebar.module.css';

const Sidebar: FC<ChildrenNever> = () => {
  return (
    <section className={style.container}>
      Sidebar
    </section>
  );
};

export { Sidebar };