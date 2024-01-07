import React, { ReactNode } from "react";
import { Header } from "@src/components/shared/Header";
import { Gap } from "@src/components/shared/Gap";
import { CommonLayoutContainer, HeaderContainer } from "./styled";

interface Props {
  children: ReactNode;
}

export const BasicLayout: React.FC<Props> = ({ children }) => {
  return (
    <CommonLayoutContainer>
      <HeaderContainer>
        <Header />
        <Gap size="_40px" />
      </HeaderContainer>
      {children}
    </CommonLayoutContainer>
  );
};
