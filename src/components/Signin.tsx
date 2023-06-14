"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";

type SigninProps = {
  providers: Record<string, ClientSafeProvider>;
};

export default function Signin({ providers }: SigninProps) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
        </div>
      ))}
    </>
  );
}
