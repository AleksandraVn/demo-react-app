import React from "react";
import {Typography} from "@mui/material";

interface Props {
    text: string
}

export const Heading = (props: Props) => {
    const {
        text,
    } = props;

    return (
        <Typography
            variant={"h1"}
        >
            {text}
        </Typography>
    );
}