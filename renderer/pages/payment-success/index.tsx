"use client";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
// import AppLayout from "../../AppLayout";
import dynamic from 'next/dynamic';

const AppLayout = dynamic(() => import('../../AppLayout'), {
  ssr: false, // This disables server-side rendering for the component
});
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
// import { ipcRenderer } from 'electron'; 
// import {IpcRenderer} from 'electron';

// declare global {
//   interface Window {
//     ipcRenderer: IpcRenderer
//   }
// }



const PaymentSuccess = () => {
  const {t} = useTranslation();
  const router = useRouter();
  const [query] = useLanguageQuery();
  //  const { ipcRenderer } = window;


// function openExternalApp() {
//   if (ipcRenderer && ipcRenderer.send) {

//   ipcRenderer.send('openExternalApp', '\dslrBooth');
//   }else {
//     console.error("Object or 'send' property is undefined.");

//   }
// }

// Trigger the function when a button is clicked or as needed
{/* <button onClick={openExternalApp}>Open External App</button>; */}
  return (
    <AppLayout logoVariant>
      <Box className="flex flex-col gap-8">
        <Box className="flex flex-col items-center mb-4 gap-4">
          <Image
            src="/images/success.svg"
            className="cursor-pointer"
            width={70}
            height={70}
            alt="success"
          />
          <Typography className="font-[500] text-[#1A1C1E]" fontSize={26}>
            {t('PaymentSuccess.title')}
          </Typography>
        </Box>
        <Box className="flex gap-8 justify-center ">
          <Link href={{ pathname: '/user-guide', query: query }}>
          <Box
            className="px-5 cursor-pointer py-3 border-2  w-fit rounded-md"
            style={{ borderColor: "#2DA6FD" }}
            // onClick={() => router.push("/user-guide")}
          >
            <Typography className="text-xl" fontSize={20}> {t('PaymentSuccess.firstButton')}</Typography>
          </Box>
          </Link>
          <Box
            className="px-5 cursor-pointer py-3 border-2  w-fit rounded-md"
            onClick={() => router.push("/dslr")}
            // onClick={openExternalApp}
          >
            <Typography className="text-xl" fontSize={20}>{t('PaymentSuccess.secondButton')}</Typography>
          </Box>
        </Box>
        <Typography className="text-xl mt-4" fontSize={20} mt={4}>
        {t('PaymentSuccess.thankYou')}
        </Typography>
      </Box>
    </AppLayout>
  );
};

export default PaymentSuccess;
