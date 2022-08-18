// Libraries
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Common
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { ChildrenNever } from '@Common/interfaces/childrenNever.interface';
import { AuthLayout } from '@Common/layouts/AuthLayout/AuthLayout';

// Features
import { getMe } from '@Features/user/redux/userSlice/user.slice';

// Auth
import { SocialRegistrationForm } from '@Auth/components/SocialRegistrationForm/SocialRegistrationForm';

const SocialRegistration: FC<ChildrenNever> = () => {
  const user = useTypedSelector((state) => state.user.user);

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  if (user?.email && user?.login) {
    navigate('/');
  }

  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <AuthLayout><SocialRegistrationForm /></AuthLayout>
  );
};

export { SocialRegistration };
