"use client";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { LanguageSwitcher } from "next-export-i18n";

interface IProps {
  backButton: any;
  logoVariant: any;
  route: string;
}

const NavBar: FunctionComponent<IProps> = ({
  backButton,
  logoVariant,
  route,
}) => {
  const router = useRouter();

  const handleBackButtonClick = (path: string) => {
    history.back();
  };

  return (
    <Box className="flex justify-between items-center">
      <Box
        sx={{ visibility: backButton ? "visible" : "hidden" }}
        onClick={() => handleBackButtonClick(route)}
        className="w-48 cursor-pointer"
      >
        <Image
          src="/images/back-button.svg"
          width={50}
          height={50}
          alt="back button"
        />
      </Box>
      <Box>
        <Image
          src={logoVariant ? "/images/logo-v.svg" : "/images/logo.svg"}
          width={350}
          height={300}
          alt="logo"
        />
      </Box>
      <Box className="flex cursor-pointer">
        <LanguageSwitcher lang="en">
          <Image
            src="/images/english.svg"
            width={100}
            height={100}
            alt="english lang"
          />
        </LanguageSwitcher>
        <LanguageSwitcher lang="my">
          <Image
            src="/images/myanmar.svg"
            width={100}
            height={100}
            alt="myanmar lang"
          />
        </LanguageSwitcher>
      </Box>
    </Box>
  );
};

export default NavBar;
