// Libraries
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Enums
import { FormErrors } from '@Enums/formErrors.enum';

// Assets
import BackgroundForm from '../../assets/images/city.jpg';

// Styles
import styles from './registration.module.css';

const Registration: FC<ChildrenNever> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleFormSubmit() {}

  return (
    <div
      className={styles.container}
      style={{
        background: `url(${BackgroundForm})`,
        backgroundSize: 'cover',
      }}
    >
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={styles.form}
      >
        <section className={styles.inputContainer}>
          <label htmlFor="usernameRegInput" className={styles.label}>
            Введите имя пользователя:
          </label>
          <input
            type="text"
            id="usernameRegInput"
            className={`${errors.username ? styles.invalidInput : ''} ${styles.input}`}
            {...register('username', {
              required: {
                value: true,
                message: FormErrors.MustFill,
              },
              minLength: {
                value: 3,
                message: 'Имя пользователя должно быть больше 3 символов',
              },
              maxLength: {
                value: 25,
                message: 'Имя пользователя должно быть не больше 25 символов',
              },
              pattern: {
                value: /^[A-z0-9]+$/,
                message: 'Имя пользователя должно состоять только из символов латинского алфавита и цифр',
              },
            })}
          />
          <label htmlFor="emailRegInput" className={styles.label}>
            Введите email:
          </label>
          <input
            type='email'
            id="emailInput"
            className={`${errors.username ? styles.invalidInput : ''} ${styles.input}`}
            {...register('username', {
              required: {
                value: true,
                message: FormErrors.MustFill,
              },
            })}
          />
        </section>
      </form>
    </div>
  );
};

export { Registration };
