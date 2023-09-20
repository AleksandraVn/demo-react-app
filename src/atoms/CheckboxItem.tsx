import React from "react";
import {Checkbox, Grid, Typography} from "@mui/material";

interface Props {
    onCLick: (index: number) => void;
    index: number;
    description: string;
}

export const CheckboxItem = (props: Props) => {

    const { onCLick, index, description} = props;

    return (
        <Grid container alignItems={"center"} justifyContent={"left"}>
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