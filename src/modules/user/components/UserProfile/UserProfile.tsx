// Libraries
import { UserProfileInfo } from '@User/components/UserProfile/components/UserProfileInfo/UserProfileInfo';
import { UserProfileShowcase } from '@User/components/UserProfile/components/UserProfileShowcase/UserProfileShowCase';
import { FC } from 'react';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './userProfile.module.css';

const UserProfile: FC<ChildrenNever> = () => {
  return (
    <section className={styles.container}>
      <section className={styles.showcases}>
        <UserProfileShowcase>
          <div className={styles.showcaseContent}>
            <p>Любимая игра</p>
            <div className={styles.bestGame}>
              <img src='https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1558&q=80' alt='' className={styles.bestGameImg}/>
              <div className={styles.bestGameDescribe}>
                <p>Chess</p>
                <p>45 Часов</p>
              </div>
              <div className={styles.bestGameDescribe}>
                <p>Blitz рейтинг: 1988</p>
                <p>Игр сыграно: 557</p>
              </div>
            </div>
          </div>
        </UserProfileShowcase>
        <UserProfileShowcase>
          <div className={styles.showcaseContent}>
            <p>Инвентарь 122</p>
            <div className={styles.images}>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
            </div>
          </div>
        </UserProfileShowcase>
        <UserProfileShowcase>
          <div className={styles.showcaseContent}>
            <p>Достижения 129</p>
            <div className={styles.images}>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
            </div>
            <div className={styles.tradeStats}>
              <p>Идеальных игр: 2</p>
              <p>Процент достижений: 70%</p>
            </div>
          </div>
        </UserProfileShowcase>
        <UserProfileShowcase>
          <div className={styles.showcaseContent}>
            <p>Предметы для обмена 10</p>
            <div className={styles.images}>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
              <img src='https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' alt='' className={styles.image}/>
            </div>
            <div className={styles.tradeStats}>
              <p>Предметов: 122</p>
              <p>Обменов: 129</p>
              <p>Первый обмен: 12.03.2021</p>
            </div>
          </div>
        </UserProfileShowcase>
      </section>
      <UserProfileInfo />
    </section>
  );
};

export { UserProfile };
