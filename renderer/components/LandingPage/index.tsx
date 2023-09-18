import React , {useState, ChangeEvent} from 'react';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import { useRouter} from 'next/router';
// import { useTranslation } from "next-i18next";
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'
import FAQs from '../FAQs';
import Link from 'next/link';

 const LandingPage = () => {
    const router = useRouter();
    // const [language, setLanguage] = useState<string>(router.locale || "en");
    // const changeLanguageHandler = (language: any) => {
    //   setLanguage(language);
    //   router.push(router.pathname, router.pathname, {
    //     locale: language,
    //   });
    // };
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return(
        <Box className="grid h-screen" gridTemplateColumns="2fr 1fr">
        <Box
          className="home_left_horizontal"
        >
          <Image src="/images/logo.svg" width={400} height={250} alt="logo" />
          <Typography className={ router.query.lang === 'my' ? "special_font_normal" : "special_font_big"}>{t("Home.subTitle")}</Typography>
          <Image
            src="/images/photo-frame.svg"
            width={500}
            height={500}
            alt="photos"
          />
        </Box>
        <Box className="h-full px-24 h-full flex flex-col justify-center items-center">
          <Box
            className="flex cursor-pointer"
            sx={{ position: "fixed", right: "5rem", top: "2rem" }}
          >
            <LanguageSwitcher lang="en">
            <Image
              src="/images/english.svg"
              width={100}
              height={100}
              alt="english lang"
              // onClick={() => changeLanguageHandler("en")}
            />
            </LanguageSwitcher>
            <LanguageSwitcher lang="my">
            <Image
              src="/images/myanmar.svg"
              width={100}
              height={100}
              alt="myanmar lang"
              // onClick={() => changeLanguageHandler("my")}
            />
            </LanguageSwitcher>
          </Box>
          <Typography mt={8} mb={2} fontSize={router.query.lang === 'my' ? 23 : 28}>
            {t("Home.message")}
          </Typography>
          <Link href={{ pathname: '/steps', query: query }}>
          <Image
            className="cursor-pointer"
            src="/images/touch.svg"
            width={150}
            height={150}
            // onClick={() => router.push("/steps")}
            alt="touch"
          />
          </Link>

          <FAQs faqs variantIcon />
        </Box>
      </Box>
    )
}

export default LandingPage;