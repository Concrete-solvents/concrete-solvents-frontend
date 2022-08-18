// Styles
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import styles from './userProfileInfo.module.css';

const UserProfileInfo = () => {
  const user = useTypedSelector((state) => state.user.user);
  
  return (
    <section className={styles.container}>
      <img src='https://www.advantour.com/russia/images/symbolics/russia-flag.jpg' alt='' className={styles.avatar}/>
      <p className={styles.username}>{user?.username || user?.login}</p>
      <div className={styles.level}>
        <p>Уровень: 3</p>
        <div className={styles.levelBar}>
          <div className={styles.levelProgress}></div>
        </div>
      </div>
      <div className={styles.infoItem}>
        <p className={styles.infoItemHeading}>Значки 5</p>
        <div className={styles.images}>
          <img src='https://picsum.photos/64' alt='' className={styles.image}/>
          <img src='https://picsum.photos/64' alt='' className={styles.image}/>
          <img src='https://picsum.photos/64' alt='' className={styles.image}/>
        </div>
      </div>
      <div className={styles.infoItem}>
        <p className={styles.infoItemHeading}>Друзья 23</p>
        <div className={styles.images}>
          <img src='https://picsum.photos/64' alt='' className={styles.image}/>
          <img src='https://picsum.photos/64' alt='' className={styles.image}/>
          <img src='https://picsum.photos/64' alt='' className={styles.image}/>
        </div>
      </div>
      <div className={styles.infoItem}>
        <p className={styles.infoItemHeading}>Сообщества 7</p>
        <div className={styles.images}>
          <img src='https://picsum.photos/64' alt='' className={styles.image}/>
          <img src='https://picsum.photos/64' alt='' className={styles.image}/>
          <img src='https://picsum.photos/64' alt='' className={styles.image}/>
        </div>
      </div>
      <p className={styles.infoItemHeading}>Игры 24</p>
      <p className={styles.infoItemHeading}>Инвентарь</p>
      <p className={styles.infoItemHeading}>Отзывы 5</p>
    </section>
  );
};

export { UserProfileInfo };
