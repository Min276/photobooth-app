"use client"
import { Box, Typography } from "@mui/material"
import { StepsGuideData } from '../../data/data';
import { useRouter } from "next/router";

const StepsGuide = () => {
    // const t = useTranslations('StepsGuide');
    const router = useRouter();
 
    return(
        <Box className="grid grid-cols-2 gap-12">
          {StepsGuideData.map((item:any) => (
          <Box key={item.title} className="flex flex-col gap-4">
            <Typography className="font-[500]" fontSize={21.5}>{ router.query.lang === "my" ? item.title.my : item.title.en}</Typography>
            <Typography>{ router.query.lang === "my" ? item.message.my : item.message.en}</Typography>
          </Box>
          ))}
        </Box>
    )
}

export default StepsGuide;