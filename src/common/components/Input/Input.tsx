// Libraries
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ForwardedRef, InputHTMLAttributes, memo } from 'react';

// Common
import { Button } from '@Common/components/Button/Button';
import { usePasswordInput } from '@Common/hooks/usePasswordInput/usePasswordInput';

// Styles
import styles from './input.module.css';
import authStyles from '@Pages/auth/auth.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  forwardedRef?: ForwardedRef<HTMLInputElement>;
  icon?: IconDefinition;
}

const Input: FC<Props> = memo(({ className, forwardedRef, error, icon, type = 'text', ...props }: Props) => {
  const { isPasswordVisible, handleTogglePasswordVisible } = usePasswordInput();

  return (
    <div className={styles.container}>
      {error ? (
        <span className={styles.inputError} role="alert">
          * {error}
        </span>
      ) : null}
      <div className={styles.row}>
        {icon ? (
          <div className={authStyles.icon}>
            <FontAwesomeIcon icon={icon} />
          </div>
        ) : null}
        <input
          type={type === 'password' ? isPasswordVisible ? 'text' : 'password' : type}
          className={`${styles.input} ${className} ${error ? styles.errorBorder : ''}`}
          ref={forwardedRef || null}
          {...props}
        />
        {type === 'password' ? (
          <Button className={authStyles.changePasswordVisibility} onClick={handleTogglePasswordVisible}>
            {isPasswordVisible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </Button>
        ) : null}
      </div>
    </div>
  );
});

export { Input };
