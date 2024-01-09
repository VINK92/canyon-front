import React, { ReactNode } from "react";
import { Header } from "@src/components/shared/Header/desktop";
import { CommonLayoutContainer, HeaderContainer } from "./styled";

interface Props {
  children: ReactNode;
  isShowMenu?: boolean;
  alignLeft?: boolean;
}

export const BasicLayout: React.FC<Props> = ({
  children,
  isShowMenu,
  alignLeft,
}) => {
  return (
    <CommonLayoutContainer>
      <HeaderContainer>
        <Header isShowMenu={isShowMenu} alignLeft={alignLeft} />
      </HeaderContainer>
      {children}
    </CommonLayoutContainer>
  );
};
