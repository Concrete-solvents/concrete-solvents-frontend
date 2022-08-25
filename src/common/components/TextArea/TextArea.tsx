// Libraries
import { FC, ForwardedRef, InputHTMLAttributes, memo } from 'react';

// Styles
import styles from './textArea.module.css';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  forwardedRef?: ForwardedRef<HTMLTextAreaElement>;
}

const TextArea: FC<Props> = memo(({ className, forwardedRef, error, ...props }: Props) => {
  return (
    <div className={styles.container}>
      {error ? (
        <span className={styles.inputError} role="alert">
          * {error}
        </span>
      ) : null}
      <textarea
        className={`${styles.textarea} ${className} ${error ? styles.errorBorder : ''}`}
        ref={forwardedRef || null}
        {...props}
      />
    </div>
  );
});

export { TextArea };
