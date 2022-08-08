interface UpdateUserDto {
  login?: string;
  username?: string;
  email?: string;
  oldPassword?: string;
  newPassword?: string;
}

export type { UpdateUserDto };
