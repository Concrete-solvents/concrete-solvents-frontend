// Libraries
import React, { FC } from 'react';

// Interfaces
import { ChildrenNever } from '@Interfaces/childrenNever.interface';

// Styles
import styles from './inputError.module.css';

interface Props extends ChildrenNever {
  error?: {
    message: string;
  };
}

const InputError: FC<Props> = ({ error }: Props) => {
  if (error) {
    return (
      <span className={styles.inputError} role="alert">
        * {error.message}
      </span>
    );
  }
  return null;
};

export { InputError };
