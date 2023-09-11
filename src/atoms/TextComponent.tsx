import React from "react";
import {Typography} from "@mui/material";

interface Props {
    text: string
}

export const TextComponent = (props: Props) => {
    const {
        text,
    } = props;

    return (
        <Typography
            variant={"body1"}
        >
            {text}
        </Typography>
    );
}