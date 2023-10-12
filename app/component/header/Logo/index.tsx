import React from "react";
import logo from "@/public/images/header/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} width={30} height={30} alt="logo" />
    </Link>
  );
};

export default Logo;
