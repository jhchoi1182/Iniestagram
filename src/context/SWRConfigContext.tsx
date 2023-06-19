'use client';

import { SWRConfig } from 'swr';

type ChildrenProps = {
  children: React.ReactNode;
};

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
