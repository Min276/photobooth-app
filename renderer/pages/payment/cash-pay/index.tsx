"use client";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import dynamic from 'next/dynamic';

const AppLayout = dynamic(() => import('../../../AppLayout'), {
  ssr: false, // This disables server-side rendering for the component
});
import { Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const CashPayOption = () => {
  const { t } = useTranslation();
  const [code, setCode] = useState("");
  const router = useRouter();
  const [query] = useLanguageQuery();

  const handleSubmit = () => {
    if (code.length == 10) {
      router.push("/payment-success");
    }
  };
  return (
    <AppLayout backButton customBgColor route="/payment-options">
      <Box className="flex flex-col gap-8">
        <Typography className="text-3xl text-center mt-4" fontSize={28}>
          {t("WalletPayment.cashPay.paymentInfo")}
        </Typography>
        <Box className="flex justify-center">
          <input
            maxLength={10}
            className="w-2/3 p-4 text-black text-2xl rounded-l-md"
            style={{ color: "#000000"}}
            type="text"
            value={code}
            placeholder={t("WalletPayment.cashPay.codeEnter")}
            onChange={(e) => setCode(e.target.value)}
          />
          <Link href={{ pathname: "/payment-success", query: query }}>
          <button
            className="px-8 py-4 rounded-r-md text-white text-2xl hover:opacity-50"
            style={{ background: "#000000"}}
            // onClick={handleSubmit}
          >
            {t("WalletPayment.cashPay.codeSubmit")}
          </button>
          </Link>
        </Box>
        <Typography className="text-2xl mt-12" fontSize={24} mt={4}>
          {t("WalletPayment.cashPay.message")}
        </Typography>
      </Box>
    </AppLayout>
  );
};

export default CashPayOption;
