// Libraries
import { FC } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Enums
import { Language } from '@Enums/language.enum';

// Hooks
import { usePopUp } from '@Hooks/usePopUp/usePopUp';

// Components
import { Button } from '@Components/Button/Button';

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
        <div ref={popUpRef} className={isTop? styles.popUpTop : styles.popUp}>
          <Button className={styles.selectButton} onClick={() => setLanguage(Language.Russian)}>Русский</Button>
          <Button className={styles.selectButton} onClick={() => setLanguage(Language.English)}>English</Button>
        </div>
        : null
      }
    </div>
  );
};

export { SelectLanguage };
