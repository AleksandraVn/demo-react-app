import React from "react";
import {Checkbox, Grid, Typography} from "@mui/material";

interface Props {
    description: string,
    onCLick: (index: number) => void;
    index: number;
}

export const CheckboxItem = (props: Props) => {

    const {description, onCLick, index} = props;

    return (
        <Grid container justifyContent={"left"} alignItems={"center"}>
            <Grid item>
                <Checkbox size={"medium"} onClick={() => onCLick(index)}/>
            </Grid>
            <Grid item>
                <Typography variant={"h6"}>
                    {description}
                </Typography>
            </Grid>
        </Grid>
    )
}