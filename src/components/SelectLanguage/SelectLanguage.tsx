// Libraries
import { FC } from 'react';
import i18n from 'i18next';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Features
import { Language } from '@Features/i18n/types/language.type';

// Hooks
import { usePopUp } from '@Hooks/usePopUp/usePopUp';

// Components
import { Button } from '@Components/Button/Button';

// Styles
import styles from './selectLanguage.module.css';

const SelectLanguage: FC<ChildrenNever> = () => {
  const { togglePopUpVisibility, isPopUpVisible, popUpRef, buttonRef } = usePopUp();

  function setLanguage(language: Language) {
    i18n.changeLanguage(language);
    togglePopUpVisibility();
  }

  return (
    <div className={styles.container}>
      <p>{i18n.language === Language.English ? 'English' : 'Русский'}</p>
      <Button forwardedRef={buttonRef} className={styles.collapseButton} onClick={togglePopUpVisibility}>
        <FontAwesomeIcon icon={isPopUpVisible ? faAngleUp : faAngleDown}/>
      </Button>
      {isPopUpVisible ?
        <div ref={popUpRef} className={styles.popUp}>
          <Button className={styles.selectButton} onClick={() => setLanguage(Language.Russian)}>Русский</Button>
          <Button className={styles.selectButton} onClick={() => setLanguage(Language.English)}>English</Button>
        </div>
        : null
      }
    </div>
  );
};

export { SelectLanguage };