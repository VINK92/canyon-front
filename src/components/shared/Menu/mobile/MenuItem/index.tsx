import React from "react";
import { StyledLink } from "@src/components/shared/Menu/mobile/MenuItem/styled";
import { IMenuItem } from "@src/components/shared/Menu/types";
import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export const MenuItem: React.FC<IMenuItem> = ({ path, title }) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  const content = isActive ? (
    <Typography variant="h1Inactive">{title}</Typography>
  ) : (
    <Typography variant="h1">{title}</Typography>
  );
  return <StyledLink href={path}>{content}</StyledLink>;
};
