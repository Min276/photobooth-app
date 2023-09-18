"use client"
import { useTranslation } from 'next-export-i18n';
// import AppLayout from '../../AppLayout';
import dynamic from 'next/dynamic';

const AppLayout = dynamic(() => import('../../AppLayout'), {
  ssr: false, // This disables server-side rendering for the component
});
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import UserGuideList from '../../components/UserGuideList';
const UserGuideList = dynamic(() => import('../../components/UserGuideList'), {
    ssr: false, // This disables server-side rendering for the component
  });

const UserGuide = () => {
    const { t } = useTranslation();
    const router = useRouter();

    const handleOpenApp = async () => {
        console.log("hello")
    }
    return(
        <AppLayout logoVariant>
            <Box className="flex gap-20">
            <Box className="w-2/3">
             <UserGuideList />
            </Box>
            <Box className="flex flex-col w-1/3 justify-center items-center">
            <Typography mb={3} className="text-2xl text-center" fontSize={24} color="#2DA6FD">
                {t('UserGuideList.title')}
        </Typography>
            <Typography mb={3} className="text-center" fontSize={22}>
          {t('UserGuideList.message')}
        </Typography>
        <Image
          src="/images/touch.svg"
          className="cursor-pointer"
          width={150}
          height={150}
          onClick={() => router.push("/dslr")}
          alt="touch"
        />
            </Box>
            </Box>
        </AppLayout>
    )
}

export default UserGuide;