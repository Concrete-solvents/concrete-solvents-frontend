// Libraries
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { faAt, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Hooks
import { useTriggerValidateOnChangeLanguage } from '@Hooks/useTriggerValidateOnChangeLanguage/useTriggerValidateOnChangeLanguage';

//Enums
import { FormErrors } from '@Enums/formErrors.enum';

// Components
import { Button } from '@Components/Button/Button';
import { SelectLanguage } from '@Components/SelectLanguage/SelectLanguage';

// Styles
import styles from './login.module.css';

const Login: FC<ChildrenNever> = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ mode: 'onChange' });
  const { t: translate, i18n } = useTranslation('login');
  useTriggerValidateOnChangeLanguage(i18n.language, errors, trigger);

  function handleFormSubmit() {}

  function handleTogglePasswordVisible() {
    setIsPasswordVisible((value) => !value);
  }

  return (
    <div className={styles.container}>
      <SelectLanguage />
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <section className={styles.inputsContainer}>
          {errors.emailOrUsername ? <span className={styles.inputError}>{errors.emailOrUsername.message}</span> : null}
          <section className={styles.inputContainer}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faAt} />
            </div>
            <input
              type="text"
              className={`${errors.email ? styles.invalidInput : ''} ${styles.input}`}
              placeholder={translate('emailOrUsername')}
              aria-label={translate('emailOrUsername')}
              {...register('emailOrUsername', {
                required: {
                  value: true,
                  message: translate(FormErrors.MustFill),
                },
              })}
            />
          </section>
          {errors.password ? <span className={styles.inputError}>{errors.password.message}</span> : null}
          <section className={styles.inputContainer}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              className={`${errors.password ? styles.invalidInput : ''} ${styles.input}`}
              placeholder={translate('password')}
              aria-label={translate('password')}
              {...register('password', {
                required: {
                  value: true,
                  message: translate(FormErrors.MustFill),
                },
              })}
            />
            <Button className={styles.changePasswordVisibility} onClick={handleTogglePasswordVisible}>
              {isPasswordVisible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </Button>
          </section>
          <Button className={styles.login} type="submit">
            {translate('signIn')}
          </Button>
          <p className={styles.noAccountYet}>
            {translate('noAccountYet')} <Link to={'/registration'}>{translate('signUp')}</Link>
          </p>
        </section>
      </form>
    </div>
  );
};

export { Login };
