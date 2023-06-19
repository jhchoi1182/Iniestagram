'use client';
import { SessionProvider } from 'next-auth/react';

type ChildrenProps = {
  children: React.ReactNode;
};

export default function AuthContext({ children }: ChildrenProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
