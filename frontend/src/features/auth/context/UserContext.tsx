import { createContext, useContext, useState, type ReactNode } from 'react';

import type { UserInfo, UserContextType } from '@/shared/types/AuthType';

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
