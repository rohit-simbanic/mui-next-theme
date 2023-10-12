"use client";
import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

interface LeftHeaderProps {
  children: ReactNode;
}

const StyledHeaderLeft = styled(Box)(({ theme }) => ({
  display: theme.display.flex,
}));

const LeftHeader = ({ children }: LeftHeaderProps) => {
  return <StyledHeaderLeft component="span">{children}</StyledHeaderLeft>;
};

export default LeftHeader;
