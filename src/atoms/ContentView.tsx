import React from "react";
import {Box} from "@mui/material";


export const ContentView = (props?: React.PropsWithChildren) => {
    return (
        <Box marginX={"80px"} marginY={"8px"}>
            {props?.children}
        </Box>
    );
}