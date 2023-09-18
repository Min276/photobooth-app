import { Box } from "@mui/material"
import Image from "next/image"
import { Fragment, FunctionComponent } from "react";
import { useRouter } from "next/router";
import { useLanguageQuery } from "next-export-i18n";
import Link from "next/link";

interface IProps {
    wavePay?: boolean;
    kbzPay?: boolean;
}

const QrCodeScan:FunctionComponent<IProps> = ({wavePay, kbzPay}: IProps) => {
    const router = useRouter();
    const [query] = useLanguageQuery();

    return(
        <Fragment>
        {wavePay ? (
        <Link href={{ pathname: '/payment-success', query: query }}>
        <Box>
            <Image src="/images/wave-pay-qr.svg" alt="wave-pay-qr-code" width={600} height={450} />
        </Box>
        </Link>
        ):(
            <Link href={{ pathname: '/payment-success', query: query }}>
        <Box >
            <Image src="/images/kbz-pay-qr.svg" alt="kbz-pay-qr-code" width={550} height={450} />
        </Box>
        </Link>
        )}
        </Fragment>
    )
}

export default QrCodeScan;