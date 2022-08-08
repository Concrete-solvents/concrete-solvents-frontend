// Libraries
import i18n from '@Features/i18n/index';

// Enums
import { FormErrors } from '@Enums/formErrors.enum';

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;

const translate = i18n.getFixedT(null, 'auth');

const emailValidation = {
  required: {
    value: true,
    message: translate(FormErrors.MustFill),
  },
  pattern: {
    value: EMAIL_PATTERN,
    message: translate('Incorrect email address'),
  },
};

export { emailValidation };
