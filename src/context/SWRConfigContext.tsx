'use client';

import { SWRConfig } from 'swr';
import { ChildrenProps } from "./AuthContext";

export default function SWRConfigContext({ children }: ChildrenProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
