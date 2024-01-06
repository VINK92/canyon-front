import { Header } from "@src/components/desktop/shared/Header";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const BasicLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <p>BasicLayout</p>
      <Header />
      {children}
    </div>
  );
};
