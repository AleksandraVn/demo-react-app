import React from "react";
import {Box} from "@mui/material";

interface Props {
    marginX?: string
    marginY?: string
}


export const ContentView = (props: React.PropsWithChildren<Props>) => {
    return (
        <Box marginX={props.marginX ?? "80px"} marginY={props.marginY ?? "8px"}>
            {props.children}
        </Box>
    );
}