"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import { ColorButton } from ".";

type SigninProps = {
  providers: Record<string, ClientSafeProvider>;
};

export default function Signin({ providers }: SigninProps) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton key={id} text={`Sign In with ${name}`} onClick={() => signIn(id)} size="big" />
      ))}
    </>
  );
}
