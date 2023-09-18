"use client"
import { useTranslation, useLanguageQuery } from 'next-export-i18n';
// import AppLayout from '../../../AppLayout';
import dynamic from 'next/dynamic';

const AppLayout = dynamic(() => import('../../../AppLayout'), {
  ssr: false, // This disables server-side rendering for the component
});
import CodePaymentInfo from '../../../components/CodePaymentInfo';
import QrCodeScan from '../../../components/QrCodeScan';
import { Typography, Box, Select, FormControl, MenuItem , styled, InputBase} from '@mui/material';
import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

const CardPayOption = () => {
    const {t }= useTranslation();
    const [card, setCard] = useState("");
    const [code, setCode] = useState("");
    const [monthValue, setMonthValue] = useState("Expired Month");
    const [yearValue, setYearValue] = useState("Expired Year");
    const router = useRouter();
    const [query] = useLanguageQuery();

    const handleSubmit = () => {
      if (card.length == 12) {
        router.push("/payment-success");
      }
    };

    const handleMonthChange = (value: any) => {
       setMonthValue(value);
    }

    const handleYearChange = (value: any) => {
        setYearValue(value);
     }

    const months = ['Expired Month', 1,2,3,4,5,6,7,8,9,10,11,12]

    const years = ['Expired Year', 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]


    const BootstrapInput = styled(InputBase)(() => ({
        "& .MuiInputBase-input": {
          paddingLeft: "16px",
        },
      }));
    return(
        <AppLayout backButton customBgColor route='/payment-options'>
                  <Box className="flex flex-col gap-8 w-3/8">
          <Typography className="text-3xl text-center" fontSize={28}>{t('WalletPayment.cardPay.paymentInfo')}</Typography>
          <Box className="flex flex-col gap-5">
          <Box className="flex justify-center">
          <input
            maxLength={12}
            className="w-full px-4 py-3 text-black text-xl rounded-md"
            type="text"
            value={card}
            placeholder={t('WalletPayment.cardPay.cardNumber')}
            onChange={(e) => setCard(e.target.value)}
          />
       </Box>
       <Box className="flex justify-between gap-5">
       <Box className="flex">
       <FormControl
            sx={{
                padding: "0.7rem 0.3rem"
            }}
            className="form_control"
          >
            <Select
              value={monthValue}
              onChange={(e) => handleMonthChange(e.target.value)}
              input={<BootstrapInput />}
              className="select_box"
            >
              {months?.map((month) => (
                <MenuItem key={month} value={month}>
                    <Typography className='text-xl' fontSize={20}>{month} </Typography></MenuItem>
              ))}
            </Select>
          </FormControl>
       </Box>
       <Box className="flex">
       <FormControl
            sx={{
                padding: "0.7rem 0.3rem"
            }}
            className="form_control"
          >
            <Select
              value={yearValue}
              onChange={(e) => handleYearChange(e.target.value)}
              input={<BootstrapInput />}
              className="select_box"
            >
              {years?.map((year) => (
                <MenuItem key={year} value={year}>
                    <Typography className='text-xl' fontSize={20}>{year} </Typography></MenuItem>
              ))}
            </Select>
          </FormControl>
       </Box>
       </Box>
       <Box className="flex justify-between gap-5">
       <Box className="flex w-full">
          <input
            className="w-full px-4 py-3 text-black text-xl rounded-md"
            type="text"
            value={code}
            maxLength={3}
            placeholder="CVV"
            onChange={(e) => setCode(e.target.value)}
          />
       </Box>
       <Box className="flex w-full">
       <Link href={{ pathname: '/payment-success', query: query }}>

       <Box className="w-full px-6 flex justify-center items-center rounded-md cursor-pointer hover:opacity-50" sx={{ background: "#000000"}} >
         
          <Typography className='text-xl' fontSize={20}>{t('WalletPayment.cardPay.cardSubmit')}</Typography>
       </Box>
       </Link>
       </Box>
       </Box>
       </Box>
        </Box>
        </AppLayout>
    )
}

export default CardPayOption;