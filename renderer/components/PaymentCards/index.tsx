"use client";
// import { useIntl, useTranslations } from "next-intl";
import { PaymentCardsData } from "../../data/data";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
// import { getIntl } from 'next-intl';
import { useLanguageQuery } from "next-export-i18n";
import Link from "next/link";

const PaymentCard = ({ item }: any) => {
  const router = useRouter();

  // const handleClick = () => {
  //   router.push(item.link);
  // };
  const [query] = useLanguageQuery();


  return (
      <Link href={{ pathname: `${item.link}`, query: query }}>
      <Box className="cursor-pointer">
      <Image src={item.image} width={200} height={200} alt="payment cards" />
      <Typography
        className="font-[500] my-4 text-center"
        fontSize={router.query.lang === "my" ? 24 : 25}
      >
        {router.query.lang === "my" ? item.title.my : item.title.en}
      </Typography>
      </Box>
      </Link>
  );
};

const PaymentCards = () => {
  return (
    <Box className="flex gap-12 mt-10 mb-14">
      {PaymentCardsData.map((item) => (
        <PaymentCard key={item.title} item={item} />
      ))}
    </Box>
  );
};

export default PaymentCards;
