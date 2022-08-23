import { emailValidation } from '@Auth/validations/email.validation';
import { loginValidation } from '@Auth/validations/login.validation';
import { useTriggerValidateOnChangeLanguage } from '@Common/hooks/useTriggerValidateOnChangeLanguage/useTriggerValidateOnChangeLanguage';
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';
import { useTypedSelector } from '@Common/hooks/useTypedSelector/useTypedSelector';
import { updateUser } from '@Features/user/redux/userSlice/user.slice';
import i18n from 'i18next';
import { useForm } from 'react-hook-form';

interface FormProps {
  login: string;
  email: string;
}

function useSocialRegistrationForm() {
  const user = useTypedSelector((state) => state.user.user);

  const dispatch = useTypedDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    trigger,
  } = useForm<FormProps>({ mode: 'onChange' });

  const { ref: loginRef, ...loginInputProps } = register('login', loginValidation);
  const { ref: emailRef, ...emailInputProps } = register('email', emailValidation);

  useTriggerValidateOnChangeLanguage(i18n.language, errors, trigger);

  function handleContinue() {
    if (!user?.email) {
      dispatch(
        updateUser({
          login: getValues('login'),
          email: getValues('email'),
        }),
      );
    } else {
      dispatch(
        updateUser({
          login: getValues('login'),
        }),
      );
    }
  }

  const onSubmit = handleSubmit(handleContinue);

  return { onSubmit, errors, emailInputProps, emailRef, loginRef, loginInputProps };
}

export { useSocialRegistrationForm };
