// Libraries
import i18n from '@Features/i18n/index';

// Enums
import { FormErrors } from '@Common/enums/formErrors.enum';

const translate = i18n.getFixedT(null, 'auth');

const requiredValidation = {
  required: {
    value: true,
    message: translate(FormErrors.MustFill),
  },
};

export { requiredValidation };
