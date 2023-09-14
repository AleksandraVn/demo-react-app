import {Button, Typography} from "@mui/material";
import React from "react";

interface Props {
    title: string
    onClick?: () => void
}

export const HeaderButton = (props: Props) => {
    const {
        title,
        onClick,
    } = props;

    return (
        <Button
            key={title}
            onClick={onClick ?? (() => console.log(`Clicked ${title}`))}
            sx={{ my: 2, color: 'black', display: 'block' }}
        >
            <Typography fontSize={18}>
                {title}
            </Typography>
        </Button>
    );
}