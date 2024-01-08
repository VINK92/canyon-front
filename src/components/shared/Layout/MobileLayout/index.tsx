import React from "react";
import { StyledCommonContainer } from "./styled";
import { MobileHeader } from "@src/components/shared/Header/mobile";
import { Gap } from "@src/components/shared/Gap";

interface Props {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<Props> = ({ children }) => {
  return (
    <StyledCommonContainer>
      <Gap size="_40px" />
      <MobileHeader />
      {children}
    </StyledCommonContainer>
  );
};
