// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

// Common
import { Button } from '@Common/components/Button/Button';
import { SignInWithCase } from '@Common/components/SignInWith/configs/signInWith.config';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';

// Styles
import styles from './signInWithItem.module.css';;

interface Props extends ChildrenNever {
  signInWithCase: SignInWithCase;
  handleClick: (name: string) => void;
}

const SignInWithItem: FC<Props> = ({ signInWithCase, handleClick }: Props) => {
  const { t: translate } = useTranslation('signInWith');

  return (
    <Button
      className={styles.loginWithButton}
      aria-label={translate(signInWithCase.ariaLabelKey)}
      onClick={() => handleClick(signInWithCase.name)}
    >
      <FontAwesomeIcon icon={signInWithCase.icon} className={styles.icon} />
    </Button>
  );
};

export { SignInWithItem };
