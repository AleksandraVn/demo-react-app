import React from "react";
import {Box, Typography} from "@mui/material";

interface Props {
    variant?: "h3" | "h4" | "h6" | "h5"
    text: string
    center?: boolean
    color?: string
    isBold?: boolean
}

export const Heading = (props: Props) => {
    const {
        text,
        center,
        variant,
        color,
        isBold
    } = props;

    return (
        <Box>
            <Typography
                variant={variant ?? "h4"}
                align={(center ?? true) ? "center" : "left"}
                color={(color) ? color : "common.black"}
                fontWeight={(isBold) ? "bold" : "normal"}
            >
                {text}
            </Typography>
        </Box>
    );
}
