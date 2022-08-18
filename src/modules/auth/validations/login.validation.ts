// Features
import i18n from '@Features/i18n/index';

// Common
import { FormErrors } from '@Common/enums/formErrors.enum';

const translate = i18n.getFixedT(null, 'auth');

const MAX_LOGIN_LENGTH = 32;
const MIN_LOGIN_LENGTH = 3;
const LOGIN_PATTERN = /^[A-z\d]+$/;

const loginValidation = {
  required: {
    value: true,
    message: translate(FormErrors.MustFill),
  },
  minLength: {
    value: MIN_LOGIN_LENGTH,
    message: translate('Login min length', { minLength: MIN_LOGIN_LENGTH }),
  },
  maxLength: {
    value: MAX_LOGIN_LENGTH,
    message: translate('Login max length', { maxLength: MAX_LOGIN_LENGTH }),
  },
  pattern: {
    value: LOGIN_PATTERN,
    message: translate('Only latin and numbers'),
  },
};

export { loginValidation };
