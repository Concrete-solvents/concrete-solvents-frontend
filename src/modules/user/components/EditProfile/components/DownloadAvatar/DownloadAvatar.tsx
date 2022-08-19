import {ChildrenNever} from "@Common/interfaces/childrenNever.interface";
import {FC} from "react";

//styles
import styles from './downloadItem.module.css';

const DownloadAvatar: FC<ChildrenNever> = () => {
  return (
    <section className={styles.container}>
      <button className={styles.button}>Загрузите свой аватар</button>
    </section>
  );
};

export {DownloadAvatar};