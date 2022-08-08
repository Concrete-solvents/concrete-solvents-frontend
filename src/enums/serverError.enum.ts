enum ServerError {
  PermissionError = 'Permission error',
  WrongLoginOrPassword = 'Wrong login or password',
  WrongPassword = 'Wrong password',
  LoginIncompatibleWithPattern = 'The login is not compatible with the template',
  UserDoesNotExist = 'The user does not exist',
  EmailDoesNotLinked = 'The email does not linked',
  EmailAlreadyConfirmed = 'The email already confirmed',
  EmailNotFoundOrNotConfirmed = 'Email not found or not confirmed',
  EmailIsAlreadyBusy = 'The email is already busy',
  LoginIsAlreadyBusy = 'The login is already busy',
  ServerError = 'Server error',
  EmptyError = '',
}

export { ServerError };
