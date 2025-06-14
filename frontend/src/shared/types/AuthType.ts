import type { Dispatch, SetStateAction } from 'react';

// User 정보를 담는 타입 선언
export type UserInfo = {
  id: string;
  accessToken: string;
  refreshToken: string;
};

// Context의 value 타입 선언
export type UserContextType = {
  user: UserInfo | null;
  setUser: Dispatch<SetStateAction<UserInfo | null>>;
};
