// Libraries
import { CreateGroupValidationOption } from '@Group/validationOption/createGroup.validation-option';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Common
import { useTypedDispatch } from '@Common/hooks/useTypedDispatch/useTypedDispatch';

// Group
import { createGroup } from '@Group/redux/createGroup.slice';
import { useTranslation } from 'react-i18next';

interface CreateGroupFormProps {
  name: string;
  description: string;
}

function useCreateGroupForm() {
  const [avatar, setAvatar] = useState(
    'https://img.championat.com/c/1200x900/news/big/g/n/onlajn-v-dark-souls-na-pk-mogut-vernut-uzhe-skoro_16588433752112855650.jpg',
  );

  const dispatch = useTypedDispatch();
  const { t: translate } = useTranslation('group');
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CreateGroupFormProps>();

  const { ref: nameRef, ...nameProps } = register('name', {
    minLength: {
      value: CreateGroupValidationOption.MIN_NAME_LENGTH,
      message: `${translate('The length of the group name should not be less than')} ${
        CreateGroupValidationOption.MIN_NAME_LENGTH
      }`,
    },
    maxLength: {
      value: CreateGroupValidationOption.MAX_NAME_LENGTH,
      message: `${translate('The length of the group name should not be more than')} ${
        CreateGroupValidationOption.MAX_NAME_LENGTH
      }`,
    },
  });
  const { ref: descriptionRef, ...descriptionProps } = register('description', {
    minLength: {
      value: CreateGroupValidationOption.MIN_DESCRIPTION_LENGTH,
      message: `${translate('The length of the group description should not be less than')} ${
        CreateGroupValidationOption.MIN_DESCRIPTION_LENGTH
      }`,
    },
    maxLength: {
      value: CreateGroupValidationOption.MAX_DESCRIPTION_LENGTH,
      message: `${translate('The length of the group description should not be more than')} ${
        CreateGroupValidationOption.MAX_DESCRIPTION_LENGTH
      }`,
    },
  });

  const name = watch('name');
  const description = watch('description');

  const onSubmit = handleSubmit((data: CreateGroupFormProps) => {
    dispatch(
      createGroup({
        name: data.name,
        description: data.description,
        avatarUrl: avatar,
      }),
    );
  });

  return { avatar, setAvatar, nameRef, nameProps, descriptionProps, descriptionRef, onSubmit, name, description, errors };
}

export { useCreateGroupForm };
