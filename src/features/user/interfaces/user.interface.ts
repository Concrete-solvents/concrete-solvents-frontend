interface User {
  id: number;
  login: string | null;
  username: string | null;
  email: string | null;
  isVerified: boolean;
  avatarUrl: string;
  description: string | null;
}

export { User };
