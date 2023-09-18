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
// import CodePaymentInfo from '../../../components/CodePaymentInfo';
// import QrCodeScan from '../../../components/QrCodeScan';


const KBZPayOption = () => {
    const {t}= useTranslation();
    return(
        <AppLayout backButton customBgColor route='/payment-options'>
             <CodePaymentInfo 
               title={t('WalletPayment.title')}
               payment={t('WalletPayment.kbzPay.paymentInfo')}
               number={t('WalletPayment.kbzPay.message')}
             />
             <QrCodeScan
               kbzPay
             />
        </AppLayout>
    )
}

export default KBZPayOption;