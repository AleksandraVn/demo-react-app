import {CardMedia} from "@mui/material";
import React from "react";

interface Props {
    height: string,
    width: string,
    image: string,
}

export const ImageView = (props: Props) => {
    const {
        height,
        width,
        image,
    } = props;

    return (
        <CardMedia
            component="img"
            height={height}
            width={width}
            image={image}
        />
    );
}