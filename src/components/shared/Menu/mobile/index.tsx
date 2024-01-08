import React from "react";
import { MenuItem } from "@src/components/shared/Menu/mobile/MenuItem";
import { menuItems } from "@src/components/shared/Menu/menu-items";
import { StyledMenuContainer } from "./styled";

export const Menu: React.FC = () => {
  return (
    <StyledMenuContainer>
      {menuItems.map((item) => (
        <MenuItem key={item.path} {...item} />
      ))}
    </StyledMenuContainer>
  );
};
