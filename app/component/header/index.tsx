"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";
import LeftHeader from "./headerChildContainer/leftheader";
import RightHeader from "./headerChildContainer/rightheader";
import Logo from "./Logo";
import DarkButton from "./darktoggle";

const StyledHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.color.headerBgColor,
  color: theme.palette.text.primary,
  display: theme.display.flex,
}));
const Tool = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
}));

const Header = () => {
  return (
    <StyledHeader position="static">
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
