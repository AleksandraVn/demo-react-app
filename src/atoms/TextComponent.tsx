import React from "react";
import {Box, Typography} from "@mui/material";

interface Props {
    text: string
    center?: boolean
}

export const TextComponent = (props: Props) => {
    const {
        text,
        center,
    } = props;

    return (
        <Box sx={{ width: "100%" }}>
            <Typography
                variant={"body1"}
                color={"common.black"}
                align={(center ?? true) ? "center" : "left"}
                gutterBottom
                style={{ whiteSpace: "pre-line" }}
            >
                {text}
            </Typography>
        </Box>
    );
}