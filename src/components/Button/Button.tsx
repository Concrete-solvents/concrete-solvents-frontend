// Libraries
import React, { ButtonHTMLAttributes, FC, ForwardedRef, ReactNode } from 'react';

// Styles
import styles from './button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: 'reset' | 'submit' | 'button';
  isRounded?: boolean;
  forwardedRef?: ForwardedRef<HTMLButtonElement>;
}

const Button: FC<Props> = React.memo(({ children, className, type = 'button', forwardedRef, isRounded = false, ...props }: Props) => (
  <button className={`${styles.button} ${className} ${isRounded ? styles.rounded : ''}`} type={type} {...props} ref={forwardedRef}>{children}</button>
));

export { Button };
