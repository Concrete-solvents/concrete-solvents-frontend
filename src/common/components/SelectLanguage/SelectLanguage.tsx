// Libraries
import { Button } from '@Common/components/Button/Button';
import { Language } from '@Common/enums/language.enum';
import { usePopUp } from '@Common/hooks/usePopUp/usePopUp';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { FC } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

// Styles
import styles from './selectLanguage.module.css';

interface Props extends ChildrenNever {
  isAbsolute?: boolean;
  isTop?: boolean;
}

const SelectLanguage: FC<Props> = ({ isAbsolute = true, isTop = false }: Props) => {
  const { togglePopUpVisibility, isPopUpVisible, popUpRef, buttonRef } = usePopUp();
  const { i18n } = useTranslation();

  function setLanguage(language: Language) {
    i18n.changeLanguage(language);
    togglePopUpVisibility();
  }

  return (
    <div className={isAbsolute ? styles.absoluteContainer : styles.container}>
      <p>{i18n.language === Language.English ? 'English' : 'Русский'}</p>
      <Button forwardedRef={buttonRef} className={styles.collapseButton} onClick={togglePopUpVisibility}>
        <FontAwesomeIcon icon={isPopUpVisible ? faAngleUp : faAngleDown}/>
      </Button>
      {isPopUpVisible ?
        <div ref={popUpRef} className={isTop ? styles.popUpTop : styles.popUp}>
          <Button className={styles.selectButton} onClick={() => setLanguage(Language.Russian)}>Русский</Button>
          <Button className={styles.selectButton} onClick={() => setLanguage(Language.English)}>English</Button>
        </div>
        : null
      }
    </div>
  );
};

export { SelectLanguage };
