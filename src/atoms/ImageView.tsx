import {CardMedia} from "@mui/material";
import React from "react";

type Images = "1.png" | "2.png" | "3.png" | "4.png" | "Logo.png" | "Developer-Summit.jpg";

interface Props {
    height: string,
    width: string,
    image: Images,
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