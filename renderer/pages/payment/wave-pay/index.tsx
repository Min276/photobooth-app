"use client"
import { useTranslation } from 'next-export-i18n';
import dynamic from 'next/dynamic';

const AppLayout = dynamic(() => import('../../../AppLayout'), {
  ssr: false, // This disables server-side rendering for the component
});
const CodePaymentInfo = dynamic(() => import('../../../components/CodePaymentInfo'), {
  ssr: false, // This disables server-side rendering for the component
});
const QrCodeScan = dynamic(() => import('../../../components/QrCodeScan'), {
  ssr: false, // This disables server-side rendering for the component
});
// import AppLayout from '../../../AppLayout';
// import CodePaymentInfo from '../../../components/CodePaymentInfo';
// import QrCodeScan from '../../../components/QrCodeScan';

const WavePayOption = () => {
    const { t } = useTranslation();
    // const router = useRouter();
    // const myLang = router.locale;
    return(
        <AppLayout backButton customBgColor route='/payment-options/' >
             <CodePaymentInfo 
                title={t('WalletPayment.title')}
                payment={t('WalletPayment.wavePay.paymentInfo')}
                number={t('WalletPayment.wavePay.message')}
             />
             <QrCodeScan
               wavePay
             />
        </AppLayout>
    )
}

export default WavePayOption;