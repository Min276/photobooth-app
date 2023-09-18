"use client"
// import dynamic from 'next/dynamic';
import { useTranslation } from 'next-export-i18n';
// import AppLayout from "../../AppLayout";
import dynamic from 'next/dynamic';

const AppLayout = dynamic(() => import('../../AppLayout'), {
  ssr: false, // This disables server-side rendering for the component
});
import { Box, Typography } from '@mui/material';
const PaymentCards = dynamic(() => import('../../components/PaymentCards'), {
    ssr: false // This ensures the component is only rendered on the client-side
  });

const PaymentOptions = () => {
  const { t } = useTranslation();
    return(
       <AppLayout backButton customBgColor faqs route='/steps'>
          <Box className="flex items-center flex-col">
          <Typography className="text-3xl" fontSize={28}>{t('PaymentOptions.title')}</Typography>
          {/* <Typography className="text-xl" fontSize={24}>{t('PaymentOptions.message')}</Typography> */}
          <PaymentCards />
          </Box>
        </AppLayout>
    )
}

export default PaymentOptions;