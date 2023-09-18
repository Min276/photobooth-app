import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";

interface IProps {
    payment: string;
    number: string;
    title: string;
}

const CodePaymentInfo:FunctionComponent<IProps> = ({title, payment, number}: IProps) => {
  const router = useRouter();

 
    return(
        <Box className="flex flex-col gap-10">
          <Typography className="text-white font-[500]" fontSize={router.query.lang === "my" ? 25 : 30}>
            {title}
          </Typography>
          <Box className="flex justify-center">
          <Box className="w-14 h-14 rounded-full shadow-md bg-white flex justify-center items-center">
            <Typography className="text-[#2DA6FD] font-semibold" fontSize={22}>OR</Typography>
          </Box>
          </Box>
          <Box className="flex flex-col gap-4">
            <Typography className="font-[500]" fontSize={router.query.lang === "my" ? 24 : 26}>{payment}</Typography>
            <Typography className="text-2xl font-[500]" fontSize={24}>{number}</Typography>
          </Box>
        </Box>
    )
}

export default CodePaymentInfo;