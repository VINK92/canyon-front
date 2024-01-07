import React, { ReactNode } from "react";
import { Gap } from "@src/components/shared/Gap";
import { CommonLayoutContainer, HeaderContainer } from "./styled";
import { AnimatedHeader } from "@src/components/shared/AnimatedHeader";

interface Props {
  children: ReactNode;
}

export const AnimatedLayout: React.FC<Props> = ({ children }) => {
  return (
    <CommonLayoutContainer>
      <HeaderContainer>
        <AnimatedHeader alignLeft />
        <Gap size="_40px" />
      </HeaderContainer>
      {children}
    </CommonLayoutContainer>
  );
};
