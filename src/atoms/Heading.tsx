import React from "react";
import {Box, Typography} from "@mui/material";

interface Props {
    text: string
    center?: boolean
}

export const Heading = (props: Props) => {
    const {
        text,
        center
    } = props;

    return (
        <Box>
            <Typography
                variant={"h4"}
                align={(center ?? true) ? "center" : "left"}
                color={"common.black"}
            >
                {text}
            </Typography>
        </Box>
    );
}

export const SubHeading = (props: Props) => {
    const {
        text,
        center
    } = props;

    return (
        <Box>
            <Typography
                variant={"h6"}
                align={(center ?? true) ? "center" : "left"}
                color={"common.black"}
            >
                {text}
            </Typography>
        </Box>
    );
}