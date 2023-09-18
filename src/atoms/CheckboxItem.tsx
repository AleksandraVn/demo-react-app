import React from "react";
import {Checkbox, Grid, Typography} from "@mui/material";

interface Props {
    description: string
}

export const CheckboxItem = (props: Props) => {

    const {description} = props;

    return (
        <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item>
                <Checkbox size={"medium"}/>
            </Grid>
            <Grid item>
                <Typography variant={"h6"}>
                    {description}
                </Typography>
            </Grid>
        </Grid>
    )
}