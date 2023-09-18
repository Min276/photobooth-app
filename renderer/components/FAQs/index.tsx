import { FunctionComponent } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

interface IProps {
    faqs?: boolean;
    variantIcon?: boolean;
}

const FAQs:FunctionComponent<IProps> = ({faqs, variantIcon}:IProps) => {
    return(
        <Box
        sx={{ visibility: faqs ? "visible" : "hidden",  position: "fixed",
        right:  "5rem",
        bottom: "2rem" }}
        className="flex justify-end cursor-pointer"
      >
        <Image
          src={ variantIcon ? "/images/faqs-v.svg" : "/images/faqs.svg" }
          width={100}
          height={100}
          alt="faqs button"
        />
      </Box>
    )
}

export default FAQs;