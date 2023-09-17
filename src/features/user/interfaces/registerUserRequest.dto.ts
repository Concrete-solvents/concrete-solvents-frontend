import { Language } from '@Common/enums/language.enum';

interface RegisterUserRequest {
  login: string;
  language: Language;
  email: string;
  password: string;
}

export { RegisterUserRequest };
