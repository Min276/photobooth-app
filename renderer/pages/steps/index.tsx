"use client"
import { useTranslation, useLanguageQuery} from 'next-export-i18n';
// import AppLayout from '../../AppLayout';
import dynamic from 'next/dynamic';

const AppLayout = dynamic(() => import('../../AppLayout'), {
  ssr: false, // This disables server-side rendering for the component
});
// import StepsGuide from '../../components/StepsGuide';
const  StepsGuide = dynamic(() => import('../../components/StepsGuide'), {
  ssr: false, // This disables server-side rendering for the component
});
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Steps = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return(
        <AppLayout logoVariant>
            <Box className="flex gap-20">
            <Box className="w-2/3">
            <StepsGuide />
            </Box>
            <Box className="flex flex-col w-1/3 justify-center items-center">
            <Typography mb={3} className="text-2xl text-center" fontSize={24} color="#2DA6FD">
                {t("StepsGuide.title")}
        </Typography>
            <Typography mb={3} className="text-center" fontSize={22}>
          {t("StepsGuide.message")}
        </Typography>
        <Link href={{ pathname: '/payment-options', query: query }}>
        <Image
          src="/images/touch.svg"
          className="cursor-pointer"
          width={150}
          height={150}
        //   onClick={() => router.push("/payment-options")}
          alt="touch"
        />
        </Link>
            </Box>
            </Box>
        </AppLayout>
    )
}

export default Steps;