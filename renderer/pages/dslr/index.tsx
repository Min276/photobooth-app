import { Box } from "@mui/material"
import Image from "next/image"

const PhotoBooth = () => {
    return(
        <Box className="flex justify-center items-center h-screen">
            <Image
              src="/images/dslr.svg"
              width={500}
              height={500}
              alt="photos"
            />
        </Box>
    )
}

export default PhotoBooth;