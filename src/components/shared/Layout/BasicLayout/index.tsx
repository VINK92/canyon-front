import React, { ReactNode } from "react";
import { Header } from "@src/components/shared/Header/desktop";
import { CommonLayoutContainer, HeaderContainer } from "./styled";
import { StaticHeader } from "@src/components/shared/Header/desktop/StaticHeader";

interface Props {
  children: ReactNode;
  isStaticHeader?: boolean;
}

export const BasicLayout: React.FC<Props> = ({ children, isStaticHeader }) => {
  return (
    <CommonLayoutContainer>
      <HeaderContainer>
        {isStaticHeader ? <StaticHeader /> : <Header />}
      </HeaderContainer>
      {children}
    </CommonLayoutContainer>
  );
};
