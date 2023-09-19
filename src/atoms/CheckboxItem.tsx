import React from "react";
import {Checkbox} from "@mui/material";

interface Props {
    onCLick: (index: number) => void;
    index: number;
}

export const CheckboxItem = (props: Props) => {

    const { onCLick, index} = props;

    return (
        <Checkbox size={"medium"} onClick={() => onCLick(index)}/>
    )
}