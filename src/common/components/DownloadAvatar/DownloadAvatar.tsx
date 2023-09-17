// Libraries
import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Features
import { api } from '@Features/axios/axios.init';

// Styles
import styles from './downloadItem.module.css';

interface Props extends ChildrenNever {
  setImage: (filePath: string) => void;
  title: string;
}

const DownloadAvatar: FC<Props> = ({ setImage, title }: Props) => {
  const { t: translate } = useTranslation('downloadAvatar');

  async function uploadImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.[0]) {
      return;
    }

    const formData = new FormData();

    formData.append('image', event.target.files[0]);

    try {
      const result = await api.post('/fileUpload/upload', formData);

      setImage(`${process.env.REACT_APP_API_URL}/fileUpload/${result.data.data.filename}`);
    } catch (error) {}
  }

  return (
    <section className={styles.container}>
      <input className={styles.inputFile} type="file" name="image" id="image" onChange={uploadImage} />
      <label htmlFor="image" className={styles.button}>
        <p>{title}</p>
      </label>
      <p className={styles.downloadHint}>{`- ${translate('The size of the avatar should not exceed 5MB')}`}</p>
      <p className={styles.downloadHint}>{`- ${translate('It is desirable to upload a square photo')}`}</p>
    </section>
  );
};

export { DownloadAvatar };
