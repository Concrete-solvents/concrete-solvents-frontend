import { Sidebar } from '@Components/Sidebar/Sidebar';
import { api } from '@Features/axios/axios.init';
import { ChildrenNever } from '@Interfaces/childrenNever.interface';
import React, { useEffect } from 'react';
import { FC } from 'react';
import styles from './profile.module.css';

const Profile: FC<ChildrenNever> = () => {
  useEffect(() => {
    api.get('email/verificationCode');
  }, []);

  return (
    <section className={styles.container}>
      <Sidebar />
      <section>
        <section></section>
      </section>
    </section>
  );
};

export { Profile };
