import React from "react";
import {Box, Typography} from "@mui/material";

interface Props {
    variant?: "h3" | "h4" | "h6"
    text: string
    center?: boolean
    color?: string
}

export const Heading = (props: Props) => {
    const {
        text,
        center,
        variant,
        color
    } = props;

    return (
        <Box>
            <Typography
                variant={variant ?? "h4"}
                align={(center ?? true) ? "center" : "left"}
                color={(color) ? color : "common.black"}
            >
                {text}
            </Typography>
        </Box>
    );
}
