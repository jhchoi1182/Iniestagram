'use client';
import { SessionProvider } from 'next-auth/react';

export type ChildrenProps = {
  children: React.ReactNode;
};

export default function AuthContext({ children }: ChildrenProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
