import React from "react";
import {Box, Typography} from "@mui/material";

interface Props {
    text: string
}

export const TextComponent = (props: Props) => {
    const {
        text,
    } = props;

    return (
        <Box sx={{ width: "100%" }}>
            <Typography
                variant={"body1"}
                color={"common.black"}
                gutterBottom
                style={{ whiteSpace: "pre-line" }}
            >
                {text}
            </Typography>
        </Box>
    );
}