// Enums
import { FormErrors } from '@Common/enums/formErrors.enum';

// Features
import i18n from '@Features/i18n/index';

const translate = i18n.getFixedT(null, 'auth');

const passwordValidation = {
  required: {
    value: true,
    message: translate(FormErrors.MustFill),
  },
  minLength: {
    value: 3,
    message: translate('Password min length', { minLength: 3 }),
  },
  maxLength: {
    value: 64,
    message: translate('Password max length', { maxLength: 64 }),
  },
};

export { passwordValidation };
