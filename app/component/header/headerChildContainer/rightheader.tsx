"use client";
import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

interface RightHeaderProps {
  children: ReactNode;
}

const StyledHeaderRight = styled(Box)(({ theme }) => ({
  display: theme.display.flex,
}));

const RightHeader = ({ children }: RightHeaderProps) => {
  return <StyledHeaderRight component="span">{children}</StyledHeaderRight>;
};

export default RightHeader;
