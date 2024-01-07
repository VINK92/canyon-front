import React from "react";
import { StyledLink } from "@src/components/shared/Menu/MenuItem/styled";
import { IMenuItem } from "@src/components/shared/Menu/types";
import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export const MenuItem: React.FC<IMenuItem> = ({ path, title }) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  const content = isActive ? (
    <Typography variant="bodyDefaultInactive">{title}</Typography>
  ) : (
    <Typography variant="bodyDefault">{title}</Typography>
  );
  return <StyledLink href={path}>{content}</StyledLink>;
};
