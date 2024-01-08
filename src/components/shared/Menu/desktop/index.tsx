import React from "react";
import { Column } from "@src/components/shared/Flex/Column";
import { MenuItem } from "@src/components/shared/Menu/desktop/MenuItem";
import { menuItems } from "@src/components/shared/Menu/menu-items";

export const Menu: React.FC = () => {
  return (
    <Column>
      {menuItems.map((item) => (
        <MenuItem key={item.path} {...item} />
      ))}
    </Column>
  );
};
