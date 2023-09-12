import React from "react";
import {Box, Typography} from "@mui/material";

interface Props {
    text: string
}

export const Heading = (props: Props) => {
    const {
        text,
    } = props;

    return (
        <Box>
            <Typography
                variant={"h4"}
                align={"center"}
                color={"common.black"}
            >
                {text}
            </Typography>
        </Box>
    );
}