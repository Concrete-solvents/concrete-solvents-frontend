import { Language } from '@Enums/language.enum';

interface RegisterUserRequest {
  login: string;
  language: Language,
  email: string;
  password: string;
}

export { RegisterUserRequest };
