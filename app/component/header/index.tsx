"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, useTheme } from "@mui/material";
import LeftHeader from "./headerChildContainer/leftheader";
import RightHeader from "./headerChildContainer/rightheader";
import Logo from "./Logo";
import DarkButton from "./darktoggle";
import { tokens } from "../theme/theme";

const StyledHeader = styled(AppBar)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: theme.display.flex,
}));
const Tool = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
}));

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <StyledHeader
      position="static"
      sx={{ backgroundColor: colors.primary[500] }}
    >
      <Tool>
        <LeftHeader>
          <Logo />
        </LeftHeader>
        <RightHeader>
          <DarkButton />
        </RightHeader>
      </Tool>
    </StyledHeader>
  );
};

export default Header;
