import React, { ReactNode } from "react";
import { Header } from "@src/components/shared/Header/desktop";
import { Gap } from "@src/components/shared/Gap";
import { CommonLayoutContainer, HeaderContainer } from "./styled";

interface Props {
  children: ReactNode;
  isShowMenu?: boolean;
}

export const BasicLayout: React.FC<Props> = ({ children, isShowMenu }) => {
  return (
    <CommonLayoutContainer>
      <HeaderContainer>
        <Header isShowMenu={isShowMenu} />
      </HeaderContainer>
      {children}
    </CommonLayoutContainer>
  );
};
