import { Fragment, FunctionComponent } from "react"
import NavBar from "../components/NavBar";
import FAQs from "../components/FAQs";
import { Box } from "@mui/material";
import AnimationFrame from "../components/AnimationFrame";

interface IProps {
    children: any;
    backButton?: boolean;
    faqs?: boolean;
    vertical?: boolean;
    customBgColor?: boolean;
    logoVariant?: boolean;
    route?: string;
}


const AppLayout:FunctionComponent<IProps> = ({children, backButton, faqs, logoVariant, vertical, customBgColor, route}: IProps) => {
    const body = document.getElementsByTagName("body")[0];
    if(customBgColor) {
    body.style.backgroundColor = "#2DA6FD";
    }else {
        body.style.backgroundColor = "#FFFFFF";
    }
    return(
        <Box style={{ marginLeft: "5rem" , marginRight: "5rem", backgroundColor: customBgColor ? "#2DA6FD" : "#FFFFFF" }}>
            <AnimationFrame>
            <NavBar backButton={backButton} logoVariant={logoVariant} route={route ?? "/"} />
           <Box className="flex justify-center items-center" sx={{ color: customBgColor ? "#FFFFFF" : "#1A1C1E" }}>
           {children}
           </Box>
           <FAQs faqs={faqs} />
           </AnimationFrame>
        </Box>
    )
}

export default AppLayout;