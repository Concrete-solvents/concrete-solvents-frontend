// Libraries
import { FC } from 'react';

// Common
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { AuthLayout } from '@Common/layouts/AuthLayout/AuthLayout';

// Auth
import { RegistrationForm } from '@Auth/components/RegistrationForm/RegistrationForm';

const Registration: FC<ChildrenNever> = () => {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
};

export { Registration };
