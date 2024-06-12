"use client";

import React from "react";
import ComponentWrapper from "./Wrapper";
import { ModeProvider } from "./ModeContext";

export default function ModeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModeProvider>
      <ComponentWrapper>{children}</ComponentWrapper>
    </ModeProvider>
  );
}
