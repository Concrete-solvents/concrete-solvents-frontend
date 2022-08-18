// Libraries
import { FC } from 'react';

// Common
import { SelectLanguage } from '@Common/components/SelectLanguage/SelectLanguage';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { AuthLayout } from '@Common/layouts/AuthLayout/AuthLayout';

// Auth
import { LoginForm } from '@Auth/components/LoginForm/LoginForm';

const Login: FC<ChildrenNever> = () => {
  return (
    <AuthLayout>
      <SelectLanguage />
      <LoginForm />
    </AuthLayout>
  );
};

export { Login };
